import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

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

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
        {data.map((book, idx) => {
          // console.log(book);
          return (
            <Link to={`/details-books/${book.bookId}`} key={idx}>
              <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={book.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="flex gap-10 ml-2 mt-4">
                  <button className="bg-gray-100 font-semibold text-lg text-[#23BE0A] px-4 rounded-full work-sans">
                    {book.tags[0]}
                  </button>
                  <button className="bg-gray-100 font-semibold text-lg text-[#23BE0A] px-4 rounded-full work-sans">
                    {book.tags[1]}
                  </button>
                </div>
                <div className="card-body">
                  <h2 className="card-title text-2xl">{book.bookName}</h2>
                  <p className="work-sans opacity-70 font-medium">
                    By: {book.author}
                  </p>
                  <div className="divider"></div>
                  <div className="flex justify-between text-xl work-sans">
                    <p>{book.category}</p>
                    <span className="flex items-center gap-2">
                      {book.rating}
                      <CiStar></CiStar>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BooksCard;
