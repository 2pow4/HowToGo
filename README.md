# HowToGo

*Transportation **All In One** Search Platform* :)

> ## Feature

- 버스, 기차, 비행기 광역 이동 한번에 검색 가능
- 소요 시간별, 가격별, 이동 수단별 정렬로 여행 루트 추천
- 해당 예약 사이트로 리다이렉트  

> ## How To Run  

서비스를 먼저 빌드해 봅시다.  

### Source Code Build  

1. 소스를 다운로드하거나, 직접 git repository를 clone 해옵니다.

    ```bash
    $ git clone https://github.com/2pow4/HowToGo.git  
    $ cd HowToGo
    ```

2. 의존 라이브러리를 설치합니다.

    ```bash
    // `yarn`을 사용하여도 됩니다.
    $ npm install
    ```

3. `.jsx` 코드를 컴파일 합니다.

    ```bash
    $ npm run build
    ```

개발을 위해서는 로컬 개발 서버를 이용해야 합니다. 로컬 개발 서버를 세팅하여 React 파일을 배포합시다.

### Run `bundle.js` in Development Server

1. `main.js`에서 사용할 Port 번호를 설명합니다.

    ```javascript
    const port = process.env.PORT || 3000
    ```

2. 서버를 실행합니다.

    ```bash
    $ npm run start
    ```

3. 웹페이지에 접속합니다.  

    ```bash
    http://localhost:3000
    ```

> ## Development Environment  

TBD?