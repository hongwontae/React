/* eslint-disable no-unused-vars */

// eslint-disable-next-line react/prop-types
function MainContentAside({ Container, title, change }) {



  return (
    <>
      <Container id="Container div">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae illum
        officiis quasi laudantium, corporis aliquam tempore quibusdam
        perspiciatis. Velit, ea? Dignissimos in perspiciatis itaque expedita
        laudantium! Quia ad rerum voluptatibus!
      </Container>
      <h2>Change Title</h2>
      <input type="text" value={title} onChange={(e)=>change(e)}></input>
      <button onClick={(e)=>{
        console.log(e)
      }}>Button!!</button>
    </>
  );
}

export default MainContentAside;
