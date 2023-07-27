import Main from "./Main";

const MapBasic = () => {

    const names = ['홍원태','정성현','이호원'];
    const nameList = names.map((name, idx) => (<Main key={idx} name={name}/>))
    // map은 기본적으로 for문 처럼 행동해서 다 돌린다.
    return ( 
        <div>
            {nameList}
        </div>
     );
}
 
export default MapBasic;