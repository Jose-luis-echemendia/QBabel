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
    reportedUser: {
      name: "Jose Luis Echemendia López",
      avatar: "/assets/images/avatar.jpeg",
    },
    reportingUser: {
      name: "Roberto Lazo Pozo",
      avatar: "/assets/images/avatar.jpeg",
    },
    causeComplaint:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic doloremque numquam ut illo sit rerum tempore voluptatem adipisci deserunt accusantium, aspernatur placeat, beatae quidem impedit explicabo perferendis dolores dolore reiciendis.",
    date: "19/09/17",
    state: "Analizado",
  },
];

const AdminComplaintsView = () => {
  const renderRow = ({ item, index, totalItems }) => {
    const {
      reportedComment,
      reportedUser,
      reportingUser,
      causeComplaint,
      date,
    } = item;
    const isLast = index === totalItems - 1;
    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

    return (
      <tr key={reportedComment} className="hover:bg-gray-100 h-20">
        <td className={`${classes} `}>
          <div className="flex items-center gap-3 ml-1">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {reportedComment}
            </Typography>
          </div>
        </td>
        <td className={`${classes}`}>
          <div className="flex items-center gap-3 ml-1">
            <Avatar
              src={reportedUser.avatar}
              alt={reportedUser.name}
              size="sm"
            />
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {reportedUser.name}
            </Typography>
          </div>
        </td>
        <td className={`${classes} `}>
          <div className="flex items-center gap-3 ml-1">
            <Avatar
              src={reportingUser.avatar}
              alt={reportingUser.name}
              size="sm"
            />
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {reportingUser.name}
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
