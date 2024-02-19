export async function fetchGet(){
    const respose = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = respose.json();
    return data;
}