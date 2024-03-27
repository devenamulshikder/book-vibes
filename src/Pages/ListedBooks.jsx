import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadAllBooksShow from "../components/ReadAllBooksShow";
import WishlistBooks from "../components/WishlistBooks";
// import ReadBooks from "../components/ReadBooks";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const readGet = JSON.parse(localStorage.getItem("read")) || [];

  const wishlistGet = JSON.parse(localStorage.getItem("key")) || [];

  const [sortOption, setSortOption] = useState(null);

  const handleSort = (option) => {
    setSortOption(option);
  };
  const handleSortReadItem = () => {
    if (sortOption === "Rating") {
      return readGet.slice().sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "Number of Pages") {
      return readGet.slice().sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortOption === "Published year") {
      return readGet
        .slice()
        .sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return readGet;
  };



    const handleSortWishListItem = () => {
      if (sortOption === "Rating") {
        return wishlistGet.slice().sort((a, b) => b.rating - a.rating);
      } else if (sortOption === "Number of Pages") {
        return wishlistGet.slice().sort((a, b) => b.totalPages - a.totalPages);
      } else if (sortOption === "Published year") {
        return wishlistGet
          .slice()
          .sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      }
      return wishlistGet;
    };

  return (
    <div>
      <div>
        <div className="text-2xl lg:text-5xl font-bold work-sans bg-base-200 p-4 lg:p-8 lg:mt-8 mt-4 text-center mb-10">
          <h1>Books</h1>
        </div>
        <div className="text-center lg:mb-14 mb-8">
          <details className="dropdown ">
            <summary className="m-1 px-6 py-2 rounded-md bg-[#23BE0A] text-white">
              Sort By
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 work-sans">
              <li onClick={() => handleSort("Rating")}>
                <a>Rating</a>
              </li>
              <li onClick={() => handleSort("Number of Pages")}>
                <a>Number of Pages</a>
              </li>
              <li onClick={() => handleSort("Published year")}>
                <a>Published year</a>
              </li>
            </ul>
          </details>
        </div>
      </div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>
        <TabPanel>
          <ReadAllBooksShow
            handleSortReadItem={handleSortReadItem}
          ></ReadAllBooksShow>
        </TabPanel>
        <TabPanel>
          <WishlistBooks
            handleSortWishListItem={handleSortWishListItem}
          ></WishlistBooks>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
