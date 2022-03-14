import Header from "../../components/header/Header"
import SubHeader from "../../components/header/SubHeader"
import NextStep from "../../components/NextStep/NextStep"
import Footer from "../../components/Footer/Footer"
import WhyMiratsComponent from "../../components/why-mirats-component/WhyMiratsComponent"

const openCloud_page_data = [
    {
		title: "Why open cloud?",
		desc: "Learn how Google's open cloud meets the needs of your organization by providing choice, flexibility, and agility to move faster and drive transformation.",
        btn: 'Contact us',
	},
	{
		mainData: [
			{
				title: "Empowering customers with an open cloud approach",
				desc: "Google’s open cloud brings Google Cloud services to different physical locations such as on-premises, multiple public clouds, and the edge, while leaving the operation, governance, and evolution of the services to Google Cloud. Our open cloud approach enables you to develop software faster, innovate more easily, and scale more efficiently—while also reducing technology risk.",
				media: "https://lh3.googleusercontent.com/GiGk3my_LlduvZuMh9DDvLLUzuI5ZOVm44fJVqlwaatA7jXgX6BgBU4Wunad6wZ5kx17FPiRzHGa=e14-h235-w600",
			},
			{
				title: "Run your apps wherever you need them",
				desc: "Avoid vendor lock-in with Google Cloud’s commitment to open source, multicloud, and hybrid cloud—allowing you to use your data and run your apps on any cloud or in any environment. Our open cloud solutions provide consistency between public and private clouds, enabling businesses to modernize and developers to build faster in any environment.",
				media: "https://lh3.googleusercontent.com/zuJVxusvPg3Cq9ImC0NptSQuVdhpK2mPzJ0EN7YaO2XXtnLhrEvK9T0-t3qr1Kl7kKEnkCMl5dY=e14-h235-w600",
			},
			{
				title: "Run your apps wherever you need them",
				desc: "Avoid vendor lock-in with Google Cloud’s commitment to open source, multicloud, and hybrid cloud—allowing you to use your data and run your apps on any cloud or in any environment. Our open cloud solutions provide consistency between public and private clouds, enabling businesses to modernize and developers to build faster in any environment.",
				media: "https://lh3.googleusercontent.com/GiGk3my_LlduvZuMh9DDvLLUzuI5ZOVm44fJVqlwaatA7jXgX6BgBU4Wunad6wZ5kx17FPiRzHGa=e14-h235-w600",
			},
            {
				title: "Run your apps wherever you need them",
				desc: "Open cloud embraces its partner ecosystem rather than competing against it. With that in mind, we offer managed open source services operated by our partners that are tightly integrated into Google Cloud, providing a seamless user experience across management, billing, and support. This makes it easier for our enterprise customers to build on open source technologies.",
				media: "https://lh3.googleusercontent.com/GINcnFRWnO9wN-sVeNmJoffpweMITlkKA4C4Gm9oeYUHrVbCRQVtMKUfv5w0tRmHWPwjflpAUOk=e14-h235-w600",
			},
		],
	},
]

const OpenCloud = () => {
    return (
        <>
        <Header/>
        <SubHeader/>
            <div className="open-cloud">
            <WhyMiratsComponent data={openCloud_page_data} />
            <NextStep/>
            <Footer/>
            </div>
        </>
    )
}

export default OpenCloud