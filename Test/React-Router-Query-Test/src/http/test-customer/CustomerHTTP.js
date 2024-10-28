export async function CustomerAll() {
    const response = await fetch('http://localhost:5000/get/customers');

    if(!response.ok){
        throw new Error('customers를 가져오는 중에 에러가 발생했습니다.')
    }

    const resData = await response.json();

    return resData;
}