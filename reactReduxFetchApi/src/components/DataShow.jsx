import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../services/actions/fetchDataAction";

export default function dataShow() {
  const { data, error,  isLoading}  = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div>
      <h1>Todo List</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      <section>
        {data &&
          data.map((data) => {
            return (
              <p key={data.id}>{data.title}</p>
            )
          })}
      </section>
    </div>
  );
}
