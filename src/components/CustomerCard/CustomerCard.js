import "./CustomerCard.css"

function CustomerCard({ customerImg }) {
	return (
		<div className='customer-card'>
			<img src={customerImg} alt='' className='customer-img' />
		</div>
	)
}
export default CustomerCard;

