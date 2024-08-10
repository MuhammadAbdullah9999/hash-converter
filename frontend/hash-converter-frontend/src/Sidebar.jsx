import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, ListItemIcon, Drawer, IconButton, Typography } from '@mui/material';
import { ExpandLess, ExpandMore, Lock, Search, NetworkCheck, LockOpen, Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import './Sidebar.css'; // Import the custom CSS file

const Sidebar = ({ setMode }) => {
  const [openEncryption, setOpenEncryption] = useState(false);
  const [openBlogs, setOpenBlogs] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleEncryptionClick = () => {
    setOpenEncryption(!openEncryption);
    setMode('hash');
  };

  const handleBlogsClick = () => {
    setOpenBlogs(!openBlogs);
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

  const blogLinks = [
    { title: 'How to Use Burp Suite for scanning websites', path: '/blogs/How to Use Burp Suite for scanning websites' },
    { title: 'What is OWASP top 10', path: '/blogs/What is OWASP top 10' },

  ];

  const sidebarContent = (
    <div className="h-[97%] fixed sidebar w-60 bg-gray-900 text-white shadow-custom rounded-2xl m-2 overflow-auto">
      <h2 className="text-xl p-4 font-semibold">Hash Converter</h2>
      <List className="px-4">
        <ListItem button onClick={handleEncryptionClick} className="flex items-center justify-between hover:bg-gray-700 rounded-lg transition-colors duration-200">
          <ListItemIcon>
            <LockOpen style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Encryption" />
          {openEncryption ? <ExpandLess style={{ color: 'white' }} /> : <ExpandMore style={{ color: 'white' }} />}
        </ListItem>
        <Collapse in={openEncryption} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {hashTypes.map((type) => (
              <Link to={`/${type.toLowerCase().replace(/\s+/g, '')}`} key={type}>
                <ListItem button className="pl-8 hover:bg-gray-700 rounded-lg transition-colors duration-200" onClick={() => handleOptionClick('hash')}>
                  <ListItemIcon>
                    <Lock style={{ color: 'white', fontSize: '20px' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body2" style={{ color: 'white', fontSize: '14px', }}>
                        {type}
                      </Typography>
                    }
                  />
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
        <Link to="/blogs">
        <ListItem button onClick={handleBlogsClick} className="mt-2 hover:bg-gray-700 rounded-lg transition-colors duration-200">
          <ListItemIcon>
            <DescriptionIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Blogs" />
          {openBlogs ? <ExpandLess style={{ color: 'white' }} /> : <ExpandMore style={{ color: 'white' }} />}
        </ListItem>
        </Link>
        <Collapse in={openBlogs} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {blogLinks.map((blog) => (
              <Link to={blog.path} key={blog.title}>
                <ListItem button className=" hover:bg-gray-700 rounded-lg transition-colors duration-200" onClick={() => handleOptionClick('blogs')}>
                  {/* <ListItemIcon>
                    <DescriptionIcon style={{ color: 'white', fontSize: '20px' }} />
                  </ListItemIcon> */}
                  <p className='text-xs pl-14'>{blog.title}</p>
                  {/* <ListItemText
                    primary={
                      <Typography variant="body2" style={{ color: 'white', fontSize: '14px',paddingLeft:'30px' }}>
                        {blog.title}
                      </Typography>
                    }
                  /> */}
                </ListItem>
              </Link>
            ))}
          </List>
        </Collapse>
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
