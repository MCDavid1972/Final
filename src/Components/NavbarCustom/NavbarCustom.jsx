import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box, useMediaQuery, Button } from "@mui/material";
import { Menu } from "@mui/icons-material";
import CardWidget from "../CardWidget/CardWidget";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../fireBaseConfig";
import logo from "../../images/Logo.png";

const NavbarCustom = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const fetchCategories = async () => {
      const itemsCollection = collection(db, "category");
      const querySnapshot = await getDocs(itemsCollection);
      const categories = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCategoryList(categories);
    };
    fetchCategories();
  }, []);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#f957b8" }}>
      <Toolbar>
        <IconButton component={Link} to="/" edge="start" color="inherit" aria-label="home">
          <img src={logo} alt="Gunguitos" style={{ height: "40px" }} />
        </IconButton>
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
              <Menu />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerClose}>
              <List sx={{ width: "200px" }}>
                {categoryList.map((category) => (
                  <ListItem key={category.id} button component={Link} to={category.path} onClick={handleDrawerClose}>
                    <ListItemText primary={category.title} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
            <Box sx={{ display: "flex", flexGrow: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", ml: "50px" }}>
                {categoryList.map((category) => {
                  return (
                    <Button
                    sx={{
                      ml: "20px",
                      bgcolor: "#f957b8",
                      color: "#fff",
                      "&:hover": {
                        bgcolor: "#d84315",
                        color: "#fff",
                      },
                      borderRadius: "20px",
                      px: "30px",
                      py: "10px",
                      boxShadow: "none",
                      textTransform: "none",
                      fontWeight: "500",
                      fontSize: "1rem",
                      letterSpacing: "0.1rem",
                    }}
                    key={category.id}
                  >
                    <Link
                      
                      to={category.path}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {category.title}
                    </Link>
                  </Button>
                  )
                })}
              </Box>
            </Box>
        )}
        <Box sx={{ ml: "auto" }}>
          <CardWidget />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavbarCustom;