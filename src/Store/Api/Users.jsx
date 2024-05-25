import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

export const Users = createAsyncThunk(
  'users',
  async ({ gender, age, nat , name}, thunkAPI) => {
    const accessToken = sessionStorage.getItem('token');
    let apiUrl = 'https://randomuser.me/api/?results=100';

    if (gender && gender.trim() !== '') {
      apiUrl += `&gender=${gender}`;
    }
    if (age && age.trim() !== '') {
      apiUrl += `&age=${age}`;
    }
    if (nat && nat.trim() !== '') {
      apiUrl += `&nat=${nat}`;
    }
    if (nat && nat.trim() !== '') {
      apiUrl += `&name=${name}`;
    }

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${accessToken}`,
        },
      });
      let data = await response.json();
      console.log(data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue({
        error: 'Failed! To establish connection.',
      });
    }
  }
);
