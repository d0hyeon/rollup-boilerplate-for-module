# rollup-boilerplate-for-npm

npm 모듈 개발 및 배포를 위한 환경입니다.  
package 디렉토리에서 모듈을 개발하고 화면으로 확인 및 테스트가 필요 한 경우 별도의 테스트 앱 디렉토리를 구성합니다.



## 주의사항
React 컴포넌트 혹은 hooks를 모듈로 개발 할 경우 react app을 통해 작업물을 확인해야하는데, npm link를 통해 배포되지 않은 모듈을 연결 할 수 있습니다.  
이 때 모듈 내 react와  react app의 react 총 두개의 react 모듈을 하나의 어플리케이션에서 갖게 됩니다.   
이는 react 내부적으로 오류를 일으키게 되고 공식 사이트에도 안내가 되어있습니다. [링크](https://ko.reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react])
공식 사이트의 안내처럼 모듈은 react app을 link하여 react app내 react를 사용하는 방법으로 해야합니다.  
결과적으로  react app은 모듈을, 모듈은 react app을 서로 link하는 셈이됩니다.
