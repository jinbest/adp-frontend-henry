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

const colorPalle = {
  orange: '#F36B26'
}

export {
  cardMobileData,
  colorPalle,
  cardFixData
}
