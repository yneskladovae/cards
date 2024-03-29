import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
  // name должен быть уникальным
  // name будет использоваться в качетве приставки (redux ducks)
  name: "app",
  // Инициализационный стейт
  initialState: {
    error: null as string | null,
    isLoading: true,
    isAppInitialized: false,
  },
  // reducers состоит из подредьюсеров, каждый из которых эквивалентен одному оператору case в switch, как мы делали раньше (обычный redux)
  reducers: {
    setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading;
    },
    setIsInitialization: (
      state,
      action: PayloadAction<{ isAppInitialized: boolean }>
    ) => {
      state.isLoading = action.payload.isAppInitialized;
    },
  },
});

// Создаем reducer с помощью slice
export const appReducer = slice.reducer;
export const appActions = slice.actions;
