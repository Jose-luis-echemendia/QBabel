import { CustomTablePagination } from "@/components/pagination/custom-pagination";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
  Input
} from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const AdminSalesView = () => {
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
                Ventas
              </Typography>
            </div>

            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody>sdf</CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <CustomTablePagination />
        </CardFooter>
      </Card>
    </>
  );
};

export default AdminSalesView;
