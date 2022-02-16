import './style.scss'

const Button = ({ children, type, color, onClick }) => {
	return (
		<button
			className={`button button--${color}`}
			type={type}
			onClick={() => onClick()}
		>
			<label className='button__label'>{children}</label>
		</button>
	)
}

export default Button
