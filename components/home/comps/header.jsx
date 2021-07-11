// header.jsx

import style from '../home.module.css'

export default function Header() {
	return (
		<div className={style.header}>
			<h1><div id={style.firstName}>Mathew</div>&nbsp;Kramsch</h1>
			<p>full-stack software developer</p>
		</div>
	);
}
