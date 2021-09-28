import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getWeather = createAsyncThunk("", async () => {
  let ip = await axios.get("https://ipinfo.io/json/");
  if (ip) {
    const city = ip.data.city;
    const country = ip.data.country;
    ip = ip.data.loc;
    const loc = ip.split(",");
    const lat = loc[0];
    const lon = loc[1];
    let weather = await fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=35.6745&lon=139.6978&appid=f6e88f3fd5cd1506e66c52c3644c60fc"
    ).then((res) => res.json());

    return { city, country, current: weather.current, daily: weather.daily };
  }
  return null;
});

const fetchSlice = createSlice({
  name: "fetchData",
  initialState: {
    status: "idle",
    weather: [],
    error: ""
  },
  extraReducers: (builder) => {
    builder.addCase(getWeather.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.weather = action.payload;
    });
    builder.addCase(getWeather.rejected, (state, action) => {
      state.status = "rejected";
      state.weather = "anonymous";
    });
  }
});

export default fetchSlice;
export const selectWeather = (state) => state.weather;
export const selectStatus = (state) => state.status;
