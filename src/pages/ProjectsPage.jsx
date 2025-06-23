import '../styles/ProjectsPage.css';

function ProjectPage() {
    return (
        <>
            <div className="box box--column max--content--width">
                <div id="first--box--projects" className="box max--content--view--height max--content--width">
                    <div className="box box--column margin--1">
                        <h1 className="projects--initial__h1 align--left">Projetos</h1>
                        <p className="projects--initial__p align--left">Confia e extremamente essencial quando se trata do seu negocio. Por isso, confira abaixo mais sobre os projetos que eu ja desenvolvi e tire suas conclusoes!</p>
                        <button className="projects--initial__button align--left">Ver Exemplos</button>
                    </div>
                </div>
                <div id="box--projects" className="box box--column max--content--width">
                    <div className="box box--column margin--1">
                        <h2 className="projects__h2 align--left">Site da empresa SanJoseph</h2>
                        <p className="projects__p">Projeto FrontEnd desenvolvido para a empresa de tecnologia do MatoGrosso SanJoseph. Esse projeto utiliza das seguintes tecnologias: React.js, JavaScript, Html5 e Css3. Sendo mais tecnico, dentro do React.js, na questao de navegacao entre paginas, foi utilizado o React Router.</p>
                        <div className="box box--row align--left">
                            <button className="projects__button">
                                <i class="bi bi-github"></i>
                                Ver projeto no Github
                            </button>
                            <button className="projects__button">
                                <i class="bi bi-eye-fill"></i>
                                Ver projeto em producao
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectPage
