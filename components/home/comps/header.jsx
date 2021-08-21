// header.jsx

import s from '../../../styles/layout/home.module.scss'

export default function Header() {
	return (
		<div className={s.header}>
			<h1><div id='firstName'>Mathew</div>&nbsp;Kramsch</h1>
			<h3>full-stack software developer</h3>
		</div>
	);
}
