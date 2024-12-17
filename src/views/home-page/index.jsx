const HomeView = () => {
  return (
    <div className="w-screen min-h-screen relative py-10 flex flex-row">
      <img
        src="/assets/Vector1.svg"
        alt=""
        className="absolute left-0 bottom-0"
      />
      <img
        src="/assets/Vector2.svg"
        alt=""
        className="absolute right-0 bottom-0"
      />
      <div className="w-1/2">
        <h1 className="">Bienvenidos a QBabel</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          impedit exercitationem inventore praesentium labore pariatur.
          Molestiae corrupti quis odit aliquam, eveniet veritatis tempora ipsam,
          fugiat nesciunt animi vel, rem in.
        </p>
      </div>
      <div className="w-1/2 relative flex items-center justify-center">
        <img src="/assets/image1.png" alt="" className="z-10"/>
        <img src="/assets/image2.png" alt="" className=""/>
      </div>
    </div>
  );
};

export default HomeView;
