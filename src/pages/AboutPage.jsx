import '../styles/AboutPage.css';

import cssLogo from '../assets/about/backend/css-logo.png';
import postgresqlLogo from '../assets/about/backend/postgresql-logo.webp';
import dockerLogo from '../assets/about/backend/docker-logo.webp';
import mariadbLogo from '../assets/about/backend/mariadb-logo.png';
import kotlinLogo from '../assets/about/backend/kotlin-logo.png';
import sqlLogo from '../assets/about/backend/sql-logo.png';

import html5Logo from '../assets/about/frontend/html5-logo.png';
import css3Logo from '../assets/about/frontend/css3-logo.png';
import jsLogo from '../assets/about/frontend/js-logo.png';
import reactjsLogo from '../assets/about/frontend/reactjs-logo.webp';
import vuejsLogo from '../assets/about/frontend/vuejs-logo.webp';
import flutterLogo from '../assets/about/frontend/flutter-logo.png';

function AboutPage() {

    function openEmail() {
        window.open('mailto:luis.henri.campaner@gmail.com', '_blank')
    }

    return (
        <>
            <div className="box box--column max--content--width">
                <div id="first--box--about" className="box max--content--view--height width--content--1">
                    <div className="box box--column">
                        <h1 className="about__h1">Sobre mim</h1>
                        <p className="about__p align--center">Olá, meu nome é Luis Henrique Campaner, tenho 19 anos, e atualmente sou desenvolvedor FullStack, trabalho tanto com Front-End quanto com Back-End. Atuo na área há cerca de 1 ano e estou trabalhando prestando serviços para as mais diversas empresas e negócios.</p>
                    </div>
                </div>
                <div id="second--box--about" className="box max--content--view--height width--content--1">
                    <div className="box box--column">
                        <h1 className="about__h1 align--left">Tecnologias com as quais trabalho</h1>
                        <h3 className="about__h3 align--left">BackEnd</h3>
                        <div className="box box--column">
                            <div className="box between-content">
                                <div className="box box--column tecnology--about__div">
                                    <div className="box tecnology--about--image__div">
                                        <img src={ cssLogo } alt="" />
                                    </div>
                                    <p>Tenho amplo conhecimento em EntityFramework.Net, ADO.Net e em toda parte de API Rest.</p>
                                </div>
                                <div className="box box--column tecnology--about__div">
                                    <div className="box tecnology--about--image__div">
                                        <img src={ postgresqlLogo } alt="" />
                                    </div>
                                    <p>Tenho experiência com os comandos sql do Postgresql. Gosto muito de utilizar ele como segunda opção de banco de dados.</p>
                                </div>
                                <div className="box box--column tecnology--about__div">
                                    <div className="box tecnology--about--image__div">
                                        <img src={ mariadbLogo } alt="" />
                                    </div>
                                    <p>Utilizo o mariadb como meu banco de dados principal em quase todas as minhas aplicações, devido a sua consistência.</p>
                                </div>
                                <div className="box box--column tecnology--about__div">
                                    <div className="box tecnology--about--image__div">
                                        <img src={ dockerLogo } alt="" />
                                    </div>
                                    <p>Utilizo o docker em todas as minhas aplicações. Gosto de agrupar banco de dados, servidores e webapps em containers.</p>
                                </div>
                                <div className="box box--column tecnology--about__div">
                                    <div className="box tecnology--about--image__div">
                                        <img src={ kotlinLogo } alt="" />
                                    </div>
                                    <p>Na parte do backend, utilizo o kotlin junto ao framework Retrofit. Mexo com o Kotlin devido ao KMP (Kotlin Multiplataform)</p>
                                </div>
                                <div className="box box--column tecnology--about__div">
                                    <div className="box tecnology--about--image__div">
                                        <img src={ sqlLogo } alt="" />
                                    </div>
                                    <p>Utilizo sql para criar tabelas e tambem no ADO.Net, me permitindo maior controle de dados dentro do meu banco de dados.</p>
                                </div>
                            </div>
                            <h3 className="about__h3 align--left">FrontEnd</h3>
                            <div className="box between-content">
                                <div className="box box--column tecnology--about__div">
                                    <div className="box tecnology--about--image__div">
                                        <img src={ html5Logo } alt="" />
                                    </div>
                                    <p>Utilizo Html5 em todos os meus aplicativos Web. Gosto de ultizar a anotacao BEM para nomear meus ids e classes.</p>
                                </div>
                                <div className="box box--column tecnology--about__div">
                                    <div className="box tecnology--about--image__div">
                                        <img src={ css3Logo } alt="" />
                                    </div>
                                    <p>Todos os aplicativos webs que eu produzo, estilizo todos eles com css3.</p>
                                </div>
                                <div className="box box--column tecnology--about__div">
                                    <div className="box tecnology--about--image__div">
                                        <img src={ jsLogo } alt="" />
                                    </div>
                                    <p>Tenho amplo conhecimento em EntityFramework.Net, ADO.Net e em toda parte de API Rest.</p>
                                </div>
                                <div className="box box--column tecnology--about__div">
                                    <div className="box tecnology--about--image__div">
                                        <img src={ reactjsLogo } alt="" />
                                    </div>
                                    <p>Tenho amplo conhecimento em EntityFramework.Net, ADO.Net e em toda parte de API Rest.</p>
                                </div>
                                <div className="box box--column tecnology--about__div">
                                    <div className="box tecnology--about--image__div">
                                        <img src={ vuejsLogo } alt="" />
                                    </div>
                                    <p>Tenho amplo conhecimento em EntityFramework.Net, ADO.Net e em toda parte de API Rest.</p>
                                </div>
                                <div className="box box--column tecnology--about__div">
                                    <div className="box tecnology--about--image__div">
                                        <img src={ flutterLogo } alt="" />
                                    </div>
                                    <p>Tenho amplo conhecimento em EntityFramework.Net, ADO.Net e em toda parte de API Rest.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="third--box--about" className="box max--content--view--height width--content--1">
                    <div className="box box--column">
                        <h1 className="about__h1">Quem eu atendo?</h1>
                        <br />
                        <p className="about__p align--center">Atendo qualquer tipo de modelo de negócio. Precisa de um desenvolvedor BackEnd? Precisa de um FrontEnd para o seu negócio? Precisa de um servidor para a sua empresa? Precisa de um aplicativo? Pode entrar em contato comigo pelo email: <span className="link--email__span" onClick={() => openEmail()}>luis.henri.campaner@gmail.com</span></p>
                        <br />
                        <p className="about__p align--center">Ou então entre em contato comigo pelos botões abaixo: </p>
                        <br />
                        <div className="box box--row">
                            <button className="about__button" onClick={() => window.open('https://www.instagram.com/luis_henr09/')}>Instagram</button>
                            <button className="about__button" onClick={() => window.open('https://www.linkedin.com/in/luis-henrique-campaner-392646369/')}>Linkedin</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage
