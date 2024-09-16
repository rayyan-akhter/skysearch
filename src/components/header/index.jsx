import React, { useState } from "react";
import "./style.css";
import { Paper } from "../UI/Paper";
import logoImage from "../../assets/logo.jpg";
import { useWindowSize } from "../../hooks/useWindowSize";
import Drawer from "@mui/material/Drawer";
import { Sidebar } from "../sidebar";
import { RxHamburgerMenu } from 'react-icons/rx';
export const Header = ({ filters, setFilters }) => {
  const { isMobile } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header>
      <Paper className="head-section head-container">
        <div className="head-section">
          <img className="logo" src={logoImage} alt="logo" />
          <h1>Sky Search</h1>
        </div>
        {isMobile && (
          <RxHamburgerMenu onClick={toggleDrawer} size={20} className="drawerLogo" />
        )}
        <Drawer
          elevation={1}
          anchor="right"
          open={isOpen}
          onClose={toggleDrawer}
        >
          <Sidebar filters={filters} setFilters={setFilters} width="100%" />
        </Drawer>
      </Paper>
    </header>
  );
  
};






