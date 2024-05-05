import { createSlice } from "@reduxjs/toolkit";

const Reducer = createSlice({
  name: "uitc",
  initialState: {
    admins: {
      isPending: false,
      data: [],
      isError: false,
    },
    courses: {
      isPending: false,
      data: [],
      isError: false,
    },
    portfolio: {
      isPending: false,
      data: [],
      isError: false,
    },
    services: {
      isPending: false,
      data: [],
      isError: false,
    },
    team: {
      isPending: false,
      data: [],
      isError: false,
    },
  },
  reducers: {
    getAdmins() {},
    getCourses() {},
    getProjects() {},
    getServices() {},
    getTeam() {},
  },
});

export const { getAdmins, getCourses, getProjects, getServices, getTeam } =
  Reducer.actions;
export default Reducer.reducer;
