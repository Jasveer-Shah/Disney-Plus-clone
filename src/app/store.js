import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/user/userSlice'

import movieSlice from '../features/movie/movieSlice'


export const store = configureStore({
  reducer: {
    movie: movieSlice,
    user:  userSlice
  },
});
