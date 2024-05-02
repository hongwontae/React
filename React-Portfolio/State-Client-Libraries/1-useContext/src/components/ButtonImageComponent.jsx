import {useContext} from 'react';
import {ButtonImageContext} from '../context/ButtonImage';

import Picture1 from '../assets/denim-pioneer.jpg'
import Picture2 from '../assets/dream-gown.jpg'
import Picture3 from '../assets/merlot-suit.jpg'
import Picture4 from '../assets/mocha-overcoat.jpg'

function ButtonImageComponent(){

    const {save, imageTitleSave} = useContext(ButtonImageContext);

    let content;

    if(save === 'AAA'){
        content =(
            <>
                <img src={Picture1}></img>
            </>
        )
    } else if(save === 'BBB'){
        content =(
            <>
                <img src={Picture2}></img>
            </>
        )
    } else if(save === 'CCC'){
        content =(
            <>
                <img src={Picture3}></img>
            </>
        )
    } else if(save === 'DDD') {
        content =(
            <>
                <img src={Picture4}></img>
            </>
        )
    }

    
    

    return(
        <>
            <input type='text' onChange={(e)=>imageTitleSave(e)}></input>
            <button>Click and image</button>
            {content}
        </>
    )
}

export default ButtonImageComponent;