/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
import HomeSubButton from '../components/home/homeSection/HomeSubButton'

import HomeAllButton from "../components/home/homeSection/HomeAllButton";

function HomePage() {

  return (
    <>
      <section className="font-serif">
        <h1 className="text-6xl mb-8 text-red-500">LiverPool Column</h1>

        <HomeAllButton></HomeAllButton>
        <HomeSubButton></HomeSubButton>

      </section>
    </>
  );
}

export default HomePage;
