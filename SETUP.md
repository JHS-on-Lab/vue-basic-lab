# 개발 환경 세팅 및 Vue 프로젝트 생성 가이드

## 1. 개발 환경 세팅

### 1.1 IDE 설치

* **Visual Studio Code** 설치

### 1.2 Node.js 설치

* Node.js LTS 버전 설치
* 설치 후 터미널에서 정상 설치 여부 확인

```bash
node -v
npm -v
```

---

## 2. 프로젝트 생성 및 실행

### 2.1 VS Code 실행 및 워크스페이스 설정

1. VS Code 실행
2. 프로젝트를 생성할 **Workspace 폴더 생성**
3. 생성한 폴더를 VS Code에서 열기
4. VS Code 내부 터미널 실행
   (단축키: `Ctrl + ``)

---

### 2.2 npm 정상 동작 여부 확인

터미널에서 아래 명령어 실행:

```bash
npm -v
```

* 정상적으로 버전이 출력되면 다음 단계로 진행
* 실행되지 않는 경우:

  * Windows `cmd`에서는 정상 동작하지만
    VS Code 터미널에서 동작하지 않는 경우 → **환경 변수 문제는 아님**
  * PowerShell 실행 정책 문제일 수 있음

    * 보안 정책 변경 또는
    * VS Code 터미널을 **Command Prompt(cmd)** 로 변경하여 해결 가능

---

### 2.3 Vue 프로젝트 생성 (Vite 기반)

아래 명령어를 입력하여 프로젝트 생성:

```bash
npm create vite@latest vue-basic-lab
```

CLI 옵션 선택:

1. **Framework**: Vue
2. **Language**: TypeScript 또는 JavaScript (선택)
3. **Use rolldown-vite (Experimental)**: No
4. **Install with npm and start now?**: No
   (직접 `npm install` 및 실행 과정을 확인하기 위함)

---

### 2.4 Vue 확장 설치 (VS Code)

1. VS Code **Extensions** 탭 열기
2. `vue` 검색
3. **Vue (Official)** 확장 설치

> 설치 후 `.vue` 파일에서 문법 하이라이팅(색상)이 적용되면 정상

---

### 2.5 의존성 설치

프로젝트 폴더로 이동한 후, 의존성 설치:

```bash
npm install
```

> 2.3 단계에서 `Install with npm and start now?`를 `Yes`로 선택했다면 생략 가능

---

### 2.6 개발 서버 실행

`package.json` 파일의 `scripts` 항목을 확인한 후
아래 명령어로 개발 서버 실행:

```bash
npm run dev
```

---

### 2.7 실행 확인

터미널에 아래와 유사한 로그가 출력되면 정상:

```text
Local: http://localhost:5173/
```

브라우저에서 다음 주소로 접속하여 실행된 웹사이트 확인:

```
http://localhost:5173/
```

---

## 3. Vue Router 설치 및 설정 (선택)

Vue Router는 **필수는 아니지만**,
여러 화면(View) 간 이동이 필요한 **일반적인 웹 애플리케이션(SPA)** 에서는 사실상 필수로 사용.

단일 화면 구성만 필요한 경우에는 사용하지 않아도 되지만,
페이지 단위 구조와 URL 기반 네비게이션을 이해하기 위해 Router 사용을 권장.

---

### 3.1 Vue Router 설치

프로젝트 루트 디렉터리에서 아래 명령어를 실행:

```bash
npm install vue-router@4
```

> Vue 3 환경에서는 반드시 `vue-router@4` 버전을 사용.

---

### 3.2 Router 디렉터리 생성

아래와 같은 구조로 `router` 디렉터리를 생성:

```text
src/
└─ router/
   └─ index.js
```

---

## 4. 참고 사항

* 본 프로젝트는 **Vite 기반 Vue 3 프로젝트**로 구성됨
* Vue Router는 선택 사항이지만, 실제 웹 애플리케이션 구조를 이해하기 위해 사용을 권장함
* 기본적인 컴포넌트 구조, 라우터 사용, 개발 흐름을 학습하기 위한 목적임
