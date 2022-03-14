import BlogCard from "../../components/blog-card/BlogCard"
import CustomerCard from "../../components/CustomerCard/CustomerCard"
// import Footer from "../../components/Footer/Footer"
import Header from "../../components/header/Header"
import SubHeader from "../../components/header/SubHeader"
import styles from "./CustomerStories.module.css"

const customerStoriesArticles = [
	{
		title: "Deutsche bank and mirats insights working together",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCOD9CWp4SdYG-zIdg7mmPNPpGKZqkp9RDYw&usqp=CAU",
		categories: ["customer"],
	},
	{
		title: "Twitter increases speed, flexibility, and scalability with Mirats Insights",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnMmH9RMaRNkZ_nSrpIomyRCrfuOSc8lr0pgM7W9xta11asWVm9Z94MnradYi4MIep_00&usqp=CAU",
		categories: ["twitter", "customer"],
	},
	{
		title: "McKesson uses Mirats Insights to get more out of existing helthcare.",
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_cfXgpGnHO4HwKW8bHxZ2kVZFko1SaR_8bA&usqp=CAU",
		categories: ["twitter", "customer", "healthcare"],
	},
]

const customers = [
	"https://lh3.googleusercontent.com/C16bOr36b6OXVexrlvAGl6C7bPX6ayWOq-5YdMwAuwsTqekCHfLCvGYBLcODpidWorLMj9ZG_l8_Ug=e14-rj-sc0xffffff-h124-w220",
	"https://lh3.googleusercontent.com/b_7mNyxpwSKipKRA59OWpCaqn8U02b2qHaJ2PfTZL5ZiO9p6SL_nKrVVxgr6AyIUIoPeWQeO6WfP=e14-rj-sc0xffffff-h124-w220",
	"https://lh3.googleusercontent.com/RDDWa0ZnDWhYBmpIZOr_9OuyMxuEJzzzz0oNREKpDag6iQlfNsYNJWm3anVQibxLRU6EvSZBAS_P=e14-rj-sc0xffffff-h124-w220",
	"https://lh3.googleusercontent.com/E4bS5mFS0voFhgjve4fEYIPfEVAiSYzcqpX-nSZioMgWwhz_fie_XohEoV66S_aNMH8rFfyhwxA=e14-rj-sc0xffffff-h124-w220",
	"https://lh3.googleusercontent.com/zAZq76io8XlkSmUvpgzeF2cUo-esKXFg3mceAsW4MakqA45QyrheJweaIDFoSJ9qu3HjhGrcol6Y=e14-rj-sc0xffffff-h124-w220",
	"https://lh3.googleusercontent.com/C16bOr36b6OXVexrlvAGl6C7bPX6ayWOq-5YdMwAuwsTqekCHfLCvGYBLcODpidWorLMj9ZG_l8_Ug=e14-rj-sc0xffffff-h124-w220",
	"https://lh3.googleusercontent.com/b_7mNyxpwSKipKRA59OWpCaqn8U02b2qHaJ2PfTZL5ZiO9p6SL_nKrVVxgr6AyIUIoPeWQeO6WfP=e14-rj-sc0xffffff-h124-w220",
	"https://lh3.googleusercontent.com/RDDWa0ZnDWhYBmpIZOr_9OuyMxuEJzzzz0oNREKpDag6iQlfNsYNJWm3anVQibxLRU6EvSZBAS_P=e14-rj-sc0xffffff-h124-w220",
	"https://lh3.googleusercontent.com/E4bS5mFS0voFhgjve4fEYIPfEVAiSYzcqpX-nSZioMgWwhz_fie_XohEoV66S_aNMH8rFfyhwxA=e14-rj-sc0xffffff-h124-w220",
	"https://lh3.googleusercontent.com/zAZq76io8XlkSmUvpgzeF2cUo-esKXFg3mceAsW4MakqA45QyrheJweaIDFoSJ9qu3HjhGrcol6Y=e14-rj-sc0xffffff-h124-w220",
	"https://lh3.googleusercontent.com/C16bOr36b6OXVexrlvAGl6C7bPX6ayWOq-5YdMwAuwsTqekCHfLCvGYBLcODpidWorLMj9ZG_l8_Ug=e14-rj-sc0xffffff-h124-w220",
	"https://lh3.googleusercontent.com/b_7mNyxpwSKipKRA59OWpCaqn8U02b2qHaJ2PfTZL5ZiO9p6SL_nKrVVxgr6AyIUIoPeWQeO6WfP=e14-rj-sc0xffffff-h124-w220",
	"https://lh3.googleusercontent.com/RDDWa0ZnDWhYBmpIZOr_9OuyMxuEJzzzz0oNREKpDag6iQlfNsYNJWm3anVQibxLRU6EvSZBAS_P=e14-rj-sc0xffffff-h124-w220",
	"https://lh3.googleusercontent.com/E4bS5mFS0voFhgjve4fEYIPfEVAiSYzcqpX-nSZioMgWwhz_fie_XohEoV66S_aNMH8rFfyhwxA=e14-rj-sc0xffffff-h124-w220",
	"https://lh3.googleusercontent.com/zAZq76io8XlkSmUvpgzeF2cUo-esKXFg3mceAsW4MakqA45QyrheJweaIDFoSJ9qu3HjhGrcol6Y=e14-rj-sc0xffffff-h124-w220",
]

const CustomerStories = () => {
	return (
		<>
			<Header />
			<SubHeader />
			<div className={styles.cutomer_stories_page}>
				<div className={styles.head}>
					<p className={styles.title}>Mirats Insights Customers</p>
					<p className={styles.desc}>
						Discover why many of the world’s leading companies are
						choosing Mirats Insights to help them innovate faster,
						make smarter decisions, and collaborate from anywhere.
					</p>
					<div className={styles.btns}>
						<button className={styles.get_started_btn}>
							Get started for free
						</button>
						<button className={styles.contact_sales_btn}>
							Contact sales
						</button>
					</div>
				</div>
				<div className={styles.customer_stories_articles}>
					{customerStoriesArticles.map((story, index) => (
						<BlogCard
							title={story.title}
							image={story.image}
							categories={story.categories}
							key={index}
						/>
					))}
				</div>
				<div className={styles.leading_customers}>
					<p className={styles.title}>
						Leading companies around the world are choosing Mirats
						Insights
					</p>
					<p className={styles.subtitle}>
						Explore customer case studies, videos, and more.
					</p>
					<div className={styles.leading_customer_cards}>
						{customers.map((customer, index) => (
							<CustomerCard customerImg={customer} key={index} />
						))}
					</div>
				</div>
			</div>
			{/* <Footer /> */}
		</>
	)
}

export default CustomerStories
