import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Bg } from "./bg";
import { He } from "./he";
import { Info } from "./info";
import { C } from "./c";
import { Sl } from "./sl";

export const Test = () => {
  const [data, setData] = useState(dataSlice.slice(1));
  const [transitionData, setTransitionData] = useState(data[0]);

  const [currentData, setCurrentData] = useState({
    data: initialData,
    index: 0,
  });

  return (
    <>
      <div className="min-h-screen relative select-none overflow-hidden text-white">
        <AnimatePresence>
          <Bg transitionData={transitionData} currentData={currentData} />
          <div className="absolute z-20 h-full w-full">
            <He />
            <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
              <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
                <Info
                  transitionData={transitionData}
                  currentData={currentData}
                />
              </div>
              <div className="col-span-6 flex flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
                <Sl data={data} />
                <C
                  currentData={currentData}
                  data={data}
                  transitionData={transitionData}
                  initialData={initialData}
                  handleData={setData}
                  handleTransitionData={setTransitionData}
                  handleCurrentData={setCurrentData}
                  dataSlice={dataSlice}
                />
              </div>
            </div>
          </div>
        </AnimatePresence>
      </div>
    </>
  );
};

const dataSlice = [
  {
    author: "lolo",
    tittle: "pedro",
    img: "/assets/images/home/best_books/book1.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi,rem magnam nesciunt minima placeat, itaque eum neque officiis unde,eaque optio ratione aliquid assumenda facere ab et quasi ducimus autdoloribus non numquam. Lorem ipsum dolor, sit amet consecteturadipisicing elit. Quisquam quidem perferendis ab doloribus ipsamratione fugit officia, rem necessitatibus, repellat itaque optio velitquia a corrupti cum impedit voluptates iure",
  },
  {
    author: "aaa",
    tittle: "pedro",
    img: "/assets/images/home/best_books/book2.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi,rem magnam nesciunt minima placeat, itaque eum neque officiis unde,eaque optio ratione aliquid assumenda facere ab et quasi ducimus autdoloribus non numquam. Lorem ipsum dolor, sit amet consecteturadipisicing elit. Quisquam quidem perferendis ab doloribus ipsamratione fugit officia, rem necessitatibus, repellat itaque optio velitquia a corrupti cum impedit voluptates iure",
  },
  {
    author: "vv",
    tittle: "pedro",
    img: "/assets/images/home/best_books/book3.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi,rem magnam nesciunt minima placeat, itaque eum neque officiis unde,eaque optio ratione aliquid assumenda facere ab et quasi ducimus autdoloribus non numquam. Lorem ipsum dolor, sit amet consecteturadipisicing elit. Quisquam quidem perferendis ab doloribus ipsamratione fugit officia, rem necessitatibus, repellat itaque optio velitquia a corrupti cum impedit voluptates iure",
  },
  {
    author: "bb",
    tittle: "pedro",
    img: "/assets/images/home/best_books/book1.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi,rem magnam nesciunt minima placeat, itaque eum neque officiis unde,eaque optio ratione aliquid assumenda facere ab et quasi ducimus autdoloribus non numquam. Lorem ipsum dolor, sit amet consecteturadipisicing elit. Quisquam quidem perferendis ab doloribus ipsamratione fugit officia, rem necessitatibus, repellat itaque optio velitquia a corrupti cum impedit voluptates iure",
  },
  {
    author: "nn",
    tittle: "pedro",
    img: "/assets/images/home/best_books/book1.png",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi,rem magnam nesciunt minima placeat, itaque eum neque officiis unde,eaque optio ratione aliquid assumenda facere ab et quasi ducimus autdoloribus non numquam. Lorem ipsum dolor, sit amet consecteturadipisicing elit. Quisquam quidem perferendis ab doloribus ipsamratione fugit officia, rem necessitatibus, repellat itaque optio velitquia a corrupti cum impedit voluptates iure",
  },
];

const initialData = dataSlice[0];
