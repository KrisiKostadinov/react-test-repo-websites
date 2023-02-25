import { useEffect, useState } from "react";
import Slider from "infinite-react-carousel";

import slide1 from "../assets/images/slide-1-background.jpg";
import slide2 from "../assets/images/slide-2-background.jpg";
import { Link } from "react-router-dom";

const slides = [
  {
    background: slide1,
    heading: "МАШИННО АСФАЛТИРАНЕ",
    text: "Ние разполагаме с най-съвременните машни и технологии за качествено асфалтиране на различни терени.",
  },
  {
    background: slide2,
    heading: "РЪЧНО АСФАЛТИРАНЕ",
    text: "Ние разполагаме с най-съвременните машни и технологии за качествено асфалтиране на различни терени.",
  },
];

const Home = () => {
  const [slide, setSlide] = useState();
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    setSlide(slides[slideIndex]);
  }, [slideIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideIndex === slides.length - 1) return setSlideIndex(0);
      setSlideIndex(slideIndex + 1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [slideIndex]);

  return (
    <>
      <main className="w-full h-[70vh]">
        <div
          className="container mx-auto h-full bg-cover transition-all duration-1000 object-cover"
          style={{ backgroundImage: `url(${slide?.background})` }}
        >
          <div className="w-full h-full flex flex-col justify-center items-center bg-black/40">
            <h1 className="text-white text-4xl md:text-6xl text-bold">
              {slide?.heading}
            </h1>
            <p className="text-white text-xl py-4 max-w-lg text-center">
              {slide?.text}
            </p>
          </div>
        </div>
      </main>
      <p className="text-white bg-black text-center text-2xl py-10 mt-5">
        Предлагаме асфалтиране в град София и страната на достъпни цени
      </p>
      <div className="w-full text-center mt-5">
        <Link
          to={"/gallery"}
          className="py-4 px-5 text-white text-2xl rounded bg-yellow-500 hover:bg-yellow-600 inline-block transition-colors"
        >
          Нашите проекти
        </Link>
      </div>
    </>
  );
};

export default Home;
