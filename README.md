# GitHub

## 배포주소

https://shiny-parfait-47e153.netlify.app/

## 이슈 list - context API 이용

```jsx
// context/issueContext.js

const IssueCtxProvider = ({ children }) => {
  const [issueData, setIssueData] = useState([]);

  return (
    <IssueContext.Provider value={{ issueData, setIssueData }}>
      {children}
    </IssueContext.Provider>
  );
};
```

```jsx
// pages/Home/lissueList.js

const { issueData, setIssueData } = useIssueContext();
const getData = async () => {
  // if (pageNumber !== 1) {
  //   setIsAdditionalLoading(true);
  // }
  try {
    const res = await axios.get(
      `https://api.github.com/repos/angular/angular-cli/issues?sort=comments&per_page=8&page=${pageNumber}`
    );

    const newDataArr = res.data.map((obj) => ({
      date: obj.created_at.split("T")[0],
      title: obj.title,
      user: obj.user.login,
      number: obj.number,
      comments: obj.comments,
      id: obj.id,
    }));
    setIssueData((prev) => [...prev, ...newDataArr]);
    // setisInitialLoading(false);
    // setIsAdditionalLoading(false);
  } catch (err) {
    setIsError(true);
  }
};

useEffect(() => {
  getData();
}, [pageNumber]);
```

- 이슈데이터를 context에 담아 출력합니다.

## 무한스크롤

```jsx
// pages/Home/lissueList.js

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
    setPageNumber((num) => num + 1);
  }
};

useEffect(() => {
  getData();
}, [pageNumber]);

const getData = async () => {
  if (pageNumber !== 1) {
    setIsAdditionalLoading(true);
  }
  try {
    const res = await axios.get(
      `https://api.github.com/repos/angular/angular-cli/issues?sort=comments&per_page=8&page=${pageNumber}`
    );
  //... 생략

```

- `window.scrollY + window.innerHeight >= document.body.offsetHeight` 이라면 스크롤의 마지막임을 뜻합니다.
- 스크롤 끝이라면 `pageNumber`를 증가시키고 `getData()`함수를 재실행합니다. -`getData` 함수는 `pageNumber`따라 api요청 및 새로운 데이터를 받아옵니다.

## 로딩표시

```jsx
// pages/Home/lissueList.js

  const [isInitialLoading, setisInitialLoading] = useState(true);
  const [isAdditionalLoading, setIsAdditionalLoading] = useState(false);

const getData = async () => {
  if (pageNumber !== 1) {
    setIsAdditionalLoading(true);
  }
  try {
    const res = await axios.get(
    //.. 생략
    setIssueData((prev) => [...prev, ...newDataArr]);
    setisInitialLoading(false);
    setIsAdditionalLoading(false);
  } catch (err) {
    setIsError(true);
  }
};

useEffect(() => {
  getData();
}, [pageNumber]);

// ...생략

  return (
    <S.List className="list">
      {isInitialLoading ? (
        <Spinner className="spinner-main" />
      ) : (
       //...lists...
      )}
      {isAdditionalLoading ? <Spinner className="spinner-sub" /> : null}
    </S.List>
```

- 최초 로딩 혹은 무한스크롤에 의한 로딩에 의해 각각
  화면 중간 화면 하단에 스피너를 출력합니다.

## 광고 페이지

```jsx
{
  issueData.map((issue, idx) => (
    <>
      {idx === 4 && (
        <a href="https://www.wanted.co.kr/" target="_blank" rel="noreferrer">
          <AdArea />
        </a>
      )}
      <IssueListItem
        key={issue.id}
        title={issue.title}
        user={issue.user}
        date={issue.date}
        number={issue.number}
        comments={issue.comments}
      />
    </>
  ));
}
```

도빈님과 같은 방식으로 구현했습니다.
