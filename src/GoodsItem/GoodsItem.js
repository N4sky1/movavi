import React from 'react'
import './GoodsItem.scss'

const GoodsItem = ({image, title, text, cost, buyGoods, border}) => {
    return (
        <div className="goods-item" style = {border}>
            <img src={image} alt="good"/>
            <div className="goods-item__text-wrap">
                <h2>{title}</h2>
                <p>{text}</p>
            </div> 
            <div className="goods-item__buy">
                <span>{cost} руб.</span>
                <button onClick={buyGoods}> В корзину! </button>
            </div>
        </div>
    )
}

export default GoodsItem