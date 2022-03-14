import Header from "../../components/header/Header"
import SubHeader from "../../components/header/SubHeader"
import WhyMiratsComponent from "../../components/why-mirats-component/WhyMiratsComponent"
import styles from "./TrustSecurity.module.css"
import FindPartner from "../../components/find-partner/FindPartner"
import Testimonial from "../../components/testimonials/Testimonial"
import NextStep from "../../components/NextStep/NextStep"
import Footer from "../../components/Footer/Footer"
import DiscoverCards from "../../components/discover-cards/DiscoverCards"
import ContentMedia from "../../components/content-media/ContentMedia"

const security_page_data = [
    {
		title: "Trust and security",
		desc: "Google Cloud's security model, world-scale infrastructure, and unique capability to innovate will help keep your organization secure and compliant.",
        btn: 'Get started for free',
	},
	{
		mainData: [
			{
				title: "Run your apps wherever you need them",
				desc: "Avoid vendor lock-in with Google Cloud’s commitment to open source, multicloud, and hybrid cloud—allowing you to use your data and run your apps on any cloud or in any environment. Our open cloud solutions provide consistency between public and private clouds, enabling businesses to modernize and developers to build faster in any environment.",
				media: "https://lh3.googleusercontent.com/eonHWb215LQQmfE16rbMgJBxhZYockB8ZkB-vwZNkw4pEbSHbcwrQZeaL5XOIuz3gD4Iq-TqnEJC=e14-h235-w600",
			},
			{
				title: "Run your apps wherever you need them",
				desc: "Avoid vendor lock-in with Google Cloud’s commitment to open source, multicloud, and hybrid cloud—allowing you to use your data and run your apps on any cloud or in any environment. Our open cloud solutions provide consistency between public and private clouds, enabling businesses to modernize and developers to build faster in any environment.",
				media: "https://lh3.googleusercontent.com/eonHWb215LQQmfE16rbMgJBxhZYockB8ZkB-vwZNkw4pEbSHbcwrQZeaL5XOIuz3gD4Iq-TqnEJC=e14-h235-w600",
			},
			{
				title: "Run your apps wherever you need them",
				desc: "Avoid vendor lock-in with Google Cloud’s commitment to open source, multicloud, and hybrid cloud—allowing you to use your data and run your apps on any cloud or in any environment. Our open cloud solutions provide consistency between public and private clouds, enabling businesses to modernize and developers to build faster in any environment.",
				media: "https://lh3.googleusercontent.com/eonHWb215LQQmfE16rbMgJBxhZYockB8ZkB-vwZNkw4pEbSHbcwrQZeaL5XOIuz3gD4Iq-TqnEJC=e14-h235-w600",
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
        discoverBody: 'Resources, certifications, and documentation to help support your compliance needs',
        discoverLink: 'Learn more',
    },
    {
        discoverBody: 'Resources, certifications, and documentation to help support your compliance needs',
        discoverLink: 'Learn more',
    },
    {
        discoverBody: 'Resources, certifications, and documentation to help support your compliance needs',
        discoverLink: 'Learn more',
    }
]

const content_data = [
	{
        media: "https://lh3.googleusercontent.com/IVAtWAFw3oz9y8G0cYsShreMc_A5pRD-8mtEgGTPk2ghL5FxcQtf4l5RwBnUkOoyHI4Lr1JJ9sI=e14-h235-w600",
        contentTitle: "Cloud compliance",
        contentDesc: "We undergo independent verification of our security, privacy, and compliance controls to help you meet your regulatory and policy objectives. Find details on our full set of compliance offerings, like ISO/IEC 27001/27017/27018/27701, SOC 1/2/3, PCI DSS, VPAT (WCAG, U.S. Section 508, EN 301 549) and FedRAMP certifications, and alignment with HIPAA, GDPR, and CCPA, among others, in our compliance resource center."
    },
    {
        media: "https://lh3.googleusercontent.com/IVAtWAFw3oz9y8G0cYsShreMc_A5pRD-8mtEgGTPk2ghL5FxcQtf4l5RwBnUkOoyHI4Lr1JJ9sI=e14-h235-w600",
        contentTitle: "Multilayered security",
        contentDesc: "We protect your data through progressive infrastructure layers that deliver defense-in-depth. Google Cloud’s adherence to data privacy and security standards has earned the trust of third-party auditors who attest that our infrastructure and operations keep user data more secure and compliant."
    },
    {
        media: "https://lh3.googleusercontent.com/IVAtWAFw3oz9y8G0cYsShreMc_A5pRD-8mtEgGTPk2ghL5FxcQtf4l5RwBnUkOoyHI4Lr1JJ9sI=e14-h235-w600",
        contentTitle: "Multilayered security",
        contentDesc: "We protect your data through progressive infrastructure layers that deliver defense-in-depth. Google Cloud’s adherence to data privacy and security standards has earned the trust of third-party auditors who attest that our infrastructure and operations keep user data more secure and compliant."
    },
]

const testImg = "https://lh3.googleusercontent.com/Nidb_SDh6lIDK9EsIE_fmyqVj4LtNGA7hDySuroiqQ3Y_w1r6-LKQFMfWHYkRYVwM3jH6-j3djsm=e14-h36"
const testPara = "PayPal processes billions of transactions across the globe. With Google Cloud, we have access to the world’s largest network, which helps us reach our infrastructure goals and best serve millions of users."
const footerHeadline = "Sri Shivananda, Senior Vice President and Chief Technology Officer, PayPal"
const testBtn = "Read More"

function TrustSecurity() {
    return (
        <>
        <Header/>
        <SubHeader/>
            <div className={styles.security_section}>
            <WhyMiratsComponent data={security_page_data} />
            {/* finding partner */}
            <section className="banner">
                {
                    bannerData.map(data => (
                        <FindPartner bannerHeading={data.bannerHeading} bannerBody={data.bannerBody} />
                    ))
                }
            </section>
            {/* testimonial */}
		   <div className="testimonial-module">
				{
					<Testimonial testImg={testImg} testPara={testPara}footerHeadline={footerHeadline} testBtn={testBtn} />
				}
		    </div>

			{/* content media */}
			<ContentMedia data={content_data} />

			{/* discover cards */}
            <section className="discover-section">
                <h1>Learn more about trust and security</h1>
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

export default TrustSecurity