import MainNavigation from "../../components/navigation/MainNavigation";

function ErrorPage(){

    return(
        <div className="bg-red-900 min-h-screen font-roboto text-center text-gray-100">
            <MainNavigation></MainNavigation>
            <h1>Error Occurred!</h1>
            <p className="mt-2">상단의 내비게이션을 사용해서 벗어나주시고 다시 시도해주세요</p>
        </div>
    )
}

export default ErrorPage;