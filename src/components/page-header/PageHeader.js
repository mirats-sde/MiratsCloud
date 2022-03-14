import "./PageHeader.css"

function PageHeader({ data }) {
	return (
		<div className='header-showcase'>
			<h1>{data.headerTitle}</h1>
			<p>{data.headerDesc}</p>
			{data.headerButton.map((btn, index) => (
				<div className='header-showcase-btns'>
					<button>{btn}</button>
				</div>
			))}
		</div>
	)
}

export default PageHeader
