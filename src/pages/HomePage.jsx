import '../styles/HomePage.css';

function HomePage() {

    return(
        <>
            <div className="box box--column max--content">
                <div id="first--box--home" className="box max--content--view">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
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
                <div className="box max--content">
                    <h2>Projetos</h2>
                </div>  
            </div>
            
        </>
    );
} 

export default HomePage;
