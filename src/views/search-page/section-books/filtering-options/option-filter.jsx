import {
  Checkbox,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";

const theme = {
  checkbox: {
    defaultProps: {
      color: "blue",
      label: undefined,
      icon: undefined,
      ripple: true,
      className: "",
      disabled: false,
      containerProps: undefined,
      labelProps: undefined,
      iconProps: undefined,
    },
    valid: {
      colors: [
        "primary",
        "gray",
        "brown",
        "deep-orange",
        "orange",
        "amber",
        "yellow",
        "lime",
        "light-green",
        "green",
        "teal",
        "cyan",
        "light-blue",
        "blue",
        "indigo",
        "deep-purple",
        "purple",
        "pink",
        "red",
      ],
    },
    styles: {
      base: {
        root: {
          display: "inline-flex",
          alignItems: "items-center",
        },
        container: {
          position: "relative",
          display: "flex",
          alignItems: "items-center",
          cursor: "cursor-pointer",
          p: "p-3",
          borderRadius: "rounded-full",
        },
        input: {
          peer: "peer",
          position: "relative",
          appearance: "appearance-none",
          width: "w-5",
          height: "h-5",
          borderWidth: "border",
          borderRadius: "rounded-md",
          borderColor: "border-primary-200",
          cursor: "cursor-pointer",
          transition: "transition-all",
          before: {
            content: "before:content['']",
            display: "before:block",
            bg: "before:bg-red-500",
            width: "before:w-12",
            height: "before:h-12",
            borderRadius: "before:rounded-full",
            position: "before:absolute",
            top: "before:top-2/4",
            left: "before:left-2/4",
            transform: "before:-translate-y-2/4 before:-translate-x-2/4",
            opacity: "before:opacity-0 hover:before:opacity-10",
            transition: "before:transition-opacity",
          },
        },
        label: {
          color: "text-red-700",
          fontWeight: "font-light",
          userSelect: "select-none",
          cursor: "cursor-pointer",
          mt: "mt-px",
        },
        icon: {
          color: "text-white",
          position: "absolute",
          top: "top-2/4",
          left: "left-2/4",
          translate: "-translate-y-2/4 -translate-x-2/4",
          pointerEvents: "pointer-events-none",
          opacity: "opacity-0 peer-checked:opacity-100",
          transition: "transition-opacity",
        },
        disabled: {
          opacity: "opacity-50",
          pointerEvents: "pointer-events-none",
        },
      },
      colors: {
        "primary": {
          background: "checked:bg-primary",
          border: "checked:border-primary",
          before: "checked:before:bg-primary",
        },
      },
    },
  },
};

export const OptionFilter = ({ criterion, note, options }) => {
  return (
    <>
      <div className="flex flex-col gap-0.5 mt-5">
        <span className="text-xl font-bold">{criterion} </span>
        <small className="text-xs text-gray-600">{note}</small>
        <ThemeProvider value={theme}>
          <List>
            {options.map((option) => (
              <ListItem className="p-0 -ml-2" color="primary" key={option.id}>
                <label
                  htmlFor={option.criterion}
                  className="flex w-full cursor-pointer items-center px-3 py-2"
                >
                  <ListItemPrefix className="mr-3" color="primary">
                    <Checkbox
                      id={option.criterion}
                      ripple={false}
                      color="primary"
                      className="hover:before:opacity-0"
                      containerProps={{
                        className: "p-0",
                      }}
                    />
                  </ListItemPrefix>
                  <Typography color="primary" className="font-medium">
                    {option.criterion}
                  </Typography>
                </label>
              </ListItem>
            ))}
          </List>
        </ThemeProvider>
      </div>
    </>
  );
};
