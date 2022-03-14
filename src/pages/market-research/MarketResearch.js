import Header from "../../components/header/Header"
import SubHeader from "../../components/header/SubHeader"
import SideNavigation from "../../components/SideNavigation/SideNavigation"
import PageHeader from "../../components/page-header/PageHeader"
import Carousel from "react-elastic-carousel"
import CarouselCard from "../../components/carousel-card/CarouselCard"
// import JumpToNav from "../../components/jump-to-nav/JumpToNav"
import "./MarketResearch.css"

const sidebarLinkData = [
    "Overview",
    "Industry Solutions",
    "Application modernization",
]

const headerData = [
    {
      headerTitle:"Google Cloud for market research",
      headerDesc:"Drive business transformation across banking, capital markets, insurance, and payments to support data-driven innovation, customer expectations, and security and compliance needs with Google Cloud.",
      headerButton: ["Contact sales"]
    },
]

const carouselData = [
    {
        carouselLogo: 'https://lh3.googleusercontent.com/ci1SGZ9awEtvaqzwFhUi4FTLzh8CUbpmrcPmeba6GNtRky8e07ueQ3x68ZRQy0XSwTNCQVEYhGY=e14-rj-sc0xffffff-h36',
        carouselDesc: 'ICICI Prudential Life Insurance: Using Vision API to efficiently process thousands of documents'
    },
    {
        carouselLogo: 'https://lh3.googleusercontent.com/wwFY-RBsie3tqFQ0zrgdZxZUtqSCYfz7DAPBRrjtUlKVhZszQx_cci7rpDhxWISytLeFboF3nU-F=e14-h36',
        carouselDesc: 'ICICI Prudential Life Insurance: Using Vision API to efficiently process thousands of documents'
    },
    {
        carouselLogo: 'https://lh3.googleusercontent.com/HUdz5DTuWbiVHPg7nh00wQLnukWgc7B8q2DVcihkbwnPNdmtBxo1A0yk_pBMWqXfKUjFa-v9fHY=e14-rj-sc0xffffff-h36',
        carouselDesc: 'ICICI Prudential Life Insurance: Using Vision API to efficiently process thousands of documents'
    },
    {
        carouselLogo: 'https://lh3.googleusercontent.com/vw6_Cr949KHO8pJLrKRa62ygkGwxEsFRxsSWSj2UImL1JJ23P2M9QryfFBl_pZFP66Jhu7ZPrav7Zg=e14-rj-sc0xffffff-h36',
        carouselDesc: 'ICICI Prudential Life Insurance: Using Vision API to efficiently process thousands of documents'
    },
]

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    // { width: 1200, itemsToShow: 4 }
];

const MarketResearch = () => {
    return (
        <>
            <Header/>
            <SubHeader/>
            <div className="research-container">
            <div className="sidebar-section">
            <span className="sidebar-title">Analyst Report</span>
            <div className="sidebar-links">
              {sidebarLinkData.map((sidebarLink,index) => (
                <SideNavigation key={index} sidebarLink={sidebarLink} />
              ))}
            </div>
          </div>

                {/* right section */}
                <div className="right-section">
                    <div className="solutions">
                        {/* page header component */}
                        <div className="page-header">
                         {
                             headerData.map((data, index) => (
                            <PageHeader data={data} key={index} />
                            ))
                        }
                        </div>
                     </div>

                     <div className="customer-carousel">
                         <Carousel breakPoints={breakPoints}>
                            {
                                carouselData.map((data,index) => 
                                    <CarouselCard key={index} carouselLogo={data.carouselLogo}
                                    carouselDesc={data.carouselDesc} />
                                )    
                            }
                         </Carousel>
                     </div>
                </div>
            </div>
        </>
    )
}

export default MarketResearch