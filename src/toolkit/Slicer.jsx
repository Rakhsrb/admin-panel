import { createSlice } from "@reduxjs/toolkit";

const MainSlice = createSlice({
  name: "mainSlice",
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
    userData: {
      isLogin: JSON.parse(localStorage.getItem("token")) || false,
      isPending: false,
      isError: false,
    },
  },
  reducers: {
    getAdminsPending(state) {
      state.admins.isPending = true;
      state.admins.isError = false;
    },
    getAdminsSuccess(state, { payload }) {
      state.admins.isPending = false;
      state.admins.data = payload;
    },
    getAdminsError(state) {
      state.admins.isPending = false;
      state.admins.isError = true;
    },
    getCoursesPending(state) {
      state.courses.isPending = true;
      state.courses.isError = false;
    },
    getCoursesSuccess(state, { payload }) {
      state.courses.isPending = false;
      state.courses.data = payload;
    },
    getCoursesError(state) {
      state.courses.isPending = false;
      state.courses.isError = true;
    },
    getProjectsPending(state) {
      state.portfolio.isPending = true;
      state.portfolio.isError = false;
    },
    getProjectsSuccess(state, { payload }) {
      state.portfolio.isPending = false;
      state.portfolio.data = payload;
    },
    getProjectsError(state) {
      state.portfolio.isPending = false;
      state.portfolio.isError = true;
    },
    getServicesPending(state) {
      state.services.isPending = true;
      state.services.isError = false;
    },
    getServicesSuccess(state, { payload }) {
      state.services.isPending = false;
      state.services.data = payload;
    },
    getServicesError(state) {
      state.services.isPending = false;
      state.services.isError = true;
    },
    getTeamPending(state) {
      state.team.isPending = true;
      state.team.isError = false;
    },
    getTeamSuccess(state, { payload }) {
      state.team.isPending = false;
      state.team.data = payload;
    },
    getTeamError(state) {
      state.team.isPending = false;
      state.team.isError = true;
    },
    checkLogin(state, { payload }) {
      state.userData.isLogin = payload;
    },
    checkLoginPending(state) {
      state.userData.isPending = true;
      state.userData.isError = false;
    },
    checkLoginError(state) {
      state.userData.isPending = false;
      state.userData.isError = true;
    },
  },
});

export const {
  getAdminsPending,
  getAdminsSuccess,
  getAdminsError,
  getCoursesPending,
  getCoursesSuccess,
  getCoursesError,
  getProjectsPending,
  getProjectsSuccess,
  getProjectsError,
  getServicesPending,
  getServicesSuccess,
  getServicesError,
  getTeamPending,
  getTeamSuccess,
  getTeamError,
  checkLogin,
  checkLoginPending,
  checkLoginError,
} = MainSlice.actions;
export default MainSlice.reducer;
