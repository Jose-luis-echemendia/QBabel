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
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <small className="text-lg">Lecturas</small>
              </span>
              <span className="text-xl font-bold">2</span>
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
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <small className="text-lg">Votos</small>
              </span>
              <span className="text-xl font-bold">8</span>
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
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>

                <small className="text-lg">Capítulos</small>
              </span>
              <span className="text-xl font-bold">7</span>
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
                    d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                  />
                </svg>

                <small className="text-lg">Registrado</small>
              </span>
              <span className="text-xl font-bold">4</span>
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
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
                <small className="text-lg">Actualizado</small>
              </span>
              <span className="text-xl font-bold">45</span>
            </div>
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
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <small className="text-lg">Lecturas</small>
              </span>
              <span className="text-xl font-bold">2</span>
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
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
                <small className="text-lg">Votos</small>
              </span>
              <span className="text-xl font-bold">8</span>
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
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>

                <small className="text-lg">Capítulos</small>
              </span>
              <span className="text-xl font-bold">7</span>
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
                    d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                  />
                </svg>

                <small className="text-lg">Registrado</small>
              </span>
              <span className="text-xl font-bold">4</span>
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
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
                <small className="text-lg">Actualizado</small>
              </span>
              <span className="text-xl font-bold">45</span>
            </div>
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
