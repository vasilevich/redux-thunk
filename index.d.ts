import {Middleware, Dispatch} from "redux";


export interface ThunkAction<R, S, E> extends Action {
  (dispatch: Dispatch<S>, getState: () => S,
   extraArgument: E): R; 
}
declare module "redux" {
  export interface Dispatch<S> {
    <R, E>(asyncAction: ThunkAction<R, S, E>): R;
  }
}


declare const thunk: Middleware & {
  withExtraArgument(extraArgument: any): Middleware;
};

export default thunk;
