import { Project } from "@/app/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ["Project"],
  endpoints: (builder) => ({
    // send password
    setAuth: builder.mutation<boolean, string>({
      query: (pswd) => ({
        url: "auth",
        method: "POST",
        body: JSON.stringify(pswd),
      }),
    }),

    // Fetch all projects
    getProjects: builder.query<Project[], void>({
      query: () => "/projects",
      providesTags: ["Project"],
    }),

    // Update a project
    editProject: builder.mutation<void, { id: string }>({
      query: ({ id, ...props }) => ({
        url: `/projects/${id}?edit=true`,
        method: "PUT",
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

    // Add a project
    addProject: builder.mutation({
      query: (project) => ({
        url: "/projects",
        method: "POST",
        body: JSON.stringify(project),
      }),
      invalidatesTags: ["Project"],
    }),
  }),
});

export const {
  useSetAuthMutation,
  useAddProjectMutation,
  useDeleteProjectMutation,
  useEditProjectMutation,
  useGetProjectsQuery,
} = apiSlice;
