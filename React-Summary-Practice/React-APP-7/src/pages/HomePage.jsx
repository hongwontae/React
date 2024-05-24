import {Link, useNavigate} from 'react-router-dom'

function HomePage(){

    const navigate = useNavigate();

    function programmingMove(){
        navigate('/products')
    }

    return(
        <>
            <h2>Home Page!</h2>
            <p>Go to <Link to="/products">Products!</Link></p>
            <button onClick={programmingMove}>GO TO THE PRODUCTS</button>
        </>
    )
}

export default HomePage;