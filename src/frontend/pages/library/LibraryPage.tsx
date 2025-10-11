import { useState, useMemo } from 'react';
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { Search as SearchIcon, MenuBook, Download } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { esperantoBooks, type Book } from '../../../data/libraryData';
import { SEO } from '../../../components/SEO';
import { NavBar } from '../../components/navBar/navBar';

export default function LibraryPage() {
  const { i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get unique categories
  const categories = useMemo<string[]>(() => {
    const cats = new Set<string>(esperantoBooks.map((book: Book) => book.category));
    return ['all' as string, ...Array.from(cats)];
  }, []);

  // Filter books based on search and category
  const filteredBooks = useMemo(() => {
    return esperantoBooks.filter((book: Book) => {
      const matchesSearch =
        searchQuery === '' ||
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.titleEo.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.descriptionEo.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'success';
      case 'Intermediate':
        return 'warning';
      case 'Advanced':
        return 'error';
      default:
        return 'default';
    }
  };

  const isEsperanto = i18n.language === 'eo';

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#000000',
        background: 'linear-gradient(135deg, #000000 0%, #001a00 50%, #000000 100%)',
        paddingY: { xs: '1rem', md: '2rem' },
      }}
    >
      <SEO
        title={isEsperanto ? 'Biblioteko - Esperanta Skanaduko' : 'Library - Esperanta Skanaduko'}
        description={
          isEsperanto
            ? 'Esploru nian ampleksan kolekton de senpagaj Esperantaj libroj, de klasikaĵoj ĝis modernaj verkoj.'
            : 'Explore our comprehensive collection of free Esperanto books, from classics to modern works.'
        }
        keywords={['Esperanto', 'library', 'books', 'free ebooks', 'Esperanto literature', 'learning resources', 'biblioteko', 'libroj']}
      />

      <NavBar />
      <Container maxWidth="xl">
        {/* Page Header */}
        <Box sx={{ textAlign: 'center', marginBottom: '3rem', animation: 'scaleIn 0.8s ease-out both' }}>
          <Typography
            variant="h1"
            sx={{
              color: '#00ff00',
              marginBottom: '1rem',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              fontFamily: 'Copperplate',
              textTransform: 'uppercase',
            }}
          >
            <MenuBook sx={{ fontSize: { xs: '3rem', md: '4rem' }, verticalAlign: 'middle', marginRight: '1rem' }} />
            {isEsperanto ? 'Biblioteko' : 'Library'}
          </Typography>
          <Typography variant="h6" sx={{
            color: '#a0a0a0',
            maxWidth: '800px',
            margin: '0 auto',
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
            padding: { xs: '0 1rem', md: 0 },
          }}>
            {isEsperanto
              ? 'Malkovru librojn en Esperanto - de klasikaĵoj al modernaj verkoj, ĉiuj senpagaj kaj alirebla por ĉiuj.'
              : 'Discover books in Esperanto - from classics to modern works, all free and accessible to everyone.'}
          </Typography>
        </Box>

        {/* Search and Filter Section */}
        <Box sx={{ marginBottom: '3rem', animation: 'fadeIn 0.8s ease-out 0.4s both' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder={
                  isEsperanto
                    ? 'Serĉi librojn laŭ titolo, aŭtoro, aŭ priskribo...'
                    : 'Search books by title, author, or description...'
                }
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: '#00ff00' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  transition: 'all 0.3s ease',
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(18, 20, 21, 0.9)',
                    '& fieldset': {
                      borderColor: 'rgba(0, 255, 0, 0.3)',
                    },
                    '&:hover': {
                      transform: 'scale(1.01)',
                      '& fieldset': {
                        borderColor: 'rgba(0, 255, 0, 0.5)',
                      },
                    },
                    '&.Mui-focused': {
                      transform: 'scale(1.02)',
                      '& fieldset': {
                        borderColor: '#00ff00',
                      },
                    },
                  },
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: '#00ff00' }}>
                  {isEsperanto ? 'Kategorio' : 'Category'}
                </InputLabel>
                <Select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  label={isEsperanto ? 'Kategorio' : 'Category'}
                  sx={{
                    transition: 'all 0.3s ease',
                    backgroundColor: 'rgba(18, 20, 21, 0.9)',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(0, 255, 0, 0.3)',
                      transition: 'border-color 0.3s ease',
                    },
                    '&:hover': {
                      transform: 'scale(1.01)',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(0, 255, 0, 0.5)',
                      },
                    },
                    '&.Mui-focused': {
                      transform: 'scale(1.02)',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#00ff00',
                      },
                    },
                  }}
                >
                  {categories.map((category: string) => (
                    <MenuItem key={category} value={category}>
                      {category === 'all'
                        ? isEsperanto
                          ? 'Ĉiuj Kategorioj'
                          : 'All Categories'
                        : category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {/* Results Count */}
          <Box sx={{ marginTop: '1rem', textAlign: 'center' }}>
            <Typography variant="body1" sx={{ color: '#a0a0a0' }}>
              {filteredBooks.length}{' '}
              {isEsperanto
                ? filteredBooks.length === 1
                  ? 'libro trovita'
                  : 'libroj trovitaj'
                : filteredBooks.length === 1
                  ? 'book found'
                  : 'books found'}
            </Typography>
          </Box>
        </Box>

        {/* Books Grid */}
        {filteredBooks.length > 0 ? (
          <Grid container spacing={3}>
            {filteredBooks.map((book: Book, index: number) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={book.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(18, 20, 21, 0.9)',
                    border: '1px solid rgba(0, 255, 0, 0.2)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`,
                    '&:hover': {
                      borderColor: '#00ff00',
                      transform: 'translateY(-8px) scale(1.02)',
                      boxShadow: '0 12px 24px rgba(0, 255, 0, 0.4), 0 0 40px rgba(0, 255, 0, 0.15)',
                    },
                  }}
                >
                  {book.coverImage && (
                    <Box
                      component="img"
                      src={book.coverImage}
                      alt={isEsperanto ? book.titleEo : book.title}
                      sx={{
                        width: '100%',
                        height: '250px',
                        objectFit: 'cover',
                        borderBottom: '1px solid rgba(0, 255, 0, 0.2)',
                      }}
                    />
                  )}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: '#00ff00',
                        marginBottom: '0.5rem',
                        fontWeight: 600,
                        minHeight: '3rem',
                      }}
                    >
                      {isEsperanto ? book.titleEo : book.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#a0a0a0', marginBottom: '0.5rem' }}>
                      {isEsperanto ? 'Aŭtoro:' : 'Author:'} {book.author}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#a0a0a0', marginBottom: '0.5rem' }}>
                      {isEsperanto ? 'Jaro:' : 'Year:'} {book.year}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#ffffff',
                        marginBottom: '1rem',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {isEsperanto ? book.descriptionEo : book.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                      <Chip
                        label={book.category}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(0, 255, 0, 0.1)',
                          color: '#00ff00',
                          border: '1px solid rgba(0, 255, 0, 0.3)',
                        }}
                      />
                      <Chip
                        label={book.difficulty}
                        size="small"
                        color={getDifficultyColor(book.difficulty)}
                        variant="outlined"
                      />
                    </Box>
                    <Typography variant="caption" sx={{ color: '#666666' }}>
                      {book.pages} {isEsperanto ? 'paĝoj' : 'pages'}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ padding: '1rem' }}>
                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<Download />}
                      href={book.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: 'rgba(0, 255, 0, 0.1)',
                        border: '1px solid rgba(0, 255, 0, 0.3)',
                        color: '#00ff00',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 255, 0, 0.2)',
                          borderColor: '#00ff00',
                          transform: 'translateY(-2px)',
                        },
                      }}
                    >
                      {isEsperanto ? 'Elŝuti' : 'Download'}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: 'center', paddingY: '4rem' }}>
            <MenuBook sx={{ fontSize: '5rem', color: '#333333', marginBottom: '1rem' }} />
            <Typography variant="h5" sx={{ color: '#a0a0a0' }}>
              {isEsperanto ? 'Neniuj libroj trovitaj' : 'No books found'}
            </Typography>
            <Typography variant="body1" sx={{ color: '#666666', marginTop: '0.5rem' }}>
              {isEsperanto
                ? 'Provu alian serĉon aŭ filtrilon'
                : 'Try a different search or filter'}
            </Typography>
          </Box>
        )}

        {/* Acknowledgment Section */}
        <Box
          sx={{
            marginTop: '4rem',
            padding: '2rem',
            backgroundColor: 'rgba(18, 20, 21, 0.6)',
            borderRadius: '8px',
            border: '1px solid rgba(0, 255, 0, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" sx={{ color: '#00ff00', marginBottom: '1rem' }}>
            {isEsperanto ? 'Dankoj' : 'Acknowledgments'}
          </Typography>
          <Typography variant="body1" sx={{ color: '#a0a0a0' }}>
            {isEsperanto
              ? 'Speciala danko al Project Gutenberg kaj aliaj iniciativoj por provizado de senpagaj Esperantaj libroj por la komunumo.'
              : 'Special thanks to Project Gutenberg and other initiatives for providing free Esperanto books to the community.'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
