import React from 'react'
import './GoodsList.scss'
import GoodsItem from '../GoodsItem/GoodsItem'


export default class GoodsList extends React.Component {
    
    render() {
        const { buyGoods, goods } = this.props
        let elements = goods.map((item) => {
            const {id, ...itemprops} = item
            return (
                <li key={id}>
                    <GoodsItem 
                    {...itemprops}
                    buyGoods={()=>buyGoods(id)}
                    border = {id < goods.length-1 ? {borderBottom:'1px solid lightgray'} : {}}/>
                </li>
            )
        })
        return (
            <ul className="goods-list">
            {elements}            
            </ul>
        )
    }
}
