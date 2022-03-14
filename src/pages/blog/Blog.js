import Header from "../../components/header/Header"
import SubHeader from "../../components/header/SubHeader"
import Footer from "../../components/Footer/Footer"
import styles from "./Blog.module.css"
import { MdOutlineNavigateNext } from "react-icons/md"
import BlogCard from "../../components/blog-card/BlogCard"

const featuredBlog = [
	{
		image: "https://miro.medium.com/max/1400/1*RAKMbvLZDgs88Xt3PizGxg.jpeg",
		title: "5 Reasons Why Market Research Is Crucial For Your Business",
		desc: "Market research is a critical component when you’re launching a product, try to improve your existing service, or when you’re just looking to be a step ahead of your competitors.",
		categories: ["Market Research", "something"],
		author: "Mayank Patel",
	},
]

const blogs = [
	{
		image: "https://image.cnbcfm.com/api/v1/image/106467352-1585602933667virus-medical-flu-mask-health-protection-woman-young-outdoor-sick-pollution-protective-danger-face_t20_o07dbe.jpg?v=1585602987&w=1400&h=950",
		title: "1 in 3 urban Indians are anxious 74% urban Indians will learn a new skill; 72% will become closer to family & friends",
		categories: ["covid19", "research"],
		author: "Mayank Patel",
	},
	{
		image: "https://image.cnbcfm.com/api/v1/image/106467352-1585602933667virus-medical-flu-mask-health-protection-woman-young-outdoor-sick-pollution-protective-danger-face_t20_o07dbe.jpg?v=1585602987&w=1400&h=950",
		title: "1 in 3 urban Indians are anxious 74% urban Indians will learn a new skill; 72% will become closer to family & friends",
		categories: ["covid19", "research", "something"],
		author: "Mayank Patel",
	},
	{
		image: "https://image.cnbcfm.com/api/v1/image/106467352-1585602933667virus-medical-flu-mask-health-protection-woman-young-outdoor-sick-pollution-protective-danger-face_t20_o07dbe.jpg?v=1585602987&w=1400&h=950",
		title: "1 in 3 urban Indians are anxious 74% urban Indians will learn a new skill; 72% will become closer to family & friends",
		categories: ["covid19", "research"],
		author: "Mayank Patel",
	},
	{
		image: "https://image.cnbcfm.com/api/v1/image/106467352-1585602933667virus-medical-flu-mask-health-protection-woman-young-outdoor-sick-pollution-protective-danger-face_t20_o07dbe.jpg?v=1585602987&w=1400&h=950",
		title: "1 in 3 urban Indians are anxious 74% urban Indians will learn a new skill; 72% will become closer to family & friends",
		categories: ["covid19", "research"],
		author: "Mayank Patel",
	},
	{
		image: "https://image.cnbcfm.com/api/v1/image/106467352-1585602933667virus-medical-flu-mask-health-protection-woman-young-outdoor-sick-pollution-protective-danger-face_t20_o07dbe.jpg?v=1585602987&w=1400&h=950",
		title: "1 in 3 urban Indians are anxious 74% urban Indians will learn a new skill; 72% will become closer to family & friends",
		categories: ["covid19", "research"],
		author: "Mayank Patel",
	},
]

const Blog = () => {
	return (
		<>
			<Header />
			<SubHeader />
			<div className={styles.blogs_page}>
				<div className={styles.featured_blog}>
					<div className={styles.content}>
						<h2 className={styles.title}>
							{featuredBlog[0].title}
						</h2>
						<p className={styles.desc}>{featuredBlog[0].desc}</p>
						<div className={styles.categories}>
							{featuredBlog[0].categories.map(
								(category, index) => {
									return (
										<span
											key={index}
											className={styles.category}
										>
											{category}
										</span>
									)
								}
							)}
						</div>
						<div className={styles.read_article_btn}>
							<button className={styles.btn}>Read Article</button>
							<i>
								<MdOutlineNavigateNext
									className={styles.btn_icon}
									color='white'
									size='30'
								/>
							</i>
						</div>
					</div>
					<img
						src={featuredBlog[0].image}
						alt=''
						width={800}
						className={styles.img}
						height={500}
					/>
				</div>
				<hr />
				<div className={styles.blogs}>
					{blogs.map((blog, index) => {
						return (
							<BlogCard
								title={blog.title}
								author={blog.author}
								image={blog.image}
								categories={blog.categories}
								key={index}
							/>
						)
					})}
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Blog
