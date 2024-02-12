import { Outlet } from "react-router-dom";

function HomePage(){


    return(
        <>
            <div>
                This is Home page
            </div>
            <Outlet></Outlet>
        </>
    )
}

export default HomePage;