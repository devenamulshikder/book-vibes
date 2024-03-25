import { useEffect, useState } from "react";

const BooksCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="mt-16">
      <h2 className="text-5xl font-bold text-center">Books</h2>

      <div className="grid grid-cols-3 gap-10">
        {data.map((book, idx) => {
          console.log(book);
          return (
            <div key={idx}>
              <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={book.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="flex gap-10 ml-2 mt-4">
                  <button className="bg-gray-100 font-semibold text-lg text-[#23BE0A] px-4 rounded-full">
                    {book.tags[0]}
                  </button>
                  <button className="bg-gray-100 font-semibold text-lg text-[#23BE0A] px-4 rounded-full">
                    {book.tags[1]}
                  </button>
                </div>
                <div className="card-body">
                  <h2 className="card-title">{book.bookName}</h2>
                  <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
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

export default BooksCard;