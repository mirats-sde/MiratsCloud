import Header from "../../components/header/Header"
import SubHeader from "../../components/header/SubHeader"
import styles from "./Pricing.module.css"
import NextStep from "../../components/NextStep/NextStep"
import Footer from "../../components/Footer/Footer"
const guidance_card = [
	{
		title: "Migration assessment: Estimate the cost of migration and get an end-to-end plan.",
		subtitle: "Request free migration assessment",
	},
	{
		title: "Migration assessment: Estimate the cost of migration and get an end-to-end plan.",
		subtitle: "Request free migration assessment",
	},
	{
		title: "Migration assessment: Estimate the cost of migration and get an end-to-end plan.",
		subtitle: "Request free migration assessment",
	},
]

function Pricing() {
	return (
		<>
			<Header />
			<SubHeader />
			<div className={styles.pricing_page}>
				<div className={styles.head}>
					<p className={styles.title}>Mirats Insight pricing</p>
					<p className={styles.desc}>
						Save money with Mirats Insight's transparent and
						innovative approach to pricing. Contact us today to get
						a quote for your organization.
					</p>
					<div className={styles.heads_btn}>
						<button className={styles.request_quote_btn}>
							Request a quote
						</button>
						<button className={styles.get_started_for_free_btn}>
							Get started for free
						</button>
					</div>
				</div>
				<div className={styles.guidance_section}>
					<p className={styles.title}>
						Want more guidance? We’ve got you covered.
					</p>
					<div className={styles.guidance_cards}>
						{guidance_card.map((card, index) => {
							return (
								<div
									className={styles.guidance_card}
									key={index}
								>
									<span className={styles.title}>
										{card.title}
									</span>
									<span className={styles.subtitle}>
										{card.subtitle}
									</span>
								</div>
							)
						})}
					</div>
				</div>
				<NextStep />
				<Footer />
			</div>
		</>
	)
}
export default Pricing
