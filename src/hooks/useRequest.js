import React, { useState, useEffect } from "react";
import { api } from "../services/api";

export function useRequest(url, body, options) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  function createData() {
    api
      .post(url, body, { params: options })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert(err.message);
      });
  }
  async function getData() {
    await api
      .get(url, { params: options })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  useEffect(() => {
    getData();
  }, [data]);
  return { data, isLoading, createData };
};
