import React from 'react'
import './App.scss'
import Header from '../Header/Header'
import GoodsList from '../GoodsList/GoodsList'
import Basket from '../Basket/Basket'
import Footer from '../Footer/Footer'
import goods from './goods'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      goodsInBasket: []
    }
  }
  
  
  buyGoods = (id) => {
    this.setState(({goodsInBasket}) => {
      let test = goodsInBasket.filter(a => a.id === goods[id].id)
      if (!test.length > 0) {
        return {
          goodsInBasket: [...goodsInBasket, goods[id] ]
        }
      }
    })
  }
  deleteGood = (id) => {
    this.setState(({ goodsInBasket }) => {
      const idx = goodsInBasket.findIndex((el) => el.id === id)
      const newArray = [
          ...goodsInBasket.slice(0, idx), 
          ...goodsInBasket.slice(idx+1)
      ]
      return {
        goodsInBasket: newArray
      }
    }) 
  }

  componentDidUpdate() {
    let serialObj = JSON.stringify(this.state.goodsInBasket);
    localStorage.setItem('user', serialObj)
  }
  
  checkLocalStorage = () => {
    if (localStorage.getItem('user')) {
      let returnObj = JSON.parse(localStorage.getItem('user'))
      this.setState({
        goodsInBasket:returnObj
      })
    } 
  }
  componentDidMount() {
    this.checkLocalStorage()
  }
  render() {
    return (
      <div className="app">
        <Header />
        <div className="content-wrap">
          <GoodsList 
            buyGoods = {this.buyGoods}
            goods = {goods}
          />
          < Basket 
            goodsInBasket = {this.state.goodsInBasket}
            deleteGood = {this.deleteGood}
          />
        </div>
        <Footer />
      </div>
    )
  }
  
}

