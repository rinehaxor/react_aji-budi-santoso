import { useState, useEffect } from 'react';

export default function useFetch() {
  const [data, setData] = useState([]);

  const getAllData = async () => {
    const res = await fetch('https://642bc710208dfe25471f3f59.mockapi.io/products');
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return data;
}
