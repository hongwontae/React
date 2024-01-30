import logoImg from '../assets/logo.jpg'

export default function Header(){
    
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt='A restaurant'></img>
                <h1>React Cart</h1>
            </div>
            <nav>
                <button>Cart (0)</button>
            </nav>
        </header>
    )
}