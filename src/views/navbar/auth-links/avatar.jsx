import { Avatar as Av, Typography } from "@material-tailwind/react";

export const Avatar = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <Av
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
        />
        <div>
          <Typography variant="h6">Tania Andrew</Typography>
          <Typography variant="small" color="gray" className="font-normal">
            Web Developer
          </Typography>
        </div>
      </div>
    </>
  );
};
