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
    return (
        <>
            <div className="box box--column max--content--width">
                <div id="first--box--about" className="box max--content--view--height width--content--1">
                    <div className="box box--column">
                        <h1 className="about__h1">Sobre mim</h1>
                        <p className="about__p align--center">Ola, meu nome e Luis Henrique Campaner, tenho 19 anos, e atualmente sou desenvolvedor FullStack, trabalho tanto com Front-End quanto com Back-End. Atuo na area ha cerca de 1 ano e estou trabalhando prestando servicos para as mais diversas empresas e negocios.</p>
                    </div>
                </div>
                <div id="second--box--about" className="box max--content--view--height width--content--1">
                    <div className="box box--column">
                        <h1 className="about__h1 align--left">Tecnologias com as quais trabalho</h1>
                        <h3 className="about__h3 align--left">BackEnd</h3>
                        <div className="box box--column">
                            <div className="box box--row between-content">
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
                                    <p>Tenho amplo conhecimento em EntityFramework.Net, ADO.Net e em toda parte de API Rest.</p>
                                </div>
                                <div className="box box--column tecnology--about__div">
                                    <div className="box tecnology--about--image__div">
                                        <img src={ dockerLogo } alt="" />
                                    </div>
                                    <p>Tenho amplo conhecimento em EntityFramework.Net, ADO.Net e em toda parte de API Rest.</p>
                                </div>
                                <div className="box box--column tecnology--about__div">
                                    <div className="box tecnology--about--image__div">
                                        <img src={ mariadbLogo } alt="" />
                                    </div>
                                    <p>Tenho amplo conhecimento em EntityFramework.Net, ADO.Net e em toda parte de API Rest.</p>
                                </div>
                                <div className="box box--column tecnology--about__div">
                                    <div className="box tecnology--about--image__div">
                                        <img src={ kotlinLogo } alt="" />
                                    </div>
                                    <p>Tenho amplo conhecimento em EntityFramework.Net, ADO.Net e em toda parte de API Rest.</p>
                                </div>
                                <div className="box box--column tecnology--about__div">
                                    <div className="box tecnology--about--image__div">
                                        <img src={ sqlLogo } alt="" />
                                    </div>
                                    <p>Tenho amplo conhecimento em EntityFramework.Net, ADO.Net e em toda parte de API Rest.</p>
                                </div>
                            </div>
                            <h3 className="about__h3 align--left">FrontEnd</h3>
                            <div className="box box--row between-content">
                                <div className="box box--column tecnology--about__div">
                                    <div className="box tecnology--about--image__div">
                                        <img src={ html5Logo } alt="" />
                                    </div>
                                    <p>Tenho amplo conhecimento em EntityFramework.Net, ADO.Net e em toda parte de API Rest.</p>
                                </div>
                                <div className="box box--column tecnology--about__div">
                                    <div className="box tecnology--about--image__div">
                                        <img src={ css3Logo } alt="" />
                                    </div>
                                    <p>Tenho amplo conhecimento em EntityFramework.Net, ADO.Net e em toda parte de API Rest.</p>
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
                        <p className="about__p align--center">Atendo qualquer tipo de modelo de negocio. Precisa de um desenvolvedor BackEnd? Precisa de um FrontEnd para o seu negocio? Precisa de um servidor para a sua empresa? Precisa de um aplicativo? Pode entrar em contato comigo pelo email: luis.henri.campaner@gmail.com</p>
                        <br />
                        <p className="about__p align--center">Ou entao entre em contato comigo pelos botoes abaixo: </p>
                        <br />
                        <div className="box box--row">
                            <button className="about__button">Instagram</button>
                            <button className="about__button">Linkedin</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage
