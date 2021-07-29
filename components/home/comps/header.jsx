// header.jsx

import s from '../home.module.scss'

export default function Header() {
	return (
		<div className={s.header}>
			<h1><div id={s.firstName}>Mathew</div>&nbsp;Kramsch</h1>
			<h2>full-stack software developer</h2>
		</div>
	);
}
