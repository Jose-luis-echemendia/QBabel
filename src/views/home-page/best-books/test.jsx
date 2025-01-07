import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Bg } from "./bg";
import { He } from "./he";
import { Info } from "./info";


export const Test = () => {
    const [book, setBook] = useState(data.slice(1));
    const [transitionData, setTransitionData] = useState(data[0]);

    const [ currentData, setCurrentData ] = useState({
        data: initialData,
        index: 0
    });


  return (
    <>
      <div className="min-h-screen relative select-none overflow-hidden text-white">
        <Bg transitionData={transitionData} currentData={currentData} />
        <div className="absolute z-20 h-full w-full">
            <He/>
            <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
                <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
                    <Info transitionData={transitionData} currentData={currentData} />

                </div>
            </div>
        </div>
      </div>
    </>
  );
};

const data = [
  {
    author: "lolo",
    tittle: "pedro",
    img: "/assets/images/home/best_books/book1.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi,rem magnam nesciunt minima placeat, itaque eum neque officiis unde,eaque optio ratione aliquid assumenda facere ab et quasi ducimus autdoloribus non numquam. Lorem ipsum dolor, sit amet consecteturadipisicing elit. Quisquam quidem perferendis ab doloribus ipsamratione fugit officia, rem necessitatibus, repellat itaque optio velitquia a corrupti cum impedit voluptates iure",
  },
  {
    author: "lolo",
    tittle: "pedro",
    img: "/assets/images/home/best_books/book2.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi,rem magnam nesciunt minima placeat, itaque eum neque officiis unde,eaque optio ratione aliquid assumenda facere ab et quasi ducimus autdoloribus non numquam. Lorem ipsum dolor, sit amet consecteturadipisicing elit. Quisquam quidem perferendis ab doloribus ipsamratione fugit officia, rem necessitatibus, repellat itaque optio velitquia a corrupti cum impedit voluptates iure",
  },
  {
    author: "lolo",
    tittle: "pedro",
    img: "/assets/images/home/best_books/book3.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi,rem magnam nesciunt minima placeat, itaque eum neque officiis unde,eaque optio ratione aliquid assumenda facere ab et quasi ducimus autdoloribus non numquam. Lorem ipsum dolor, sit amet consecteturadipisicing elit. Quisquam quidem perferendis ab doloribus ipsamratione fugit officia, rem necessitatibus, repellat itaque optio velitquia a corrupti cum impedit voluptates iure",
  },
  {
    author: "lolo",
    tittle: "pedro",
    img: "/assets/images/home/best_books/book4.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi,rem magnam nesciunt minima placeat, itaque eum neque officiis unde,eaque optio ratione aliquid assumenda facere ab et quasi ducimus autdoloribus non numquam. Lorem ipsum dolor, sit amet consecteturadipisicing elit. Quisquam quidem perferendis ab doloribus ipsamratione fugit officia, rem necessitatibus, repellat itaque optio velitquia a corrupti cum impedit voluptates iure",
  },
  {
    author: "lolo",
    tittle: "pedro",
    img: "/assets/images/home/best_books/book5.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi,rem magnam nesciunt minima placeat, itaque eum neque officiis unde,eaque optio ratione aliquid assumenda facere ab et quasi ducimus autdoloribus non numquam. Lorem ipsum dolor, sit amet consecteturadipisicing elit. Quisquam quidem perferendis ab doloribus ipsamratione fugit officia, rem necessitatibus, repellat itaque optio velitquia a corrupti cum impedit voluptates iure",
  },
];

const initialData = data[0];
