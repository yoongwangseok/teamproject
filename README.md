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

### 2.2 코딩 컨벤션
# 웹 개발 코딩 컨벤션 가이드

> HTML, CSS, JavaScript의 기본적인 코딩 컨벤션을 정리한 문서입니다.

---

## 📋 목차

- [HTML 컨벤션](#html-컨벤션)
- [CSS 컨벤션](#css-컨벤션)
- [JavaScript 컨벤션](#javascript-컨벤션)
- [주석 작성 가이드](#주석-작성-가이드)
- [파일 구조](#파일-구조)
- [추가 권장사항](#추가-권장사항)

---

## 🌐 HTML 컨벤션

### 📐 들여쓰기와 포맷팅
- **들여쓰기**: 2칸 공백 사용
- **태그**: 소문자로 작성
- **속성**: 소문자로 작성하고 큰따옴표로 감쌉니다
- **자체 닫힘 태그**: 슬래시 앞에 공백을 둡니다 (`<img src="image.jpg" />`)

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>페이지 제목</title>
  </head>
  <body>
    <header>
      <h1>메인 제목</h1>
    </header>
    <main>
      <section class="content">
        <p>내용을 작성합니다.</p>
      </section>
    </main>
  </body>
</html>
```

### 🏷️ 속성 순서
| 순번 | 속성 |
|------|------|
| 1 | `class` |
| 2 | `id` |
| 3 | `name` |
| 4 | `data-*` |
| 5 | `src`, `for`, `type`, `href`, `value` |
| 6 | `title`, `alt` |
| 7 | `role`, `aria-*` |

---

## 🎨 CSS 컨벤션

### 📐 들여쓰기와 포맷팅
- **들여쓰기**: 2칸 공백 사용
- **중괄호**: 같은 줄에 여는 중괄호, 새 줄에 닫는 중괄호
- **세미콜론**: 모든 선언 끝에 세미콜론 추가
- **공백**: 콜론 뒤에 한 칸 공백

### 🏷️ 네이밍 컨벤션
| 타입 | 컨벤션 | 예시 |
|------|--------|------|
| 클래스명 | kebab-case | `main-header`, `nav-item` |
| ID | camelCase 또는 kebab-case | `userId`, `user-id` |
| 의미있는 이름 | 목적 기반 네이밍 | ✅ `navigation-menu` ❌ `red-text` |

### 📋 속성 순서
| 순번 | 카테고리 | 속성 |
|------|----------|------|
| 1 | 레이아웃 | `display`, `position`, `top`, `right`, `bottom`, `left` |
| 2 | 박스 모델 | `width`, `height`, `margin`, `padding` |
| 3 | 배경 | `background`, `border` |
| 4 | 텍스트 | `font`, `text-align`, `color` |
| 5 | 기타 | `opacity`, `cursor` |

### 📏 단위 사용
- ❌ `0` 값에는 단위를 붙이지 않습니다
- ✅ 소수점이 0인 경우 생략합니다 (`.5s` → `0.5s`는 `500ms`로)
- 🎯 상대 단위(`rem`, `em`, `%`)를 우선적으로 사용

---

## ⚡ JavaScript 컨벤션

### 📐 들여쓰기와 포맷팅
- **들여쓰기**: 2칸 공백 사용
- **세미콜론**: 문장 끝에 항상 추가
- **중괄호**: 같은 줄에 여는 중괄호 (K&R 스타일)
- **공백**: 키워드와 괄호 사이, 연산자 앞뒤에 공백

### 🔧 변수 선언
| 키워드 | 사용 목적 |
|--------|-----------|
| `const` | 재할당하지 않는 변수 |
| `let` | 재할당이 필요한 변수 |
| `var` | ❌ 사용하지 않습니다 |

### 🏷️ 네이밍 컨벤션
| 타입 | 컨벤션 | 예시 |
|------|--------|------|
| 변수/함수 | camelCase | `userName`, `getData` |
| 상수 | UPPER_SNAKE_CASE | `MAX_RETRY_COUNT` |
| 클래스 | PascalCase | `UserManager` |
| private 멤버 | 앞에 언더스코어 | `_privateMethod` |

### 🔄 함수 작성
| 타입 | 사용 목적 |
|------|-----------|
| 화살표 함수 | 간단한 함수에 사용 |
| 함수 선언 | 호이스팅이 필요한 경우 |
| 매개변수 객체 | 3개를 초과하는 매개변수 |

### 📦 객체와 배열
- ✅ **구조 분해 할당** 적극 활용
- ✅ **스프레드 연산자** 사용
- ✅ **단축 속성명** 사용

### ⚠️ 에러 처리
- `try-catch` 블록 사용
- 의미있는 에러 메시지 작성
- 에러 로깅 필수

---

## 💬 주석 작성 가이드

### HTML 주석
```html
<!-- 메인 네비게이션 영역 -->
<nav class="main-navigation">
  <!-- 로고 -->
  <div class="logo">...</div>
  
  <!-- 메뉴 항목들 -->
  <ul class="menu-items">...</ul>
</nav>
```

### CSS 주석
```css
/* ==========================================================================
   Header Styles
   ========================================================================== */

.header {
  /* 고정 헤더를 위한 z-index 설정 */
  z-index: 1000;
}

/* TODO: 반응형 디자인 개선 필요 */
.sidebar { }
```

### JavaScript 주석
```javascript
/**
 * 사용자 데이터를 처리하는 함수
 * @param {Object} userData - 사용자 정보 객체
 * @param {string} userData.name - 사용자 이름
 * @param {string} userData.email - 사용자 이메일
 * @returns {Object} 처리된 사용자 정보
 */
function processUserData(userData) {
  // 이메일 유효성 검사
  if (!isValidEmail(userData.email)) {
    throw new Error('유효하지 않은 이메일 형식');
  }
  
  return {
    ...userData,
    processed: true,
    timestamp: Date.now()
  };
}
```

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
