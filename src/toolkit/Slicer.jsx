import { createSlice } from "@reduxjs/toolkit";

const Reducer = createSlice({
  name: "uitc",
  initialState: {
    admins: [],
    courses: [],
    portfolio: [],
    services: [],
    team: [],
  },
  reducers: {
    getAdmins() {},
    addForm() {},
    editForm() {},
    deleteForm() {},
    getForm() {},
  },
});

export const { addForm, editForm, deleteForm, getForm } = Reducer.actions;
export default Reducer.reducer;
