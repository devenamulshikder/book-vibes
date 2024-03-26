/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from "react-router-dom";

const DetailsBooks = () => {
  const { id } = useParams();
  const books = useLoaderData();
  const book = books.find((pera) => pera.bookId === parseInt(id));
  console.log(book);
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    tags,
    category,
    publisher,
    rating,
    review,
    yearOfPublishing,
  } = book;
  return (
    <div className="flex lg:gap-20 mt-16">
      <div className=" flex flex-1 justify-center items-center bg-base-200 p-10 rounded-xl">
        <img className="w-6/12" src={image} alt="" />
        {/* image */}
      </div>

      <div className="flex-1 space-y-3">
        {/* book name and author */}
        <h1 className="lg:text-3xl font-semibold">{bookName}</h1>
        <p className="work-sans">By: {author}</p>

        {/* <div className="divider">fiction</div> */}
        <hr />
        <p className="work-sans">{category}</p>
        <hr />
        {/* <div className="divider"></div> */}
        <h2 className="work-sans">
          <span className="text-lg font-bold">Review:</span>
          {review}
        </h2>
        <div className="flex gap-5 items-center">
          <div className="text-lg font-bold work-sans">Tag</div>
          <div className="bg-gray-100 font-semibold text-[#23BE0A] px-4 rounded-full work-sans">
            #{tags[0]}
          </div>
          <div className="bg-gray-100 font-semibold text-[#23BE0A] px-4 rounded-full work-sans">
            #{tags[1]}
          </div>
        </div>
        <hr />
        <div className="flex gap-10 work-sans">
          <div className="opacity-80">
            <div>Number of Pages:</div>
            <div>Publisher:</div>
            <div>Year of Publishing:</div>
            <div>Rating:</div>
          </div>
          <div className=" font-semibold">
            <div>{totalPages}</div>
            <div>{publisher}</div>
            <div>{yearOfPublishing}</div>
            <div>{rating}</div>
          </div>
        </div>
        <div className="flex gap-6 work-sans">
          <button className="btn">Read</button>
          <button className="btn btn-info text-black">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsBooks;
