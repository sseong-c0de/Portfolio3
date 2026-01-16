const BASE = import.meta.env.BASE_URL;
const noteData = [
  {
    id: "components",
    title: "컴포넌트 단위 스타일 구조화",
    desc: "스타일 관리 복잡도 증가",
    issue:
      "컴포넌트가 늘어날 수록 스타일 관리가 점점 복잡해졌고, 전역 스타일로 관리하기에 한계가 있었습니다.",
    issueImg: `${BASE}/img/components/components1.webp`,
    issueAlt: "컴포넌트 문제점 사진.",
    approach:
      "SCSS Module를 적용해 컴포넌트 단위로 스타일을 분리하고, 스타일 관리할 수 있도록 했다.",
    result:
      "SCSS Module를 활용해 컴포넌트 단위로 스타일을 분리하여 관리를 시작했다.",
    resultImg: `${BASE}/img/components/components2.webp`,
    resultAlt: "컴포넌트 결과 사진",
    link: "",
  },
  {
    id: "animation",
    title: "애니메이션 JS 재사용",
    desc: "같은 애니메이션 JS 여러곳 에서 반복",
    issue:
      "요소 등장시 적용되는 JS 함수가 여러 곳에서 반복이 되어 코드가 길어지는 현상이 생겼습니다.",
    issueImg: `${BASE}/img/animationJS/animationJS1.webp`,
    issueAlt: "애니메이션JS 문제점 사진.",
    approach:
      "요소 등장 시 사용되는 함수가 반복되어,공통 함수로 분리해 재사용했다.",
    result: "중복 코드가 줄어들었고, 전체 코드의 가독성이 개선되었다.",
    resultImg: `${BASE}/img/animationJS/animationJS2.webp`,
    resultAlt: "애니메이션JS 결과 사진",
    link: "",
  },
  {
    id: "api",
    title: "API 데이터 렌더링",
    desc: "영화 포스터 데이터가 대량으로 필요",
    issue: "영화 포스터 이미지와 관련된 콘텐츠 데이터를 대량으로 필요했습니다.",
    issueImg: `${BASE}/img/API/API1.webp`,
    issueAlt: "API 문제점 사진.",
    approach:
      "TMDB API를 호출해 데이터를 가져온 뒤, 상태로 관리하고 조건부 렌더링을 통해 화면에 표시했다.",
    result:
      "정적인 데이터 없이, 다수의 영화 데이터로 안정적으로 렌더링할 수 있었다.",
    resultImg: `${BASE}/img/API/API2.webp`,
    resultAlt: "API 결과 사진",
    link: "",
  },
  {
    id: "controlUI",
    title: "상태 기반  UI 제어",
    desc: "사용자 행동에 따라 UI 변화",
    issue:
      "사용자 행동에 따라 여러 UI 요소의 상태를 조건별로 제어할 필요가 있었다.",
    issueImg: `${BASE}/img/StateUI/StateUI1.webp`,
    issueAlt: "stateUI 문제점 사진.",
    approach:
      "상태 값을 기준으로 UI를 제어하고, 조건부 렌더링과 class 토글 방식으로 화면을 구성했다.",
    result:
      "조건에 따라 달라지는 UI 동작을 상태 값에 따라 관리하고 수정하는게 가능해졌다.",
    resultImg: `${BASE}/img/StateUI/StateUI2.webp`,
    resultAlt: "stateUI 결과 사진",
    link: "",
  },
  {
    id: "localStorage",
    title: "사용자 상태 유지(localStorage)",
    desc: "새로고침 이후 상태 유지",
    issue:
      "페이지를 새로고침하거나 다시 방문할 경우 사용자가 선택한 상태가 초기화되는 문제가 있었다.",
    issueImg: `${BASE}/img/localstorage/localstorage1.webp`,
    issueAlt: "localStorage 문제점 사진.",
    approach:
      "localStorge를 활용해 필요한 상태를 저장하고, 페이지 진입시 다시 불러오도록 구성했다",
    result: "페이지 재진입 시에도 사용자가 선택한 상태를 유지할 수 있었다.",
    resultImg: `${BASE}/img/localstorage/localstorage2.webp`,
    resultAlt: "localStorage 결과 사진",
    link: "",
  },
];
export default noteData;
