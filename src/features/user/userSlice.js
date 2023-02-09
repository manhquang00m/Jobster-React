import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import customFetch from "../../ultils/axios";
const initialState = {
    isLoading: false,
    user: null,
};

// Slice: mô tả 1 module trong state, dùng slice để chia nhỏ state

const userSlice = createSlice({
    name: 'user',
    initialState,
});

export default userSlice.reducer;

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (user, thunkAPI) => {
        try {

            console.log(user);

            const resp = await customFetch.post('/auth/testingRegister', user);
            console.log(resp);
        } catch (error) {
            console.log(error.response);
        }
    }
);
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user, thunkAPI) => {
        console.log(`Login User : ${user}`)
    }
);
