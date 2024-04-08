import './Header.css';
import picCore from '../../assets/react-core-concepts.png'

const Header = ()=>{

    return(
        <>
            <header>
                <img src={picCore}></img>
                <h1>React Concept</h1>
                <p>
                리액트 입문자에게 중요한 개념 4가지
                </p>
            </header>
        </>
    )
}

export default Header;