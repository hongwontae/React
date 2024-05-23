/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import GetItem from "./GetItem";
import ErrorPage from './ErrorPage'

import { useDispatch, useSelector } from "react-redux";
import { getSliceAction } from "../redux-store/Slices/GetSlice";
import {getActionCreator} from '../redux-store//Slices/GetSlice'

function GetPage() {
  const dispatch = useDispatch();
  const responseState = useSelector((state)=>state.get.comState);
  const responseData = useSelector((state)=>state.get.items);

  // useEffect(() => {
  //   dispatch(getSliceAction.showReducer({
  //       status : 'pending',
  //       message : 'Pending 중입니다.',
  //       title : 'Suspense.....'
  //   }));

  //   async function getHttpFunction() {
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/albums"
  //       );
  //       const responseData = await response.json();
  //       console.log(responseData)

  //       if (!response.ok) {
  //         dispatch(getSliceAction.showReducer({
  //           status : 'fail',
  //           message : 'Fail',
  //           title : 'Wow! Fail this page'
  //         }));
  //       }

  //       dispatch(getSliceAction.showReducer({
  //           status : 'success',
  //           message : 'Success',
  //           title : 'Wow! Success this page'
  //       }));
        
  //       dispatch(getSliceAction.getRender(responseData));

        

  //     } catch (error) {
  //       dispatch(getSliceAction.showReducer({
  //           status : 'error',
  //           message : 'Error',
  //           title : 'ㅠㅠ 에러 발생했당'
  //       }));
  //     }
  //   }

  //   getHttpFunction();
  // }, [dispatch]);

  useEffect(()=>{
    dispatch(getActionCreator());
  }, [dispatch])

  console.log(responseState);


  return (
    <>
      <div style={{ marginTop: 40 }}>
        <h3>Hello-World</h3>
        {responseState ? responseData.map((ele)=>{
            return (
                <GetItem key={ele.id} title={ele.title}></GetItem>
            )
        }) : <ErrorPage></ErrorPage>}
      </div>
    </>
  );
}

export default GetPage;
