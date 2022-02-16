import { useState, useEffect } from 'react'
//import InputMask from 'react-input-mask'
import RadioGroup from '../../components/RadioGroup'
import Input from '../../components/Input'
import Button from '../../components/Button'
import './style.scss'

const Simulator = ({ doSimulacao }) => {
	const [cdi, setCdi] = useState()
	const [ipca, setIpca] = useState()
	const [rendimento, setRendimento] = useState()
	const [indexacao, setIndexacao] = useState()
	const [aporteInicial, setAporteInicial] = useState('')
	// const [validator, setValidator] = useState(true)

	useEffect(() => {
		getIndicadores()
	}, [])
	console.log(aporteInicial)
	const getIndicadores = async () => {
		const response = await fetch('http://localhost:3000/indicadores')
		const indicadores = await response.json()

		const cdiObj = indicadores.find((item) => item.nome === 'cdi')
		setCdi(cdiObj.valor)

		const ipcaObj = indicadores.find((item) => item.nome === 'ipca')
		setIpca(ipcaObj.valor)
	}

	const rendimentos = [
		{
			id: 'bruto',
			label: 'Bruto',
		},
		{
			id: 'liquido',
			label: 'Líquido',
		},
	]

	const indexacoes = [
		{
			id: 'pre',
			label: 'PRÉ',
		},
		{
			id: 'pos',
			label: 'PÓS',
		},
		{
			id: 'ipca',
			label: 'FIXADO',
		},
	]
	// console.log(validator)

	return (
		<div className='simulator'>
			<div className='simulator__column'>
				<RadioGroup
					title='Rendimento'
					items={rendimentos}
					name='rendimentos'
					onChange={setRendimento}
				/>
				<Input
					title='Aporte Inicial'
					value={aporteInicial}
					onChange={(e) => setAporteInicial(e.target.value)}
				/>
				{aporteInicial.match(/\D/) && <p>Aporte deve ser um número</p>}
				<Input title='Prazo (em meses)' />
				<Input title='IPCA (ao ano)' value={`${ipca}%`} />
				<Button color='transparent' type='button'>
					Limpar Campos
				</Button>
			</div>
			<div className='simulator__column'>
				<RadioGroup
					title='Tipos de indexação'
					items={indexacoes}
					name='indexacao'
					onChange={setIndexacao}
				/>
				<Input title='Aporte Mensal' />
				<Input title='Rentabilidade' />
				<Input title='CDI (ao ano)' value={`${cdi}%`} />
				<Button
					color='gray'
					type='button'
					onClick={() => doSimulacao(rendimento, indexacao)}
				>
					Simular
				</Button>
			</div>
		</div>
	)
}

export default Simulator
