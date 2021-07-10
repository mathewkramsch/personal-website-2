// contactInfo.jsx

import style from '../contact.module.css'
import utilStyle from '../../../styles/utils.module.css'

export default function ContactInfo() {
    return (
        <div className={style.contactInfo}>
            <p>
                Feel free to reach out to me at <b>mathewkramsch@ucsb.edu</b>&nbsp;
                or text me at <b>(626) 529-4008</b>.
            </p>
        </div>
    );
}
