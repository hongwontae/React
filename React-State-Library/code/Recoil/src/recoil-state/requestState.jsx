import {selector} from 'recoil';


export const fetchDataSelector = selector({
  key : 'fetchDataSelector',
  get : async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
      return data;
  }
})