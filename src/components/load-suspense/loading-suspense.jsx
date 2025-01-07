import "../../styles/components/LoadingSuspense.css"

export const LoadingSuspense = () => {
  return (
    <div className="w-full min-h-screen bg-[#F5F9FC] backdrop-blur-lg z-50 flex justify-center items-center">
      <div className="loader" />
    </div>
  );
};
