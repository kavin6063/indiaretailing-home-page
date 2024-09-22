import React from "react";
import HeadingtextSection from "./shared/HeadingtextSection";

const posts = [
  {
    title: "Progressive Grocer – June 2023",
    image: "/sec13/1.png",
  },
  {
    title: "Images Business Of Fashion – June 2023",
    image: "/sec13/2.png",
  },
  {
    title: "Shopping Centre News – May 2023",
    image: "/sec13/3.png",
  },
  {
    title: "Latest tech innovations in 2023",
    image: "/sec13/4.png",
  },
  {
    title: "Latest tech innovations in 2023",
    image: "/sec13/1.png",
  },
];

const Section13 = () => {
  return (
    <div className=" mt-5 container mx-auto">
      <div className="p-4">
        <HeadingtextSection title="Book Store" />
      </div>
      <div className="grid grid-cols-5 gap-4 mx-auto">
        {posts.map((post, index) => (
          <div
            key={index}
            className="w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img className="rounded-t-lg" src={post.image} alt={post.title} />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                  {post.title}
                </h5>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section13;
