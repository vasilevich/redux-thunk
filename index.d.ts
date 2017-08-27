import {Middleware, Dispatch, Action} from "redux";

export interface ThunkAction<R, S, E> {
  (dispatch: Dispatch<S> | any, getState: () => S,
   extraArgument: E): R;
}

declare module "redux" {
  export interface Dispatch<S> {
    <R, E, A extends Action>(asyncAction: ThunkAction<R, S, E> | A): R;
  }
}
declare const thunk: Middleware & {
  withExtraArgument(extraArgument: any): Middleware;
};

export default thunk;