import { SERVER_API } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { IAuthenticationInitialState } from '../../typings/interfaces';


export const checkAuthenticated = createAsyncThunk(
  'authentication/checkAuthenticated',
  async () => {
    try {
      const userHeader = new Headers();
      userHeader.append("Cookie", `remix_userid=${AsyncStorage.getItem('remix_userid')}; remix_userkey=${AsyncStorage.getItem('remix_userkey')}`);
      const checkAuthResponse = await fetch(`${SERVER_API}/eapi/user/profile`, {
        method: 'GET',
        headers: userHeader
      })
      const checkAuthJson = await checkAuthResponse.json();
      return checkAuthJson;
    } catch (err) {
      console.log(err)
    }
  }
);

export const signInAccount = createAsyncThunk(
  'authentication/signInAccount',
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const signInResponse = await fetch(`${SERVER_API}/eapi/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
      });
      const signInJson = await signInResponse.json();
      return signInJson;
    } catch (err) {
      console.log(err)
    }
  }
)

let initialState: IAuthenticationInitialState = {
  signInAccount: {
    response: null,
    status: null
  },
  checkAuthenticated: {
    response: null,
    status: null
  }
}

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInAccount.pending, (state, action) => {
        state.signInAccount.status = 'loading';
      })
      .addCase(signInAccount.fulfilled, (state, { payload }) => {
        state.signInAccount.status = 'ok';
        state.signInAccount.response = payload;
      })
      .addCase(signInAccount.rejected, (state, action) => {
        state.signInAccount.status = 'failed';
      })
      .addCase(checkAuthenticated.pending, (state, action) => {
        state.checkAuthenticated.status = 'loading';
      })
      .addCase(checkAuthenticated.fulfilled, (state, { payload }) => {
        state.checkAuthenticated.status = 'ok';
        state.checkAuthenticated.response = payload;
      })
      .addCase(checkAuthenticated.rejected, (state, action) => {
        state.checkAuthenticated.status = 'failed';
      })
  }
})

export default authenticationSlice.reducer;