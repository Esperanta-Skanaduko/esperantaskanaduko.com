'https://github.com/Esperanta-Skanaduko/Skanadukoj/blob/main/Interreta-Esploristo/Chapter%2010%20-%20fake.pdf'
const Skanadukoj = (manga: string, chapter: number) => {
    const linkBuilder = (manga: string, chapter: number) => {
        let baseLink = 'https://github.com/Esperanta-Skanaduko/Skanadukoj/raw/main/Interreta-Esploristo/Chapter%201.pdf';
        let builder = baseLink + manga + '/Chapter%20' + chapter + '.pdf/';
        return builder;
    }
    return (
        <>
        
        </>
    )

}
export default Skanadukoj;