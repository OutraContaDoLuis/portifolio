import '../styles/HomePage.css';

function HomePage() {

    return(
        <>
            <div className="box box--column max--content--width">
                <div id="first--box--home" className="box max--content--view--height max--content--width">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                    <div className="circle4"></div>
                    <div className="box box--row margin--1">
                        <div className="box box--column">
                            <h1 id="first--box__h1" className="title--1 align--right">Torne seu sonho uma realidade!</h1>
                            <p id="first--box__p" className="paragraphy align--right">Desenvolvedor FullStack preparado para colocar o seu projeto em acao.</p>
                            <div className="box box--row align--right">
                                <button className="home__button">Saiba mais</button>
                                <button className="home__button">Contato</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Projetos</h2>
                </div>
            </div>
            
        </>
    );
} 

export default HomePage;
