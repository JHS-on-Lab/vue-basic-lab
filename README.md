# Vue Basic Lab – Development Setup Guide

이 문서는 **Vite 기반 Vue 3 프로젝트**를 생성하고 실행하기 위한
개발 환경 세팅 및 기본 설정 과정을 정리한 가이드입니다.

본 프로젝트는 Vue의 기본 구조, 라우터 사용, 컴포넌트 구성 및
전체적인 개발 흐름을 학습하기 위한 목적을 가지고 있습니다.

---

## 1. Development Environment Setup

### 1.1 IDE Installation

* **Visual Studio Code** 설치

---

### 1.2 Node.js Installation

* Node.js **LTS(Long Term Support)** 버전 설치
* 설치 후 터미널에서 정상 설치 여부 확인

```bash
node -v
npm -v
```

---

## 2. Project Creation and Execution

### 2.1 VS Code Workspace Setup

1. Visual Studio Code 실행
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

    * 보안 정책 변경
    * 또는 VS Code 터미널을 **Command Prompt(cmd)** 로 변경하여 해결

---

### 2.3 Vue Project Creation (Vite-based)

아래 명령어를 입력하여 Vue 프로젝트 생성:

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

### 2.4 VS Code Extension Installation

1. VS Code **Extensions** 탭 열기
2. `vue` 검색
3. **Vue (Official)** 확장 설치

> `.vue` 파일에서 문법 하이라이팅이 적용되면 정상적으로 설치된 상태입니다.

---

### 2.5 Dependency Installation

프로젝트 루트 디렉터리에서 의존성 설치:

```bash
npm install
```

> 2.3 단계에서 `Install with npm and start now?`를 `Yes`로 선택한 경우 생략 가능

---

### 2.6 Development Server Execution

`package.json`의 `scripts` 항목을 확인한 후
아래 명령어로 개발 서버 실행:

```bash
npm run dev
```

---

### 2.7 Application Verification

터미널에 아래와 유사한 로그가 출력되면 정상 실행 상태입니다:

```text
Local: http://localhost:5173/
```

브라우저에서 다음 주소로 접속하여 애플리케이션을 확인합니다:

```text
http://localhost:5173/
```

---

## 3. Vue Router Installation and Setup (Optional)

Vue Router는 **필수는 아니지만**,
여러 화면(View) 간 이동이 필요한 **일반적인 SPA 구조**에서는
사실상 표준으로 사용됩니다.

단일 화면 구성만 필요한 경우에는 사용하지 않아도 되지만,
페이지 단위 구조와 URL 기반 네비게이션을 이해하기 위해
Router 사용을 권장합니다.

---

### 3.1 Vue Router Installation

프로젝트 루트 디렉터리에서 아래 명령어 실행:

```bash
npm install vue-router@4
```

> Vue 3 환경에서는 반드시 `vue-router@4` 버전을 사용해야 합니다.

---

### 3.2 Router Directory Structure

다음과 같은 구조로 Router 디렉터리를 생성합니다:

```text
src/
└─ router/
   └─ index.js
```

---

## 4. Notes

* 본 프로젝트는 **Vite 기반 Vue 3 프로젝트**입니다.
* Vue Router는 선택 사항이지만, 실제 웹 애플리케이션 구조를 이해하기 위해 사용을 권장합니다.
* 컴포넌트 구조, 라우팅, 데이터 흐름 등 Vue의 핵심 개념을 학습하는 것을 목표로 합니다.
