import { createSlice } from "@reduxjs/toolkit";
import {
  getProfilesThunk,
  getProfileByIdThunk,
  updateProfileThunk,
  updatePartialProfileThunk,
  getAuthenticatedUserProfileThunk,
  getProfileByUsernameThunk
} from "./thunks";

const initialState = {
  profile: null,
  count: 0,
  next: null,
  previous: null,
  profiles: [],
  loading: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // **Get profiles reducers**
      .addCase(getProfilesThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfilesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.profiles = action.payload.results;
        state.count = action.payload.count;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
      })
      .addCase(getProfilesThunk.rejected, (state) => {
        state.loading = false;
      })

      // **Get profile by id reducers**
      .addCase(getProfileByIdThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfileByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(getProfileByIdThunk.rejected, (state) => {
        state.loading = false;
      })

      // **Get authenticated user profile reducers**
      .addCase(getAuthenticatedUserProfileThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAuthenticatedUserProfileThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(getAuthenticatedUserProfileThunk.rejected, (state) => {
        state.loading = false;
      })

      // **Get profile by username reducers**
      .addCase(getProfileByUsernameThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProfileByUsernameThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      }
      )
      .addCase(getProfileByUsernameThunk.rejected, (state) => {
        state.loading = false;
      }
      )

      // **Update profile reducers**
      .addCase(updateProfileThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfileThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
        state.profiles = state.profiles.map((profile) => {
          if (profile.id === action.payload.id) return action.payload;
          return profile;
        });
      })
      .addCase(updateProfileThunk.rejected, (state) => {
        state.loading = false;
      })

      // **Update partial profile reducers**
      .addCase(updatePartialProfileThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePartialProfileThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
        state.profiles = state.profiles.map((profile) => {
          if (profile.id === action.payload.id) return action.payload;
          return profile;
        });
      })
      .addCase(updatePartialProfileThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default profileSlice.reducer;
