import { Avatar, Typography } from "@material-tailwind/react";
import { CustomTable } from "@/components/table";
import { useState } from "react";
import { CustomModal } from "@/components/modal";
import { OverViewBook } from "../admin-books/overview-book";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Activas",
    value: "Activas",
  },
  {
    label: "Libros",
    value: "Libros",
  },
  {
    label: "Publicaciones",
    value: "Publicaciones",
  },
];

const TABLE_HEAD = [
  "Comprador",
  "Libro",
  "Autor",
  "Costo",
  "Pago final",
  "Ganancia escritor",
  "Ganancia",
];

const TABLE_ROWS = [
  {
    buyer: {
      name: "Jose Luis Echemendia Lopez",
      avatar: "/assets/images/avatar.jpeg",
    },
    book: {
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
    finalPayment: 22.11,
    writerProfit: 2.11,
    profit: 5.11,
  },
  {
    buyer: {
      name: "Jose Luis Echemendia Lopez",
      avatar: "/assets/images/avatar.jpeg",
    },
    book: {
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
    finalPayment: 1991.09,
    writerProfit: 1900.09,
    profit: 91.0,
  },
];

const AdminSalesView = () => {
  const [openOverViewBookModal, setOpenOverViewBookModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const renderRow = ({ item, index, totalItems }) => {
    const { buyer, book, finalPayment, writerProfit, profit } = item;
    const isLast = index === totalItems - 1;
    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

    return (
      <tr key={buyer.name} className="hover:bg-gray-100">
        <td className={classes}>
          <div className="flex items-center gap-3 ml-1">
            <Avatar src={buyer.avatar} alt={buyer.name} size="sm" />
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {buyer.name}
            </Typography>
          </div>
        </td>
        <td
          className={`${classes} cursor-pointer`}
          onClick={() => {
            setSelectedBook(book);
            setOpenOverViewBookModal(true);
          }}
        >
          <div className="flex items-center gap-3 ml-1">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {book.title}
            </Typography>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {book.license}
            </Typography>
            discount or free
          </div>
        </td>
        <td className={classes}>
          <div className="flex items-center gap-3 ml-1">
            <Avatar src={book.author.avatar} alt={buyer.name} size="sm" />
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {book.author.name}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="ml-1">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {book.price}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="ml-1">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {finalPayment}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {writerProfit}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {profit}
            </Typography>
          </div>
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
      <CustomTable
        title={"Ventas"}
        TABS={TABS}
        TABLE_HEAD={TABLE_HEAD}
        TABLE_ROWS={TABLE_ROWS}
        renderRow={renderRow}
      />
    </>
  );
};

export default AdminSalesView;
