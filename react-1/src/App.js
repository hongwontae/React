import './App.css';
import Hello from './Hello';

function App() {

  const name = "Steven Jerrad"

  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  } //backgroundColor => 이렇게 카멜케이스를 적용해야 하고, 변수를 보여줘야 하기에 {}에 객체 이름을 줘서 css를 나타낸다.

  return (
    <>
          {/* 주석은 화면에 보이지 않습니다 */}
          /* 중괄호로 감싸지 않으면 화면에 보입니다.*/ 
      <Hello name1="react" color="red"></Hello>
      <Hello></Hello>
      <Hello></Hello>
      <Hello></Hello>
      <div style={style}>
        {name}
      </div>
      <div className='gray-box'>

      </div>

    </>
  );
}

export default App;
