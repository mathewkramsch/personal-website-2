// emailInput.jsx

import React, { useState } from 'react'
import s from '../../../styles/layout/contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const sendEmailButton = (status, toggleStatus)=>{
    let submitButtonChild = (
        <>
            <h4 className='italic footerText'>send email</h4>
            <FontAwesomeIcon icon={faPaperPlane} className='icon' id='plane'/>
        </>
    );
    if (status==='sent') submitButtonChild = (
        <>
            <h4 className='italic footerText emailSent'>email sent</h4>
        </>
    );

    return (
        <div className='submitButton' onClick={toggleStatus}>
            { submitButtonChild }
        </div>
    );
}

export default function EmailInput() {
    const [status, setStatus] = useState('notSent');
    const toggleStatus = ()=>{
        if (status==='notSent') setStatus('sent');
        else setStatus('notSent');
    }

    return (
        <form action='#' className={s.inputs}>
            <div className={s.textInputs}>
                <input type="text" id="name" name="fname" className='inputText'
                    placeholder='Name'/>
                <input type="text" id="email" name="fname" className='inputText'
                    placeholder='Email Address'/>
                <textarea name="message" rows="10" cols="30" className='inputText'
                    placeholder='Your message to mathewkramsch@ucsb.edu:'>
                </textarea>
            </div>
            <div className='submitButton' onClick={toggleStatus}>
                { sendEmailButton(status,toggleStatus) }
            </div>
        </form>
    );
}
