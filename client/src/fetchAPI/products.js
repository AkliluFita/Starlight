import { useContext, useEffect, useState } from "react";
import { Context } from "../contexAPI/stateProvider";
import httpCommon from "../httpCommon";

const useFetch = (url) => {
  const { user } = useContext(Context);

  const [products, setProducts] = useState(null || []);
  const [userData, setUserData] = useState(user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await httpCommon.get(url);

        setProducts(res.data.data);
      } catch (error) {
        console.log(error);
        setError(true);
      }

      setLoading(false);
    };

    fetchProducts();
  }, [url]);

  return { loading, products, error, userData };
};

export default useFetch;
