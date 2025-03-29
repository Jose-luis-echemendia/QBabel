import { CustomModal } from "@/components/modal/index";
import { useState } from "react";
import { OverViewBook } from "./overview-book";
import { CustomTable } from "@/components/table";
import { Typography } from "@material-tailwind/react";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Completados",
    value: "Completados",
  },
  {
    label: "Incompletos",
    value: "Incompletos",
  },
  {
    label: "Gratis",
    value: "Gratis",
  },
  {
    label: "Pagos",
    value: "Pagos",
  },
];

const TABLE_HEAD = [
  "title & author",
  "Precio",
  "Completado",
  "Fecha",
  "Capítulos",
  "Lecturas",
  "Comentarios",
  "Ventas",
];

const TABLE_ROWS = [
  {
    title: "El Principito",
    author: {
      name: "John Michael",
      avatar: "/assets/images/avatar.jpeg",
    },
    sumary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus culpa error quisquam cum modi, obcaecati veniam, veritatis fugit laboriosam dicta est tempore dolores, libero nisi esse soluta neque. Expedita, sapiente.",
    price: 20.2,
    isComplete: true,
    isFree: false,
    isDiscounted: true,
    discount: "50%",
    date: "23/04/18",
    parts: 12,
    reviews: "21k",
    reads: "7.6M",
    sales: "23",
    license: "© All Rights Reserved",
    createdAt: "2025-01-23",
    updatedAt: "2025-01-23",
    covers: [
      "/assets/images/covers/10.1.jpg",
      "/assets/images/covers/10.2.jpg",
    ],
    categories: [
      {
        id: 1,
        name: "Ficticio",
      },
      {
        id: 2,
        name: "Aventura",
      },
      {
        id: 3,
        name: "Infantil",
      },
      {
        id: 4,
        name: "Ciencia Ficción",
      },
      {
        id: 5,
        name: "Romántico",
      },
      {
        id: 6,
        name: "Drama",
      },
      {
        id: 7,
        name: "Terror",
      },
      {
        id: 8,
        name: "Acción",
      },
      {
        id: 9,
        name: "Horror",
      },
      {
        id: 10,
        name: "Suspenso",
      },
      {
        id: 11,
        name: "Comedia",
      },
      {
        id: 12,
        name: "Deportiva",
      },
      {
        id: 13,
        name: "Biografía",
      },
      {
        id: 14,
        name: "Historia",
      },
      {
        id: 15,
        name: "Policial",
      },
    ],
  },
  {
    title: "Lascivia",
    author: {
      name: "Eva Muñoz",
      avatar: "/assets/images/avatar.jpeg",
    },
    sumary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus culpa error quisquam cum modi, obcaecati veniam, veritatis fugit laboriosam dicta est tempore dolores, libero nisi esse soluta neque. Expedita, sapiente.",
    price: 1.99,
    isFree: false,
    isDiscounted: true,
    discount: "88%",
    isComplete: false,
    date: "23/04/18",
    parts: 12,
    reviews: "21k",
    reads: "7.6M",
    sales: "23",
    license: "© All Rights Reserved",
    createdAt: "2025-01-23",
    updatedAt: "2025-01-23",
    covers: [
      "/assets/images/covers/10.1.jpg",
      "/assets/images/covers/10.2.jpg",
    ],
    categories: [
      {
        id: 1,
        name: "Ficticio",
      },
      {
        id: 2,
        name: "Aventura",
      },
      {
        id: 3,
        name: "Infantil",
      },
      {
        id: 4,
        name: "Ciencia Ficción",
      },
      {
        id: 5,
        name: "Romántico",
      },
      {
        id: 6,
        name: "Drama",
      },
      {
        id: 7,
        name: "Terror",
      },
      {
        id: 8,
        name: "Acción",
      },
      {
        id: 9,
        name: "Horror",
      },
      {
        id: 10,
        name: "Suspenso",
      },
      {
        id: 11,
        name: "Comedia",
      },
      {
        id: 12,
        name: "Deportiva",
      },
      {
        id: 13,
        name: "Biografía",
      },
      {
        id: 14,
        name: "Historia",
      },
      {
        id: 15,
        name: "Policial",
      },
    ],
  },
  {
    title: "A Través de mi Ventana",
    author: {
      name: "Laritza bacallao",
      avatar: "/assets/images/avatar.jpeg",
    },
    sumary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus culpa error quisquam cum modi, obcaecati veniam, veritatis fugit laboriosam dicta est tempore dolores, libero nisi esse soluta neque. Expedita, sapiente.",
    price: 109.99,
    isFree: false,
    isDiscounted: false,
    discount: "50%",
    isComplete: false,
    date: "19/09/17",
    parts: 12,
    reviews: "21k",
    reads: "7.6M",
    sales: "23",
    license: "© All Rights Reserved",
    createdAt: "2025-01-23",
    updatedAt: "2025-01-23",
    covers: [
      "/assets/images/covers/11.1.jpg",
      "/assets/images/covers/11.2.jpg",
      "/assets/images/covers/11.3.jpg",
    ],
    categories: [
      {
        id: 1,
        name: "Ficticio",
      },
      {
        id: 2,
        name: "Aventura",
      },
      {
        id: 3,
        name: "Infantil",
      },
      {
        id: 4,
        name: "Ciencia Ficción",
      },
      {
        id: 5,
        name: "Romántico",
      },
      {
        id: 6,
        name: "Drama",
      },
      {
        id: 7,
        name: "Terror",
      },
      {
        id: 8,
        name: "Acción",
      },
      {
        id: 9,
        name: "Horror",
      },
      {
        id: 10,
        name: "Suspenso",
      },
      {
        id: 11,
        name: "Comedia",
      },
      {
        id: 12,
        name: "Deportiva",
      },
      {
        id: 13,
        name: "Biografía",
      },
      {
        id: 14,
        name: "Historia",
      },
      {
        id: 15,
        name: "Policial",
      },
    ],
  },
  {
    title: "La Edad de Oro",
    author: {
      name: "José Julian Martí Pérez",
      avatar: "/assets/images/avatar.jpeg",
    },
    sumary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus culpa error quisquam cum modi, obcaecati veniam, veritatis fugit laboriosam dicta est tempore dolores, libero nisi esse soluta neque. Expedita, sapiente.",
    price: 1231.79,
    isFree: false,
    isDiscounted: false,
    discount: "50%",
    isComplete: true,
    date: "24/12/08",
    parts: 12,
    reviews: "21k",
    reads: "7.6M",
    sales: "23",
    license: "© All Rights Reserved",
    createdAt: "2025-01-23",
    updatedAt: "2025-01-23",
    covers: [
      "/assets/images/covers/12.1.jpg",
      "/assets/images/covers/12.2.jpg",
    ],
    categories: [
      {
        id: 1,
        name: "Ficticio",
      },
      {
        id: 2,
        name: "Aventura",
      },
      {
        id: 3,
        name: "Infantil",
      },
      {
        id: 4,
        name: "Ciencia Ficción",
      },
      {
        id: 5,
        name: "Romántico",
      },
      {
        id: 6,
        name: "Drama",
      },
      {
        id: 7,
        name: "Terror",
      },
      {
        id: 8,
        name: "Acción",
      },
      {
        id: 9,
        name: "Horror",
      },
      {
        id: 10,
        name: "Suspenso",
      },
      {
        id: 11,
        name: "Comedia",
      },
      {
        id: 12,
        name: "Deportiva",
      },
      {
        id: 13,
        name: "Biografía",
      },
      {
        id: 14,
        name: "Historia",
      },
      {
        id: 15,
        name: "Policial",
      },
    ],
  },
  {
    title: "Introducción a la Programación en Python",
    author: {
      name: "Richard Gran",
      avatar: "/assets/images/avatar.jpeg",
    },
    sumary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus culpa error quisquam cum modi, obcaecati veniam, veritatis fugit laboriosam dicta est tempore dolores, libero nisi esse soluta neque. Expedita, sapiente.",
    price: 22.0,
    isFree: true,
    isDiscounted: false,
    discount: "50%",
    isComplete: false,
    date: "04/10/21",
    parts: 12,
    reviews: "21k",
    reads: "7.6M",
    sales: "23",
    license: "© All Rights Reserved",
    createdAt: "2025-01-23",
    updatedAt: "2025-01-23",
    covers: [
      "/assets/images/covers/12.1.jpg",
      "/assets/images/covers/12.2.jpg",
    ],
    categories: [
      {
        id: 1,
        name: "Ficticio",
      },
      {
        id: 2,
        name: "Aventura",
      },
      {
        id: 3,
        name: "Infantil",
      },
      {
        id: 4,
        name: "Ciencia Ficción",
      },
      {
        id: 5,
        name: "Romántico",
      },
      {
        id: 6,
        name: "Drama",
      },
      {
        id: 7,
        name: "Terror",
      },
      {
        id: 8,
        name: "Acción",
      },
      {
        id: 9,
        name: "Horror",
      },
      {
        id: 10,
        name: "Suspenso",
      },
      {
        id: 11,
        name: "Comedia",
      },
      {
        id: 12,
        name: "Deportiva",
      },
      {
        id: 13,
        name: "Biografía",
      },
      {
        id: 14,
        name: "Historia",
      },
      {
        id: 15,
        name: "Policial",
      },
    ],
  },
  {
    title: "Había Una Vez",
    author: {
      name: "Lolo el Gran Tipo",
      avatar: "/assets/images/avatar.jpeg",
    },
    sumary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus culpa error quisquam cum modi, obcaecati veniam, veritatis fugit laboriosam dicta est tempore dolores, libero nisi esse soluta neque. Expedita, sapiente.",
    price: 0.0,
    isFree: true,
    isDiscounted: false,
    discount: "50%",
    isComplete: false,
    date: "04/10/21",
    parts: 12,
    reviews: "21k",
    reads: "7.6M",
    sales: "23",
    license: "© All Rights Reserved",
    createdAt: "2025-01-23",
    updatedAt: "2025-01-23",
    covers: [
      "/assets/images/covers/10.1.jpg",
      "/assets/images/covers/10.2.jpg",
    ],
    categories: [
      {
        id: 1,
        name: "Ficticio",
      },
      {
        id: 2,
        name: "Aventura",
      },
      {
        id: 3,
        name: "Infantil",
      },
      {
        id: 4,
        name: "Ciencia Ficción",
      },
      {
        id: 5,
        name: "Romántico",
      },
      {
        id: 6,
        name: "Drama",
      },
      {
        id: 7,
        name: "Terror",
      },
      {
        id: 8,
        name: "Acción",
      },
      {
        id: 9,
        name: "Horror",
      },
      {
        id: 10,
        name: "Suspenso",
      },
      {
        id: 11,
        name: "Comedia",
      },
      {
        id: 12,
        name: "Deportiva",
      },
      {
        id: 13,
        name: "Biografía",
      },
      {
        id: 14,
        name: "Historia",
      },
      {
        id: 15,
        name: "Policial",
      },
    ],
  },
  {
    title: "El señor de los anillos. Los Anillos de Poder",
    author: {
      name: "JRR Tolking",
      avatar: "/assets/images/avatar.jpeg",
    },
    sumary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus culpa error quisquam cum modi, obcaecati veniam, veritatis fugit laboriosam dicta est tempore dolores, libero nisi esse soluta neque. Expedita, sapiente.",
    price: 621.88,
    isFree: false,
    isDiscounted: false,
    discount: "50%",
    isComplete: false,
    date: "04/10/21",
    parts: 12,
    reviews: "21k",
    reads: "7.6M",
    sales: "23",
    license: "© All Rights Reserved",
    createdAt: "2025-01-23",
    updatedAt: "2025-01-23",
    covers: [
      "/assets/images/covers/11.1.jpg",
      "/assets/images/covers/11.2.jpg",
      "/assets/images/covers/11.3.jpg",
    ],
    categories: [
      {
        id: 1,
        name: "Ficticio",
      },
      {
        id: 2,
        name: "Aventura",
      },
      {
        id: 3,
        name: "Infantil",
      },
      {
        id: 4,
        name: "Ciencia Ficción",
      },
      {
        id: 5,
        name: "Romántico",
      },
      {
        id: 6,
        name: "Drama",
      },
      {
        id: 7,
        name: "Terror",
      },
      {
        id: 8,
        name: "Acción",
      },
      {
        id: 9,
        name: "Horror",
      },
      {
        id: 10,
        name: "Suspenso",
      },
      {
        id: 11,
        name: "Comedia",
      },
      {
        id: 12,
        name: "Deportiva",
      },
      {
        id: 13,
        name: "Biografía",
      },
      {
        id: 14,
        name: "Historia",
      },
      {
        id: 15,
        name: "Policial",
      },
    ],
  },
  {
    title: "Psicología del Éxito",
    author: {
      name: "Mario Luna",
      avatar: "/assets/images/avatar.jpeg",
    },
    sumary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus culpa error quisquam cum modi, obcaecati veniam, veritatis fugit laboriosam dicta est tempore dolores, libero nisi esse soluta neque. Expedita, sapiente.",
    price: 0.0,
    isFree: true,
    isDiscounted: false,
    discount: "50%",
    isComplete: false,
    date: "04/10/21",
    parts: 12,
    reviews: "21k",
    reads: "7.6M",
    sales: "23",
    license: "© All Rights Reserved",
    createdAt: "2025-01-23",
    updatedAt: "2025-01-23",
    covers: [
      "/assets/images/covers/10.1.jpg",
      "/assets/images/covers/10.2.jpg",
    ],
    categories: [
      {
        id: 1,
        name: "Ficticio",
      },
      {
        id: 2,
        name: "Aventura",
      },
      {
        id: 3,
        name: "Infantil",
      },
      {
        id: 4,
        name: "Ciencia Ficción",
      },
      {
        id: 5,
        name: "Romántico",
      },
      {
        id: 6,
        name: "Drama",
      },
      {
        id: 7,
        name: "Terror",
      },
      {
        id: 8,
        name: "Acción",
      },
      {
        id: 9,
        name: "Horror",
      },
      {
        id: 10,
        name: "Suspenso",
      },
      {
        id: 11,
        name: "Comedia",
      },
      {
        id: 12,
        name: "Deportiva",
      },
      {
        id: 13,
        name: "Biografía",
      },
      {
        id: 14,
        name: "Historia",
      },
      {
        id: 15,
        name: "Policial",
      },
    ],
  },
  {
    title: "Hábitos Átomicos",
    author: {
      name: "John Michael",
      avatar: "/assets/images/avatar.jpeg",
    },
    sumary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus culpa error quisquam cum modi, obcaecati veniam, veritatis fugit laboriosam dicta est tempore dolores, libero nisi esse soluta neque. Expedita, sapiente.",
    price: 30.0,
    isFree: false,
    isDiscounted: true,
    discount: "20%",
    isComplete: false,
    date: "04/10/21",
    parts: 12,
    reviews: "21k",
    reads: "7.6M",
    sales: "23",
    license: "© All Rights Reserved",
    createdAt: "2025-01-23",
    updatedAt: "2025-01-23",
    covers: [
      "/assets/images/covers/12.1.jpg",
      "/assets/images/covers/12.2.jpg",
    ],
    categories: [
      {
        id: 1,
        name: "Ficticio",
      },
      {
        id: 2,
        name: "Aventura",
      },
      {
        id: 3,
        name: "Infantil",
      },
      {
        id: 4,
        name: "Ciencia Ficción",
      },
      {
        id: 5,
        name: "Romántico",
      },
      {
        id: 6,
        name: "Drama",
      },
      {
        id: 7,
        name: "Terror",
      },
      {
        id: 8,
        name: "Acción",
      },
      {
        id: 9,
        name: "Horror",
      },
      {
        id: 10,
        name: "Suspenso",
      },
      {
        id: 11,
        name: "Comedia",
      },
      {
        id: 12,
        name: "Deportiva",
      },
      {
        id: 13,
        name: "Biografía",
      },
      {
        id: 14,
        name: "Historia",
      },
      {
        id: 15,
        name: "Policial",
      },
    ],
  },
  {
    title: "Padre Rico, Padre Pobre",
    author: {
      name: "Robert Kiyosaki",
      avatar: "/assets/images/avatar.jpeg",
    },
    sumary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus culpa error quisquam cum modi, obcaecati veniam, veritatis fugit laboriosam dicta est tempore dolores, libero nisi esse soluta neque. Expedita, sapiente.",
    price: 0.0,
    isFree: true,
    isDiscounted: false,
    discount: "50%",
    isComplete: false,
    date: "04/10/21",
    parts: 12,
    reviews: "21k",
    reads: "7.6M",
    sales: "23",
    license: "© All Rights Reserved",
    createdAt: "2025-01-23",
    updatedAt: "2025-01-23",
    covers: [
      "/assets/images/covers/10.1.jpg",
      "/assets/images/covers/10.2.jpg",
    ],
    categories: [
      {
        id: 1,
        name: "Ficticio",
      },
      {
        id: 2,
        name: "Aventura",
      },
      {
        id: 3,
        name: "Infantil",
      },
      {
        id: 4,
        name: "Ciencia Ficción",
      },
      {
        id: 5,
        name: "Romántico",
      },
      {
        id: 6,
        name: "Drama",
      },
      {
        id: 7,
        name: "Terror",
      },
      {
        id: 8,
        name: "Acción",
      },
      {
        id: 9,
        name: "Horror",
      },
      {
        id: 10,
        name: "Suspenso",
      },
      {
        id: 11,
        name: "Comedia",
      },
      {
        id: 12,
        name: "Deportiva",
      },
      {
        id: 13,
        name: "Biografía",
      },
      {
        id: 14,
        name: "Historia",
      },
      {
        id: 15,
        name: "Policial",
      },
    ],
  },
];

const AdminBooksView = () => {
  const [openOverViewBookModal, setOpenOverViewBookModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const renderRow = ({ item, index, totalItems }) => {
    const {
      author,
      title,
      price,
      isComplete,
      date,
      parts,
      reviews,
      reads,
      sales,
    } = item;
    const isLast = index === totalItems - 1;
    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

    return (
      <tr
        key={title}
        className="hover:bg-gray-100 cursor-pointer"
        onClick={() => {
          setSelectedBook(item);
          setOpenOverViewBookModal(true);
        }}
      >
        <td className={classes}>
          <div className="flex items-center gap-3 ml-2.5">
            <div className="flex flex-col line-clamp-1 w-full">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-semibold"
              >
                {title}
              </Typography>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium opacity-70"
              >
                {author.name}
              </Typography>
            </div>
          </div>
        </td>
        <td className={classes}>
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal inline-flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              {price}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="ml-5">{isComplete ? "✅" : "❌"}</div>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {date}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {parts}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {reviews}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {reads}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {sales}
          </Typography>
        </td>
      </tr>
    );
  };

  return (
    <>
      {/* Modal de OverView Book */}
      <CustomModal
        open={openOverViewBookModal}
        handleOpen={() => setOpenOverViewBookModal(false)} // Cierra el modal
        classNameDialog="custom-dialog-class" // Clases personalizadas
        classNameBody="custom-body-class"
        exitButton={true}
        size="xl"
      >
        <OverViewBook book={selectedBook} />
      </CustomModal>
      {/* TABLE Books */}
      <CustomTable
        title={"Libros registrados en QBabel"}
        TABS={TABS}
        TABLE_HEAD={TABLE_HEAD}
        TABLE_ROWS={TABLE_ROWS}
        renderRow={renderRow}
        usingRowModal={true}
        handleSelectedRow={setSelectedBook}
        handleOpenModal={() => setOpenOverViewBookModal(true)}
      />
    </>
  );
};

export default AdminBooksView;
