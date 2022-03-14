import Header from "../../components/header/Header";
import SubHeader from "../../components/header/SubHeader";
import SideNavigation from "../../components/SideNavigation/SideNavigation";
import LinkCards from "../../components/link-cards/LinkCards";
import PageHeader from "../../components/page-header/PageHeader"
import NextStep from "../../components/NextStep/NextStep";
import Footer from "../../components/Footer/Footer";
// import styles from "./Retail.module.css";
import styles from "./Retail.module.css"

// page header compnent
const headerData = [
    {
      headerTitle:"Google Cloud for retail",
      headerDesc:"We work with retailers to solve their most challenging problems. Our intelligent, data-driven offerings can help transform store operations and digital experiences across the organization.",
      headerButton: ["Contact sales"]
    },
  ]
  
// side navigation component
  const sidebarLinkData = [
      // "Overview", "Learn more about Mirat Cloud's momentum", "Take the next step"
      {
          sidebarLink: "Overview",
      },
      {
          sidebarLink: "Learn more about Mirat Cloud's momentum",
      },
      {
          sidebarLink: "Take the next step",
      },
  ];
    
// card with links data
    const cardLinkData = [
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
      {
          linkHeadline:
            "Learn what top industry analyst firms are saying about Google Cloud.",
          linkBody:
            "Read what industry analysts are saying about Google Cloud. The reports listed here are written by third-party industry analysts that cover Google Cloud’s strategy"
      },
  ];
  
const Retail = () => {
    return (
        <>
    <Header/>
    <SubHeader/>
      <div className="container">
          <div className="sidebar-section">
            <span>Google Cloud for retail</span>
            <div className="sidebar-links">
              {sidebarLinkData.map((s,index) => (
                <SideNavigation key={index} sidebarLink={s.sidebarLink} />
              ))}
            </div>
          </div>
          {/* right section */}
        <div className="right-section">
          <div className="analyst">
          {/* page header component */}
          <div className="page-header">
            {
              headerData.map((data, index) => (
                <PageHeader data={data} key={index} />
              ))
            }
          </div>
          

            {/* <div className="more-about">
              <span>More about Mirats Cloud</span>
              <div className="aside-links">
                <ul>
                  <li>
                    <a href="www.google.com">Solutions</a>
                  </li>
                  <li>
                    <a href="www.google.com">Whitepaper</a>
                  </li>
                  <li>
                    <a href="www.google.com">Blogs</a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
          {/* </div> */}

        {/* learn more section */}
        <div className="learn-more">
          <h1>Learn more about Mirats Cloud's momentum</h1>
          <p className={styles.learn_more_desc}>
            Read what industry analysts are saying about Google Cloud. The
            reports listed here are written by third-party industry analysts
            that cover Google Cloud's strategy, product portfolio, and
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
        </div>

        {/* right section close */}
          </div>
        {/* container div close */}
        </div>
       {/* next step component */}
        <NextStep />
        <Footer/>
        </>
    )
}

export default Retail;