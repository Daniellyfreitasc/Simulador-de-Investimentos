import './style.scss'
import Card from '../../components/Card'

const Results = ({
	valorFinalBruto,
	aliquotaIR,
	valorPagoIR,
	valorFinalLiquido,
	valorTotalInvestido,
	ganhoLiquido,
}) => {
	return (
		<div className='results'>
			{valorFinalBruto !== undefined && (
				<Card title='Valor Final Bruto' value={`R$ ${valorFinalBruto}`} />
			)}
			{aliquotaIR !== undefined && (
				<Card title='Alíquota do IR' value={`${aliquotaIR}%`} />
			)}
			{valorPagoIR !== undefined && (
				<Card title='Valor Pago em IR' value={`R$ ${valorPagoIR}`} />
			)}
			{valorFinalLiquido !== undefined && (
				<Card title='Valor Final Líquido' value={`R$ ${valorFinalLiquido}`} />
			)}
			{valorTotalInvestido !== undefined && (
				<Card
					title='Valor Total Investido'
					value={`R$ ${valorTotalInvestido}`}
				/>
			)}
			{ganhoLiquido !== undefined && (
				<Card title='Ganho Líquido' value={`R$ ${ganhoLiquido}`} />
			)}
		</div>
	)
}

export default Results
