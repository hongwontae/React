/* eslint-disable react/prop-types */
import LiverPoolPremierLeagueCup from "../../../assets/images/liverpool-hompage-tropies/Liverpool-PremierLeague-Cup.jpg";
import LiverPoolFACup from '../../../assets/images/liverpool-hompage-tropies/LiverPool-FA-Cup.jpg';
import LiverPoolChampionsCup from '../../../assets/images/liverpool-hompage-tropies/LiverPool-Champions-Cup.jpg';
import LiverPoolCarabaoCup from '../../../assets/images/liverpool-hompage-tropies/LiverPool-Carabao-Cup.jpg';

function HomeTropies({ toggle }) {
  return (
    <>
      <div className="mb-14">
        {toggle && (
          <>
            <div className="flex justify-center gap-5 flex-wrap">
              <img
                src={LiverPoolChampionsCup}
                className="w-[300px] h-[200px] object-cover shadow-lg rounded-lg"
              ></img>
              <img
                src={LiverPoolPremierLeagueCup}
                className="w-[300px] h-[200px] object-cover shadow-lg rounded-lg"
              ></img>
              <img
                src={LiverPoolFACup}
                className="w-[300px] h-[200px] object-cover shadow-lg rounded-lg"
              ></img>
              <img
                src={LiverPoolCarabaoCup}
                className="w-[300px] h-[200px] object-cover shadow-lg rounded-lg"
              ></img>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default HomeTropies;
