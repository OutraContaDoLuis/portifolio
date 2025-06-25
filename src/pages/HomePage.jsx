import '../styles/HomePage.css';

import { DiJsBadge, DiReact, DiPython, DiDatabase, DiHtml5, DiCss3, DiPostgresql } from "react-icons/di";
import { TbBrandKotlin } from "react-icons/tb";
import { SiMariadbfoundation } from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri";
import { FaDocker } from "react-icons/fa";

import siteSanJoseph from '../assets/home/site-sanjoseph.png';

import ShowProjectCardHome from '../componentes/home/ShowProjectCardHome';

import { useNavigate } from 'react-router';

function HomePage() {

    const navigate = useNavigate();

    function changePageFunction(route) {
        return navigate(route, { replace: true })
    }

    function openEmail() {
        window.open('mailto:luis.henri.campaner@gmail.com', '_blank')
    }

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
                            <h1 id="first--box__h1" className="title--1 align--left">Torne o seu sonho real!</h1>
                            <p id="first--box__p" className="paragraphy align--left">Aqui, você pode ter certeza que a sua ideia sai do papel e transforma o mundo.</p>
                            <div className="box box--row align--left">
                                <button className="home__button" onClick={() => changePageFunction('about')}>Saiba mais</button>
                                <button className="home__button" onClick={() => changePageFunction('contact')}>Contato</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="second--box--home" className="box max--content--view--height">
                    <div className="box box--column margin--1">
                        <h1 className="title--1 home__h1 home--about--element--margin-bottom">Sobre mim</h1>
                        <p className="paragraphy align--center home--about--element--margin-bottom">Oi, meu nome e Luis Henrique Campaner e atualmente trabalho como desenvolvedor FullStack. Domino as tecnologias C#, Kotlin, Python, HTML 5, CSS, Vue, React JS, Flutter, SQL, MariaDB, Postgresql e Github.</p>
                        <div className="box box--row">
                            <div className="box home--icon__div">
                                <DiJsBadge className="icons" />
                            </div>
                            <div className="box home--icon__div">
                                <DiHtml5 className="icons" />
                            </div>
                            <div className="box home--icon__div">
                                <DiCss3 />
                            </div>
                            <div className="box home--icon__div">
                                <DiReact />
                            </div>
                            <div className="box home--icon__div">
                                <DiPython />
                            </div>
                            <div className="box home--icon__div">
                                <DiDatabase />
                            </div>
                            <div className="box home--icon__div">
                                <TbBrandKotlin />
                            </div>
                            <div className="box home--icon__div">
                                <SiMariadbfoundation />
                            </div>
                            <div className="box home--icon__div">
                                <DiPostgresql />
                            </div>
                            <div className="box home--icon__div">
                                <RiVuejsFill />
                            </div>
                            <div className="box home--icon__div">
                                <FaDocker />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="third--box--home" className="box max--content--width max--content--view--height">
                    <div className="box box--column margin--1 max--content--width">
                        <h1 className="title--1 home__h1 align--left home--about--element--margin-bottom">Projetos</h1>
                        <div className="box box--row max--content--width between-content">
                            <ShowProjectCardHome 
                                titleCard={ 'Site SanJoseph' } 
                                imgCard={ siteSanJoseph } 
                                apresentationText={ 'Site de apresentação da empresa SanJoseph desenvolvido em React.js' }
                                linkGithub={ 'https://github.com/OutraContaDoLuis/SanJosephWebSite' }
                                linkProduction={ 'https://sanjosephwebsite.netlify.app/' }/>
                        </div>
                    </div>
                </div>
                <div className="box max--content--width max--content--view--height items--center">
                    <div className="box box--column margin--1 max--content--width">
                        <h1 className="title--1 home__h1 align--center home--about--element--margin-bottom">Entre em contato</h1>
                        <div className="box box--column max--content--width">
                            <p className="contact--home__p">Gostou do meu trabalho e quer fazer negócio? Entre em contato comigo pelo email: <span className="link--email__span" onClick={() => openEmail()}>luis.henri.campaner@gmail.com</span></p>
                            <p className="contact--home__p">Ou então, você pode acessar minhas redes sociais abaixo: </p>
                            <div className="box box--row align--center">
                                <button className="contact--home__button" onClick={() => window.open('https://github.com/OutraContaDoLuis')}>
                                    <i class="bi bi-github"></i>
                                </button>
                                <button className="contact--home__button" onClick={() => window.open('https://www.linkedin.com/in/luis-henrique-campaner-392646369/')}>
                                    <i class="bi bi-linkedin"></i>
                                </button>
                                <button className="contact--home__button" onClick={() => window.open('https://www.instagram.com/luis_henr09/')}>
                                    <i class="bi bi-instagram"></i>
                                </button>
                                <button className="contact--home__button" onClick={() => openEmail()}>
                                    <i class="bi bi-envelope-at"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
} 

export default HomePage;
