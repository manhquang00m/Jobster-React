import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import customFetch from "../../ultils/axios";
import { getUserFromLocalStorage, addUserToLocalStorage, removeUserFromLocalStorage } from "../../ultils/localStorage";
export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (user, thunkAPI) => {
        try {
            const resp = await customFetch.post('/auth/register', user)
            return resp.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg)
        }
    }
);


export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user, thunkAPI) => {
        try {
            const resp = await customFetch.post('/auth/login', user)
            return resp.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.msg)
        }
    }
);

const initialState = {
    isLoading: false,
    user: getUserFromLocalStorage(),
    isSidebarOpen: true,
};

// Slice: mô tả 1 module trong state, dùng slice để chia nhỏ state

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.user = null
            removeUserFromLocalStorage()
            state.isSidebarOpen = true

        },
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        }
    },
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.user = payload.user
            toast.success(`Hello ${payload.user.name}`)
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.isLoading = false
            toast.error(payload)
        },
        [loginUser.pending]: (state) => {
            state.isLoading = true
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.user = payload.user
            addUserToLocalStorage(payload.user)
            toast.success(`Welcome ${payload.user.name}`)
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.isLoading = false
            toast.error(payload)
        }
    }
});
export const { logoutUser, toggleSidebar } = userSlice.actions
export default userSlice.reducer;
