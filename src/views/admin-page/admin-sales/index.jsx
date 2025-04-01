import { Avatar, Typography } from "@material-tailwind/react";
import { CustomTable } from "@/components/table";
import { useState } from "react";
import { CustomModal } from "@/components/modal";
import { OverViewBook } from "../admin-books/overview-book";
import { HeroProfile } from "@/views/profile-page/hero-profile";

const TABS = [];

const TABLE_HEAD = [
  "Comprador",
  "Libro",
  "Autor",
  "Costo",
  "Pago final",
  "Ganancia escritor",
  "Ganancia",
  "Fecha",
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
    date: "19/09/17",
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
    date: "19/09/17",
  },
];

const AdminSalesView = () => {
  const [openOverViewBookModal, setOpenOverViewBookModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const [openBuyerProfileModal, setOpenBuyerProfileModal] = useState(false);
  const [selectedBuyerProfile, setSelectedBuyerProfile] = useState(null);

  const [openAuthorProfileModal, setOpenAuthorProfileModal] = useState(false);
  const [selectedAuthorProfile, setSelectedAuthorProfile] = useState(null);

  const renderRow = ({ item, index, totalItems }) => {
    const { buyer, book, finalPayment, writerProfit, profit, date } = item;
    const isLast = index === totalItems - 1;
    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

    return (
      <tr key={buyer.name} className="hover:bg-gray-100">
        <td
          className={`${classes} cursor-pointer`}
          onClick={() => {
            setSelectedBuyerProfile(buyer);
            setOpenBuyerProfileModal(true);
          }}
        >
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
        <td
          className={`${classes} cursor-pointer`}
          onClick={() => {
            setSelectedAuthorProfile(buyer);
            setOpenAuthorProfileModal(true);
          }}
        >
          <div className="flex items-center gap-3 -ml-2.5">
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
              className="font-normal ml-1.5"
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
              className="font-normal ml-1.5"
            >
              {profit}
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
              {date}
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
      {/* Modal de Hero buyer profile */}
      <CustomModal
        open={openBuyerProfileModal}
        handleOpen={() => setOpenBuyerProfileModal(false)} // Cierra el modal
        classNameDialog="custom-dialog-class" // Clases personalizadas
        classNameBody="custom-body-class"
        exitButton={true}
        size="xl"
      >
        <div className="flex flex-col gap-10">
          <HeroProfile />
          <div className="flex gap-10 items-center justify-center">
            <div className="w-[1px] bg-gray-400 -mx-3 h-14" />
            <div className="flex flex-col gap-2 items-center justify-center">
              <span className="flex gap-1.5 text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v7.5m2.25-6.466a9.016 9.016 0 0 0-3.461-.203c-.536.072-.974.478-1.021 1.017a4.559 4.559 0 0 0-.018.402c0 .464.336.844.775.994l2.95 1.012c.44.15.775.53.775.994 0 .136-.006.27-.018.402-.047.539-.485.945-1.021 1.017a9.077 9.077 0 0 1-3.461-.203M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
                <small className="text-lg">Compras</small>
              </span>
              <span className="text-xl font-bold">2</span>
            </div>
            <div className="w-[1px] bg-gray-400 -mx-3 h-14" />
          </div>
        </div>
      </CustomModal>
      {/* Modal de Hero author book profile */}
      <CustomModal
        open={openAuthorProfileModal}
        handleOpen={() => setOpenAuthorProfileModal(false)} // Cierra el modal
        classNameDialog="custom-dialog-class" // Clases personalizadas
        classNameBody="custom-body-class"
        exitButton={true}
        size="xl"
      >
        <div className="flex flex-col gap-10">
          <HeroProfile />
          <div className="flex gap-10 items-center justify-center">
            <div className="w-[1px] bg-gray-400 -mx-3 h-14" />
            <div className="flex flex-col gap-2 items-center justify-center">
              <span className="flex gap-1.5 text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v7.5m2.25-6.466a9.016 9.016 0 0 0-3.461-.203c-.536.072-.974.478-1.021 1.017a4.559 4.559 0 0 0-.018.402c0 .464.336.844.775.994l2.95 1.012c.44.15.775.53.775.994 0 .136-.006.27-.018.402-.047.539-.485.945-1.021 1.017a9.077 9.077 0 0 1-3.461-.203M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>

                <small className="text-lg">Ventas del item</small>
              </span>
              <span className="text-xl font-bold">10</span>
            </div>
            <div className="w-[1px] bg-gray-400 -mx-3 h-14" />
            <div className="flex flex-col gap-2 items-center justify-center">
              <span className="flex gap-1.5 text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v7.5m2.25-6.466a9.016 9.016 0 0 0-3.461-.203c-.536.072-.974.478-1.021 1.017a4.559 4.559 0 0 0-.018.402c0 .464.336.844.775.994l2.95 1.012c.44.15.775.53.775.994 0 .136-.006.27-.018.402-.047.539-.485.945-1.021 1.017a9.077 9.077 0 0 1-3.461-.203M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>

                <small className="text-lg">Ventas de otros items</small>
              </span>
              <span className="text-xl font-bold">10</span>
            </div>
            <div className="w-[1px] bg-gray-400 -mx-3 h-14" />
          </div>
        </div>
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
