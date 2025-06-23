import '../styles/ContactPage.css'

import { useState, useEffect } from 'react';

function ContactPage() {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[message, setMessage] = useState('');

    const[invalidName, setInvalidName] = useState('');
    const[invalidEmail, setInvalidEmail] = useState('');
    const[invalidMessage, setInvalidMessage] = useState('');

    function confirmValidationForm() {
    }

    useEffect(() => {

        console.log("Nome atualizado: " + name);
        console.log("Email atualizado: " + email);
        console.log("Mensagem atualizado: " + message);

        let newInvalidNameValue = ''
        let newInvalidEmailValue = ''
        let newInvalidMessageValue = ''

        if (name.trim() == '') {

            newInvalidNameValue = '*Insira um nome!'

        }

        if (email.trim() == '') {

            newInvalidEmailValue = '*Insira um email!'

        } else {
            let emailSplit = email.split('@')

            if (emailSplit.length != 2 || emailSplit[0].trim() == '' || emailSplit[1].trim() == '' || !emailSplit[1].includes('.')) {

                newInvalidEmailValue = '*Insira um email valido!'

            }
        }

        if (message.trim() == '') {

            newInvalidMessageValue = '*Insira uma mensagem!'

        }

        setInvalidName(newInvalidNameValue)
        setInvalidEmail(newInvalidEmailValue)
        setInvalidMessage(newInvalidMessageValue)

    }, [name, email, message]);

    return (
        <>
            <div className="box  max--content--width">
                <div id="first--box--contact" className="box box--column align--center margin--1 width--content--1">
                    <h1 className="contact__h1">Entre em contato</h1>
                    <p className="contact__p">Gostaria de conversar sobre uma ideia nova de projeto? Entre em contato comigo: </p>
                    <input 
                        className={
                            invalidName != '' ?
                            "contact__input max--content--width contact--invalid__input__textarea" :
                            "contact__input max--content--width"
                        }
                        type="text" 
                        placeholder="Seu nome/Nome da empresa" 
                        onChange={(e) => {
                            let newNameValue = e.target.value.toString()
                            setName(newNameValue)
                    }} />
                    { invalidName != '' ? <span className="invalid__span align--left"> { invalidName } </span> : <></> }
                    <input 
                        className={
                            invalidEmail != '' ?
                            "contact__input max--content--width contact--invalid__input__textarea" :
                            "contact__input max--content--width"
                        }
                        type="text" 
                        placeholder="Seu email oficial/Email da empresa" 
                        onChange={(e) => {
                            let newEmailValue = e.target.value.toString()
                            setEmail(newEmailValue)
                        }}/>
                    { invalidEmail != '' ? <span className="invalid__span align--left"> { invalidEmail } </span> : <></> }
                    <textarea 
                        className={
                            invalidMessage != '' ?
                            "contact__textarea max--content--width contact--invalid__input__textarea" :
                            "contact__textarea max--content--width"
                        }
                        placeholder="Digite a sua mensagem"
                        onChange={(e) => {
                            let newMessageValue = e.target.value.toString()
                            setMessage(newMessageValue)
                        }}></textarea>
                    { invalidMessage != '' ? <span className="invalid__span align--left"> { invalidMessage } </span> : <></> }
                    <button className="contact__button" onClick={() => confirmValidationForm()}>Enviar</button>
                    <p className="contact__p">Ou entao, entre em contato comigo pelas seguintes redes sociais: </p>
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
