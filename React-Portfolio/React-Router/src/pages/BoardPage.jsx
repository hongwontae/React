import { Link } from "react-router-dom";

function BoardPage() {
  return (
    <>
      <h1>Hello This is Board Page</h1>
      <div style={{display : 'flex', justifyContent : 'center'}}>
        <p>If you want to write a post, click the button</p>
        <Link to={'/form'}>Form</Link>
      </div>
    </>
  );
}

export default BoardPage;
