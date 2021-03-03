## 프로젝트 목적

- 인터넷에서 책을 고를 때, 목차나 요약 내용을 보게 됩니다.

## 프로젝트 기간 

- 2021.01.21 ~ 2021.01.30 (1인)

## 사용된 기술 & 라이브러리

- React (Create-React-App)
- Context api : 상태 관리
- Naver api + axios : 검색
- Design library (material-ui) : 검색 리스트
- Styled-component : scss처럼 활용
- Day.js : 날짜형식 변경

```js
// SeachHeader 컴포넌트

const onSearch = (e) => {
  e.preventDefault();

  searchBook(term)
    .then((response) => setBooks(response.data.items))
    .catch((error) => console.log(error));
};
```

개발 서버 모드

- 로컬 (https://localhost:8080)
- 테스트 (https://localhost:9090)
- 프로덕션 (https://production.domain.com)