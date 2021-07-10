// contact.jsx

import style from './contact.module.css'
import utilStyle from '../../styles/utils.module.css'
import ContactInfo from './comps/contactInfo'

export default function Contact() {
    return (
        <div className={style.page}>
            <div className={style.pageContent}>
                <div className={style.leftContainer}>
                    <h1>Contact</h1>
                </div>
                <div className={style.rightContainer}>
                    <ContactInfo/>
                </div>
            </div>
        </div>
    );
}
