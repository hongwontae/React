import { useStore } from '../../../util/homepageStateStore'
import HomeButton from "../../usage/HomeButton";

function HomeAllButton() {
  const { allViewHandler, allDownHandler } = useStore();

  return (
    <>
      <div className="w-64 m-auto mb-10">
        <div className="flex justify-around">
          <HomeButton onClick={allViewHandler}>Click All View</HomeButton>
          <HomeButton onClick={allDownHandler}>Click All Down</HomeButton>
        </div>
      </div>
    </>
  );
}

export default HomeAllButton;
