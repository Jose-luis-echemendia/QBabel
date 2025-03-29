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

export const CustomTable = ({
  title,
  addItem = false,
  handleAddItem,
  TABS,
  TABLE_HEAD,
  TABLE_ROWS,
  renderRow,
}) => {
  return (
    <>
      <Card className="h-full w-full bg-gray-50 shadow-none ">
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none bg-gray-50"
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex gap-4 justify-center items-center">
              <Typography variant="h5" color="blue-gray">
                {title}
              </Typography>
              {addItem && (
                <button onClick={() => handleAddItem()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 text-black hover:cursor-pointer"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              )}
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
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className={`border-y border-blue-gray-100 bg-blue-gray-50/50 p-4`}
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className={`font-normal w-fit leading-none opacity-70 ${
                        index !== 0 && "cursor-pointer"
                      }`}
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((item, index) =>
                renderRow({
                  item,
                  index,
                  totalItems: TABLE_ROWS.length,
                })
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