import { DescriptionBook } from "./description-book";
import { motion } from "framer-motion";

export const BestBooks = () => {
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
      <DescriptionBook />



      <div className="text-black w-96 h-96 bg-red-200 ">
        <div >
                <motion.nav
                    initial={false}
                    animate={{transition: { staggerChildren: 0.07, delayChildren: 0.2 }}}

                >
                    <Navigation />
                </motion.nav>
            </div>
      </div>
    </div>
  );
};


const Navigation = () => (
  <motion.ul variants={{transition: { staggerChildren: 0.07, delayChildren: 0.2 }}}>
      
      {[0, 1, 2, 3, 4].map((i) => (
            <MenuItem i={i} key={i} />
        ))}
      
  </motion.ul>
)
const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"]

const MenuItem = ({ i }) => {
  return (
      <motion.li
          variants={{
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 },
            },
        }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
      >
       <div className="border-2 border-solid border-red-300 p-3" />
       <div className="border-2 border-solid border-yellow-700 p-3" />
      </motion.li>
  )
}
