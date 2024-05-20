import headerImage from '../assets/logo.jpg'
import Button from './UI/Button'

import {useContext} from 'react'
import {MealContext} from '../store/MealContext'
import {ModalContext} from '../store/ModalControlContext'


function Header(){

    const {meals} = useContext(MealContext);

    const {showModal} = useContext(ModalContext)

    const mealCounter = meals.reduce((acc, cur)=>{
        return acc+ cur.quantity
    }, 0)


    return(
        <>
            <header id="main-header">
                <div id="title">
                    <img src={headerImage} alt='it is header Image!'></img> 
                    <h1>React Food</h1>
                    <p></p>
                </div>
                <nav>
                    <Button textOnly onClick={()=>showModal()}>Cart ({mealCounter})</Button>
                </nav>
            </header>
        </>
    )
}

export default Header;