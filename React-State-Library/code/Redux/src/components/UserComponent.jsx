import {useSelector, useDispatch} from 'react-redux';
import {ageHandler, nameHandler} from '../actions/UserAction';

function UserComponent() {

    const dispatch = useDispatch();
    const data = useSelector(state=>state.user);

    console.log(data)


  return (
    <>
      <h4>User-Component</h4>
      <div>
        <label>Name</label>
        <input type="text" value={data.name} onChange={(e)=>dispatch(nameHandler(e))}></input>
        <label>Age</label>
        <input type="number" value={data.age} onChange={e=>dispatch(ageHandler(e))}></input>
      </div>
    </>
  );
}

export default UserComponent;
