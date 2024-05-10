import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vanilla/",
  /**
   * Vue 프로젝트를 서브경로, 내 github계정의 내계정.github.io/리포지토리명 형식의
   * 리포지토리에 배포하고 싶으면 base: '/리포지토리명/',이라 추가해준다.
   * vue cli 프로젝트에서는 vue.config.js에 publicPath: '/리포지토리명'라 작성하고,
   * vite 프로젝트 에서는 vite.config.js에 작성한다
   */
  build: {
    watch: {
      // https://rollupjs.org/configuration-options/#watch
      // 파일 변경 시 다시 빌드하는 옵션은 vite build --watch 명령을 통해 Rollup Watcher를 활성화 할 수 있다
    }
  }
});
