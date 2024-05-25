import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './Reducers/UserReducer'; 

const store = configureStore({
    reducer: {
        users: userReducer
    }
});

export default store;
