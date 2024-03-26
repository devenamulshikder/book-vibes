import { useLoaderData } from "react-router-dom";
const BookShop = () => {
  const bookShop = useLoaderData();
  return (
    <div>
      <h1 className="text-2xl lg:text-5xl mt-5 lg:mt-10 text-center font-bold lg:mb-10">
        The Famous Book Shop
      </h1>

      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 p-5 lg:p-0 work-sans">
        {bookShop.map((shop, idx) => {
          const { name, location, picture, id, address, ratings } = shop;
          return (
            <div key={idx}>
              <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl">{name}</h2>
                  <p>
                    <span className="text-lg font-medium">Sl No:</span> {id}
                  </p>
                  <p>
                    <span className="text-lg font-medium">Address:</span>{" "}
                    {address}
                  </p>
                  <div className="">
                    <p>
                      <span className="text-lg font-medium">Rating:</span>{" "}
                      {ratings}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookShop;
