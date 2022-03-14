import Header from "../../components/header/Header"
import SubHeader from "../../components/header/SubHeader"
import WhyMiratsComponent from "../../components/why-mirats-component/WhyMiratsComponent"
import Testimonial from "../../components/testimonials/Testimonial"
import NextStep from "../../components/NextStep/NextStep"
import Footer from "../../components/Footer/Footer"
import "./Infrastructure.css"
import ContentMedia from "../../components/content-media/ContentMedia"

const infrastructure_page_data = [
    {
		title: "Google Cloud infrastructure",
		desc: "Our planet-scale infrastructure delivers the highest level of performance and availability in a secure, sustainable way.",
        btn: 'Get started for free',
	},
	{
		mainData: [
			{
				title: "Trusted global presence",
				desc: "Google Cloud’s locations underpin all of the important work we do for our customers. From redundant cloud regions to high-bandwidth connectivity via subsea cables, every aspect of our infrastructure is designed to deliver your services to your users, no matter where they are around the world.",
				media: "https://lh3.googleusercontent.com/sx0OcXSsv_NKXdyGZj3dKRBxyW0xFRXZObxNIfDHXvEjUNmL87fPc8Wna5ulXClGwv93U-0H7Tc=e14-h235-w600",
			},
			{
				title: "Run your apps wherever you need them",
				desc: "Avoid vendor lock-in with Google Cloud’s commitment to open source, multicloud, and hybrid cloud—allowing you to use your data and run your apps on any cloud or in any environment. Our open cloud solutions provide consistency between public and private clouds, enabling businesses to modernize and developers to build faster in any environment.",
				media: "https://lh3.googleusercontent.com/Ez-iDBLhZQi_x6HbM6tSGZjkFe9K4Ycc9QyFOwejCZP6SaHMFDpvVDaqAEm03-rGoYkLsqX1sTop=e14-h235-w600",
			},
			{
				title: "Run your apps wherever you need them",
				desc: "Avoid vendor lock-in with Google Cloud’s commitment to open source, multicloud, and hybrid cloud—allowing you to use your data and run your apps on any cloud or in any environment. Our open cloud solutions provide consistency between public and private clouds, enabling businesses to modernize and developers to build faster in any environment.",
				media: "https://lh3.googleusercontent.com/eonHWb215LQQmfE16rbMgJBxhZYockB8ZkB-vwZNkw4pEbSHbcwrQZeaL5XOIuz3gD4Iq-TqnEJC=e14-h235-w600",
			},
		],
	},
]

const testImg = "https://lh3.googleusercontent.com/Nidb_SDh6lIDK9EsIE_fmyqVj4LtNGA7hDySuroiqQ3Y_w1r6-LKQFMfWHYkRYVwM3jH6-j3djsm=e14-h36"
const testPara = "PayPal processes billions of transactions across the globe. With Google Cloud, we have access to the world’s largest network, which helps us reach our infrastructure goals and best serve millions of users."
const footerHeadline = "Sri Shivananda, Senior Vice President and Chief Technology Officer, PayPal"
const testBtn = "Read More"

// const testimonialData = [
//     {
// 		testImg: 'https://lh3.googleusercontent.com/Nidb_SDh6lIDK9EsIE_fmyqVj4LtNGA7hDySuroiqQ3Y_w1r6-LKQFMfWHYkRYVwM3jH6-j3djsm=e14-h36',
// 		testPara: '"We have more than a couple of Googlers by our side and they are really just like Air Asia employees. They find the right technology and approach for us to use to solve our problems."',
// 		footerHeadline: 'Kong Wei Lye, Chief Data Officer, Air Asia',
// 		testBtn: 'Read the case study',
// 	},
// ]

const infrastructure_content_data = [
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

const Infrastructure = () => {
    return (
        <>
        <Header/>
        <SubHeader/>
        <div className="infrastructure">
        <WhyMiratsComponent data={infrastructure_page_data} />

            {/* testimonial */}
            <div className="testimonial-module">
				{
					<Testimonial testImg={testImg} testPara={testPara}footerHeadline={footerHeadline} testBtn={testBtn} />
				}
		    </div>
            <ContentMedia data={infrastructure_content_data} />

            <NextStep/>
            <Footer/>
        </div>
        </>
    )
}

export default Infrastructure