import Header from '../../components/header/Header';
import SubHeader from '../../components/header/SubHeader';
import Footer from '../../components/Footer/Footer';
import NextStep from '../../components/NextStep/NextStep';
import '../events/Events.css';
import { Menu } from '@mui/material';
import { MenuItem } from '@mui/material';
import { useState } from 'react';
import Pixelbar from '../../components/pixel-bar/PixelBar';
// import { color } from '@mui/system';
// import { Link } from 'react-router-dom';


const Events = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
};
  const handleClose = () => {
    setAnchorEl(null);
}


    return(
        <>
        <Header />
		    <SubHeader />

        <div className="events">
        <div className="event-showcase">
          <h1 className="event-title">Browse Events</h1>
          <p className="event-desc">
            Explore upcoming cloud events, as well as on-demand content from
            previous events, and get insights into how the most successful
            companies transformed their business with Google Cloud.
          </p>
        </div>
        {/* pixel bar */}
        <Pixelbar />


        {/* cloud gallery */}
        <div className="cloud-gallery">
          {/* cloud container 1 */}
          <div className="cloud-container">
            <div className="filter">
              <span>Filter By:</span>
            </div>
            <div className="sort">
              <span>Sort By:</span>
            </div>
          </div>

          {/* cloud container 2 */}
          <div className="cloud-container">
            <div className="filter">
              <span>Filter By:</span>
            </div>
            <div className="sort">
              <span>Sort By:</span>
              <button 
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>Date <i class="fas fa-sort-down"></i>
              </button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            >
            <MenuItem onClick={handleClose}>Date</MenuItem>
            <MenuItem onClick={handleClose}>Title A - Z</MenuItem>
            <MenuItem onClick={handleClose}>Title Z - A</MenuItem>
          </Menu>
            </div>
          </div>
        </div>
      </div>
      <NextStep />
      <Footer/>
        </>
    )
}

export default Events;