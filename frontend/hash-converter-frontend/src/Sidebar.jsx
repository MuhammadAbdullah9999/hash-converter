import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, ListItemIcon, Drawer, IconButton } from '@mui/material';
import { ExpandLess, ExpandMore, Lock, Search, NetworkCheck, LockOpen, Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@mui/material';
import './Sidebar.css'; // Import the custom CSS file

const Sidebar = ({ setMode }) => {
  const [open, setOpen] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClick = () => {
    setOpen(!open);
    setMode('hash');
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleOptionClick = (mode) => {
    setMode(mode);
    if (isSmallScreen) {
      setDrawerOpen(false);
    }
  };

  const hashTypes = [
    'MD5', 'SHA1', 'SHA256', 'SHA512', 'MySQL', 'MD5 Wordpress', 'MD5 phpBB', 'BCRYPT', 'MD5-Crypt', 'Oracle', 'SHA-Crypt', 'PHPS'
  ];

  const sidebarContent = (
    <div className="h-[95%] fixed sidebar w-64 bg-gray-900 text-white shadow-custom rounded-2xl m-4 overflow-auto">
      <h2 className="text-2xl p-4 font-semibold">Hash Converter</h2>
      <List className="px-4">
        <ListItem button onClick={handleClick} className="flex items-center justify-between hover:bg-gray-700 rounded-lg transition-colors duration-200">
          <ListItemIcon>
            <LockOpen style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Encryption" />
          {open ? <ExpandLess style={{ color: 'white' }} /> : <ExpandMore style={{ color: 'white' }} />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {hashTypes.map((type) => (
              <Link to={`/${type.toLowerCase().replace(/\s+/g, '')}`} key={type}>
                <ListItem button className="pl-8 hover:bg-gray-700 rounded-lg transition-colors duration-200" onClick={() => handleOptionClick('hash')}>
                  <ListItemIcon>
                    <Lock style={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary={type} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Collapse>
        <Link to="/analyze">
          <ListItem button onClick={() => handleOptionClick('analyze')} className="mt-2 hover:bg-gray-700 rounded-lg transition-colors duration-200">
            <ListItemIcon>
              <Search style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Hash Analyzer" />
          </ListItem>
        </Link>
        <Link to="/scan">
          <ListItem button onClick={() => handleOptionClick('scan')} className="mt-2 hover:bg-gray-700 rounded-lg transition-colors duration-200">
            <ListItemIcon>
              <NetworkCheck style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Network Scanner" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      {isSmallScreen ? (
        <div>
          <IconButton onClick={toggleDrawer} style={{ color: 'black', position: 'fixed', top: 16, left: 16 }}>
            <Menu />
          </IconButton>
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
            {sidebarContent}
          </Drawer>
        </div>
      ) : (
        <div className="sm:block hidden">
          {sidebarContent}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
