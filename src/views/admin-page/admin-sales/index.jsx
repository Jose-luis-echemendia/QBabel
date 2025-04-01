import { Avatar, Typography } from "@material-tailwind/react";
import { CustomTable } from "@/components/table";

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
    profit: 91.00
  },
];

const AdminSalesView = () => {
  const renderRow = ({ item, index, totalItems }) => {
    const { buyer, book, finalPayment, writerProfit, profit } = item;
    const isLast = index === totalItems - 1;
    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

    return (
      <tr key={buyer.name} className="hover:bg-gray-100 cursor-pointer">
        <td className={classes}>
          <div className="flex items-center gap-3 ml-2.5">
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
        <td className={classes}>
          <div className="flex items-center gap-3 ml-2.5">
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
          <div className="ml-2.5">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {isActive ? "✅" : "❌"}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {date}
          </Typography>
        </td>
        <td className={classes}>
          <div className="flex gap-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-black hover:text-gray-800"
            >
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
              <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-black hover:text-gray-800"
            >
              <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </td>
      </tr>
    );
  };

  return (
    <>
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
