import Header from "../../components/header/Header";
import SubHeader from "../../components/header/SubHeader";
import Footer from "../../components/Footer/Footer";
import SideNavigation from "../../components/SideNavigation/SideNavigation";
import PageHeader from "../../components/page-header/PageHeader";
import "./Solutions.css";
import ImgDescCard from "../../components/img-desc-card/ImgDescCard";
import NextStep from "../../components/NextStep/NextStep";
import LinkCards from "../../components/link-cards/LinkCards";

const headerData = [
  {
    headerTitle: "Google Cloud solutions",
    headerDesc:
      "Solve your toughest business challenges with AI-powered, industry-focused combinations of our products and services.",
    headerButton: ["Contact sales"],
  },
];

const sidebarLinkData = [
  "Overview",
  "Industry Solutions",
  "Application modernization",
];

const imgDescData = [
  {
    img: "https://lh3.googleusercontent.com/-EcEnHWrKZn4WHtcbGBAgftsZkJ0nuoBdTjPXtv7yeGG82EH6cm1NK2_Q-XSK2nOyJqr1d1YhJiSAQ=e14-rj-sc0xffffff-h36-w36",
    title: "Industry solutions",
    desc: "Whatever your industry's challenge or use case, explore how Google Cloud solutions can help improve efficiency and agility, reduce cost, participate in new business models, and capture new market opportunities.",
  },
  {
    img: "https://lh3.googleusercontent.com/HItgXADmGaOH12hw84qJISaYrCqqIxNr6PJNWqKV_Q7sGoC6Lep1oPsIsEHrs3INpQdnVKCRsLkF=e14-rj-sc0xffffff-h36-w36",
    title: "Application modernization",
    desc: "Develop and run applications anywhere, using cloud-native technologies like containers, serverless, and service mesh.",
    link: "Learn More",
  },
];

const cardLinkData = [
  {
    linkHeadline: "Retail",
    linkBody: "Analytics and collaboration tools for the retail value chain.",
  },
  {
    linkHeadline: "Consumer packaged goods",
    linkBody: "Solutions for CPG digital transformation and brand growth.",
  },
  {
    linkHeadline: "Manufacturing",
    linkBody:
      "Migration and AI tools to optimize the manufacturing value chain.",
  },
  {
    linkHeadline: "COVID-19 solutions for the healthcare industry",
    linkBody:
      "Learn how Google is helping the healthcare industry meet today’s extraordinary challenges.",
  },
  {
    linkHeadline: "Retail",
    linkBody: "Analytics and collaboration tools for the retail value chain.",
  },
  {
    linkHeadline: "Retail",
    linkBody: "Analytics and collaboration tools for the retail value chain.",
  },
];

const Solution = () => {
  return (
    <>
      <Header />
      <SubHeader />
      <h1>sidebar</h1>
      <div className="container">
        <div className="sidebar-section">
          <span className="sidebar-title">Analyst Report</span>
          <div className="sidebar-links">
            {sidebarLinkData.map((sidebarLink, index) => (
              <SideNavigation key={index} sidebarLink={sidebarLink} />
            ))}
          </div>
        </div>
        {/* right section */}
        <div className="right-section">
          <div className="solutions">
            {/* page header component */}
            <div className="page-header">
              {headerData.map((data, index) => (
                <PageHeader data={data} key={index} />
              ))}
            </div>
          </div>

          {/* learn more section */}
          {/* <div className="learn-more">
          <h1>Learn more about Mirats Cloud’s momentum</h1>
          <p>
            Read what industry analysts are saying about Google Cloud. The
            reports listed here are written by third-party industry analysts
            that cover Google Cloud’s strategy, product portfolio, and
            differentiation. You can also learn more by reading whitepapers
            written by Google and the Google community.
          </p>

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
        </div> */}

          {/* solutions */}
          <div className="solutions-card">
            <div className="imgDesc">
              {imgDescData.map((data) => (
                <>
                  <ImgDescCard
                    img={data.img}
                    title={data.title}
                    desc={data.desc}
                    link={data.link}
                  />
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
                </>
              ))}
            </div>
          </div>

          {/* right section close */}
        </div>
        {/* container div close */}
      </div>
      <NextStep />
      <Footer />
    </>
  );
};

export default Solution;
