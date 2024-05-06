import { createSlice } from "@reduxjs/toolkit";

const MainSlice = createSlice({
  name: "mainSlice",
  initialState: {
    admins: {
      isPending: false,
      data: [
        {
          id: 1,
          name: "Suhrob",
          email: "suhrobrahmatullayev973132@gmail.com",
        },
        {
          id: 2,
          name: "admin",
          email: "admin@gmail.com",
        },
      ],
      isError: false,
    },
    courses: {
      isPending: false,
      data: [
        {
          id: 1,
          title: "Front-end Bootcamp",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBw7UqNme-O1YloiLl6kDB3565u8pCSQ2L-38r9tnQQ&s",
          price: "5.600.000 so'm (700.000 so'm 8 oy)",
        },
        {
          id: 2,
          title: "Front-end",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBw7UqNme-O1YloiLl6kDB3565u8pCSQ2L-38r9tnQQ&s",
          price: "3.600.000 so'm (600.000 so'm 6 oy)",
        },
        {
          id: 3,
          title: "Back-end",
          image:
            "https://logopond.com/logos/a2dc2d250540d76f8c8d8b2b213836ec.png",
          price: "3.600.000 so'm (600.000 so'm 6 oy)",
        },
      ],
      isError: false,
    },
    portfolio: {
      isPending: false,
      data: [
        {
          id: 1,
          title: "Samo",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrLWZJ09YHkLszI7tQ0FKZyXxq5VsafSehBHwGv4B_Ag&s",
          category: "Web Site",
        },
        {
          id: 2,
          title: "3D Hero model",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeUuEDOxSHxrGZP9bJAg7dYITro57iYslHyr6y_aEyuQ&s",
          category: "3D Design",
        },
      ],
      isError: false,
    },
    services: {
      isPending: false,
      data: [
        {
          id: 1,
          title: "Web Site",
          description: "Web Site reactJs",
          category: "Web",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1lIW8AHUPFm0qvY_0-nL7KNRtOChCUbAW2org57Kl-g&s",
        },
        {
          id: 2,
          title: "3D Design",
          description: "3D Design",
          category: "3D",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1lIW8AHUPFm0qvY_0-nL7KNRtOChCUbAW2org57Kl-g&s",
        },
        {
          id: 3,
          title: "3D Design",
          description: "3D Design",
          category: "3D",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1lIW8AHUPFm0qvY_0-nL7KNRtOChCUbAW2org57Kl-g&s",
        },
        {
          id: 4,
          title: "3D Design",
          description: "3D Design",
          category: "3D",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1lIW8AHUPFm0qvY_0-nL7KNRtOChCUbAW2org57Kl-g&s",
        },
      ],
      isError: false,
    },
    team: {
      isPending: false,
      data: [
        {
          id: 1,
          name: "Suhrob",
          image:
            "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
          job: "Back-end developer",
        },
        {
          id: 2,
          name: "Otabek",
          image:
            "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
          job: "Front-end/Fullstack developer",
        },
        {
          id: 3,
          name: "Javohir",
          image:
            "https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg",
          job: "Designer",
        },
      ],
      isError: false,
    },
  },
  reducers: {
    getAdmins() {},
    getCourses() {},
    getProjects() {},
    getServices() {},
    getTeam() {},

    updateAdminInfo: (state, { payload }) => {
      state = {
        ...state,
        admins: {
          ...state.admins,
          data: state.admins.data.map((admin) =>
            admin.id === payload.id
              ? { ...admin, name: payload.name, email: payload.email }
              : admin
          ),
        },
      };
    },
  },
});

export const {
  getAdmins,
  getCourses,
  getProjects,
  getServices,
  getTeam,
  updateAdminInfo,
} = MainSlice.actions;
export default MainSlice.reducer;
