import React from "react";
import M1 from "../assets/M1.jpg";
import M2 from "../assets/M2.jpeg";
import M3 from "../assets/M3.jpg";
import M4 from "../assets/M4.jpeg";
import M5 from "../assets/M5.jpeg";
import M6 from "../assets/M6.jpeg";

const movieImages = [
  {
    heading: "The Good Boss",
    img: "https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/the-good-boss-2022/widget_the-good-boss-movie-poster-2022.jpg",
    subHeading: "Peter Sobczynski",
    rating: "***",
  },
  {
    heading: "Do Revenge",
    img: "https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/do-revenge-2022/widget_do-revenge-movie-poster-2022.jpeg",
    subHeading: "Matt Zoller Seitz",
    rating: "***",
  },
  {
    heading: "Dead for a Dollar",
    img: "https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/dead-for-a-dollar-2022/widget_dead_for_a_dollar.jpg",
    subHeading: " Glenn Kenny",
    rating: "***",
  },
  {
    heading: "Funny Pages",
    img: "https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/funny-pages-2022/widget_funny-pages-movie-poster-2022.jpeg",
    subHeading: "Sheila O'Malley",
    rating: "***",
  },
  {
    heading: "Lou",
    img: "https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/lou-2022/widget_lou-movie-poster-2022.jpeg",
    subHeading: "Brian Tallerico",
    rating: "**",
  },
  {
    heading: "Meet Cute",
    img: "https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/meet-cute-2022/widget_meet-cute-movie-poster-2022.jpeg",
    subHeading: "Nick Allen",
    rating: "**",
  },
];

const Cards = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8">
        <h1 className="text-black lg:text-2xl text-xl font-bold text-center">Now playing</h1>
      <div class="grid grid-cols-6 gap-4 h-full">
        {movieImages.map((items) => (
          <div key={items.key}>
            <img src={items.img} alt="" className="w-full py-6 object-contain" />
            <h2 className="text-[#1E7AB3] lg:text-2xl text-xl">{items.heading}</h2>
            <p>{items.subHeading}</p>
            <p className="text-2xl text-[#C0A574]">{items.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
