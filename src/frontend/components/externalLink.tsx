import { Children } from '../../backend/types/children';
import { Style } from '../../backend/types/style';

const ExternalLink = (args: { href: string, text: string; children?: Children, style?: Style }) => {
  const { href, children, text, style } = args;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={style}
    >
      {text ?? children}
    </a>
  );
};

export default ExternalLink;