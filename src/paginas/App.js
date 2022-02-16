import { useState } from 'react'
import Simulator from '../componentes/ComponentesPaginas/Simulador'
import Results from '../componentes/ComponentesPaginas/Resultados'
import '../paginas/App.scss'

function App() {
	const [resultadoSimulacao, setResultadoSimulacao] = useState()

	const doSimulacao = async (rendimento, indexacao) => {
		const response = await fetch(
			`http://localhost:3000/simulacoes?tipoIndexacao=${indexacao}&tipoRendimento=${rendimento}`
		)
		const simulacao = await response.json()
		setResultadoSimulacao(simulacao?.[0])
	}
	return (
		<div className='app'>
			<header className='header'>
				<h1 className='header__title'>Simulador de Investimentos</h1>
			</header>
			<main className='main'>
				<div className='main__simulator'>
					<h2 className='main__title'>Simulador</h2>
					<Simulator
						doSimulacao={(rendimento, indexacao) =>
							doSimulacao(rendimento, indexacao)
						}
					/>
				</div>
				<div className='main__results'>
					{resultadoSimulacao !== undefined && (
						<h2 className='main__title'>Resultado da Simulação</h2>
					)}
					<Results {...resultadoSimulacao} />
				</div>
			</main>
		</div>
	)
}

export default App
