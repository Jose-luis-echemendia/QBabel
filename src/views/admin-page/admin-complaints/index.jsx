import { CustomTable } from "@/components/table";
import { Avatar, Typography } from "@material-tailwind/react";

const TABS = [];

const TABLE_HEAD = [
  "Comentario denunciado",
  "usuario denunciado",
  "usuario denunciante",
  "Causa",
  "estado",
  "Fecha",
  "Acciones",
];

const TABLE_ROWS = [
  {
    reportedComment: "Que fea es la vida",
    reportedUser: "Jose Luis Echemendia",
    reportingUser: "Roberto Lalo Pazón",
    causeComplaint:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloremque numquam ut illo sit rerum tempore voluptatem adipisci deserunt accusantium, aspernatur placeat, beatae quidem impedit explicabo perferendis dolores dolore reiciendis.",
    date: "19/09/17",
    state: "Analizado",
  },
];

const AdminComplaintsView = () => {
  const renderRow = ({ item, index, totalItems }) => {
    const { buyer, book, finalPayment, writerProfit, profit } = item;
    const isLast = index === totalItems - 1;
    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

    return (
      <tr key={buyer.name} className="hover:bg-gray-100 h-20">
        <td className={`${classes} `}>
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
        <td className={`${classes} `}>
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
        <td className={`${classes}`}>
          <div className="flex items-center gap-3 ml-1">
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
              className="font-normal"
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
              className="font-normal"
            >
              {profit}
            </Typography>
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

export default AdminComplaintsView;
