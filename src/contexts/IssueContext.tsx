import React, { createContext, useContext, useReducer } from "react";

import { Issue } from "../types";

export interface IssueCtxInitialState {
  isLoading: boolean;
  isError: boolean;
  issueList: Issue[];
}

export enum IssueActionTypes {
  GET_ISSUES_SUCCESS = "GET_ISSUES_SUCCESS",
  GET_ISSUES_LOADING = "GET_ISSUES_LOADING",
  GET_ISSUES_ERROR = "GET_ISSUES_ERROR",
}

const initialState: IssueCtxInitialState = {
  isLoading: false,
  isError: false,
  issueList: [],
};

const issueReducer = (
  state: IssueCtxInitialState,
  action: { type: IssueActionTypes; data?: Issue[] }
) => {
  switch (action.type) {
    case IssueActionTypes.GET_ISSUES_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case IssueActionTypes.GET_ISSUES_SUCCESS:
      return {
        issueList: [...state.issueList, ...(action.data as Issue[])],
        isLoading: false,
        isError: false,
      };
    case IssueActionTypes.GET_ISSUES_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error("action type을 확인해주세요.");
  }
};

const IssueStateContext = createContext<IssueCtxInitialState>(initialState);
const IssueDispatchContext = createContext<React.Dispatch<{
  type: IssueActionTypes;
  data?: Issue[];
}> | null>(null);

export const IssueProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(issueReducer, initialState);
  return (
    <IssueStateContext.Provider value={state}>
      <IssueDispatchContext.Provider value={dispatch}>
        {children}
      </IssueDispatchContext.Provider>
    </IssueStateContext.Provider>
  );
};

export const useIssueSelector = () => {
  const state = useContext(IssueStateContext);
  if (!state) {
    throw new Error("Cannot find IssueProvider");
  }
  return state;
};

export const useIssueDispatch = () => {
  const dispatch = useContext(IssueDispatchContext);
  if (!dispatch) {
    throw new Error("Cannot find IssueProvider");
  }
  return dispatch;
};
