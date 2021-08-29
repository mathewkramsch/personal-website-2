// emailInput.jsx

import React, { useState } from 'react'
import s from '../../../styles/layout/contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com'

const sendEmailButton = (status)=>{
    let submitValue = 'send email'
    if (status==='sent') submitValue = 'message sent'
    return (
        <div className='submitButton'>
            <input type='submit' value={submitValue} className='italic footerText'/>
            <FontAwesomeIcon icon={faPaperPlane} className='icon' id='plane'/>
        </div>
    );
}

export default function EmailInput() {
    const [status, setStatus] = useState('notSent');
    const sendEmail = (e)=>{
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        console.log(e.target.from_name.value);
        if (!e.target.from_name.value) { alert('need a name'); }
        if (!e.target.from_email.value) { alert('need an email address'); }
        if (!e.target.message.value) { alert('need a message'); }
        if (e.target.from_name.value && e.target.from_email.value && e.target.message.value) {
            emailjs.sendForm('service_ooit997','template_69kd92e',e.target,'user_FCqOc9EcSn7381ssMYLsf')
            .then(
                (result) => {
                    setStatus('sent');
                    setTimeout(()=>{ window.location.reload(); }, 1000);
                },
                (error) => { console.log(error.text); }
            );
        }
    }

    return (
        <form action='#' className={s.inputs} onSubmit={sendEmail}>
            <div className={s.textInputs}>
                <input type="text" id="name" name="from_name" className='inputText'
                    placeholder='Name'/>
                <input type="text" id="email" name="from_email" className='inputText'
                    placeholder='Email Address'/>
                <textarea name="message" rows="12" cols="30" className='inputText'
                    placeholder='Your message to mathewkramsch@ucsb.edu'>
                </textarea>
            </div>
            <div>
                { sendEmailButton(status) }
            </div>
        </form>
    );
}
