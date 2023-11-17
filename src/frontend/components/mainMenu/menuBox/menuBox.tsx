
import { Children } from '../../../../backend/types/children';
import ExternalLink from '../../externalLink';
import './styles/css/mainMenuLink.css';

const MenuBox = (args: {text?: string; children?: Children; link: string, preventNewTab?: boolean}) => {
  const { text, children, link, preventNewTab } = args;
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '15%',
      height: '100%',
    }}>
      <ExternalLink
      href={link}
      preventNewTab={preventNewTab}
      className="MainMenuLink">
        {text ?? children}
      </ExternalLink>
    </div>
  );
};

export default MenuBox;