export async function hpLoader() {
    const response = await fetch('http://localhost:8080/player/all');
    
    const resData = await response.json();

    return resData;

}