import headerImage from '../assets/logo.jpg'
import Button from './UI/Button'

function Header(){


    return(
        <>
            <header id="main-header">
                <div id="title">
                    <img src={headerImage} alt='it is header Image!'></img>
                    <h1>React Food</h1>
                </div>
                <nav>
                    <Button textOnly>Cart (0)</Button>
                </nav>
            </header>
        </>
    )
}

export default Header;