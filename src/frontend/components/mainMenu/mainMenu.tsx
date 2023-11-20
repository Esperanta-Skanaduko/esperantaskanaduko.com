import MenuBox from './menuBox/menuBox';

const MainMenu = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        fontFamily: 'Courier New, Courier, monospace',
        fontSize: '20px',
        backgroundColor: 'grey',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: '60%',
          backgroundColor: 'rgb(18, 20, 21)',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <MenuBox text='Hejmo' link='/' preventNewTab />
        <MenuBox text='MangaDex' link='https://mangadex.org/group/18541/esperanta-skanaduko' />
        <MenuBox text='Twitter' link='https://twitter.com/EsperantaSkanaduko' />
        <MenuBox
          text='Donaci'
          link='https://www.paypal.com/donate?business=FSQHDN6NA2AJA&item_name=financado+por+Esperanta+Skanaduko&currency_code=USD'
        />
        <MenuBox text='Kontakto' link='mailto:esperantaSkanaduko@gmail.com/' />
      </div>
    </div>
  );
};

export default MainMenu;
