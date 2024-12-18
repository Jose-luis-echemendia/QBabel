const HomeView = () => {
  return (
    <div className="w-screen min-h-screen relative py-10 flex flex-row">
      <img
        src="/assets/Vector1.svg"
        alt=""
        className="absolute left-0 top-[35px] w-[155px]"
      />
      <img
        src="/assets/Vector2.svg"
        alt=""
        className="absolute right-0 top-[300px] w-[350px]"
      />
      <div className="w-1/2">
        <h1 className="">Bienvenidos a QBabel</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          impedit exercitationem inventore praesentium labore pariatur.
          Molestiae corrupti quis odit aliquam, eveniet veritatis tempora ipsam,
          fugiat nesciunt animi vel, rem in.
        </p>
        <span>te apas</span>
        <button>sdf</button>
        <button>sdf</button>
      </div>
      <div className="w-1/2 relative flex items-center justify-center">
        <img src="/assets/image1.png" alt="" className="absolute z-10 w-[500px] h-[500px]" />
        <img src="/assets/image2.png" alt="" className="absolute z-0 w-[700px] h-[700px]" />
      </div>
    </div>
  );
};

export default HomeView;
