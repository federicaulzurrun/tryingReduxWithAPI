import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});


export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    // Your fetching logic here
    const response = await fetch('https://randomuser.me/api/?results=5');
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle the error
    throw new Error('Failed to fetch users.');
  }
});


export const { actions } = usersSlice;
export default usersSlice.reducer;
