import { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./components/Pagination";
import { PAGE_SIZE } from "./constants";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const handlePageChange = (n) => {
    setCurrentPage(n);
  };
  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const goToPreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const fetchData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products?limit=97");
      const json = await data.json();
      setProducts(json.products);
    } catch (error) {
      console.log("Error fetching products: ", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Pagination</h1>
      {products.length === 0 ? (
        <h1>No products found</h1>
      ) : (
        <Pagination
          goToNextPage={goToNextPage}
          goToPreviousPage={goToPreviousPage}
          handlePageChange={handlePageChange}
          noOfPages={noOfPages}
          currentPage={currentPage}
          products={products}
          start={start}
          end={end}
        />
      )}
    </div>
  );
}

export default App;
