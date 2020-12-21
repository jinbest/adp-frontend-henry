import React from 'react'
import Logo from './Logo'
import {Search, CustomizedMenus} from '../components'

/*eslint-disable*/
type PropsNavItemLink = {
  item: any;
}

const NavItemLink = ({ item: { href, text } }: PropsNavItemLink) => {
  return (
    <li className='nav-item'>
      <a className='nav-link' href={href}>
        {text}
      </a>
    </li>
  )
}

type PropsBrand = {
  item: string;
}

const BrandItemLink = ({ item }: PropsBrand) => {
  return (    
    <li style={{listStyle: 'none'}}>
      <a style={{color: 'white', padding: '0 5px', fontWeight: 100, fontSize: '15px'}}>
        {item}
      </a>
    </li>
  )
}

type PropsHeader = {
  subDomain?: string;
}

const Header = ({subDomain}: PropsHeader) => {
  const data = require(`../assets/${subDomain}/Database`);
  const navItemsLink = data.navItemsData, brandItemLink = data.brandItemsData;
  const storeImg = require(`../assets/${subDomain}/img/store.png`);

  return (
    <header className='header'>
      <div className='header-brand'>
        <div style={{display: 'flex', justifyContent: 'space-between', height: 0, marginTop: '5px'}}>
          <ul style={{display: 'flex', margin: 0, padding: 0}}>
            {brandItemLink.left.map((item:any, index: number) => {
              return <BrandItemLink item={item} key={index} />
            })}
          </ul>
          <ul style={{display: 'flex', justifyContent: 'flex-end', margin: 0, padding: 0, marginRight: '40px'}}>
            {brandItemLink.right.map((item:any, index:number) => {
              return <BrandItemLink item={item} key={index} />
            })}
          </ul>
        </div>
      </div>
      <div className='container-header'>
        <Logo subDomain={subDomain} />
        <div className='search-div'>
          <Search color='rgba(0,0,0,0.8)' bgcolor='white' border='rgba(0,0,0,0.2)'/>
        </div>
        <div className='nav-div'>
          <ul className='navlink-parent'>
            {navItemsLink.map((item:any, index:number) => {
              return <NavItemLink item={item} key={index} />
            })}
          </ul>
          <CustomizedMenus subDomain={subDomain} />
          <img src={storeImg.default} />
        </div>
      </div>
    </header>
  )
}

export default Header;
