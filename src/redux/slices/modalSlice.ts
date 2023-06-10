import { createSlice } from "@reduxjs/toolkit";
import ErrorSign from '../../assets/images/undraw_access_denied_re_awnf.png';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    toggle: false,
    data: {
      message: null,
      description: null,
      images: ErrorSign
    }
  },
  reducers: {
    modalOpen: (state, { payload }) => {
      return {
        toggle: true,
        data: {
          message: payload.message,
          description: payload.description,
          images: payload.images
        }
      };
    },
    modalClose: (state) => {
      return {
        toggle: !state.toggle,
        data: {
          message: null,
          description: null,
          images: ErrorSign
        }
      }
    }
  }
})

export const { modalOpen, modalClose } = modalSlice.actions;
export default modalSlice.reducer;