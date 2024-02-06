import { useDispatch, useSelector } from "react-redux";
import {artiAction} from '../store/dataChangeSlice'

const GoodArticle = () => {
  const data = useSelector((state) => state.articleChange.arti);

  const dispatch = useDispatch();

  const changeHandler = ()=>{
    dispatch(artiAction.changeData('ChangedData!!!!'));
  }

  return (
    <div>
      <div>goodArticle</div>
      <div>{data}</div>
      <button onClick={changeHandler}>Button!!</button>
    </div>
  );
};

export default GoodArticle;
