import { configureStore } from '@reduxjs/toolkit';

import movieSlice from '../features/movie/movieSlice';
import userSilce from '../features/auth/userSlice'

export const store = configureStore({
  reducer: {
    movie: movieSlice,
    user: userSilce
  },
});
