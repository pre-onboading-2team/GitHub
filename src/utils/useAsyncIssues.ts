import { AxiosError, AxiosResponse } from "axios";
import { DependencyList, useEffect, useReducer } from "react";

import { IssuesState, useIssuesDispatch } from "../contexts/IssueContext";

type AsyncData = AxiosResponse<any, any> | null;
type AsyncError = AxiosError | Error | null | boolean;

type RequestState = {
  loading: boolean;
  data: AsyncData;
  error: AsyncError;
};

type Action =
  | { type: "LOADING" }
  | { type: "SUCCESS"; data: AsyncData }
  | { type: "ERROR"; error: AsyncError };

function issuesReducer(state: RequestState, action: Action): RequestState {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type`);
  }
}

const initialState: RequestState = {
  loading: false,
  data: null,
  error: false,
};

export function useAsyncIssues(
  callback: (params?: any) => Promise<any>,
  page = 1,
  deps: DependencyList = []
): [RequestState, () => Promise<void>] {
  const [state, dispatch] = useReducer(issuesReducer, initialState);
  const dispatchToContext = useIssuesDispatch();
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const data = await callback(page);
      dispatch({ type: "SUCCESS", data });
      const state = data.data as IssuesState;
      dispatchToContext({ type: "UPDATE", state });
    } catch (e: any) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchData();
  }, deps);

  return [state, fetchData];
}
