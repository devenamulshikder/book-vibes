/* eslint-disable react/prop-types */
import { GoLocation } from "react-icons/go";
import { FaUserInjured } from "react-icons/fa6";
import { RiPageSeparator } from "react-icons/ri";
import { Link } from "react-router-dom";

const ReadAllBooksShow = ({ handleSortReadItem }) => {
  return (
    <>
      {handleSortReadItem().map((read) => {
        return (
          <div
            key={read.bookId}
            className="flex flex-col items-start gap-5 lg:gap-16 lg:flex-row border rounded-xl p-5 h-fit shadow-md mb-4 lg:mb-8"
          >
            <div className="px-5 lg:px-10 py-3 lg:py-10 bg-[#F3F3F3]">
              <img className="w-[150px] h-[200px]" src={read.image} />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold my-3 lg:my-5">
                {read.bookName}
              </h1>
              <p className="font-semibold text-sm lg:text-lg work-sans opacity-80">
                By: {read.author}
              </p>

              {/* tag */}
              <div className="flex flex-col lg:flex-row gap-5 items-center mt-4">
                <div className="text-lg font-bold work-sans">Tag</div>
                <div className="bg-gray-100 font-semibold text-[#23BE0A] px-4 rounded-full work-sans">
                  #{read.tags[0]}
                </div>
                <div className="bg-gray-100 font-semibold text-[#23BE0A] px-4 rounded-full work-sans">
                  #{read.tags[1]}
                </div>
                <div className="flex gap-2 items-center work-sans font-medium opacity-80    ">
                  <div>
                    <GoLocation />
                  </div>
                  <div>Year of Publishing: {read.yearOfPublishing}</div>
                </div>
              </div>

              {/* page, and publisher */}

              <div className="flex  gap-3 items-center mt-4 work-sans font-medium opacity-80">
                <div>
                  <FaUserInjured />
                </div>
                <div>Publisher: {read.publisher}</div>
                <div>
                  <RiPageSeparator />
                </div>
                <div>Page: {read.totalPages}</div>
              </div>
              <div className="divider"></div>
              <div className="flex flex-col lg:flex-row gap-4">
                <div>
                  <Link className="bg-blue-100 text-blue-500 rounded-full px-4 work-sans">
                    Category: {read.category}
                  </Link>
                </div>
                <div>
                  <Link className="bg-orange-100 rounded-full px-4 work-sans text-orange-400">
                    Ratings: {read.rating}
                  </Link>
                </div>
                <div>
                  <Link
                    to={`/details-books/${read.bookId}`}
                    className="bg-[#23BE0A] rounded-full px-4 py-2 text-white work-sans"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ReadAllBooksShow