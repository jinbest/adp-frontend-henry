// card-mobile image
import trade from './img/cardmobile/trade.png'
import repair from './img/cardmobile/repair.png'
import buy from './img/cardmobile/buy.png'
import protect from './img/cardmobile/protect.png'

// card-fix image
import cellphone from './img/cardfix/mobile.png'
import tablet from './img/cardfix/tablet.png'
import computer from './img/cardfix/computer.png'
import console from './img/cardfix/game.png'
import other from './img/cardfix/other.png'

// card-popular image
import camera from './img/popular/camera.png'

const cardMobileData = [
  { img: trade, title: 'TRADE', btnTitle: 'Trade my Device' },
  { img: repair, title: 'REPAIR', btnTitle: 'Repair my Device' },
  { img: buy, title: 'BUY', btnTitle: 'Buy a Device' },
  { img: protect, title: 'PROTECT', btnTitle: 'Protect my Device' },
]

const cardFixData = [
  { img: cellphone, title: 'Cellphone'},
  { img: tablet, title: 'Tablet'},
  { img: computer, title: 'Computer'},
  { img: console, title: 'Console'},
  { img: other, title: 'Other'},
]

const contentFixData = [
  { 
    title: 'FREE DIAGNOSTICS', 
    content: 'We believe in a transparent repqir process. If you\'re not sure what\'s wrong with your device, we\'ll diagnose it for free.',
  },
  {
    title: 'LOW PRICE GUARANTEE',
    content: 'We want you to be confident that you\'re getting the best price. We\'ll match any local competitor\'s published price for the same repair and beat it by $5.',
  },
  {
    title: 'QUICK TURNAROUND',
    content: 'We know you don\'t have all day so we\'ll return your device as quickly as possible. Most of our repairs can be performed in under two hours.',
  },
  {
    title: '90 DAY WARRANTY',
    content: 'All of repairs are backed with our 90-day, hassle-free warranty. This warranty. This warranty is valid at all of our locations worldwide.'
  }
]

const popularCardData = [
  { img: camera, title: 'iPhone 11 Pro', subtitle: 'As low as /', price: '$897'},
  { img: camera, title: 'iPhone 11 Pro', subtitle: 'As low as /', price: '$897'},
  { img: camera, title: 'iPhone 11 Pro', subtitle: 'As low as /', price: '$897'},
  { img: camera, title: 'iPhone 11 Pro', subtitle: 'As low as /', price: '$897'},
]

const colorPalle = {
  orange: '#F36B26'
}

export {
  cardMobileData,
  colorPalle,
  cardFixData,
  contentFixData,
  popularCardData
}
