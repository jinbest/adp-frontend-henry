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

// device-list images
import best from './img/devicelist/best.png'
import warranty from './img/devicelist/warranty.png'
import positive from './img/devicelist/positive.png'
import amazing from './img/devicelist/amazing.png'
import proudly from './img/devicelist/proudly.png'

// bounce image
import bounce from './img/bounce.png'

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

const devicelistData = [
  { img: best, title: 'Best offer available', content: 'Selected by our price-quality algorithm' },
  { img: warranty, title: '1 Year Warranty', content: 'Our partner merchants are continously monitored.' },
  { img: amazing, title: 'Amazing Service', content: 'Secure shopping experience.' },
  { img: positive, title: 'Positive Impact', content: 'An alternative to new, joyful and elegant.' },
  { img: proudly, title: 'Proudly Canadian', content: 'Canadian owned and Canadian based.' },
]

const bounceData = {
  img: bounce,
  title: 'Protect Your Device with Bounce',
  content: 'We\'ve partnered with Bounce to offer you a low cost high value protection plan for your new and used devices.',
  subtitle: 'As low as $39/year!',
  subcontent: '24 Hour Refunds',
  subcontentData: ['No Deductible', 'Covers New and Used Phones'],
  btnTitle: 'Insure My Device'
}

const whyCustomersData = [
  { 
    score: 5, 
    days: '3 days ago', 
    content: 'This was by far the easiest way to sell your old cell phone. Simple fast and got a very good price for my phone.',
    reviewer: 'Philip Sizemore'
  },
  {
    score: 4,
    days: '6 days ago',
    content: 'Super easy to use and quick too!',
    reviewer: 'Anonymous'
  },
  { 
    score: 5, 
    days: '3 days ago', 
    content: 'This was by far the easiest way to sell your old cell phone. Simple fast and got a very good price for my phone.',
    reviewer: 'Philip Sizemore'
  },
]

const colorPalle = {
  orange: '#F36B26'
}

const navItemsData = [
  { href: 'trade', text: 'Trade', isActive: false },
  { href: 'repair', text: 'Repair', isActive: false },
  { href: 'buy', text: 'Buy', isActive: false },
  { href: 'protect', text: 'Protect', isActive: false },
]

const brandItemsData = {
  left: ['BUSINESS', 'FINANCING'],
  right: [ '204.221.5898', 'ENGLISH', 'LOG IN' ]
}

const hoursData = [
  {day: 'Monday', time: '9:00 a.m. - 5:00 p.m.'},
  {day: 'Tuesday', time: '9:00 a.m. - 5:00 p.m.'},
  {day: 'Wednesday', time: '9:00 a.m. - 5:00 p.m.'},
  {day: 'Thursday', time: '9:00 a.m. - 5:00 p.m.'},
  {day: 'Friday', time: '9:00 a.m. - 5:00 p.m.'},
  {day: 'Saturday', time: '11:00 a.m. - 4:00 p.m.'},
  {day: 'Sunday', time: 'Closed'},
]

export {
  cardMobileData,
  colorPalle,
  cardFixData,
  contentFixData,
  popularCardData,
  devicelistData,
  bounceData,
  whyCustomersData,
  navItemsData,
  brandItemsData,
  hoursData
}
