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
  Avatar,
} from "@material-tailwind/react";

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

const TABLE_HEAD = ["Nombre & imagen", "tipo", "Activo", "Fecha", "Acciones"];

const TABLE_ROWS = [
  {
    img: "/assets/images/home/categoria/Aventura.png",
    name: "Aventura",
    isActive: true,
    type: "Libro",
    date: "2025-03-29"
  },
  {
    img: "/assets/images/home/categoria/Romance.png",
    name: "Romance",
    isActive: true,
    type: "Libro",
    date: "2025-03-29"
  },
  {
    img: "/assets/images/home/categoria/Suspenso.png",
    name: "Suspenso",
    isActive: true,
    type: "Libro",
    date: "2025-03-29"
  },
  {
    img: "/assets/images/home/categoria/Juvenil.png",
    name: "Juvenil",
    isActive: true,
    type: "Libro",
    date: "2025-03-29"
  },
];

const AdminCategoriesView = () => {
  return (
    <Card className="h-full w-full bg-gray-50 shadow-none ">
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded-none bg-gray-50"
      >
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex gap-4 justify-center items-center">
            <Typography variant="h5" color="blue-gray">
              Etiquetas
            </Typography>
            
          </div>
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
      <CardBody className="px-0 min-h-[70vh]">
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
              ({ img, name, email, type, isActive, date }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name} className="hover:bg-gray-100 cursor-pointer">
                    <td className={classes}>
                      <div className="flex items-center gap-3 ml-2.5">
                        <Avatar src={img} alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {type}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="ml-2">{isActive ? "✅" : "❌"}</div>
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
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <CustomTablePagination />
      </CardFooter>
    </Card>
  );
};

export default AdminCategoriesView;
