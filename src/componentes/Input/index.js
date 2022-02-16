import './style.scss'

const Input = ({ title, value, onChange, onClick }) => {
	return (
		<div className='input__container'>
			<label className='input__container__label'>{title}</label>
			<input
				type='text'
				className='input__container__input'
				value={value}
				onChange={onChange}
				onClick={onClick}
			/>
		</div>
	)
}

export default Input
