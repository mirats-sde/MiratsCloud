import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { ClickAwayListener } from "@mui/material";
import logo from "../../assets/logo.png";
import "./Header.css";
import WhyMiratsDropDown from "../why-mirats-dropdown/WhyMiratsDropDown";
import SolutionsDropDown from "../sidebar-drop-down/SidebarDropDown";
import PricingDropDown from "../pricing-drop-down/PricingDropDown";
import { AiOutlineSearch } from "react-icons/ai";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { BiArrowBack } from "react-icons/bi";

const WhyMiratsLinks = [
  {
    title: "Overview",
  },
  {
    title: "Data Cloud",
  },
  {
    title: "Trust and security",
  },
  {
    title: "Global Infrastructure",
  },
  {
    title: "Global Infrastructure",
  },
  {
    title: "Global Infrastructure",
  },
];

const resources = [
  {
    title: "Events",
    desc: "Browse upcoming Google Cloud events.",
  },
  {
    title: "Blog",
    desc: "Read our latest product news and stories.",
  },
  {
    title: "Customer Stories",
    desc: "Explore case studies and videos.",
  },
  {
    title: "Analyst reports",
    desc: "Read what industry analysts say about us.",
  },
];

const solutionsLinks = [
  {
    title: "Industry Solutions",
  },
  {
    title: "Retail",
  },
  {
    title: "Consumer Packaged Goods",
  },
  {
    title: "Financial Services",
  },
];

const sidebarMainLinks = [
  {
    title: "Why Mirats",
    arrow: <GrFormNextLink size={25} />,
    slug: "why-mirats",
  },
  {
    title: "Solutions",
    arrow: <GrFormNextLink size={25} />,
    slug: "why-mirats",
  },
  {
    title: "Products",
    arrow: <GrFormNextLink size={25} />,
    slug: "why-mirats",
  },
  {
    title: "Pricing",
    arrow: <GrFormNextLink size={25} />,
    slug: "why-mirats",
  },
  {
    title: "Getting Started",
    arrow: <GrFormNextLink size={25} />,
    slug: "why-mirats",
  },
  {
    title: "Docs",
    slug: "why-mirats",
  },
  {
    title: "Support",
    slug: "why-mirats",
  },
];

function Header() {
  const [openWhyMirats, setOpenWhyMirats] = useState(null);
  const [openSolutions, setOpenSolutions] = useState(null);
  const [openProducts, setOpenProducts] = useState(null);
  const [openPricing, setOpenPricing] = useState(null);
  const [dropdownFor, setDropdownFor] = useState();
  const [sidebarLinks, setSidebarLinks] = useState(sidebarMainLinks);
  const [sidebarFor, setSidebarFor] = useState("main");
  const history = useHistory();

  var whyMiratsPopperId = openWhyMirats ? "why-mirats-popper" : undefined;
  var solutionPopperId = openSolutions ? "solutions-popper" : undefined;
  var productsPopperId = openProducts ? "solutions-popper" : undefined;
  var pricingPopperId = openPricing ? "pricing-popper" : undefined;

  // sidebar menu
  const togglehamburger = () => {
    document.querySelector(".sidebar").classList.toggle("active-sidebar");
  };

  const goToMainSidebarLinks = () => {
    setSidebarFor("main");
    setSidebarLinks(sidebarMainLinks);
  };

  // language menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // search field
  const handleSearchField = (val) => {
    if (val) {
      document
        .getElementsByClassName("search-input")[0]
        .classList.add("active-search-input");
    } else {
      document
        .getElementsByClassName("search-input")[0]
        .classList.remove("active-search-input");
    }
  };

  const handleSidebarLinksChange = (value) => {
    console.log(value);
    setSidebarFor(value);
    switch (value) {
      case "Why Mirats":
        return setSidebarLinks([...WhyMiratsLinks]);
      case "Solutions":
        return setSidebarLinks(solutionsLinks);
    }
  };

  return (
    <header className="navbar">
      <div className="left">
        <div className="hamburger-open" onClick={togglehamburger}>
          <i class="fas fa-bars"></i>
        </div>

        {/* sidebar menu */}
        <div className="sidebar">
          <div className="sidebar-menu">
            {sidebarFor === "main" ? (
              <IoMdClose className="sidebar-icon" onClick={togglehamburger} />
            ) : (
              <BiArrowBack
                className="sidebar-icon"
                onClick={goToMainSidebarLinks}
              />
            )}
            <h2 className="sidebar-title">Mirats Insights</h2>
          </div>
          <div className="sidebar-dropdown">
            <ul>
              {sidebarLinks.map((link, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => handleSidebarLinksChange(link.title)}
                  >
                    <Link to={`/${link.slug}`} className="link">
                      {link.title}
                      {link.arrow}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <img
          src={logo}
          alt=""
          className="logo"
          width={200}
          height={50}
          onClick={() => history.push("/")}
        />

        <nav>
          <ul className="nav-items">
            <li className="nav-dropdown">
              <ClickAwayListener onClickAway={() => setOpenWhyMirats(null)}>
                <div>
                  <p
                    aria-describedby={whyMiratsPopperId}
                    onClick={(e) =>
                      setOpenWhyMirats(openWhyMirats ? null : e.currentTarget)
                    }
                  >
                    Why Mirats
                  </p>
                  <WhyMiratsDropDown
                    id={whyMiratsPopperId}
                    open={openWhyMirats}
                    anchorEl={openWhyMirats}
                    setOpenWhyMirats={setOpenWhyMirats}
                  />
                </div>
              </ClickAwayListener>
              <i class="fas fa-chevron-down"></i>
            </li>

            <li className="nav-dropdown">
              <ClickAwayListener onClickAway={() => setOpenSolutions(null)}>
                <div>
                  <p
                    aria-describedby={solutionPopperId}
                    onClick={(e) => {
                      setDropdownFor(true);
                      setOpenSolutions(openSolutions ? null : e.currentTarget);
                    }}
                  >
                    Solutions
                  </p>
                  <SolutionsDropDown
                    id={solutionPopperId}
                    open={openSolutions}
                    anchorEl={openSolutions}
                    dropdownFor={dropdownFor}
                    setOpenSolutions={setOpenSolutions}
                  />
                </div>
              </ClickAwayListener>
              <i class="fas fa-chevron-down"></i>
            </li>
            <li className="nav-dropdown">
              <ClickAwayListener onClickAway={() => setOpenProducts(null)}>
                <div>
                  <p
                    aria-describedby={productsPopperId}
                    onClick={(e) => {
                      setDropdownFor(false);
                      setOpenProducts(openProducts ? null : e.currentTarget);
                    }}
                  >
                    Products
                  </p>
                  <SolutionsDropDown
                    id={productsPopperId}
                    open={openProducts}
                    anchorEl={openProducts}
                    dropdownFor={dropdownFor}
                    setOpenProducts={setOpenProducts}
                  />
                </div>
              </ClickAwayListener>
              <i class="fas fa-chevron-down"></i>
            </li>

            <li className="nav-dropdown">
              <ClickAwayListener onClickAway={() => setOpenPricing(null)}>
                <div>
                  <p
                    aria-describedby={pricingPopperId}
                    onClick={(e) => {
                      setOpenPricing(openPricing ? null : e.currentTarget);
                    }}
                  >
                    Pricing
                  </p>
                  <PricingDropDown
                    id={pricingPopperId}
                    open={openPricing}
                    anchorEl={openPricing}
                    setOpenPricing={setOpenPricing}
                  />
                </div>
              </ClickAwayListener>

              <i class="fas fa-chevron-down"></i>
            </li>

            <li className="nav-dropdown">
              Getting Started
              <i class="fas fa-chevron-down"></i>
            </li>
          </ul>
        </nav>
      </div>

      <div className="right">
        <ClickAwayListener onClickAway={() => handleSearchField(false)}>
          <div className="search" onClick={() => handleSearchField(true)}>
            <i>
              <AiOutlineSearch />
            </i>
            <input className="search-input" type="text" />
          </div>
        </ClickAwayListener>

        {/* docs support */}
        <div className="docs-support">
          <ul>
            <li>
              <a href="www.google.com">Docs</a>
            </li>
            <li>
              <a href="www.google.com">Support</a>
            </li>
          </ul>
        </div>

        <div className="nav-btns">
          <div className="language">
            <button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              English <i class="fas fa-sort-down"></i>
            </button>
          </div>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Chinese</MenuItem>
            <MenuItem onClick={handleClose}>Japanese</MenuItem>
            <MenuItem onClick={handleClose}>Korean</MenuItem>
            <MenuItem onClick={handleClose}>German</MenuItem>
          </Menu>

          <Link className="console_btn">Console </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
