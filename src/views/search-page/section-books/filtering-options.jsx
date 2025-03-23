import { useParams } from "react-router-dom";
import {
  Checkbox,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

export const FilteringOptions = () => {
  const { criterion } = useParams();
  return (
    <div className="col-span-2 w-full h-full flex flex-col gap-2.5">
      <h6 className="text-3xl font-bold">&quot;{criterion}&quot;</h6>
      <span className="text-sm text-gray-600 -mt-1">395 resultados</span>
      <div className="flex flex-col gap-0.5 mt-5">
        <span className="text-xl font-bold">Capítulos</span>
        <small className="text-xs text-gray-600">
          Puedes seleccionar múltiples opciones
        </small>
        <List>
          <ListItem className="p-0">
            <label
              htmlFor="vertical-list-react"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  id="vertical-list-react"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">
                React.js
              </Typography>
            </label>
          </ListItem>
          <ListItem className="p-0">
            <label
              htmlFor="vertical-list-vue"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  id="vertical-list-vue"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">
                Vue.js
              </Typography>
            </label>
          </ListItem>
          <ListItem className="p-0">
            <label
              htmlFor="vertical-list-svelte"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Checkbox
                  id="vertical-list-svelte"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium">
                Svelte.js
              </Typography>
            </label>
          </ListItem>
        </List>
      </div>
    </div>
  );
};
