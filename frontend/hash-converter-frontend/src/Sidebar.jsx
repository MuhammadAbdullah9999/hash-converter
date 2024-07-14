import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, ListItemIcon } from '@mui/material';
import { ExpandLess, ExpandMore, Lock, Search, NetworkCheck, LockOpen } from '@mui/icons-material';
import './Sidebar.css'; // Import the custom CSS file

const Sidebar = ({ setHashType, setMode }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    setMode('hash');
  };

  const hashTypes = [
    'MD5', 'SHA1', 'SHA256', 'SHA512', 'MySQL', 'MD5 Wordpress', 'MD5 phpBB', 'BCRYPT', 'MD5-Crypt', 'Oracle', 'SHA-Crypt', 'PHPS'
  ];

  return (
    <div className="sidebar w-64 bg-gray-900 text-white shadow-custom rounded-2xl m-4 overflow-auto">
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
              <ListItem 
                button 
                key={type} 
                onClick={() => setHashType(type)} 
                className="pl-8 hover:bg-gray-700 rounded-lg transition-colors duration-200"
              >
                <ListItemIcon>
                  <Lock style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={type} />
              </ListItem>
            ))}
          </List>
        </Collapse>
        <ListItem 
          button 
          onClick={() => setMode('analyze')} 
          className="mt-2 hover:bg-gray-700 rounded-lg transition-colors duration-200"
        >
          <ListItemIcon>
            <Search style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Hash Analyzer" />
        </ListItem>
        <ListItem 
          button 
          onClick={() => setMode('scan')} 
          className="mt-2 hover:bg-gray-700 rounded-lg transition-colors duration-200"
        >
          <ListItemIcon>
            <NetworkCheck style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Network Scanner" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
