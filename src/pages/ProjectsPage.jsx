import '../styles/ProjectsPage.css';

function ProjectPage() {

    function scrollDown() {
        let element = document.getElementById('box--projects');
        let coords = element.getBoundingClientRect();

        console.log(coords.y)

        window.scroll({
            top: coords.y - 100,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <div className="box box--column max--content--width">
                <div id="first--box--projects" className="box max--content--view--height max--content--width">
                    <div className="box box--column margin--1">
                        <h1 className="projects--initial__h1 align--left">Projetos</h1>
                        <p className="projects--initial__p align--left">Confiança é extremamente essencial quando se trata do seu negócio. Por isso, confira abaixo mais sobre os projetos que eu já desenvolvi e tire suas conclusões!</p>
                        <button className="projects--initial__button align--left" onClick={() => scrollDown()}>Ver Exemplos</button>
                    </div>
                </div>
                <div id="box--projects" className="box box--column max--content--width">
                    <div className="box box--column margin--1">
                        <h2 className="projects__h2 align--left">Site da empresa SanJoseph</h2>
                        <p className="projects__p">Projeto Front End desenvolvido para a empresa de tecnologia do Mato Grosso SanJoseph. Esse projeto utiliza as seguintes tecnologias: React.js, JavaScript, Html5 e Css3. Sendo mais técnico, dentro do React.js, na questão de navegação entre páginas, foi utilizado o React Router.</p>
                        <div className="box box--row align--left">
                            <button className="projects__button" onClick={() => window.open('https://github.com/OutraContaDoLuis/SanJosephWebSite')}>
                                <i class="bi bi-github"></i>
                                Ver projeto no Github
                            </button>
                            <button className="projects__button" onClick={() => window.open('https://sanjosephwebsite.netlify.app/')}>
                                <i class="bi bi-eye-fill"></i>
                                Ver projeto em produção
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectPage
