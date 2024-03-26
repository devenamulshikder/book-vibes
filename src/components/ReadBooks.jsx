import { useLoaderData } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
const ReadBooks = () => {
  const topBooks = useLoaderData();

  return (
    <div className="space-y-5 lg:space-y-10">
      <h1 className="text-2xl lg:text-5xl font-bold text-center ">
        Top books of the year
      </h1>
      {topBooks.map((book) => {
        return (
          <div
            key={book.bookId}
            className="flex flex-col items-start gap-5 lg:gap-10 lg:flex-row border rounded-xl p-5 h-fit shadow-md"
          >
            <div className="px-5 lg:px-10 py-3 lg:py-10 bg-[#F3F3F3]">
              <img className="w-[150px] h-[200px]" src={book.image} />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold my-3 lg:my-5">
                {book.bookName}
              </h1>
              <p className="font-semibold text-sm lg:text-lg">
                By: {book.author}
              </p>
              <div className="flex gap-2 lg:gap-5 mt-5 text-[#23BE0A] :px-1 *:py-1 lg::px-3 lg:*:py-2 *:rounded-full *:bg-[#23BE0A0D] *:font-medium *:text-lg">
                <p className="text-black bg-none border-none px-0 py-0">
                  Tags:{" "}
                </p>
                <p>{book.tags[0]}</p>
                <p>{book.tags[1]}</p>
              </div>
              <div className="flex gap-3 mt-5 font-bold items-center">
                <p className="text-xl">Ratings: {book.rating}</p>
                <FaRegStar size={18} />
              </div>
              <button className="px-8 py-2 mt-3 text-white font-bold text-lg bg-[#23BE0A] hover:bg-[#22be0aac] hover:text-black rounded-lg">
                Add to Wishlist
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReadBooks;
