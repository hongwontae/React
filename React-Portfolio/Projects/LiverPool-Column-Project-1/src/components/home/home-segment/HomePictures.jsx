/* eslint-disable react/prop-types */
import LiverPoolLogo from "../../../assets/images/liverpool-homepage-pirctures/LiverPool-logo.jpg";
import LiverPoolAudience from "../../../assets/images/liverpool-homepage-pirctures/LiverPool-Audience.jpg";
import LiverPooolGoalKeeper from "../../../assets/images/liverpool-homepage-pirctures/LiverPool-GoalKeeper.jpg";
import LiverPoolWinPicture from "../../../assets/images/liverpool-homepage-pirctures/LiverPool-WinPicture.jpg";

function HomePictures({ toggle }) {
  return (
    <>
      {toggle && (
        <div className="flex flex-wrap justify-center gap-5 mb-5">
          <img
            className="w-[300px] h-[200px] object-cover shadow-lg rounded-lg"
            src={LiverPoolLogo}
            alt="This is lIVERPOOL LOGO"
          ></img>
          <img
            className="w-[300px] h-[200px] object-cover shadow-lg rounded-lg"
            src={LiverPoolAudience}
            alt="This is lIVERPOOL LOGO"
          ></img>
          <img
            className="w-[300px] h-[200px] object-cover shadow-lg rounded-lg"
            src={LiverPooolGoalKeeper}
            alt="This is lIVERPOOL LOGO"
          ></img>
          <img
            className="w-[300px] h-[200px] object-cover shadow-lg rounded-lg"
            src={LiverPoolWinPicture}
            alt="This is lIVERPOOL LOGO"
          ></img>
        </div>
      )}
    </>
  );
}

export default HomePictures;
