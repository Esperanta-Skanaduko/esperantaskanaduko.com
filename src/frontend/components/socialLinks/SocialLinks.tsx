/**
 * SocialLinks — reusable project social / community links.
 *
 * Two visual variants:
 *   compact   — small column list, muted text, no icons.
 *               Used in the footer Social Links section.
 *   expanded  — list items with emoji icons and full labels.
 *               Used in the About page Connect section.
 *
 * Control which links appear with the `include` prop (defaults to all).
 */

import { Box, Link, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

// ─── Link definitions ─────────────────────────────────────────────────────────

export type SocialLinkId = 'github' | 'mangadex' | 'email' | 'suggest';

interface SocialLinkDef {
  id: SocialLinkId;
  href: string;
  labelKey: string;
  icon: string;
  /** Whether to open in a new tab. False for mailto: links. */
  external: boolean;
}

const ALL_LINKS: SocialLinkDef[] = [
  {
    id: 'github',
    href: 'https://github.com/Vaporjawn/esperantaskanaduko.com',
    labelKey: 'about.sections.connect.github',
    icon: '🐙',
    external: true,
  },
  {
    id: 'mangadex',
    href: 'https://mangadex.org/group/18541/esperanta-skanaduko',
    labelKey: 'about.sections.connect.mangaDex',
    icon: '📚',
    external: true,
  },
  {
    id: 'email',
    href: 'mailto:esperantaSkanaduko@gmail.com',
    labelKey: 'about.sections.connect.email',
    icon: '✉️',
    external: false,
  },
  {
    id: 'suggest',
    href: 'https://github.com/Vaporjawn/esperantaskanaduko.com/issues/new?template=resource_suggestion.yml',
    labelKey: 'footer.social.links.suggestResource',
    icon: '💡',
    external: true,
  },
];

// ─── Props ────────────────────────────────────────────────────────────────────

interface SocialLinksProps {
  /** Visual variant. Defaults to 'compact'. */
  variant?: 'compact' | 'expanded';
  /**
   * Which links to render. Pass an array of SocialLinkId values.
   * Defaults to all links when omitted.
   */
  include?: SocialLinkId[];
}

// ─── Component ────────────────────────────────────────────────────────────────

export const SocialLinks = ({
  variant = 'compact',
  include,
}: SocialLinksProps) => {
  const { t } = useTranslation();

  const links = include
    ? ALL_LINKS.filter((l) => include.includes(l.id))
    : ALL_LINKS;

  if (variant === 'expanded') {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {links.map(({ id, href, labelKey, icon, external }) => (
          <Box
            key={id}
            component="a"
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              color: '#ffffff',
              textDecoration: 'none',
              p: 1.5,
              borderRadius: 1.5,
              transition: 'background-color 0.2s',
              '&:hover': {
                backgroundColor: 'rgba(0,255,0,0.06)',
                color: '#00ff00',
              },
            }}
          >
            <Box component="span" sx={{ fontSize: '1.2rem', flexShrink: 0 }}>
              {icon}
            </Box>
            <Typography sx={{ fontSize: '1rem' }}>{t(labelKey)}</Typography>
          </Box>
        ))}
      </Box>
    );
  }

  // compact
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {links.map(({ id, href, labelKey, external }) => (
        <Link
          key={id}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noreferrer' : undefined}
          sx={{
            color: '#a0a0a0',
            textDecoration: 'none',
            transition: 'color 0.25s',
            '&:hover': { color: '#00ff00' },
          }}
        >
          {t(labelKey)}
        </Link>
      ))}
    </Box>
  );
};
