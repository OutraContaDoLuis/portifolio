import '../styles/HomePage.css';

function HomePage() {

    return(
        <>
            <div className="box box--column width--content--1">
                <h1 className="title--1 align--right">Torne seu sonho em realidade!</h1>
                <p className="paragraphy align--right">Desenvolvedor FullStack preparado para colocar o seu projeto em acao.</p>
                <div className="box box--row align--right">
                    <button className="home__button">Saiba mais</button>
                    <button className="home__button">Contato</button>
                </div>
            </div>
            
        </>
    );
} 

export default HomePage;
