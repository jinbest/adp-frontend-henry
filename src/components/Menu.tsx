import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import Button from './Button'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button 
        title='Find a Store' 
        bgcolor='#054DFA' 
        borderR='20px'
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
      />
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className='menu-content-div'>
          <div className='left-content'>
            <div className='content-block'>
              <p className='title'>MY STORE</p>
              <p className='content'>71 Greenford Avenue Winninpeg, MB RiR 1R1 (204) 555-5555</p>
            </div>
            <div className='content-block'>
              <a className='link'>View Store Details</a>
              <a className='link'>Get Directions</a>
            </div>
            <Button 
              title='Book Repair' 
              bgcolor='#054DFA' 
              borderR='20px' 
              width='40px'
              height='30px'
              margin='0'
            />
          </div>
        </div>
      </StyledMenu>
    </div>
  );
}