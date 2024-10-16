const arr = [
  {id : 1, name : 'hwt'},
  {id : 2, name : 'hwt'},
  {id : 3, name : 'hwt'},
  {id : 4, name : 'hwt'},
  {id : 5, name : 'hwt'},
  {id : 6, name : 'hwt'},
  {id : 7, name : 'hwt'},
  {id : 8, name : 'hwt'},
  {id : 9, name : 'hwt'},
  {id : 10, name : 'hwt'},
  {id : 11, name : 'hwt'},
]


function App() {

  function clickHandler(e){
    e.stopPropagation();
    console.log(this);
  }
  function clickHandler2(){
    console.log('222')
  }

  const target = {a : 1};
  const source = {b : 2, c :3};

  const result = Object.assign({...target}, source);
  const result2 = Object.assign(target, source);
  console.log(result);
  console.log(result === target);
  console.log(result2 === target)
  console.log(Object.keys(result));
  console.log(Object.values(result));
  console.log(Object.entries(result));
  console.log(Object.fromEntries(Object.entries(result)));

  

  return (
    <>
      <div onClick={clickHandler2} className="w-full bg-slate-700 h-screen flex justify-center">
        <div onClick={(e)=>clickHandler(e)} className="border-[1px] h-1/3 m-auto">child</div>
      </div>
    </>
  );
}

export default App;
