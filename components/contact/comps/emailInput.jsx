// emailInput.jsx

import React, { useState } from 'react'
import s from '../../../styles/layout/contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com'

const sendEmailButton = (message)=>{
    let planeIcon = <FontAwesomeIcon icon={faPaperPlane} className='icon' id='plane'/>;
    if (message==='sending...') planeIcon = <div></div>;  // maybe put some animation here later
    if (message==='message sent') planeIcon = <div></div>;
    return (
        <div className={ message==='send email'? 'submitButton sendEmail' : 'submitButton sendingEmail'}>
            <input type='submit' value={message} className='italic footerText'/>
            { planeIcon }
        </div>
    );
}

const requiredFieldError = (fieldRequiredX)=>{
    let classList = 'X icon';
    if (!fieldRequiredX) classList = 'X icon placeHolder';
    return <FontAwesomeIcon icon={faTimes} className={classList}/>;
}

const requiredFieldMessage = (nameX, emailX, messageX)=>{
    let classList = 'errorMssgText';
    if (!nameX && !emailX & !messageX) classList = 'errorMssgText placeHolder'
    return (
        <div className={s.errorMssg}>
            <h4 className={classList}>please fill out required fields</h4>
        </div>
    );
}

export default function EmailInput() {
    const [emailButtonMssg, setEmailButtonMssg] = useState('send email');
    const [nameRequiredX, setNameRequiredX] = useState(false);  // if true, writes X next to name input
    const [emailRequiredX, setEmailRequiredX] = useState(false);
    const [messageRequiredX, setMessageRequiredX] = useState(false);
    // const [fieldRequired, setFieldRequired] = useState(false);
    const sendEmail = (e)=>{
        e.preventDefault();    // This is important, email won't send without it

        console.log(e.target.from_name.value);
        setNameRequiredX(!e.target.from_name.value); // if name==empty, draw X
        setEmailRequiredX(!e.target.from_email.value);
        setMessageRequiredX(!e.target.message.value);
        if (e.target.from_name.value && e.target.from_email.value && e.target.message.value) {
            setEmailButtonMssg('sending...');
            emailjs.sendForm('service_ooit997','template_69kd92e',e.target,'user_FCqOc9EcSn7381ssMYLsf')
            .then(
                (result) => {
                    setEmailButtonMssg('message sent');
                    setTimeout(()=>{ window.location.reload(); }, 1000);
                },
                (error) => { console.log(error.text); }
            );
        }
        // else write please fill out required fields
    }

    return (
        <div className={s.inputContent}>
            <form action='#' className={s.inputs} onSubmit={sendEmail}>
                <div className={s.textInputs}>
                    <div className={s.inputBox}>
                        { requiredFieldError(nameRequiredX) }
                        <input type="text" id="name" name="from_name" className='inputText'
                            placeholder='Name'/>
                    </div>
                    <div className={s.inputBox}>
                        { requiredFieldError(emailRequiredX) }
                        <input type="email" id="email" name="from_email" className='inputText'
                            placeholder='Email Address'/>
                    </div>
                    <div className={s.inputBox}>
                        { requiredFieldError(messageRequiredX) }
                        <textarea name="message" rows="12" cols="30" className='inputText'
                            placeholder='Your message to mathewkramsch@ucsb.edu'>
                        </textarea>
                    </div>
                </div>
                <div>
                    { sendEmailButton(emailButtonMssg) }
                </div>
            </form>
            { requiredFieldMessage(nameRequiredX, emailRequiredX, messageRequiredX) }
        </div>
    );
}
