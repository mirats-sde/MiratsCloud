import "./NextStep.css"
import { Link } from "react-router-dom"

const linkData = [
	{
		linkTitle: "Work with a trusted partner",
		link: "Find a partner",
	},
	{
		linkTitle: "Work with a trusted partner",
		link: "Find a partner",
	},
	{
		linkTitle: "Work with a trusted partner",
		link: "Find a partner",
	},
]

function NextStep() {
	return (
		<div className='next-step-component'>
			<div className='next-step-left'>
				<h1>Take the next step</h1>
				<p>
					Tell us what you’re solving for. A Google Cloud expert will
					help you find the best solution.
				</p>
				<button>Contact Sales</button>
			</div>

			<div className='next-step-right'>
				{linkData.map(l => (
					<ul className='text-link'>
						<li>{l.linkTitle}</li>
						<li>
							<Link to='www.google.com'>{l.link}</Link>
						</li>
					</ul>
				))}
			</div>
		</div>
	)
}

export default NextStep
