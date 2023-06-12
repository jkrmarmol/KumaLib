import { SERVER_API } from "@env";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as FileSystem from 'expo-file-system';
import { shareAsync } from 'expo-sharing';
import type { IBookInitialState } from "../../typings/interfaces";

export const saved = createAsyncThunk(
  'book/saved',
  async () => {
    try {
      const userHeader = new Headers();
      userHeader.append("Cookie", `remix_userid=${await AsyncStorage.getItem('remix_userid')}; remix_userkey=${await AsyncStorage.getItem('remix_userkey')}`);
      const savedResponse = await fetch(`${SERVER_API}/eapi/user/book/saved`, {
        method: 'GET',
        headers: userHeader
      });
      const savedJson = await savedResponse.json();
      return savedJson;
    } catch (err) {
      console.log(err)
    }
  }
)

export const popular = createAsyncThunk(
  'book/popular',
  async () => {
    try {
      const userHeader = new Headers();
      userHeader.append("Cookie", `remix_userid=${await AsyncStorage.getItem('remix_userid')}; remix_userkey=${await AsyncStorage.getItem('remix_userkey')}`);
      const popularResponse = await fetch(`${SERVER_API}/eapi/book/most-popular`, {
        method: 'GET',
        headers: userHeader
      });
      const popularJson = await popularResponse.json();
      return popularJson;
    } catch (err) {
      console.log(err)
    }
  }
)

export const recently = createAsyncThunk(
  'book/recently',
  async () => {
    try {
      const userHeader = new Headers();
      userHeader.append("Cookie", `remix_userid=${await AsyncStorage.getItem('remix_userid')}; remix_userkey=${await AsyncStorage.getItem('remix_userkey')}`);
      const recentlyResponse = await fetch(`${SERVER_API}/eapi/book/recently`, {
        method: 'GET',
        headers: userHeader
      });
      const recentlyJson = await recentlyResponse.json();
      return recentlyJson;
    } catch (err) {
      console.log(err)
    }
  }
)

export const recommended = createAsyncThunk(
  'book/recommended',
  async () => {
    try {
      const userHeader = new Headers();
      userHeader.append("Cookie", `remix_userid=${await AsyncStorage.getItem('remix_userid')}; remix_userkey=${await AsyncStorage.getItem('remix_userkey')}`);
      const recommendedResponse = await fetch(`${SERVER_API}/eapi/user/book/recommended`, {
        method: 'GET',
        headers: userHeader
      });
      const recommendedJson = await recommendedResponse.json();
      return recommendedJson;
    } catch (err) {
      console.log(err)
    }
  }
)

export const search = createAsyncThunk(
  'book/search',
  async (title: any) => {
    try {
      const userHeader = new Headers();
      userHeader.append("Cookie", `remix_userid=${await AsyncStorage.getItem('remix_userid')}; remix_userkey=${await AsyncStorage.getItem('remix_userkey')}`);
      const searchResponse = await fetch(`${SERVER_API}/eapi/book/search?title=${title}`, {
        method: 'POST',
        headers: userHeader
      });
      const searchJson = await searchResponse.json();
      return searchJson;
    } catch (err) {
      console.log(err)
    }
  }
)

export const information = createAsyncThunk(
  'book/information',
  async ({ id, hash }: any) => {
    try {
      const userHeader = new Headers();
      userHeader.append("Cookie", `remix_userid=${await AsyncStorage.getItem('remix_userid')}; remix_userkey=${await AsyncStorage.getItem('remix_userkey')}`);
      const informationResponse = await fetch(`${SERVER_API}/eapi/book/${id}/${hash}`, {
        method: 'GET',
        headers: userHeader
      });
      const informationJson = await informationResponse.json();
      return informationJson;
    } catch (err) {
      console.log(err)
    }
  }
)

export const unsave = createAsyncThunk(
  'book/unsave',
  async ({ id }: any) => {
    try {
      const userHeader = new Headers();
      userHeader.append("Cookie", `remix_userid=${await AsyncStorage.getItem('remix_userid')}; remix_userkey=${await AsyncStorage.getItem('remix_userkey')}`);
      const unsaveResponse = await fetch(`${SERVER_API}/eapi/user/book/${id}/unsave`, {
        method: 'GET',
        headers: userHeader
      });
      const unsaveJson = await unsaveResponse.json();
      return unsaveJson;
    } catch (err) {
      console.log(err)
    }
  }
)

export const save = createAsyncThunk(
  'book/save',
  async ({ id }: any, thunkAPI) => {
    try {
      const userHeader = new Headers();
      userHeader.append("Cookie", `remix_userid=${await AsyncStorage.getItem('remix_userid')}; remix_userkey=${await AsyncStorage.getItem('remix_userkey')}`);
      const saveResponse = await fetch(`${SERVER_API}/eapi/user/book/${id}/save`, {
        method: 'GET',
        headers: userHeader
      });
      const saveJson = await saveResponse.json();
      return saveJson;
    } catch (err) {
      console.log(err)
    }
  }
)

export const download = createAsyncThunk(
  'book/download',
  async ({ title, extension, id, hash }: any) => {
    try {
      // const downloadResponse = await FileSystem.downloadAsync(
      //   `https://1lib.at/dl/${id}/${hash}`,
      //   FileSystem.documentDirectory + `${title}.${extension}`)
      // shareAsync(downloadResponse.uri)
      // return downloadResponse;

      const url = `${SERVER_API}/dl/${id}/${hash}`;
      const fileUri = FileSystem.cacheDirectory + `${title}.${extension}`;
      const downloadResumable = FileSystem.createDownloadResumable(url, fileUri);
      const { uri }: any = await downloadResumable.downloadAsync();
      console.log('File downloaded successfully:', uri);
      return 'hehe'
    } catch (err) {
      console.log(err)
    }
  }
)


let initialState: IBookInitialState = {
  saved: {
    response: null,
    status: ''
  },
  popular: {
    response: null,
    status: ''
  },
  recently: {
    response: null,
    status: ''
  },
  recommended: {
    response: null,
    status: ''
  },
  search: {
    response: null,
    status: ''
  },
  information: {
    response: null,
    status: ''
  },
  unsave: {
    response: null,
    status: ''
  },
  save: {
    response: null,
    status: ''
  },
  download: {
    response: null,
    status: ''
  }
}

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saved.pending, (state, action) => {
        state.saved.status = 'loading';
      })
      .addCase(saved.fulfilled, (state, { payload }) => {
        state.saved.status = 'ok';
        state.saved.response = payload;
      })
      .addCase(saved.rejected, (state, action) => {
        state.saved.status = 'failed';
      })
      .addCase(popular.pending, (state, action) => {
        state.popular.status = 'loading';
      })
      .addCase(popular.fulfilled, (state, { payload }) => {
        state.popular.status = 'ok';
        state.popular.response = payload;
      })
      .addCase(popular.rejected, (state, action) => {
        state.popular.status = 'failed';
      })
      .addCase(recently.pending, (state, action) => {
        state.recently.status = 'loading';
      })
      .addCase(recently.fulfilled, (state, { payload }) => {
        state.recently.status = 'ok';
        state.recently.response = payload;
      })
      .addCase(recently.rejected, (state, action) => {
        state.recently.status = 'failed';
      })
      .addCase(recommended.pending, (state, action) => {
        state.recommended.status = 'loading';
      })
      .addCase(recommended.fulfilled, (state, { payload }) => {
        state.recommended.status = 'ok';
        state.recommended.response = payload;
      })
      .addCase(recommended.rejected, (state, action) => {
        state.recommended.status = 'failed';
      })
      .addCase(search.pending, (state, action) => {
        state.search.status = 'loading';
      })
      .addCase(search.fulfilled, (state, { payload }) => {
        state.search.status = 'ok';
        state.search.response = payload;
      })
      .addCase(search.rejected, (state, action) => {
        state.search.status = 'failed';
      })
      .addCase(information.pending, (state, action) => {
        state.information.status = 'loading';
      })
      .addCase(information.fulfilled, (state, { payload }) => {
        state.information.status = 'ok';
        state.information.response = payload;
      })
      .addCase(information.rejected, (state, action) => {
        state.information.status = 'failed';
      })
      .addCase(unsave.pending, (state, action) => {
        state.unsave.status = 'loading';
      })
      .addCase(unsave.fulfilled, (state, { payload }) => {
        state.unsave.status = 'ok';
        state.unsave.response = payload;
      })
      .addCase(unsave.rejected, (state, action) => {
        state.unsave.status = 'failed';
      })
      .addCase(save.pending, (state, action) => {
        state.save.status = 'loading';
      })
      .addCase(save.fulfilled, (state, { payload }) => {
        state.save.status = 'ok';
        state.save.response = payload;
      })
      .addCase(save.rejected, (state, action) => {
        state.save.status = 'failed';
      })
      .addCase(download.pending, (state, action) => {
        state.download.status = 'loading';
      })
      .addCase(download.fulfilled, (state, { payload }) => {
        state.download.status = 'ok';
        state.download.response = payload;
      })
      .addCase(download.rejected, (state, action) => {
        state.download.status = 'failed';
      })
  }
})

export default bookSlice.reducer;