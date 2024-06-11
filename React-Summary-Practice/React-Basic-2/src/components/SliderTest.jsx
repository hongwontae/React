import Slider from "react-slick";

import "./SliderComponent.css"; // 필요에 따라 스타일 추가

const SliderComponent = () => {
  const settings = {
    dots: true, // 아래 네비게이션 점 표시
    infinite: true, // 무한 루프
    speed: 500,
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
    slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 수
    arrows: true, // 좌우 화살표 표시
  };

  return (
    <div className="slider-container">
        <Slider {...settings}>
          <div className="div1">
            <h3>슬라이드 1</h3>
          </div>
          <div>
            <h3>슬라이드 2</h3>
          </div>
          <div>
            <h3>슬라이드 3</h3>
          </div>
          <div>
            <h3>슬라이드 4</h3>
          </div>
        </Slider>
    </div>
  );
};

export default SliderComponent;
