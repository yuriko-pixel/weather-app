
import * as React from "react";
import { getWeather, selectWeather, selectStatus } from "./reducer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

// const dispatch = useDispatch();

export default function App() {
  const dispatch = useDispatch();
  const weather = useSelector(selectWeather);
  const status = useSelector(selectStatus);

  const jikan = moment().format("MMM Do, h:mm A");
  useEffect(() => {
    dispatch(getWeather());
    // console.log(weather.current.weather[0].main);
  }, [dispatch]);

  if (status === "fulfilled") {
    return (
      <>
        {jikan}
        {/* {weather.map((item) => (
           <p>{item.weather[0].main}</p>
        ))} */}
      </>
    );
  } else if (status === "idle") {
    return <></>;
  }
  return <div></div>;
}
