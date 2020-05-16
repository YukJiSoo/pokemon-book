---
marp: true
theme: default
---

<style>
  html {
    font-size: 20px;
  }
  h1 {
    color: black;
  }
</style>

![bg center w:500](https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F995F45425C2CBAFD0C)

---

## 1. 두번 써봤어요(iOS+Node, React+Node)

## 2. 공부안하고 사용해서 더 공부해보고 싶었어요

---

<br/>

## 탄생배경

- 2012년 facebook에서 개발하고 2015년에 오픈소스화
- <strong>다양한 플랫폼</strong>의 등장에 따른 데이터 제공 문제
- GitHub, Netflix, Medium, Twitter, Naver 등 다양한 곳에서 사용중

![center](https://user-images.githubusercontent.com/30258523/82069801-cfcee300-970e-11ea-8af6-526a2d73d0b7.png)

---

## GraphQL?

- <strong>A query language for your API</strong>
- API 통신을 위해 사용되는 언어, 스펙
- DB랑 관련이 없어요
- 다양한 구현체가 있음
- 하나의 엔드포인트만 제공 `/graphql`

---

### spec.graphql.org

![center](https://user-images.githubusercontent.com/30258523/82077120-d6af2300-9719-11ea-978d-4132a50bc574.png)

---

## 그래서 뭐가 좋은지??

- 원하는 데이터만 쿼리 언어로 요청하면 그것만 응답받는다

  - Data over fetching 문제 해결!

- 연관관계를 가지고 있는 데이터를 한번의 요청으로 받을 수 있다

  - 1+N 문제, Data under fetching 문제 해결!

- 라이브러리들이 좋은 문서화 툴을 자동으로 제공해줌. API문서를 작성할 필요가 없다

---

### 이제 한번 자세히 알아봐요

# RESTful API vs GraphQL

---

## <p align=center>GitHub API v3 (REST API)</p>

- Request

```
https://api.github.com/users/YukJiSoo/repos
```

- Response

```json
[
  {
    "id": 1296269,
    "node_id": "MDEwOlJlcG9zaXRvcnkxMjk2MjY5",
    "name": "Hello-World",
    "full_name": "octocat/Hello-World",
    ...(more more more)
  }
]
```

---

### <p align=center>원하지 않는 데이터까지 막 넘어와요</p>

# <p align=center>Data Over Fetching!!</p>

## <p align=center>GitHub API v4는...?</p>

---

# <p align=center>GitHub API v4 (GraphQL)</p>

### <p align=center>도구를 사용해봐요!</p>

---

# <p align=center>해결 😎</p>

### <p align=center>이제 다른 상황을 생각해봅시다</p>

---

#### 김개발씨는 포켓몬 고 게임을 운영하는 회사로 이직했어요🚀

#### 입사 후 첫 프로젝트는 <strong style="color:red">포켓몬 도감</strong> 만들기!

#### 구현하게 된 기능은 검색한 포켓몬의 진화 전과 진화 후 정보를 함께 보여주기입니다.

#### (김개발씨는 프론트엔드 개발자🌈)

---

## <p align=center>RESTful API를 사용한다면?</p>

<p align=center>
1. 특정 포켓몬 정보 요청
</p>
<p align=center>
2. 응답 받은 데이터에서 진화 전과 진화 후 포켓몬 이름 확인
</p>
<p align=center>
3. 또 요청
</p>
<br/>

#### <p align=center>여러번 요청이 갔어요</p>

# <p align=center>1+N 문제, Data under fetching</p>

---

# <p align=center>GraphQL을 사용한다면?</p>

---

# <p align=center>해결 😎</p>

---

## 좋쳐? 그럼 이제 어떻게 쓰는지 기본개념을 알아봐요

---

## Schema

## Query, Mutation

## Resolver

---

## Schema

서버와 클라이언트가 API통신을 위해 사전에 정의해 놓은 <strong>데이터 타입의 집합</strong>

도메인에 맞게 개발자들 끼리 서로 이야기하면서 정의

다양한 타입들이 있어요 (Object, Int, String, ID 등)

---

## <p align=center>Pokemon Object 타입</p>

<img width=440 height=500 src="https://user-images.githubusercontent.com/30258523/82085887-a15e0180-9728-11ea-96eb-8bc792901f08.png" style="margin-left:340px;">

---

##### 👇👇👇 타입에 대해 더 자세히 알아보고 싶다면 아래 링크가 좋은 것 같더라구여 👇👇👇

https://code-masterjung.tistory.com/22

---

## Query, Mutation

`Root Operation Types`

쿼리의 진입점이 되는 타입들

즉, Query와 Mutation에 선언된 필드들이 `entry point`라고 생각하면 됨

---

## Query

RESTful API에서의 `GET` 요청을 생각하면 됨

리소스를 읽어오는 작업을 수행

---

## Mutation

RESTful API에서의 `POST`, `PUT`, `PATCH`, `DELETE` 요청을 생각하면 됨

리소스를 생성, 변경, 삭제하는 작업

---

## Resolver

Schema를 정의하고 Query, Mutation에 응답해줄 필드를 추가했어요

그러면 이제 `데이터를 가져오는 로직`을 구현해야 해요

그 코드를 <strong style="color:skyblue; font-size:40px;">Resolver</strong> 에서 작성해줍니다

---

## 기본적인 형태

```js
const pokemonsQueryResolver = async (parent, args, context, info) => {
  const pokemons = await Pokemon.findAll();
  return pokemons;
};
```

---

### Schema에 정의된 타입의 필드마다 매칭되는 resolver가 하나씩 존재해요

### 그래서 연쇄적으로 resolver가 실행되어서 데이터를 모은 후에 클라이언트에게 보내줘요

---

# 그러면 단점은?

- 기존의 Caching 방식을 사용할 수 없다

  - 이를 해결하기 위한 Client 라이브러리들이 존재한다

- 파일 업로드를 직접 구햔해야 한다

  - 파일 업로드는 REST API로 제공하면 된다

<!--
### 단계는 어떻게

- 그래프 큐엘이란?
- 레스트 api와 다른 점
- 기본문법
- 장점들은?
- 단점들은?
  - 어떻게 해결할 수 있는지
  - n+1 문제
  - 캐싱문제
- 어떻게 적용할 수 있을지? -->
