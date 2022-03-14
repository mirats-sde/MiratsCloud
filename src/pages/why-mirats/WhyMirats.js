import Header from "../../components/header/Header"
import SubHeader from "../../components/header/SubHeader"
import WhyMiratsComponent from "../../components/why-mirats-component/WhyMiratsComponent"
import Testimonial from "../../components/testimonials/Testimonial"
import ContentMedia from "../../components/content-media/ContentMedia"
import NextStep from "../../components/NextStep/NextStep"
import Footer from "../../components/Footer/Footer"
import "./WhyMirats.css"

const why_mirats_page_data = [
	{
		title: "Why Mirats",
		desc: "Leading companies across industries are choosing Google Cloud to solve their toughest challenges.",
		btn: "Contact us"
	},
	{
		mainData: [
			{
				title: "Run your apps wherever you need them",
				desc: "Avoid vendor lock-in with Google Cloud’s commitment to open source, multicloud, and hybrid cloud—allowing you to use your data and run your apps on any cloud or in any environment. Our open cloud solutions provide consistency between public and private clouds, enabling businesses to modernize and developers to build faster in any environment.",
				link: "Learn More",
				media: "https://lh3.googleusercontent.com/eonHWb215LQQmfE16rbMgJBxhZYockB8ZkB-vwZNkw4pEbSHbcwrQZeaL5XOIuz3gD4Iq-TqnEJC=e14-h235-w600",
			},
			{
				title: "Run your apps wherever you need them",
				desc: "Avoid vendor lock-in with Google Cloud’s commitment to open source, multicloud, and hybrid cloud—allowing you to use your data and run your apps on any cloud or in any environment. Our open cloud solutions provide consistency between public and private clouds, enabling businesses to modernize and developers to build faster in any environment.",
				link: "Learn More",
				media: "https://lh3.googleusercontent.com/eonHWb215LQQmfE16rbMgJBxhZYockB8ZkB-vwZNkw4pEbSHbcwrQZeaL5XOIuz3gD4Iq-TqnEJC=e14-h235-w600",
			},
			{
				title: "Run your apps wherever you need them",
				desc: "Avoid vendor lock-in with Google Cloud’s commitment to open source, multicloud, and hybrid cloud—allowing you to use your data and run your apps on any cloud or in any environment. Our open cloud solutions provide consistency between public and private clouds, enabling businesses to modernize and developers to build faster in any environment.",
				link: "Learn More",
				media: "https://lh3.googleusercontent.com/eonHWb215LQQmfE16rbMgJBxhZYockB8ZkB-vwZNkw4pEbSHbcwrQZeaL5XOIuz3gD4Iq-TqnEJC=e14-h235-w600",
			},
			{
				title: "Run your apps wherever you need them",
				desc: "Avoid vendor lock-in with Google Cloud’s commitment to open source, multicloud, and hybrid cloud—allowing you to use your data and run your apps on any cloud or in any environment. Our open cloud solutions provide consistency between public and private clouds, enabling businesses to modernize and developers to build faster in any environment.",
				link: "Learn More",
				media: "https://lh3.googleusercontent.com/eonHWb215LQQmfE16rbMgJBxhZYockB8ZkB-vwZNkw4pEbSHbcwrQZeaL5XOIuz3gD4Iq-TqnEJC=e14-h235-w600",
			},
			{
				title: "Run your apps wherever you need them",
				desc: "Avoid vendor lock-in with Google Cloud’s commitment to open source, multicloud, and hybrid cloud—allowing you to use your data and run your apps on any cloud or in any environment. Our open cloud solutions provide consistency between public and private clouds, enabling businesses to modernize and developers to build faster in any environment.",
				link: "Learn More",
				media: "https://lh3.googleusercontent.com/eonHWb215LQQmfE16rbMgJBxhZYockB8ZkB-vwZNkw4pEbSHbcwrQZeaL5XOIuz3gD4Iq-TqnEJC=e14-h235-w600",
			},
			{
				title: "Run your apps wherever you need them",
				desc: "Avoid vendor lock-in with Google Cloud’s commitment to open source, multicloud, and hybrid cloud—allowing you to use your data and run your apps on any cloud or in any environment. Our open cloud solutions provide consistency between public and private clouds, enabling businesses to modernize and developers to build faster in any environment.",
				link: "Learn More",
				media: "https://lh3.googleusercontent.com/eonHWb215LQQmfE16rbMgJBxhZYockB8ZkB-vwZNkw4pEbSHbcwrQZeaL5XOIuz3gD4Iq-TqnEJC=e14-h235-w600",
			},
		],
	},
]

const testimonialData = [
	{
		testImg: 'https://lh3.googleusercontent.com/2cvx9dGAVsB_zEgSm8SggJz45W7dgO7MwMAO6EO7UPH7OXYC5gufxe9NJ5fpSKl127poLIHX998=e14-h36',
		testPara: '"We have more than a couple of Googlers by our side and they are really just like Air Asia employees. They find the right technology and approach for us to use to solve our problems."',
		footerHeadline: 'Kong Wei Lye, Chief Data Officer, Air Asia',
		testBtn: 'Read the story',
	},
]

const content_data = [
    {
        media: "https://lh3.googleusercontent.com/HVtqFbu8BaSzD3EnykPTFWviJIbANOSCZCmapDhNz6mRMzxP0EUmBkrPc9Z9g29uUUBVoTIAnQV35Q=e14-h235-w600",
        contentTitle: "Transform how you connect and collaborate",
        contentDesc: "Google Workspace provides your workforce with chat, email, video calling, and document collaboration apps in a single space. With an integrated workspace, teams collaborate more effectively, frontline workers stay connected, and businesses can build new customer experiences."
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

const WhyMirats = () => {
	// const location = useLocation()
	// console.log(location.pathname)
	return (
		<div>
			<Header />
			<SubHeader />
			<WhyMiratsComponent data={why_mirats_page_data} />
			{/* testimonials */}
			<div className="testimonial-module">
				{
					testimonialData.map(testData => (
						<Testimonial testImg={testData.testImg} testPara={testData.testPara} footerHeadline={testData.footerHeadline} testBtn={testData.testBtn} />
					))
				}
			</div>
			<ContentMedia data={content_data} />
			<NextStep/>
			<Footer/>
		</div>
	)
}

export default WhyMirats
