import { CustomModal } from "@/components/modal/index";
import { useState } from "react";
import { OverViewBook } from "./overview-book";
import { CustomTable } from "@/components/table";

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
    author: "John Michael",
    price: 20.2,
    isComplete: true,
    date: "23/04/18",
    parts: 12,
    reviews: "21k",
    reads: "7.6M",
    sales: "23",
    covers: [
      "/assets/images/covers/10.1.jpg",
      "/assets/images/covers/10.2.jpg",
    ],
  },
  {
    title: "Lascivia",
    author: "Alexa Liras",
    price: 1.99,
    isComplete: false,
    date: "23/04/18",
    parts: 12,
    reviews: "21k",
    reads: "7.6M",
    sales: "23",
    covers: [
      "/assets/images/covers/10.1.jpg",
      "/assets/images/covers/10.2.jpg",
    ],
  },
  {
    title: "A Través de mi Ventana",
    author: "Laurent Perrier",
    price: 109.99,
    isComplete: false,
    date: "19/09/17",
    parts: 12,
    reviews: "21k",
    reads: "7.6M",
    sales: "23",
    covers: [
      "/assets/images/covers/11.1.jpg",
      "/assets/images/covers/11.2.jpg",
      "/assets/images/covers/11.3.jpg",
    ],
  },
  {
    title: "La Edad de Oro",
    author: "José Julian Martí Pérez",
    price: 1231.79,
    isComplete: true,
    date: "24/12/08",
    parts: 12,
    reviews: "21k",
    reads: "7.6M",
    sales: "23",
    covers: [
      "/assets/images/covers/12.1.jpg",
      "/assets/images/covers/12.2.jpg",
    ],
  },
  {
    title: "Introducción a la Programación en Python",
    author: "Richard Gran",
    price: 22.0,
    isComplete: false,
    date: "04/10/21",
    parts: 12,
    reviews: "21k",
    reads: "7.6M",
    sales: "23",
    covers: [
      "/assets/images/covers/12.1.jpg",
      "/assets/images/covers/12.2.jpg",
    ],
  },
  {
    title: "Había Una Vez",
    author: "Richard Gran",
    price: 0.0,
    isComplete: false,
    date: "04/10/21",
    parts: 12,
    reviews: "21k",
    reads: "7.6M",
    sales: "23",
    covers: [
      "/assets/images/covers/10.1.jpg",
      "/assets/images/covers/10.2.jpg",
    ],
  },
  {
    title: "El señor de los anillos. Los Anillos de Poder",
    author: "JRR Tolking",
    price: 621.88,
    isComplete: false,
    date: "04/10/21",
    parts: 12,
    reviews: "21k",
    reads: "7.6M",
    sales: "23",
    covers: [
      "/assets/images/covers/11.1.jpg",
      "/assets/images/covers/11.2.jpg",
      "/assets/images/covers/11.3.jpg",
    ],
  },
  {
    title: "Psicología del Éxito",
    author: "Mario Luna",
    price: 0.0,
    isComplete: false,
    date: "04/10/21",
    parts: 12,
    reviews: "21k",
    reads: "7.6M",
    sales: "23",
    covers: [
      "/assets/images/covers/10.1.jpg",
      "/assets/images/covers/10.2.jpg",
    ],
  },
  {
    title: "Hábitos Átomicos",
    author: "Richard Gran",
    price: 30.0,
    isComplete: false,
    date: "04/10/21",
    parts: 12,
    reviews: "21k",
    reads: "7.6M",
    sales: "23",
    covers: [
      "/assets/images/covers/12.1.jpg",
      "/assets/images/covers/12.2.jpg",
    ],
  },
  {
    title: "Padre Rico, Padre Pobre",
    author: "Robert Kiyosaki",
    price: 0.0,
    isComplete: false,
    date: "04/10/21",
    parts: 12,
    reviews: "21k",
    reads: "7.6M",
    sales: "23",
    covers: [
      "/assets/images/covers/10.1.jpg",
      "/assets/images/covers/10.2.jpg",
    ],
  },
];

const AdminBooksView = () => {
  const [openOverViewBookModal, setOpenOverViewBookModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

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
        TABS={TABS}
        TABLE_HEAD={TABLE_HEAD}
        TABLE_ROWS={TABLE_ROWS}
        usingRowModal={true}
        handleSelectedRow={setSelectedBook}
        handleOpenModal={setOpenOverViewBookModal}
      />
    </>
  );
};

export default AdminBooksView;
