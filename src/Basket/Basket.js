import React from 'react'
import './Basket.scss'
import image from './img/basket.png'
import close from './img/close.png'


export default class Basket extends React.Component {
    state = {
       basketStyle: {} 
    }
    getBasketPosition = () => {
        let screenWidth =  window.screen.availWidth
        let margin = (screenWidth - 1000) / 2
        let position = (margin + 705) + 'px' 
        return position
    }
    
    handleScroll = () => {
        window.scrollY >= 154 && this.setState({
            basketStyle: {position: 'fixed', top: '-54px', left: this.getBasketPosition()}
        })
        window.scrollY < 154 && this.setState({
            basketStyle: {}
        }) 
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }


    render() {
        const {goodsInBasket, deleteGood} = this.props

        let totalCost = goodsInBasket.map(item => item.cost)
        if (totalCost.length > 0) {
            totalCost = totalCost.reduce((a, b) => a + b)
        }
        let totalList = goodsInBasket.map(item => item.title).join()
        
        function placeOrder() {
            alert(`Вы добавили в корзину ${totalList} на сумму ${totalCost}`)
        }

        return (
            <div className="basket" style = {this.state.basketStyle}>
                <div className="basket__head">
                    <img src={image} alt="basket icon"/>
                    <span>Корзина</span>
                </div>
                <div className="basket__goods">
                    { goodsInBasket.map((item) => 
                        <div className="basket__good" key={item.id}>
                            <img src={close}
                                onClick={() => deleteGood(item.id)}
                                alt="exit icon"
                            /> 
                            <p>{item.title}</p>
                            <span>{item.cost} руб.</span>
                        </div>)
                    }
                </div>
                <div className="basket__total">
                    <p>Всего:</p>
                    <span>{totalCost > 0 ? totalCost : 0} руб.</span>
                </div>
                <button onClick={placeOrder}>
                    Оформить заказ
                </button>
            </div>
        ) 
    }
    
}

