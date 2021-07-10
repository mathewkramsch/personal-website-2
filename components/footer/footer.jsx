// footer.jsx

import style from './footer.module.css'
import utilStyle from '../../styles/utils.module.css'
import BackToTop from './comps/backToTop'

export default function Footer() {
    return (
        <div>
            <BackToTop/>
            <div>
                Footer, Copyright info and shit.
            </div>
        </div>
    );
}
