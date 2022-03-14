import { style } from "@mui/system"
import { useEffect, useRef, useState } from "react"
import Header from "../../components/header/Header"
import SubHeader from "../../components/header/SubHeader"
import "./PriceList.module.css"
import styles from "./PriceList.module.css"
import SideNavigation from "../../components/SideNavigation/SideNavigation"
import Footer from "../../components/Footer/Footer"
import NextStep from "../../components/NextStep/NextStep"
import LinkCards from "../../components/link-cards/LinkCards"

const cardLinkData = [
    {
      linkHeadline:
        "Vertex Training",
      linkBody:
        "Train your machine learning models in the cloud with various frameworks",
    },
    {
        linkHeadline:
          "Learn what top industry analyst firms are saying about Google Cloud.",
        linkBody:
          "Read what industry analysts are saying about Google Cloud. The reports listed here are written by third-party industry analysts that cover Google Cloud’s strategy"
    },
    {
        linkHeadline:
          "Learn what top industry analyst firms are saying about Google Cloud.",
        linkBody:
          "Read what industry analysts are saying about Google Cloud. The reports listed here are written by third-party industry analysts that cover Google Cloud’s strategy"
    },
    {
        linkHeadline:
          "Learn what top industry analyst firms are saying about Google Cloud.",
        linkBody:
          "Read what industry analysts are saying about Google Cloud. The reports listed here are written by third-party industry analysts that cover Google Cloud’s strategy"
    },
    {
        linkHeadline:
          "Learn what top industry analyst firms are saying about Google Cloud.",
        linkBody:
          "Read what industry analysts are saying about Google Cloud. The reports listed here are written by third-party industry analysts that cover Google Cloud’s strategy"
    },
    {
        linkHeadline:
          "Learn what top industry analyst firms are saying about Google Cloud.",
        linkBody:
          "Read what industry analysts are saying about Google Cloud. The reports listed here are written by third-party industry analysts that cover Google Cloud’s strategy"
    },
];

const sidebarLinks = [
	"Overview",
	"AI and Machine learning",
	"API management",
	"Compute",
	"Containers",
]

const PriceList = () => {
	console.log(document.querySelector("#title"))
	const [changeSidebar, setChangeSidebar] = useState(false)
	const overview = useRef()

	window.addEventListener("scroll", () => {
		console.log(overview)
		console.log(window.scrollY)
		// console.log(overview.scrollTop)
	})

	return (
		<>
			<Header />
			<SubHeader />
			<div className={styles.price_list_page}>
				<div className={styles.sideNavigation}>
					<p className={styles.side_navigation_title}>Price List</p>
					<div className={styles.side_navigation_links}>
						{sidebarLinks.map((sidebarLink, index) => {
							return (
								<SideNavigation
									sidebarLink={sidebarLink}
									key={index}
								/>
							)
						})}
					</div>
				</div>
				<div className={styles.main}>
					<div className={styles.head}>
						<p className={styles.title} id='title' ref={overview}>
							Price List
						</p>
						<p className={styles.desc}>
							Click a product name below to view its pricing
							details.
						</p>
						<button className={styles.try_mirats_btn}>
							Try Mirats Insights for free
						</button>
					</div>

			<div className="link-cards">
            <section>
              {cardLinkData.map((l) => (
                <LinkCards
                  linkHeadline={l.linkHeadline}
                  linkBody={l.linkBody}
                />
              ))}
            </section>
          </div>
				</div>
			</div>
			<NextStep />
			<Footer />
		</>
	)
}

export default PriceList
