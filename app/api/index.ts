import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Project, Review } from "../types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
  }),
  tagTypes: ["Project", "Review"],
  endpoints: (builder) => ({
    // Fetch all projects
    getProjects: builder.query<Project[], void>({
      query: () => "/projects",
      providesTags: ["Project"],
    }),

    // Update a project
    editProject: builder.mutation<void, { id: string }>({
      query: ({ id, ...props }) => ({
        url: `/projects/${id}?edit=true`,
        method: "DELETE",
        body: JSON.stringify(props),
      }),
      invalidatesTags: ["Project"],
    }),

    // Delete a project
    deleteProject: builder.mutation<void, string>({
      query: (id) => ({
        url: `/projects/${id}?delete=true`,
        method: "DELETE",
      }),
      invalidatesTags: ["Project"],
    }),

    // Fetch all reviews
    getReviews: builder.query<Review[], void>({
      query: () => "/reviews",
      providesTags: ["Review"],
    }),

    // Add a review
    addReview: builder.mutation<void, Review>({
      query: (review) => ({
        url: "/reviews",
        method: "POST",
        body: JSON.stringify(review),
      }),
      invalidatesTags: ["Review"],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useEditProjectMutation,
  useDeleteProjectMutation,
  useGetReviewsQuery,
  useAddReviewMutation,
} = apiSlice;
