# 감귤 마켓 서비스

## 1. 목표와 기능
### 1.1 목표
- 감귤마켓 서비스
  - 로그인
  - 회원가입
  - 프로필
  - 상품
  - 채팅

### 1.2 기능
- 구매자 로그인
  - /accounts/login/ API 연동 -> 아이디, 비밀번호 일치 여부 확인    
- 구매자 회원가입
  - /accounts/validate-username/ API 연동 -> 아이디 중복 확인
  - /accounts/buyer/signup/ API 연동 -> 회원가입
  - 유효성 검사
- 상품 목록
  - /products/ API 연동 -> 상품 목록 가져오기   
- 상품 상세
  - /products/<int:product_id>/ API 연동 -> 상품 상세 가져오기

## 2. 개발 환경
### 2.1 프로젝트 생성 / 실행
- git clone https://github.com/minerkyi/gamgyul-social-market
- cd gamgyul-social-market
- npm install
- npm install react-router-dom
- npm i styled-reset
- npm run dev

### 2.1 배포 URL
- <https://github.com/minerkyi/gamgyul-social-market>
- <https://minerkyi.github.io/gamgyul-social-market/>
- 테스트용 계정
  ```
  id : 
  pw : 
  ```
  
### 2.2 연동 API
- [API 명세](https://www.notion.so/oreumi/API-19debaa8982b8129aaa9f8c4678447ac)
- 요청 URL: <https://estapi.mandarin.weniv.co.kr/>

  | URL                          | Note                            |
  |------------------------------|---------------------------------|
  | /accounts/login/             | 로그인 요청하기                   |
  | /accounts/validate-username/ | 아이디 검증하기                   |
  | /accounts/buyer/signup/      | 구매자 계정 만들기                |
  | /products/                   | 상품 전체 불러오기                |
  | /products/<int:product_id>/  | 상품 디테일                      |

## 3. 요구사항 명세와 기능 명세
<img src="map.png" width="100%">

## 4. 프로젝트 구조
```
open-market
├─ assets
│  ├─ check-box.svg
│  ├─ check-fill-box.svg
│  ├─ icon-check-off.svg
│  ├─ icon-check-on.svg
│  ├─ icon-check.svg
│  ├─ icon-delete.svg
│  ├─ icon-down-arrow.svg
│  ├─ icon-fb.svg
│  ├─ icon-img.png
│  ├─ icon-insta.svg
│  ├─ icon-minus-line.svg
│  ├─ icon-plus-line.svg
│  ├─ icon-plus.svg
│  ├─ icon-rhigt-arrow.svg
│  ├─ icon-search.png
│  ├─ icon-search.svg
│  ├─ icon-shopping-bag.svg
│  ├─ icon-shopping-cart-2.svg
│  ├─ icon-shopping-cart.svg
│  ├─ icon-swiper-1.svg
│  ├─ icon-swiper-2.svg
│  ├─ icon-up-arrow.svg
│  ├─ icon-user-2.svg
│  ├─ icon-user.svg
│  ├─ icon-yt.svg
│  └─ Logo-hodu.png
├─ css
│  ├─ app.css
│  ├─ detail.css
│  ├─ join.css
│  ├─ login.css
│  ├─ product.css
│  └─ reset.css
├─ js
│  ├─ app.js
│  ├─ common.js
│  ├─ detail.js
│  ├─ join.js
│  ├─ login.js
│  └─ product.js
├─ index.html
└─ README.md
```  

 ## 5. 화면 설계
 | 상품 목록  | 상품 상세  |
 |----------|-----------|
 | <img src="product.gif" width="100%">  | <img src="detail.gif" width="100%">  |
 
 | 로그인  | 회원가입  |
 |----------|-----------|
 | <img src="login.gif" width="100%">  | <img src="join.gif" width="100%">  |

## 6. 메인 기능
- 로그인
```mermaid
  stateDiagram-v2
    A: 유효성 체크
    B: 아이디/비밀번호 일치 여부
    C: 아이디/비밀번호 재입력
    D: 로그인
    state a <<choice>>
    state b <<choice>>

    [*] --> A
    A --> a
    a --> B: 성공
    a --> C: 실패
    C --> A
    B --> b
    b --> D: 성공
    b --> C:실패
    D --> [*]
```
- 회원가입
```mermaid
  stateDiagram-v2
    A: 유효성 체크
    B: 아이디 중복 체크
    C: 회원 정보 재입력
    D: 회원가입
    state a <<choice>>
    state b <<choice>>

    [*] --> A
    A --> a
    a --> B: 성공
    a --> C: 실패
    C --> A
    B --> b
    b --> D: 성공
    b --> C:실패
    D --> [*]
```
- 상품 목록
```mermaid
  stateDiagram-v2
    A: 상품 목록
    B: 상품 상세
    
    [*] --> A
    A --> B: 상품 선택
    B --> [*]
```
- 상품 상세
```mermaid
  stateDiagram-v2
    A: 상품 상세
    B: 수량/총 가격 변경
    D: 바로구매/장바구니
    E: 로그인 모달창 열기
    F: 로그인 페이지
    G: 로그인 모달창 닫기
    state d <<choice>>
    state e <<choice>>
    
    [*] --> A
    A --> B: +/-버튼
    A --> D
    D --> d
    d --> E: 비로그인
    E --> e
    e --> F: 예
    e --> G: 아니요
```
## 7. 개발하며 느낀점
- 
