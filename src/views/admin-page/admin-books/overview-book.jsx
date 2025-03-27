export const OverViewBook = ({ book }) => {
  return (
    <>
      <section className="p-5">
        <div className="text-center w-56">
          <div className="mx-auto my-4 w-48">
            <h3 className="text-lg font-black text-gray-800">
              this item is already in cart
            </h3>
            <p className="text-sm text-gray-500">
              Do you want to check the shopping cart?
            </p>
          </div>
          <div className="flex gap-4">
            <button className="btn btn-danger w-full">Continue</button>
            <button className="btn btn-light w-full">Cancel</button>
          </div>
        </div>
      </section>
    </>
  );
};
