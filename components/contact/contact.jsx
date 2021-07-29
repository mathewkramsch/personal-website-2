// contact.jsx

import s from './contact.module.scss'
import ContactInfo from './comps/contactInfo'

export default function Contact() {
    return (
        <div className={s.page}>
            <div className={s.pageContent}>
                <div className={s.leftContainer}>
                    <h3>contact me</h3>
                </div>
                <div className={s.rightContainer}>
                    <ContactInfo/>
                </div>
            </div>
        </div>
    );
}
