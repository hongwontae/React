import { ageHandler, nameHandler } from "../slice/UserSlice";
import { useDispatch, useSelector } from "react-redux";

function UserComponent() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  return (
    <>
      <h3>User-Component</h3>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => dispatch(nameHandler(e.target.value))}
        ></input>
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          value={user.age}
          onChange={(e) => dispatch(ageHandler(e.target.value))}
        ></input>
      </div>
    </>
  );
}

export default UserComponent;
