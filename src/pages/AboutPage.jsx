import '../styles/AboutPage.css';

function AboutPage() {
    return (
        <>
            <div className="box box--column">
                <div id="first--box--about" className="box max--content--view--height width--content--1">
                    <div className="box box--column">
                        <h1 className="about__h1">Sobre mim</h1>
                        <p className="about__p">Ola, meu nome e Luis Henrique Campaner e atualmente sou desenvolvedor FullStack, trabalho tanto com Front-End quanto com Back-End.</p>
                    </div>
                </div>
                <div id="second--box--about" className="box max--content--view--height">
                    <div className="box box--column">
                        <h1 className="about__h1">Tecnologias em que eu trabalho</h1>
                        <div className="box box--column">
                            <h2>BackEnd</h2>
                        </div>
                        <p>Ola, meu nome e Luis Henrique Campaner e atualmente sou desenvolvedor FullStack, trabalho tanto com Front-End quanto com Back-End.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPage
