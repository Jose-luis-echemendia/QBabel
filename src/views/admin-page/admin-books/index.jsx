import { CustomTablePagination } from "@/components/pagination/custom-pagination";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  CardBody,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import { CustomModal } from "@/components/modal/index";
import { useState } from "react";
import { OverViewBook } from "./overview-book";

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
  },
  {
    title: "La Edad de Oro",
    author: "Michael Levi",
    price: 1231.79,
    isComplete: true,
    date: "24/12/08",
    parts: 12,
    reviews: "21k",
    reads: "7.6M",
    sales: "23",
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
  },
  {
    title: "Los Anillos de Poder",
    author: "JRR Tolking",
    price: 621.88,
    isComplete: false,
    date: "04/10/21",
    parts: 12,
    reviews: "21k",
    reads: "7.6M",
    sales: "23",
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
  },
];

const AdminBooksView = () => {
  const [openOverViewBookModal, setOpenOverViewBookModal] = useState(false);

  return (
    <>
      {/* Modal de OverView Book */}
      <CustomModal
        open={openOverViewBookModal}
        handleOpen={() => setOpenOverViewBookModal(false)} // Cierra el modal
        classNameDialog="custom-dialog-class" // Clases personalizadas
        classNameBody="custom-body-class"
      >
        <OverViewBook />
      </CustomModal>
      <Card className="h-full w-full bg-gray-50 shadow-none ">
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none bg-gray-50"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Typography variant="h5" color="blue-gray">
              Libros registrados en QBabel
            </Typography>
            <Tabs value="all" className="w-full md:w-max">
              <TabsHeader>
                {TABS.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-0">
          <table className="mt-0 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(
                (
                  {
                    author,
                    title,
                    price,
                    isComplete,
                    date,
                    parts,
                    reviews,
                    reads,
                    sales,
                  },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr
                      key={author}
                      className="hover:bg-gray-100"
                      onClick={() => setOpenOverViewBookModal(true)}
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
                              {author}
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
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {date}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {parts}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {reviews}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {reads}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {sales}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <CustomTablePagination />
        </CardFooter>
      </Card>
    </>
  );
};

export default AdminBooksView;
