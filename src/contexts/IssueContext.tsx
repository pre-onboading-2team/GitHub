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

type Action = { type: "GET_ISSUES"; state: IssuesState };

type IssuesDispatch = Dispatch<Action>;
const IssuesDispatchContext = createContext<IssuesDispatch | undefined>(
  undefined
);

const initialIssues: IssueState[] = [
  {
    url: "https://api.github.com/repos/angular/angular-cli/issues/24145",
    repository_url: "https://api.github.com/repos/angular/angular-cli",
    labels_url:
      "https://api.github.com/repos/angular/angular-cli/issues/24145/labels{/name}",
    comments_url:
      "https://api.github.com/repos/angular/angular-cli/issues/24145/comments",
    events_url:
      "https://api.github.com/repos/angular/angular-cli/issues/24145/events",
    html_url: "https://github.com/angular/angular-cli/issues/24145",
    id: 1424214851,
    node_id: "I_kwDOAjLs285U48tD",
    number: 24145,
    title: "Extracted translations include unused translations",
    user: {
      login: "fischeversenker",
      id: 7970458,
      node_id: "MDQ6VXNlcjc5NzA0NTg=",
      avatar_url: "https://avatars.githubusercontent.com/u/7970458?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/fischeversenker",
      html_url: "https://github.com/fischeversenker",
      followers_url: "https://api.github.com/users/fischeversenker/followers",
      following_url:
        "https://api.github.com/users/fischeversenker/following{/other_user}",
      gists_url: "https://api.github.com/users/fischeversenker/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/fischeversenker/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/fischeversenker/subscriptions",
      organizations_url: "https://api.github.com/users/fischeversenker/orgs",
      repos_url: "https://api.github.com/users/fischeversenker/repos",
      events_url:
        "https://api.github.com/users/fischeversenker/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/fischeversenker/received_events",
      type: "User",
      site_admin: false,
    },
    labels: [],
    state: "open",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 1,
    created_at: "2022-10-26T15:02:44Z",
    updated_at: "2022-10-27T09:01:49Z",
    closed_at: null,
    author_association: "CONTRIBUTOR",
    active_lock_reason: null,
    body: `### Command

extract-i18n

### Is this a regression?

- [ ] Yes, this behavior used to work in the previous version

### The previous version in which this bug was not present was

_No response_

### Description

The extracted translations from the \`extract-i18n\` builder include trans-units from unused templates/components **unless** these components import and use the \`$localize\` function. This is the case for both app components as well as library components.

### Minimal Reproduction

Reproduction repository: https://github.com/fischeversenker/ng-decorator-tree-shaking \\
(don't be fooled by the name of the repository. I re-used an existing repro-repo.)

In essence:

- Import a library module that exports components with translatable strings but where the components don't use the \`$localize\` function
- **don't** use any of these components in your app
- run \`extract-i18n\` on your app and verify that the generated \`messages.xlf\` file contains unused translations from these components

### Exception or Error

_No response_

### Your Environment

\`\`\`text
Angular CLI: 14.2.6
Node: 16.16.0
Package Manager: yarn 1.22.19 
OS: linux x64

Angular: 14.2.7
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1402.6
@angular-devkit/build-angular   14.2.6
@angular-devkit/core            14.2.6
@angular-devkit/schematics      14.2.6
@angular/cli                    14.2.6
@schematics/angular             14.2.6
ng-packagr                      14.2.2
rxjs                            7.5.7
typescript                      4.7.4
\`\`\`


### Anything else relevant?

_No response_`,
    closed_by: null,
  },
];

function issuesReducer(state: IssuesState, action: Action): IssuesState {
  switch (action.type) {
    case "GET_ISSUES": {
      return action.state;
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
