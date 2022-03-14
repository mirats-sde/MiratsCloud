import styles from "./BlogCard.module.css"

const BlogCard = ({ title, author, categories, image }) => {
	return (
		<div className={styles.blog}>
			<div>
				<p className={styles.title}>{title}</p>
				{author && <p className={styles.author}>- By {author}</p>}

				<div className={styles.categories}>
					{categories.map((category, index) => {
						return (
							<span key={index} className={styles.category}>
								{category}
							</span>
						)
					})}
				</div>
			</div>
			<img src={image} alt='' className={styles.img} />
		</div>
	)
}

export default BlogCard
