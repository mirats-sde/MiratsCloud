import Header from "../../components/header/Header"
import SubHeader from "../../components/header/SubHeader"
import WhyMiratsComponent from "../../components/why-mirats-component/WhyMiratsComponent"
import FindPartner from "../../components/find-partner/FindPartner"
import NextStep from "../../components/NextStep/NextStep"
import Footer from "../../components/Footer/Footer"
import DiscoverCards from "../../components/discover-cards/DiscoverCards"

const sustainability_page_data = [
    {
		title: "Cloud sustainability",
		desc: "Reducing environmental impact with the cleanest cloud in the industry.",
        btn: 'Contact us',
	},
	{
		mainData: [
			{
				title: "Empowering customers with an open cloud approach",
				desc: "Google’s open cloud brings Google Cloud services to different physical locations such as on-premises, multiple public clouds, and the edge, while leaving the operation, governance, and evolution of the services to Google Cloud. Our open cloud approach enables you to develop software faster, innovate more easily, and scale more efficiently—while also reducing technology risk.",
				media: "https://lh3.googleusercontent.com/7S9D68-vlWTC8zlabhIE3WffUm0JxFHIG6nm1Fj3VeFbbg46KpDt5q1wH7V97Ltd4DiB57vl854NeA=e14-h235-w600",
                link: "Explore our sustainability commitments"
			},
			{
				title: "Run your apps wherever you need them",
				desc: "Avoid vendor lock-in with Google Cloud’s commitment to open source, multicloud, and hybrid cloud—allowing you to use your data and run your apps on any cloud or in any environment. Our open cloud solutions provide consistency between public and private clouds, enabling businesses to modernize and developers to build faster in any environment.",
				media: "https://lh3.googleusercontent.com/DVFsoPmabhfDE2MK_-pmsn4u-ClNo97gaV4RqvahEr1WmJ4eo5ZJbelUqyGaXlphvowJgcupH0E1=e14-h235-w600",
                link: "Estimate your cloud emissions"
			},
			{
				title: "Run your apps wherever you need them",
				desc: "Avoid vendor lock-in with Google Cloud’s commitment to open source, multicloud, and hybrid cloud—allowing you to use your data and run your apps on any cloud or in any environment. Our open cloud solutions provide consistency between public and private clouds, enabling businesses to modernize and developers to build faster in any environment.",
				media: "https://lh3.googleusercontent.com/taV0LKBz3oIdkO2jzDV_eRuYQAzpfXY7Lv-4Y-FseZH_2OoVfv5TT4zsOzws8LOQcNxLSDpjwS0=e14-h235-w600",
                link: "Explore our sustainability commitments"
			},
            {
				title: "Run your apps wherever you need them",
				desc: "Open cloud embraces its partner ecosystem rather than competing against it. With that in mind, we offer managed open source services operated by our partners that are tightly integrated into Google Cloud, providing a seamless user experience across management, billing, and support. This makes it easier for our enterprise customers to build on open source technologies.",
				media: "https://lh3.googleusercontent.com/LuCVwTYwL_LfZlb51Puj_OP4bl4IgLUON04MbXrWhNA10O5VjwlslKraDcNdj-SnCe4kJ98wTcRM=e14-h235-w600",
                link: "Estimate your cloud emissions"
			},
		],
	},
]

const sustainabilityBannerData = [
    {
        bannerHeading: 'Technology that helps you do more for the planet',
        bannerBody: 'We meet the challenges posed by climate change and the need for resource efficiency by working to empower everyone—businesses, governments, nonprofit organizations, communities, and individuals—to use Google technology to create a more sustainable world.'
    }
]

const discoverCardData =[
    {
        discoverBody: 'Run applications with zero net emissions',
        discoverLink: 'Learn more',
    },
    {
        discoverBody: 'Run applications with zero net emissions',
        discoverLink: 'Learn more',
    },
    {
        discoverBody: 'Run applications with zero net emissions',
        discoverLink: 'Learn more',
    }
]

const Sustainability = () => {
    return (
        <>
        <Header/>
        <SubHeader/>
            <div className="sustainability">
            <WhyMiratsComponent data={sustainability_page_data} />
            {/* finding partner */}
            <section className="banner">
                {
                    sustainabilityBannerData.map(data => (
                        <FindPartner bannerHeading={data.bannerHeading} bannerBody={data.bannerBody} />
                    ))
                }
            </section>

            {/* discover cards */}
            <section className="discover-section">
                <h1>More Google Cloud sustainability resources</h1>
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

export default Sustainability