import {
  Checkbox,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";

export const OptionFilter = ({ criterion, note, options }) => {
  return (
    <>
      <div className="flex flex-col gap-0.5 mt-5">
        <span className="text-xl font-bold">{criterion} </span>
        <small className="text-xs text-gray-600">{note}</small>
        <List>
          {options.map((option) => (
            <ListItem className="p-0" key={option.id}>
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
                  {option.criterion}
                </Typography>
              </label>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};
