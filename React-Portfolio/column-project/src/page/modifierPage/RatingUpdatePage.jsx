import { useContext, useEffect, useRef, useState } from "react";
import {
  json,
  redirect,
  useActionData,
  useLoaderData,
  useNavigate,
} from "react-router";
import { PageCtx } from "../../context/PageContext";
import SelectSegment from "../../components/play-result-form/SelectSegment";
import { Form, useSubmit } from "react-router-dom";
import UpdateRatingCotainer from "./UpdateRatingContainer";

function RatingUpdatePage() {
  const { resData, authData } = useLoaderData();
  const { rrData, RPData } = resData;

  const { setIsAuth } = useContext(PageCtx);
  const [selectData, setSelectData] = useState(
    rrData?.oppenent || "맨체스터 시티"
  );
  const [RPlayer, setRPlayer] = useState([]);
  const navigate = useNavigate();
  const submit = useSubmit();
  const acData = useActionData();
  const [errorObject, setErrorObject] = useState([]);

  const titleRef = useRef(null);
  const matchDayRef = useRef(null);
  const matchDescRef = useRef(null);

  function resetHandler() {
    titleRef.current.value = null;
    matchDayRef.current.value = null;
    matchDescRef.current.value = null;
    setSelectData("맨체스터 시티");
    setErrorObject(null);
    setRPlayer((prev) => {
      const copyPrev = [...prev];
      const zeroRatingArr = copyPrev.map((ele) => {
        return {
          rating: "0",
          player: {
            playerName: ele.player.playerName,
            pId: ele.player.pId,
          },
        };
      });
      return zeroRatingArr;
    });
  }

  console.log(RPlayer);
  console.log(selectData)

  function submitHandler() {
    const matchTeam = selectData;
    const matchDay = matchDayRef.current.value;
    const title = titleRef.current.value;
    const matchDesc = matchDescRef.current.value;
    const ratingData = RPlayer;

    const formData = {
      title,
      matchTeam,
      matchDay,
      matchDesc,
      ratingData: JSON.stringify(ratingData),
    };
    submit(formData, {
      action: `/player-rating/update/${rrData.rrId}`,
      method: "POST",
    });
  }

  useEffect(() => {
    if (authData.jStatus === false) {
      setIsAuth(false);
      navigate("/");
    }
    if (authData.jStatus === true) {
      setIsAuth(true);
    }
  }, [authData, setIsAuth, navigate]);

  useEffect(() => {
    if (resData?.RPData) {
      setRPlayer(RPData);
    }
  }, [RPData, resData?.RPData]);

  useEffect(() => {
    if (acData?.error) {
      setErrorObject(acData.error);
    }
  }, [acData]);

  return (
    <>
      <Form className="border-[1px] p-8 w-8/12 rounded-lg bg-red-20 m-auto mb-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-4 justify-center">
            <div className="flex flex-col gap-2 items-center">
              <label className="text-red-400 font-bold" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="text-black rounded-sm text-center w-full m-atuo"
                required
                ref={titleRef}
                defaultValue={rrData?.title}
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="matchDay" className="text-red-400 font-bold">
                Match Day
              </label>
              <input
                type="date"
                id="matchDay"
                name="matchDay"
                className="text-black rounded-sm text-center w-1/2 m-auto"
                required
                ref={matchDayRef}
                defaultValue={rrData?.reportDate}
              ></input>
            </div>
            <div className="w-full">
              <SelectSegment
                selectedData={selectData}
                setSelectedData={setSelectData}
                playr={"playr"}
              ></SelectSegment>
            </div>
          </div>

          <div className="flex justify-center border-[1px] p-4 rounded-lg w-full">
            <UpdateRatingCotainer
              player={RPlayer}
              setFunc={setRPlayer}
            ></UpdateRatingCotainer>
          </div>

          <div className="flex flex-col gap-2 w-full items-center">
            <label htmlFor="description" className="text-red-400 font-bold">
              Description
            </label>
            <textarea
              type="text"
              id="description"
              name="description"
              className="w-11/12 h-[20rem] text-black text-center rounded-lg p-2 bg-slate-400"
              required
              ref={matchDescRef}
              defaultValue={rrData?.reportDescription}
            ></textarea>
          </div>
        </div>
        <div className="flex justify-end mt-6 gap-4">
          <div className="flex flex-col justify-center gap-2">
            {errorObject
              ? errorObject.map((ele) => {
                  return (
                    <p className="text-red-300" key={ele}>
                      {ele.msg}
                    </p>
                  );
                })
              : null}
          </div>

          <button
            className="border-[1px] rounded-md p-2"
            type="button"
            onClick={resetHandler}
          >
            Reset
          </button>
          <button
            className="border-[1px] rounded-md p-2"
            type="button"
            onClick={submitHandler}
          >
            Update
          </button>
        </div>
      </Form>
    </>
  );
}

export default RatingUpdatePage;

export async function loader({ params }) {
  const id = params.id;

  const [response, authResponse] = await Promise.all([
    fetch(`http://localhost:8080/rating/one/${id}`),
    fetch("http://localhost:8080/admin/credential", {
      method: "POST",
      credentials: "include",
    }),
  ]);

  if (!response.ok || !authResponse.ok) {
    throw json(
      { message: "rating update get http OR invalid auth" },
      { status: 404, statusText: "failed" }
    );
  }

  const resData = await response.json();
  const authData = await authResponse.json();

  return {
    resData,
    authData,
  };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const id = params.id;

  const submitData = {
    title: formData.get("title"),
    matchTeam: formData.get("matchTeam"),
    day: formData.get("matchDay"),
    matchDesc: formData.get("matchDesc"),
    ratings: JSON.parse(formData.get("ratingData")),
  };

  const response = await fetch(`http://localhost:8080/rating/update/${id}`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submitData),
  });

  if (!response.ok) {
    throw json(
      { message: "rating update 중 에러가 발생했습니다." },
      { status: 404, statusText: "failed" }
    );
  }

  const resData = await response.json();
  console.log(resData);

  if (resData.status === false) {
    return {
      message: resData.message,
      error: resData?.validatorResult,
    };
  } else if (resData.status === true) {
    return redirect(`/player-rating/result/${id}`);
  }
}
