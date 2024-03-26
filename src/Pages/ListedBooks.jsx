import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadAllBooksShow from "../components/ReadAllBooksShow";
// import ReadBooks from "../components/ReadBooks";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const readGet = JSON.parse(localStorage.getItem("read"))||[];
  

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
              <li>
                <a>Sort By</a>
              </li>
              <li>
                <a>Rating</a>
              </li>
              <li>
                <a>Number of Pages</a>
              </li>
              <li>
                <a>Published Date</a>
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
          <ReadAllBooksShow readGet={readGet}></ReadAllBooksShow>
        </TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
