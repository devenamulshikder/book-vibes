/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const DetailsBooks = () => {
  const [addToWishlist, setAddToWishlist] = useState(false);

  const [addRead, setAddRead] = useState(false);

  const { id } = useParams();
  const books = useLoaderData();
  const book = books.find((pera) => pera.bookId === parseInt(id));

  // wishlist function

  const handleWishlist = () => {
    if (!addToWishlist) {
     if (!addRead) {
        addToLocalStorage('key', book);
        setAddToWishlist(true);
        toast.success('This Book Added Wish listed Successfully')
     } else{
        toast.warning('Book is Already Read So You Can not wish listed added')
     }
    }   
    else {
      toast.warning("This Book Already Added in Wishlist!!");
    }
  };

  const addToLocalStorage = (key, book) => {
    const item = JSON.parse(localStorage.getItem(key)) || [];
    item.push(book);
    localStorage.setItem(key, JSON.stringify(item));
  };

  //   rad button function
  const handleRead = () => {
    if (!addRead) {
      addToRead("read", book);
      setAddRead(true);
      toast.success("Read Successes Fully");
    } else {
      toast.warning("Already Read This Book");
    }
  };

  const addToRead = (read, readBook) => {
    const toRead = JSON.parse(localStorage.getItem(read)) || [];
    toRead.push(readBook);
    localStorage.setItem(read, JSON.stringify(toRead));
  };

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
    <div className="flex lg:flex-row flex-col lg:gap-20 mt-4 lg:mt-16 p-4 lg:p-0">
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
        <div className="flex gap-6 work-sans text-lg">
          <button onClick={handleRead} className="btn">
            Read
          </button>
          <button
            onClick={handleWishlist}
            className="btn bg-[#59C6D2] text-white"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsBooks;
