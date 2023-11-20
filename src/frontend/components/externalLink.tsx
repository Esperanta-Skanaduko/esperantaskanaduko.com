import { Children } from '../../backend/types/children';
import { ClassName } from '../../backend/types/className';
import { Style } from '../../backend/types/style';

const ExternalLink = (args: {
  href: string;
  text?: string;
  children?: Children;
  style?: Style;
  className?: ClassName;
  preventNewTab?: boolean;
}) => {
  const { href, children, text, style, className, preventNewTab } = args;

  return (
    <a href={href} target={preventNewTab ? undefined : '_blank'} rel='noreferrer' style={style} className={className}>
      {text ?? children}
    </a>
  );
};

export default ExternalLink;
