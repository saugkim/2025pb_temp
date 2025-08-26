import { apiSlice } from './apiSlice';
const GOALS_URL = '/api/goals';

export const goalApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => ({
        url: `${GOALS_URL}`,
        method: 'GET',
      }),
    }),
    createGoal: builder.mutation({
      query: (data) => ({
        url: `${GOALS_URL}`,
        method: 'POST',
        body: data.content,
      }),
    }),
    updateGoal: builder.mutation({
      query: (data) => ({
        url: `${GOALS_URL}/${data.id}`,
        method: 'PUT',
        body: data.content,
      }),
    }),
    deleteGoal: builder.mutation({
      query: (data) => ({
        url: `${GOALS_URL}/${data.id}`,
        method: 'DELETE', 
      }),
    }),
  }),
});
  
export const {
  useGetAllQuery,
  useCreateGoalMutation,
  useUpdateGoalMutation,
  useDeleteGoalMutation
} = goalApiSlice;