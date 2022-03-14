import Header from "../../components/header/Header"
import SubHeader from "../../components/header/SubHeader"
import WhyMiratsComponent from "../../components/why-mirats-component/WhyMiratsComponent"
import Testimonial from "../../components/testimonials/Testimonial"
import FindPartner from "../../components/find-partner/FindPartner"
import NextStep from "../../components/NextStep/NextStep"
import Footer from "../../components/Footer/Footer"
import DiscoverCards from "../../components/discover-cards/DiscoverCards"
import "./MultiCloud.css"
import ContentMedia from "../../components/content-media/ContentMedia"

const multicloud_page_data = [
    {
		title: "Drive transformation with Google's multicloud solutions",
		desc: "We offer you the flexibility to migrate, build, and optimize apps across hybrid and multicloud environments while minimizing vendor lock-in, leveraging best-in-breed solutions, and meeting regulatory requirements.",
        btn: 'Get started for free',
	},
	{
		mainData: [
			{
				title: "Empowering customers with an open cloud approach",
				desc: "Google’s open cloud brings Google Cloud services to different physical locations such as on-premises, multiple public clouds, and the edge, while leaving the operation, governance, and evolution of the services to Google Cloud. Our open cloud approach enables you to develop software faster, innovate more easily, and scale more efficiently—while also reducing technology risk.",
				media: "https://lh3.googleusercontent.com/7S9D68-vlWTC8zlabhIE3WffUm0JxFHIG6nm1Fj3VeFbbg46KpDt5q1wH7V97Ltd4DiB57vl854NeA=e14-h235-w600",
			},
			{
				title: "Run your apps wherever you need them",
				desc: "Avoid vendor lock-in with Google Cloud’s commitment to open source, multicloud, and hybrid cloud—allowing you to use your data and run your apps on any cloud or in any environment. Our open cloud solutions provide consistency between public and private clouds, enabling businesses to modernize and developers to build faster in any environment.",
				media: "https://lh3.googleusercontent.com/DVFsoPmabhfDE2MK_-pmsn4u-ClNo97gaV4RqvahEr1WmJ4eo5ZJbelUqyGaXlphvowJgcupH0E1=e14-h235-w600",
			},
			{
				title: "Run your apps wherever you need them",
				desc: "Avoid vendor lock-in with Google Cloud’s commitment to open source, multicloud, and hybrid cloud—allowing you to use your data and run your apps on any cloud or in any environment. Our open cloud solutions provide consistency between public and private clouds, enabling businesses to modernize and developers to build faster in any environment.",
				media: "https://lh3.googleusercontent.com/taV0LKBz3oIdkO2jzDV_eRuYQAzpfXY7Lv-4Y-FseZH_2OoVfv5TT4zsOzws8LOQcNxLSDpjwS0=e14-h235-w600",
			},
            {
				title: "Run your apps wherever you need them",
				desc: "Open cloud embraces its partner ecosystem rather than competing against it. With that in mind, we offer managed open source services operated by our partners that are tightly integrated into Google Cloud, providing a seamless user experience across management, billing, and support. This makes it easier for our enterprise customers to build on open source technologies.",
				media: "https://lh3.googleusercontent.com/LuCVwTYwL_LfZlb51Puj_OP4bl4IgLUON04MbXrWhNA10O5VjwlslKraDcNdj-SnCe4kJ98wTcRM=e14-h235-w600",
			},
		],
	},
]

const bannerData = [
    {
        bannerHeading: 'Leverage the best of Google Cloud security',
        bannerBody: 'See how Google Cloud can help you solve your toughest security challenges with our advanced security products and solutions.'
    }
]

const discoverCardData = [
    {
        discoverBody: 'Modernize existing applications and build cloud-native apps anywhere',
        discoverLink: 'Learn more about Anthos',
    },
    {
        discoverBody: 'Modernize existing applications and build cloud-native apps anywhere',
        discoverLink: 'Learn more about Anthos',
    },
    {
        discoverBody: 'Modernize existing applications and build cloud-native apps anywhere',
        discoverLink: 'Learn more about Anthos',
    }
]


const testImg = "https://lh3.googleusercontent.com/wwFY-RBsie3tqFQ0zrgdZxZUtqSCYfz7DAPBRrjtUlKVhZszQx_cci7rpDhxWISytLeFboF3nU-F=e14-h36"
const testPara = "PayPal processes billions of transactions across the globe. With Google Cloud, we have access to the world’s largest network, which helps us reach our infrastructure goals and best serve millions of users."
const footerHeadline = "Sri Shivananda, Senior Vice President and Chief Technology Officer, PayPal"
const testBtn = "Read More"

const MultiCloud = () => {
    return (
        <>
        <Header/>
        <SubHeader/>
            <div className="multi-cloud">
            <WhyMiratsComponent data={multicloud_page_data} />
             {/* testimonial */}
            <div className="testimonial-module">
				{
					<Testimonial testImg={testImg} testPara={testPara}footerHeadline={footerHeadline} testBtn={testBtn} />
				}
		    </div>

            {/* finding partner */}
            <section className="banner">
                {
                    bannerData.map(data => (
                        <FindPartner bannerHeading={data.bannerHeading} bannerBody={data.bannerBody} />
                    ))
                }
            </section>

            {/* discover cards */}
            <section className="discover-section">
                <h1>Discover solutions that make multicloud a reality</h1>
                <div className="flex">
                {
                    discoverCardData.map(cardData => (
                        <DiscoverCards discoverBody={cardData.discoverBody} discoverLink={cardData.discoverLink} />
                    ))
                }
                </div>
            </section>

            <NextStep/>
            <Footer/>
            </div>
        </>
    )
}

export default MultiCloud