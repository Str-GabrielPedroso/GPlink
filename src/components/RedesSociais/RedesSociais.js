import './RedesSociais.css'

const RedesSociais = () => {

    const ListaRedes = () => [
        {
            id: 1, urlNome: 'GitHub',
            url: 'https://github.com/Str-GabrielPedroso'
        },
        {
            id: 2, urlNome: 'LinkedIn',
            url: 'https://www.linkedin.com/in/gabriel-pedroso-de-almeida-6b7888143/'
        },
        {
            id: 3, urlNome: 'Instagram',
            url: 'https://www.instagram.com/gaah_pedroso/'
        },
        {
            id: 4, urlNome: 'Facebook',
            url: 'https://www.facebook.com/gabriel.pedroso.3538/'
        },
        {
            id: 5, urlNome: 'Spotfy',
            url: 'https://open.spotify.com/user/7ix5as1pgon92enez6idc3bpz'
        },
    ]

    const LinkRedes = ListaRedes().map((props) =>
        <div key={props.id} className='conteudo_links'>
            <a href={props.url} target="_blank">{props.urlNome}
            </a>
        </div>
    )

    return (
        <>
            <div className='Container'>
                <div className='bubbles'>
                    <span style={{ '--i': 11 }}></span>
                    <span style={{ '--i': 18 }}></span>
                    <span style={{ '--i': 15 }}></span>
                    <span style={{ '--i': 21 }}></span>
                    <span style={{ '--i': 12 }}></span>
                    <span style={{ '--i': 19 }}></span>
                    <span style={{ '--i': 25 }}></span>
                    <span style={{ '--i': 27 }}></span>
                    <span style={{ '--i': 24 }}></span>
                    <span style={{ '--i': 11 }}></span>
                    <span style={{ '--i': 14 }}></span>
                    <span style={{ '--i': 15 }}></span>
                    <span style={{ '--i': 20 }}></span>
                    <span style={{ '--i': 14 }}></span>
                    <span style={{ '--i': 23 }}></span>
                    <span style={{ '--i': 12 }}></span>
                    <span style={{ '--i': 28 }}></span>
                    <span style={{ '--i': 17 }}></span>
                    <span style={{ '--i': 14 }}></span>
                    <span style={{ '--i': 28 }}></span>
                    <span style={{ '--i': 11 }}></span>
                    <span style={{ '--i': 28 }}></span>
                    <span style={{ '--i': 15 }}></span>
                    <span style={{ '--i': 20 }}></span>
                    <span style={{ '--i': 13 }}></span>
                    <span style={{ '--i': 28 }}></span>
                    <span style={{ '--i': 11 }}></span>
                    <span style={{ '--i': 14 }}></span>
                    <span style={{ '--i': 28 }}></span>
                    <span style={{ '--i': 20 }}></span>
                    <span style={{ '--i': 14 }}></span>
                    <span style={{ '--i': 18 }}></span>
                    <span style={{ '--i': 12 }}></span>
                    <span style={{ '--i': 17 }}></span>
                    <span style={{ '--i': 25 }}></span>
                    <span style={{ '--i': 13 }}></span>
                    <span style={{ '--i': 27 }}></span>
                </div>
            </div>
            {LinkRedes}
        </>
    )
}
export default RedesSociais;
