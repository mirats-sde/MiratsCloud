import "./SidebarDropDown.css";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineScience } from "react-icons/md";
import { Link } from "react-router-dom";
import { Popper } from "@mui/material";
import { GrLinkNext } from "react-icons/gr";
import { SiCoronaengine } from "react-icons/si";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { MdPersonSearch } from "react-icons/md";
// import { useEffect, useState } from "react"

const solutions = [
  {
    logo: <AiOutlineShoppingCart />,
    title: "Retail",
    desc: "Analytics and collaboration tools for the retail value chain.",
    slug: "retail",
  },
  {
    logo: <MdPersonSearch />,
    title: "Market Research",
    desc: "Market-specific solutions to enhance the user experience.",
    slug: "market-research",
  },
  {
    logo: <AiOutlineShoppingCart />,
    title: "Accounts",
    slug: "account",
    desc: "Analytics and collaboration tools for the retail value chain.",
  },
  {
    logo: <MdOutlineScience />,
    title: "Contacts",
    slug: "contacts",
    desc: "Health-specific solutions to enhance the patient experience.",
  },
  {
    logo: <AiOutlineShoppingCart />,
    title: "Client Onboarding",
    slug: "client-onboarding",

    desc: "Analytics and collaboration tools for the retail value chain.",
  },
  {
    logo: <MdOutlineScience />,
    title: "Business Info",
    slug: "business-info",
    desc: "Health-specific solutions to enhance the patient experience.",
  },
  {
    logo: <AiOutlineShoppingCart />,
    title: "Sales-Accounts",
    slug: "sales-accounts",

    desc: "Analytics and collaboration tools for the retail value chain.",
  },
  {
    logo: <MdOutlineScience />,
    title: "Documents-Links",
    slug: "documents-links",
    desc: "Health-specific solutions to enhance the patient experience.",
  },
  {
    logo: <MdOutlineScience />,
    title: "Vendor Onboarding",
    slug: "vendor-onboarding",
    desc: "Health-specific solutions to enhance the patient experience.",
  },
  {
    logo: <MdOutlineScience />,
    title: "Vendor Business Info",
    slug: "vendor-business-info",
    desc: "Health-specific solutions to enhance the patient experience.",
  },
  {
    logo: <MdOutlineScience />,
    title: "Vendor Documents Links",
    slug: "vendor-documents-links",
    desc: "Health-specific solutions to enhance the patient experience.",
  },
  {
    logo: <MdOutlineScience />,
    title: "Vendor Sales Accounts",
    slug: "vendor-sales-accounts",
    desc: "Health-specific solutions to enhance the patient experience.",
  },
];

const solutionsSidebar = [
  "Industry Solutions",
  "Application Modernization",
  "Artificial Intelligence",
  "Buisiness Application Platform",
  "Datebase",
];

const products = [
  {
    logo: <SiCoronaengine />,
    title: "Vendor Onboarding",
    desc: "Virtual machines running in Google’s data center.",
  },
  {
    logo: <BsFillCloudUploadFill />,
    title: "Cloud Storage",
    desc: "Object storage that’s secure, durable, and scalable.",
  },
  {
    logo: <SiCoronaengine />,
    title: "Compute Engine",
    desc: "Virtual machines running in Google’s data center.",
  },
  {
    logo: <BsFillCloudUploadFill />,
    title: "Cloud Storage",
    desc: "Object storage that’s secure, durable, and scalable.",
  },
  {
    logo: <SiCoronaengine />,
    title: "Compute Engine",
    desc: "Virtual machines running in Google’s data center.",
  },
  {
    logo: <BsFillCloudUploadFill />,
    title: "Cloud Storage",
    desc: "Object storage that’s secure, durable, and scalable.",
  },
  {
    logo: <SiCoronaengine />,
    title: "Compute Engine",
    desc: "Virtual machines running in Google’s data center.",
  },
  {
    logo: <BsFillCloudUploadFill />,
    title: "Cloud Storage",
    desc: "Object storage that’s secure, durable, and scalable.",
  },
  {
    logo: <SiCoronaengine />,
    title: "Compute Engine",
    desc: "Virtual machines running in Google’s data center.",
  },
];

const productsSidebar = [
  "Featured Products",
  "AI and machine learning",
  "API Management",
  "Compute",
  "Containers",
  "Data Analytics",
];

const SidebarDropDown = ({
  id,
  open,
  anchorEl,
  dropdownFor,
  setOpenSolutions,
  setOpenProducts,
}) => {
  return (
    <>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className="sidebar_dropdown">
          <i
            className="close_dropdown"
            onClick={() => {
              dropdownFor ? setOpenSolutions(null) : setOpenProducts(null);
            }}
          >
            <AiOutlineClose />
          </i>
          <div className="sidebar">
            {dropdownFor
              ? solutionsSidebar.map((option, index) => {
                  // console.log(option)
                  return <p key={index}>{option}</p>;
                })
              : productsSidebar.map((option, index) => {
                  return <p key={index}>{option}</p>;
                })}
          </div>
          <div className="main_portion">
            {dropdownFor ? (
              <>
                <Link to="/solutions" className="title">
                  Industry Solutions &nbsp; <GrLinkNext />
                </Link>
                <p className="desc">
                  Reduce cost, increase operational agility, and capture new
                  market opportunities.
                </p>
              </>
            ) : (
              <p className="title" style={{ marginBottom: "2.5rem" }}>
                Featured Products
              </p>
            )}

            {dropdownFor ? (
              <div className="solutions">
                {solutions.map((solution, index) => {
                  return (
                    <LinkWithLogo
                      logo={solution.logo}
                      title={solution.title}
                      desc={solution.desc}
                      key={index}
                      slug={solution.slug}
                    />
                  );
                })}
              </div>
            ) : (
              <div className="products">
                {products.map((solution, index) => {
                  return (
                    <LinkWithLogo
                      logo={solution.logo}
                      title={solution.title}
                      desc={solution.desc}
                      key={index}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Popper>
    </>
  );
};

const LinkWithLogo = ({ logo, title, desc, slug }) => {
  return (
    <div className="nav_link_with_logo">
      {logo ? <i>{logo}</i> : null}
      <Link className="link" to={slug}>
        <span>{title}</span>
        <span>{desc}</span>
      </Link>
    </div>
  );
};

export default SidebarDropDown;
