import { useContext } from 'react'
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button'
import CartContext from '../store/CartContext'

export default function Header(){

    const {items} = useContext(CartContext)

    const totalCartItems = items.reduce((totalNumberOfItems, item)=>{
        return totalNumberOfItems + item.quantity;
    },0);
    
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt='A restaurant'></img>
                <h1>React Cart</h1>
            </div>
            <nav>
                <Button textOnly>Cart ({totalCartItems})</Button>
            </nav>
        </header>
    )
}