import React from 'react'
import Logo from './Logo'
import {Button} from '../components'

/*eslint-disable*/
type PropsNavItemLink = {
  item: any;
}

const NavItemLink = ({ item: { href, text, isActive } }: PropsNavItemLink) => {
  return (
    <li className='nav-item'>
      <a className={isActive ? 'nav-link active' : 'nav-link'} href={href}>
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
  console.log(data);
  const navItemsLink = data.navItemsData, brandItemLink = data.brandItemsData;

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
        <div className='nav-div'>
          <ul className='navlink'>
            {navItemsLink.map((item:any, index:number) => {
              return <NavItemLink item={item} key={index} />
            })}
          </ul>
          <Button title='Find a Store' bgcolor='#054DFA' borderR='20px'/>
        </div>
        {/* <nav className='navbar navbar-expand-lg navbar-light'>
          <Logo subDomain={subDomain} />
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#collapsibleNavbar'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='collapsibleNavbar'>
            <ul className='navbar-nav ml-auto'>
              {navItemsLink.map((item:any, index:number) => {
                return <NavItemLink item={item} key={index} />
              })}
            </ul>
          </div>
        </nav> */}
      </div>
    </header>
  )
}

export default Header;
