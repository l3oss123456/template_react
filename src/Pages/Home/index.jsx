import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { getAllProduct } from "../../Services/Axios/Api/product/product";
import ProductCard from "../../Components/ProductCard";
import Loading from "../../Components/Loading";

const Home = (props) => {
  const initialData = {
    listProduct: [],
    isLoading: false,
  };

  const language = useSelector((state) => state.language);
  const [listProduct, setListProduct] = useState(initialData.listProduct);
  const [isLoading, setIsLoading] = useState(initialData.isLoading);

  useMemo(() => {
    handleGetAllProduct({ params: {} });
  }, []);

  async function handleGetAllProduct({ params = {} }) {
    try {
      setIsLoading(true);
      const resp = await getAllProduct({ params: params });

      if (resp.data.code === 1000) {
        const data = resp.data.data.results;

        setListProduct(data);
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("error handleGetAllProduct: ", error);
    }
  }

  return (
    <div>
      <ProductCard listProduct={listProduct} />
      <Loading loading={isLoading} />
    </div>
  );
};
export default Home;
