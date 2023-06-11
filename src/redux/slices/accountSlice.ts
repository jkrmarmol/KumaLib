import { SERVER_API } from '@env'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { IAccountInitialState } from '../../typings/interfaces';

export const viewProfile = createAsyncThunk(
  'account/viewProfile',
  async () => {
    try {
      const userHeader = new Headers();
      userHeader.append("Cookie", `remix_userid=${AsyncStorage.getItem('remix_userid')}; remix_userkey=${AsyncStorage.getItem('remix_userkey')}`);
      const viewProfileResponse = await fetch(`${SERVER_API}/eapi/user/profile`, {
        method: 'GET',
        headers: userHeader
      })
      const viewProfileJson = await viewProfileResponse.json();
      return viewProfileJson;
    } catch (err) {
      console.log(err)
    }
  }
)

export const updateProfile = createAsyncThunk(
  'account/updateProfile',
  async ({ name }: any) => {
    try {
      const userHeader = new Headers();
      userHeader.append('Cookie', `remix_userid=${AsyncStorage.getItem('remix_userid')}; remix_userkey=${AsyncStorage.getItem('remix_userkey')}`);
      userHeader.append('Content-Type', 'application/x-www-form-urlencoded');
      const updateProfileResponse = await fetch(`${SERVER_API}/eapi/user/update`, {
        method: 'POST',
        headers: userHeader,
        body: `name=${encodeURIComponent(name)}`
      })
      const updateProfileJson = await updateProfileResponse.json();
      return updateProfileJson;
    } catch (err) {
      console.log(err)
    }
  }
)

export const updatePassword = createAsyncThunk(
  'account/updatePassword',
  async ({ password }: any) => {
    try {
      const userHeader = new Headers();
      userHeader.append('Cookie', `remix_userid=${AsyncStorage.getItem('remix_userid')}; remix_userkey=${AsyncStorage.getItem('remix_userkey')}`);
      userHeader.append('Content-Type', 'application/x-www-form-urlencoded');
      const updatePasswordResponse = await fetch(`${SERVER_API}/eapi/user/update`, {
        method: 'POST',
        headers: userHeader,
        body: `password=${encodeURIComponent(password)}`
      })
      const updatePasswordJson = await updatePasswordResponse.json();
      return updatePasswordJson;
    } catch (err) {
      console.log(err)
    }
  }
)

let initialState: IAccountInitialState = {
  viewProfile: {
    response: null,
    status: ''
  },
  updateProfile: {
    response: null,
    status: ''
  },
  updatePassword: {
    response: null,
    status: ''
  }
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(viewProfile.pending, (state, action) => {
        state.viewProfile.status = 'loading';
      })
      .addCase(viewProfile.fulfilled, (state, { payload }) => {
        state.viewProfile.status = 'ok';
        state.viewProfile.response = payload;
      })
      .addCase(viewProfile.rejected, (state, action) => {
        state.viewProfile.status = 'failed';
      })
      .addCase(updateProfile.pending, (state, action) => {
        state.updateProfile.status = 'loading';
      })
      .addCase(updateProfile.fulfilled, (state, { payload }) => {
        state.updateProfile.status = 'ok';
        state.updateProfile.response = payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.updateProfile.status = 'failed';
      })
      .addCase(updatePassword.pending, (state, action) => {
        state.updatePassword.status = 'loading';
      })
      .addCase(updatePassword.fulfilled, (state, { payload }) => {
        state.updatePassword.status = 'ok';
        state.updatePassword.response = payload;
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.updatePassword.status = 'failed';
      })
  }
})

export default accountSlice.reducer;