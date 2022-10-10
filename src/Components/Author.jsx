import React from "react";
import AuthorImg from "../assets/Author.jpg";

const Author = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4 py-8">
      <figure class="md:flex rounded-md w-full justify-center p-8 md:p-0">
        <img
          className="relative top-20 w-20 h-20 lg:w-20 rounded-full  mx-auto"
          src={AuthorImg}
          alt=""
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <figcaption class="font-bold text-2xl">
            <div class="text-sky-500 dark:text-sky-400">Brian Tallerico</div>
          </figcaption>
          <blockquote>
            <p class="text-lg font-medium">
              Brian Tallerico is the Editor of RogerEbert.com, and also covers
              television, film, Blu-ray, and video games. He is also a writer
              for Vulture, The Playlist, The New York Times, and Rolling Stone,
              and the President of the Chicago Film Critics Association.
            </p>
          </blockquote>
        </div>
      </figure>
    </div>
  );
};

export default Author;
