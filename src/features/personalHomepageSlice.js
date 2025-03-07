import { createSlice } from "@reduxjs/toolkit";

const PersonalHomePageSlice = createSlice({
    name: "personalHomepage",
    initialState: {
        repositories: null,
        status: "pending",
    },
    reducers: {
        fetchRepositories: () => ({
            status: "loading",
            repositories: null
        }),
        fetchRepositoriesSuccess: (_, { payload: repositories }) => ({
            status: "success",
            repositories,
        }),
        fetchRepositoriesError: () => ({
            status: "error",
            repositories: null
        }),
    },
});

export const {
    fetchRepositories,
    fetchRepositoriesSuccess,
    fetchRepositoriesError
} = PersonalHomePageSlice.actions;

const selectPersonalHomepageState = state => state.personalHomepage;

export const selectRepositories = state => selectPersonalHomepageState(state).repositories;
export const selectRepositoriesStatus = state => selectPersonalHomepageState(state).status;

export default PersonalHomePageSlice.reducer;