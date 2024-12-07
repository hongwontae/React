import {useRecoilValueLoadable} from 'recoil';
import {fetchDataSelector} from '../recoil-state/requestState';
import {styled} from 'styled-components';

const Loading = styled.div`
    font-size: 3rem;
    font-weight: bold;
    color: red;
    text-align: center;
`

const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #dddd22;
    font-weight: bold;
    gap: 2px;
`

function Test(){

    const dataLoadable = useRecoilValueLoadable(fetchDataSelector);
    console.log(dataLoadable)


    if(dataLoadable.state === 'loading'){
        return <Loading>Loading....</Loading>
    }

    return(
        <>
            <DataContainer>
                {dataLoadable.contents && dataLoadable.contents.map((ele)=>{
                    return <div key={ele.id}>{ele.title}</div>
                })}
            </DataContainer>
        </>
    )

}

export default Test;