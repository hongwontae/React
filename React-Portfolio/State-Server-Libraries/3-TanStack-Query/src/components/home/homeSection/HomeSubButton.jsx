import HomeButton from "../../usage/HomeButton";
import LiverPoolDesc from '../homeTiny/HomeText'
import LiverPoolNews from '../homeTiny/HomeAdminText'
import LiverPoolTropies from '../homeTiny/HomeTropies'
import { useStore } from "../../../util/homepageStateStore";

function HomeSubButton() {
  const {
    toggleState,
    toggleDescHandler,
    toggleNewsHandler,
    toggleTrophyHandler,
  } = useStore();

  const { toggleDesc, toggleNews, toggleTrophy } = toggleState;

  return (
    <>
      <HomeButton onClick={toggleDescHandler}>
        Click and LiverPool Description
      </HomeButton>
      <LiverPoolDesc toggle={toggleDesc}></LiverPoolDesc>

      <HomeButton onClick={toggleNewsHandler}>
        Click and LiverPool lastes NEWS
      </HomeButton>
      <LiverPoolNews toggle={toggleNews}></LiverPoolNews>

      <HomeButton onClick={toggleTrophyHandler}>
        Click and LiverPool Tropies
      </HomeButton>
      <LiverPoolTropies toggle={toggleTrophy}></LiverPoolTropies>
    </>
  );
}

export default HomeSubButton;
