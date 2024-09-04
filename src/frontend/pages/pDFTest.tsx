// import karlo from './Karlo.pdf';
import library from './library';
const PDFTest = () => {
  return (
    <div>
      {/* TODO: copy what manga dex as a pdf introduction, or use esperanto library */}
      <embed src={library.karlo} width='800px' height='2100px' />
    </div>
  );
};

export default PDFTest;
