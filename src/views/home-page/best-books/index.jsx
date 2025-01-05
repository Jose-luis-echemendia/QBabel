import { fadeIn } from "@/utils/MotionTransition";
import { motion } from "framer-motion";

export const BestBooks = () => {
  const best_books = [
    {
      img: "image/img1.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
    },
    {
      img: "image/img2.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
    },
    {
      img: "image/img3.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
    },
    {
      img: "image/img4.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
    },
  ];

  return (
    <div className="flex flex-row gap-3 bg-[#111217] ">
      {/* Imagen */}
      <figure className="flex-1">
        <img
          src="/assets/images/home/best_books/book1.png"
          alt=""
          className="w-full h-screen object-contain"
        />
      </figure>

      {/* Información */}
      <div className="flex-1 p-4 pt-10 ml-10">
        <motion.ol
          variants={{ staggerChildren: 0.07, delayChildren: 0.2 }}
          className="text-white"
        >
          <motion.li
            variants={{
              y: 0,
              opacity: 1,
              transition: {
                y: { stiffness: 1000, velocity: -100 },
              },
            }}
          >
            <div>Author</div>
            <div>Title</div>
          </motion.li>
          <motion.li
            variants={{
              y: 0,
              opacity: 1,
              transition: {
                y: { stiffness: 1000, velocity: -100 },
              },
            }}
          >
            <div className="mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              officiis unde, eaque optio ratione aliquid assumenda facere ab et
              quasi ducimus aut doloribus non numquam.
            </div>
          </motion.li>
          <motion.li
            variants={{
              y: 0,
              opacity: 1,
              transition: {
                y: { stiffness: 1000, velocity: -100 },
              },
            }}
          >
            <div className="flex gap-5 mt-5 justify-center">
              <button className="bg-white text-black font-medium py-2 px-8 rounded-md flex-grow-0 max-w-[150px]">
                SEE MORE
              </button>
              <button className="bg-transparent text-white border border-white py-2 px-8 rounded-md flex-grow-0 max-w-[150px]">
                SUBSCRIBE
              </button>
            </div>
          </motion.li>
        </motion.ol>
      </div>
    </div>
  );
};
