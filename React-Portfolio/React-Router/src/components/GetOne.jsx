import {useLocation} from 'react-router-dom'

function GetOne(){

    const location = useLocation();
    const {hash, key, pathname, search, state} =  location;
    console.log(location)

    return(
        <>
            <h1>Get One!</h1>
            {pathname}
        </>
    )
}

export default GetOne;