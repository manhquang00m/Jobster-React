import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

// Slice: mô tả 1 module trong state, dùng slice để chia nhỏ state

const initialState = {
    isLoading: false,
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
});

export default userSlice.reducer;
