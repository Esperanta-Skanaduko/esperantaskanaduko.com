import { Link, SxProps, Theme } from '@mui/material';
import { Children } from '../../backend/types/children';

const ExternalLink = (args: {
  href: string;
  text?: string;
  children?: Children;
  sx?: SxProps<Theme>;
  className?: string;
  preventNewTab?: boolean;
}) => {
  const { href, children, text, sx, className, preventNewTab } = args;

  return (
    <Link
      href={href}
      target={preventNewTab ? undefined : '_blank'}
      rel='noreferrer'
      sx={sx}
      className={className}
    >
      {text ?? children}
    </Link>
  );
};

export default ExternalLink;
