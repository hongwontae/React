import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {RequestActionCreator} from '../actions/RequestAction';

function RequestComponent() {
  const dp = useDispatch();
  const { post, loading, error } = useSelector((state) => state.request);

  useEffect(()=>{
    dp(RequestActionCreator())
  }, [dp])

  if(loading){
    return <div>Loading...</div>
  }

  if(error){
    return <div>{error.message}</div>
  }
  

  return (
    <>
      <h2>Hello-Request-Component</h2>
      <div>{post?.title && post.title}</div>
    </>
  );
}

export default RequestComponent;
