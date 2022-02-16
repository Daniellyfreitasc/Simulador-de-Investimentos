import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import './style.scss'

const RadioGroup = ({ title, items, name, onChange }) => {
	const [selected, setSelected] = useState()

	return (
		<fieldset className='radio-group'>
			<div className='radio-group__title'>
				<p>{title}</p>
				<FontAwesomeIcon
					icon={faInfoCircle}
					className='radio-group__title__icon'
				/>
			</div>
			<div className='radio-group__items'>
				{items.map(({ id, label }) => (
					<label
						htmlFor={id}
						className={`radio-group__items__item ${
							selected === id ? 'radio-group__items__item--selected' : ''
						}`}
					>
						<input
							type='radio'
							id={id}
							name={name}
							value={id}
							onChange={() => {
								onChange(id)
								setSelected(id)
							}}
						/>
						{selected === id && (
							<FontAwesomeIcon
								icon={faCheck}
								className='radio-group__btn__icon'
							/>
						)}
						{label}
					</label>
				))}
			</div>
		</fieldset>
	)
}

export default RadioGroup
