import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={user:[]};

const userSlice=createSlice({
    name:"user",
    initialState: initialState,
    reducers:{
        setInitial:(state, action)=>{
            if(state.user.length===0){
            state.user= action.payload;
            console.log(state.user);
            }
        },
        add:(state, action)=>{
            state.user.push(
            {id:action.payload.id,name:action.payload.name,
            phone:action.payload.phone}
            )
        },
        delete:(state, action)=>{
            state.user.splice(action.payload,1);
        },
        update:(state, action)=>{
            state.user[action.payload.id]={id:action.payload.id, name:action.payload.name,
                phone:action.payload.phone}
        }
    }
});

const userReducer= userSlice.reducer;
export const userSelector= (state)=>state.userReducer;
export const userAction= userSlice.actions;

export const store= configureStore({
    reducer: {userReducer}
})

export const getInitialState=createAsyncThunk("user/getInitialState",async(arg,thunkAPI)=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((Res)=>Res.json())
    .then((json)=>thunkAPI.dispatch(userAction.setInitial(json)));
})
