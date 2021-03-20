// const CLIENT_SECRET = 'e14dfd73b87a510e63079b439f24df92acf7aa11';
import * as React from "react"
import chapterLinks from "./chapterLinks"
'https://github.com/Esperanta-Skanaduko/Skanadukoj/blob/main/Interreta-Esploristo/Chapter%2010%20-%20fake.pdf'
const Skanadukoj = ({manga, chapter}) => {
    const linkBuilder = (manga, chapter) => {
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