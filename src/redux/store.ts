import {applyMiddleware, legacy_createStore as createStore } from "redux";
import {thunk, ThunkAction, ThunkDispatch } from 'redux-thunk';
import { rootReducer } from "./reducer";

export const store=createStore(rootReducer,applyMiddleware(thunk))


export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, void, any>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  any
>;
