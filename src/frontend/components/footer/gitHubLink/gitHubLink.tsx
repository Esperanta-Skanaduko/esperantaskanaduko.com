import { Link } from '@mui/material';

const GitHubLink = () => {
  return (
    <Link
      href='https://github.com/Vaporjawn/'
      target='_blank'
      rel='noreferrer'
      sx={{
        background:
          'linear-gradient(to right, rgba(100, 200, 200, 1), rgba(100, 200, 200, 1)), linear-gradient(to right, rgba(255, 0, 0, 1), rgba(255, 0, 180, 1), rgba(0, 100, 200, 1))',
        backgroundSize: '100% 3px, 0 3px',
        backgroundPosition: '100% 100%, 0 100%',
        backgroundRepeat: 'no-repeat',
        transition: 'background-size 400ms',
        fontWeight: 500,
        color: 'green',
        textDecoration: 'inherit',
        '&:hover': {
          color: 'white',
          backgroundSize: '0 3px, 100% 3px',
        },
      }}
    >
      Vaporjawn
    </Link>
  );
};

export default GitHubLink;
