import Header from "../../components/header/Header";
import SubHeader from "../../components/header/SubHeader";
import WhyMiratsComponent from "../../components/why-mirats-component/WhyMiratsComponent";
import Testimonial from "../../components/testimonials/Testimonial";
import "./DataCloud.css"
import NextStep from "../../components/NextStep/NextStep";
import Footer from "../../components/Footer/Footer";
import DiscoverCards from "../../components/discover-cards/DiscoverCards";

const dataCloud_page_data = [
    {
		title: "Data Cloud",
		desc: "Tens of thousands of customers build their data clouds using Google Cloud, a unified, open approach to data-driven transformation that is unmatched for speed, scale, and security with AI built in.",
        btn: 'Contact us',
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

const testimonialData = [
    {
		testImg: 'https://lh3.googleusercontent.com/w68qA26jrU4YrJbN655xtpvF1Sq8XHBiI8TzKpkVV-UkADz-IXt9FxZyYFSvG7fJSLRZ0XlF2B0=e14-h36',
		testPara: '"We have more than a couple of Googlers by our side and they are really just like Air Asia employees. They find the right technology and approach for us to use to solve our problems."',
		footerHeadline: 'Kong Wei Lye, Chief Data Officer, Air Asia',
		testBtn: 'Read the case study',
	},
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

const DataCloud = () => {
    return (
        <>
        <Header/>
        <SubHeader/>
            <div className="data-cloud">
            <WhyMiratsComponent data={dataCloud_page_data} />

            {/* testimonial */}
            <div className="testimonial-module">
				{
					testimonialData.map(testData => (
						<Testimonial testImg={testData.testImg} testPara={testData.testPara} footerHeadline={testData.footerHeadline} testBtn={testData.testBtn} />
					))
				}
		    </div>

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

export default DataCloud;