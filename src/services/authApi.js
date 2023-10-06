// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const authAPi = createApi({
//   reducerPath: "authApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api/v1/" }),
//   endpoints: (builder) => ({
//     createUser: builder.mutation({
//       query: (user) => ({
//         url: "/signup/",
//         method: "POST",
//         body: user,
//       }),
//     }),
//     verifyUser: builder.mutation({
//       query: (otp) => ({
//         url: `/verify-otp/${otp.username}/`,
//         method: "POST",
//         body: JSON.stringify({ otp_token: otp.otp_token }),
//       }),
//     }),
//   }),
// });

// export const { useCreateUserMutation, useVerifyUserMutation } = authAPi;
