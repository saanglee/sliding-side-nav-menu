# 1. 실행 방법

```
1. git clone https://github.com/saanglee/sliding-side-nav-menu.git
2. cd [folder name]
3. npm install
4. npm start
```

# 2. 디렉토리 구조

### src

```
├── assets
│   ├── analytics_black_24dp.svg
│   ├── chevron_right_black_24dp.svg
│   ├── dark_mode_black_24dp.svg
│   ├── event_black_24dp.svg
│   ├── face_black_24dp.svg
│   ├── favorite_border_black_24dp.svg
│   ├── home_black_24dp.svg
│   ├── index.tsx
│   ├── insert_chart_black_24dp.svg
│   ├── logo.png
│   ├── logout_black_24dp.svg
│   ├── notifications_black_24dp.svg
│   └── search_black_24dp.svg
├── components
│   ├── Button
│   │   ├── Toggle.tsx
│   │   └── toggle.module.scss
│   ├── Icon
│   │   └── index.tsx
│   └── Navigation
│       ├── NavList.tsx
│       ├── index.tsx
│       ├── navFooter
│       │   ├── NavFooter.tsx
│       │   └── navFooter.module.scss
│       ├── navHeader
│       │   ├── NavHeader.tsx
│       │   └── navHeader.module.scss
│       ├── navItem
│       │   ├── NavItem.tsx
│       │   └── navItem.module.scss
│       └── navigation.module.scss
├── index.css
├── index.tsx
├── logo.svg
├── pages
│   ├── Analytics.tsx
│   ├── Dashboard.tsx
│   ├── Likes.tsx
│   ├── Schedule.tsx
│   └── User.tsx
├── react-app-env.d.ts
├── reportWebVitals.ts
├── routes
│   ├── Layout
│   │   ├── index.tsx
│   │   └── layout.module.scss
│   ├── index.tsx
│   └── routes.module.scss
├── store
│   └── global.ts
└── styles
    ├── base
    │   ├── _fonts.scss
    │   ├── _more.scss
    │   └── _reset.scss
    ├── constants
    │   └── _colors.scss
    ├── index.js
    ├── index.scss
    └── mixins
        ├── _animation.scss
        └── _mixins.scss
```

# 3. 결과물

![sliding-side-menu](https://user-images.githubusercontent.com/92660097/191175728-f58e950f-ecde-4868-b443-1ff8806364b3.gif)

# 4. 구현 목록

- [x] 기본 레이아웃
  - [x] 컴포넌트는 Top, Left , Bottom 모두 50px
- [x] 반응형 크기 변경
  - [x] 메뉴바의 height를 브라우져의 크기 변경에 맞춤
- [x] 메뉴 확장 버튼(화살표 버튼) 클릭 시 애니메이션
  - [x] 메뉴가 열리고 닫힐 때 너비 변화
  - [x] 메뉴 확장 시 글자 fade in
- [x] 메뉴 아이템 hover 시 애니메이션
- [x] 다크모드에 따른 브라우저 색생 변경
- [x] 다크모드 변경시 배경 색상이 자연스럽게 변경되도록 에니메이션을 적용
- [x] 기본 페이지 라우팅 : 메뉴 버튼 클릭 시 메뉴에 해당하는 텍스트를 간단히 본문 영역에 나오도록 함

### 부연 설명

- 컴포넌트를 분리하여 재사용성을 고려하고자 한 부분

  - Icon.tsx : 아이콘 컴포넌트입니다. icon svg 컴포넌트를 가져와 props로 아이콘 이름, 색깔, onClick 함수등을 전달하여 사용할 수 있습니다.
  - NavItem.tsx : 메뉴 아이템 컴포넌트입니다.text와 icon을 props로 받아 사용할 수 있습니다. (index와 current값을 사용하여 클릭 시 버튼 색깔 변화가 되도록 하려고 시도했으나 이 부분은 완료하지 못했습니다.)

- 전역 상태 관리
  - 메뉴의 열림과 닫힘(isOpen)와 다크모드 여부(isDarkMode)를 recoil을 사용하여 전역 상태값으로 관리했습니다.
    - 크지 않은 프로젝트라 전역 상태 라이브러리를 사용하지 않으려고 했으나 isOpen의 값이 Navigation/index.tsx에서 시작하여 navList, navItem 컴포넌트로 이어지는 props drilling 문제가 발생하여 전역 상태로 바꾸었습니다.

### 아쉬운 점

시도하였으나 기한 내에 완성하지 못한 부분입니다.

- 메뉴 클릭 시 배경 색 변경 (클릭된 메뉴만 배경색 변경 되도록 하기)
- 접힌 메뉴일 때 검색 아이콘 버튼 클릭 시 검색창이 열리도록 하기
