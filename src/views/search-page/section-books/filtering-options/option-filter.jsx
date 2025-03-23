import {
  Checkbox,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";

const theme = {
  checkbox: {
    defaultProps: {
      color: "primary",
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
      colors: ["primary", "primary-100"],
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
        primary: {
          background: "checked:bg-primary",
          border: "checked:border-primary",
          before: "checked:before:bg-primary",
        },
        "primary-100": {
          background: "checked:bg-primary-100",
          border: "checked:border-primary-100",
          before: "checked:before:bg-primary-100",
        },
      },
    },
  },
};

export const OptionFilter = ({
  openAcc,
  handleOpenAcc,
  criterion,
  note = "Puedes seleccionar múltiples opciones",
  options,
}) => {
  return (
    <>
      <Accordion
        open={openAcc}
        icon={
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
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        }
      >
        <div className="flex flex-col gap-0.5 mt-5">
          <AccordionHeader
            onClick={handleOpenAcc}
            className="text-xl font-bold"
          >
            {criterion}
          </AccordionHeader>
          <AccordionBody>
            <small className="text-xs text-gray-600">{note}</small>
            <ThemeProvider value={theme}>
              <List>
                {options.map((option) => (
                  <ListItem
                    className="p-0 -ml-2"
                    color="primary-100"
                    key={option.id}
                  >
                    <label
                      htmlFor={option.criterion}
                      className="flex w-full cursor-pointer items-center px-3 py-2"
                    >
                      <ListItemPrefix className="mr-3" color="primary-100">
                        <Checkbox
                          id={option.criterion}
                          ripple={false}
                          color="primary-100"
                          className="hover:before:opacity-0"
                          containerProps={{
                            className: "p-0",
                          }}
                        />
                      </ListItemPrefix>
                      <Typography color="primary-100" className="font-medium">
                        {option.criterion}
                      </Typography>
                    </label>
                  </ListItem>
                ))}
              </List>
            </ThemeProvider>
          </AccordionBody>
        </div>
      </Accordion>
    </>
  );
};
