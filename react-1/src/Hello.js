const Hello = (p) => {


    return ( 
        <div>
            <h1 style={{color : p.color}}>안녕하세요 {p.name}</h1>
            <div>{p.name}</div>
        </div>
     ); // 반환은 jsx로 한다.
}
 
export default Hello; // 다른 컴포넌트에서 사용할 수 있게 만듬