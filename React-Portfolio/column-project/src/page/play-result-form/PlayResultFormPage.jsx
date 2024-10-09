import { useContext, useEffect } from "react";
import PlayResultForm from "../../components/play-result-form/PlayResultForm";
import { useLoaderData, useNavigate } from "react-router";
import { PageCtx } from "../../context/PageContext";

function PlayResultFormPage() {

  const { setIsAuth, isAuth } = useContext(PageCtx);

  const loaderData = useLoaderData();

  const navigate = useNavigate();

  useEffect(() => {
    if (loaderData.status === false) {
      navigate('/')
    }
    if(isAuth === false){
      navigate('/')
    }
  }, [setIsAuth, loaderData, navigate, isAuth]);


  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-extralight">Play Result Form</h1>
      <PlayResultForm></PlayResultForm>
    </div>
  );
}

export default PlayResultFormPage;

export async function loader() {
  const response = await fetch("http://localhost:5000/auth/single/check", {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error 발생");
  }

  const resData = await response.json();
  console.log(resData)

  return resData;
}

