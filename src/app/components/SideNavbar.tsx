import React, { useState } from "react";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  wrapper: {
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  hamburberContainer: {
    position: "relative",  // Ensures the hover area is taken by div
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px", // Adjust width for hamburger area
    height: "30px", // Adjust height accordingly
  },
  hamburber: {
    width: "30px",
    height: "3px",
    background: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgb(255, 101, 47,.2)",
    cursor: "pointer",
    position: "relative",
    transition: "all 0.5s ease-in-out",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "translateY(-10px)",
    },
    "&::after": {
      content: "''",
      position: "absolute",
      width: "30px",
      height: "3px",
      background: "#fff",
      borderRadius: "5px",
      transition: "all 0.5s ease-in-out",
      transform: "translateY(10px)",
    },
  },
  activeHamburger: {
    background: "transparent",
    "&::before": {
      transform: "rotate(45deg) translate(5px, 5px)",
    },
    "&::after": {
      transform: "rotate(-45deg) translate(5px, -5px)",
    },
  },
  sidenav: {
    position: "fixed",
    width: "0%",
    height: "50vh",
    transform: "translateX(0%)",
    transition: "all 0.3s ease-in-out",
  },
  activeSidenav: {
    position: "fixed",
    paddingLeft: "20px",
    width: "120px",
    height: "50vh",
    background: "linear-gradient(150deg, rgba(46, 46, 46, 0.7) 30%, rgba(128, 0, 32, 0.7) 100%)",
    transition: "all 0.3s ease-in-out",
  },
  ul: {
    listStyleType: "none",
    "& li": {
      padding: "12px 0",
    },
  },
  a: {
    margin: "20px 0",
    color: "white",
  },
}));

const Index = () => {
  const classes = useStyles();
  const [active, setActive] = useState(false);

  const data = [
    { name: "Home", Link: "/" },
    { name: "Services", Link: "#service-sec" },
    { name: "About me", Link: "#about-sec" },
    { name: "Contact me", Link: "#contact-sec" },
    { name: "Portfolio", Link: "/events" },
  ];

  return (
    <div className="hidden customsm:block smm:block">
      <div className={classes.wrapper}>
        {/* Hamburger icon div */}
        <div
          className={classes.hamburberContainer}
          onMouseEnter={() => setActive(true)}  // Show menu on hover
          onMouseLeave={() => setActive(false)}  // Hide menu when mouse leaves
        >
          <div
            className={active ? `${classes.hamburber} ${classes.activeHamburger}` : classes.hamburber}
          />
        </div>
      </div>

      {/* Menu (sidenav) */}
      <div
        className={active ? classes.activeSidenav : classes.sidenav}
        onMouseEnter={() => setActive(true)}  // Keep menu open when hovering over menu
        onMouseLeave={() => setActive(false)}  // Close menu when leaving the menu
      >
        {/* Menu is shown when active state is true */}
        {active && (
          <ul className={classes.ul}>
            {data.map((item, i) => (
              <li key={i}>
                <a href={item.Link} className={classes.a}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Index;
