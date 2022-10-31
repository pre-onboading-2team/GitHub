import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";

import { UserProps } from "../types";

export type IssueState = {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: UserProps;
  labels: unknown;
  state: string;
  locked: boolean;
  assignee: unknown;
  assignees: unknown;
  milestone: unknown;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  author_association: string;
  active_lock_reason: string | null;
  body: string;
  closed_by: unknown;
};
export type IssuesState = IssueState[];

const IssuesStateContext = createContext<IssuesState | undefined>(undefined);

type Action = { type: "UPDATE"; state: IssuesState };

type IssuesDispatch = Dispatch<Action>;
const IssuesDispatchContext = createContext<IssuesDispatch | undefined>(
  undefined
);

const initialIssues = [] as IssuesState;

function issuesReducer(state: IssuesState, action: Action): IssuesState {
  switch (action.type) {
    case "UPDATE": {
      return [...state].concat(action.state);
    }
    default:
      throw new Error("unhandled Error");
  }
}

export const IssuesContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [issues, dispatch] = useReducer(issuesReducer, initialIssues);

  return (
    <div>
      <IssuesDispatchContext.Provider value={dispatch}>
        <IssuesStateContext.Provider value={issues}>
          {children}
        </IssuesStateContext.Provider>
      </IssuesDispatchContext.Provider>
    </div>
  );
};

export const useIssuesState = () => {
  const state = useContext(IssuesStateContext);
  if (!state) throw new Error("IssuesProvider not found");
  return state;
};
export const useIssuesDispatch = () => {
  const state = useContext(IssuesDispatchContext);
  if (!state) throw new Error("IssuesProvider not found");
  return state;
};
