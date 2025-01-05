import { fadeIn } from "@/utils/MotionTransition";
import { motion } from "framer-motion";

export const BestBooks = () => {
  const items = [
    {
      img: "image/img1.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
    },
    {
      img: "image/img2.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
    },
    {
      img: "image/img3.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
    },
    {
      img: "image/img4.jpg",
      author: "LUNDEV",
      title: "DESIGN SLIDER",
      topic: "ANIMAL",
    },
  ];

  return (
    <div className="bg-black text-white font-poppins pt-20">
      {/* Carousel */}
      <div className="carousel h-screen overflow-hidden relative">
        {/* List of Items */}
        <div className="list relative">
          {items.map((item, index) => (
            <div
              key={index}
              className={`item absolute inset-0 ${
                index === 0 ? "z-10" : "hidden"
              }`}
            >
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover"
              />
              <motion.ol
                variants={fadeIn("top")}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <div className="absolute top-1/5 left-1/2 transform -translate-x-1/2 w-[80%] max-w-[1140px] pr-[30%] text-shadow-md">
                  <motion.li
                    variants={fadeIn("top")}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <div className="font-bold tracking-widest">
                      {item.author}
                    </div>
                    <div className="text-5xl font-bold leading-[1.3em]">
                      {item.title}
                    </div>
                  </motion.li>
                  <motion.li
                    variants={fadeIn("top")}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <div className="mt-4">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Ut sequi, rem magnam nesciunt minima placeat, itaque eum
                      neque officiis unde, eaque optio ratione aliquid assumenda
                      facere ab et quasi ducimus aut doloribus non numquam.
                    </div>
                  </motion.li>
                  <motion.li
                    variants={fadeIn("top")}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    <div className="grid grid-cols-2 gap-5 mt-5">
                      <button className="bg-white text-black font-medium py-2 px-4">
                        SEE MORE
                      </button>
                      <button className="bg-transparent text-white border border-white py-2 px-4">
                        SUBSCRIBE
                      </button>
                    </div>
                  </motion.li>
                </div>
              </motion.ol>
            </div>
          ))}
        </div>

        {/* Thumbnail */}
        <div className="thumbnail flex gap-5 absolute bottom-10 left-1/2 transform -translate-x-1/2">
          {items.map((item, index) => (
            <div key={index} className="w-[150px] h-[220px] relative">
              <img
                src={item.img}
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute bottom-2 left-2 right-2 text-white">
                <div className="font-medium">{item.title}</div>
                <div className="font-light">Description</div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="">
          <button id="prev">f</button>
          <button id="next">f</button>
        </div>
      </div>
    </div>
  );
};
