import '../styles/ContactPage.css'

function ContactPage() {
    return (
        <>
            <div className="box max--content--view--height max--content--width">
                <div id="first--box--contact" className="box box--column align--center margin--1 width--content--1">
                    <h1 className="contact__h1">Entre em contato</h1>
                    <p className="contact__p">Gostaria de conversar sobre uma ideia nova de projeto? Entre em contato comigo: </p>
                    <input className="contact__input max--content--width" type="text" placeholder="Seu nome/Nome da empresa" />
                    <input className="contact__input max--content--width" type="text" placeholder="Seu email oficial/Email da empresa" />
                    <textarea className="contact__textarea max--content--width" name="" id="" placeholder="Digite a sua mensagem"></textarea>
                    <button className="contact__button">Enviar</button>
                    <p className="contact__p">Ou entao: </p>
                    <div className="box box--row">
                        <button className="contact--2__button" onClick={() => window.open('https://github.com/OutraContaDoLuis')}>
                            <i class="bi bi-github"></i>
                        </button>
                        <button className="contact--2__button" onClick={() => window.open('https://github.com/OutraContaDoLuis')}>
                            <i class="bi bi-linkedin"></i>
                        </button>
                        <button className="contact--2__button" onClick={() => window.open('https://www.instagram.com/luis_henr09/')}>
                            <i class="bi bi-instagram"></i>
                        </button>
                        <button className="contact--2__button" onClick={() => window.open('https://github.com/OutraContaDoLuis')}>
                            <i class="bi bi-envelope-at"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPage
