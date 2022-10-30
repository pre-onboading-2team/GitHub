## 필수 구현 기능
- 이슈 목록 및 상세 화면 기능 구현
- Context API를 활용한 API 연동
- 데이터 요청 중 로딩 표시
- 에러 화면 구현
- 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시
- 반응형 웹 구현(UI는 데스크톱, 모바일에서 보았을 때 모두 읽기 편하게 구현)

### Context API를 활용한 API 연동
`Context API` `useReducer` 를 활용하여 `Flux 패턴`으로 서버 데이터 관리.
- 단방향 데이터 흐름으로 복잡성을 줄임

```javascript
export enum IssueActionTypes {
  GET_ISSUE_LIST_SUCCESS = "GET_ISSUES_LIST_SUCCESS",
  GET_ISSUE_LIST_LOADING = "GET_ISSUES_LIST_LOADING",
  GET_ISSUE_LIST_ERROR = "GET_ISSUES_LIST_ERROR",

  GET_ISSUE_DETAIL_SUCCESS = "GET_ISSUES_DETAIL_SUCCESS",
  GET_ISSUE_DETAIL_LOADING = "GET_ISSUES_DETAIL_LOADING",
  GET_ISSUE_DETAIL_ERROR = "GET_ISSUES_DETAIL_ERROR",
}

const initialState: IssueCtxInitialState = {
  isLoading: false,
  isError: false,
  issueList: [],
  issueDetail: null,
};

const issueReducer = (
  state: IssueCtxInitialState,
  action: { type: IssueActionTypes; data?: Issue[] | Issue }
) => {
  switch (action.type) {
    case IssueActionTypes.GET_ISSUE_LIST_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case IssueActionTypes.GET_ISSUE_LIST_SUCCESS:
      return {
        ...state,
        issueList: [...state.issueList, ...(action.data as Issue[])],
        isLoading: false,
        isError: false,
      };
    case IssueActionTypes.GET_ISSUE_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case IssueActionTypes.GET_ISSUE_DETAIL_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case IssueActionTypes.GET_ISSUE_DETAIL_SUCCESS:
      return {
        ...state,
        issueDetail: action.data as Issue,
        isLoading: false,
        isError: false,
      };
    case IssueActionTypes.GET_ISSUE_DETAIL_ERROR:
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
  data?: Issue[] | Issue;
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
```

### 무한 스크롤
- `Intersection Opserver API` 활용
- 재사용성을 
- `Intersection Opserver API` 활용위해
