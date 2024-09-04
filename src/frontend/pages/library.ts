import libraryDatabase from './libraryDatabase';

export class Library {
    public karlo = libraryDatabase.karlo.book;
}

const library = new Library();
export default library;
