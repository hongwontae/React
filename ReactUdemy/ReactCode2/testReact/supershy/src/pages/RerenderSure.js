import {useNavigate} from 'react-router-dom'

function RerenderSure(){

    const navi = useNavigate();

    function pageMove(){
        navi('/detail')
    }


    return (
        <div>
            <button onClick={pageMove}>Rerendering?</button>
        </div>
    )

}

export default RerenderSure;