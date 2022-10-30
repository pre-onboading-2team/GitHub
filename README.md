배포 링크: https://2nd-assignment.vercel.app/
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
- 재사용성을 위해 커스텀훅으로 분리

```javascript
export const useInfiniteScroll = (
  onIntersect: () => void,
  options?: IntersectionObserverInit
) => {
  const [target, setTarget] = useState<Element | null>(null);

  const handleIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        onIntersect();
      }
    },
    [onIntersect]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, options);
    target && observer.observe(target);
    return () => {
      observer.disconnect();
    };
  }, [handleIntersect, target, options]);

  return [setTarget];
};
```

### 다섯번째 셀에 광고 삽입
- `map`의 `index`를 활용

```javascript
<S.UList>
      {issueList.map((issue, index) => {
        const { id, number, title, comments, created_at, user } = issue;
        return (
          <React.Fragment key={id}>
            {index === 4 && <Advertisement />}
            <IssueCard
              issueNumber={number}
              title={title}
              createdAt={created_at}
              comments={comments}
              writerName={user.login}
              isDetailPage={false}
            />
          </React.Fragment>
        );
      })}
</S.UList>
```

### 반응형 웹
- 페이지별 레이아웃이 복잡하지 않아 레이아웃을 디바이스 별로 변경하지는 않았음
- `media query`와 `rem`을 활용하여 디바이스 별로 대체적인 크기의 밸런스를 맞춤

```css
  @media screen and (max-width: 600px) {
    html {
      font-size: 12px;
    }
  }

  @media screen and (min-width: 600px) {
    html {
      font-size: 13px;
    }
  }

  @media screen and (min-width: 768px) {
    html {
      font-size: 14px;
    }
  }

  @media screen and (min-width: 992px) {
    html {
      font-size: 15px;
    }
  }

  @media screen and (min-width: 1200px) {
    html {
      font-size: 16px;
    }
  }
```
