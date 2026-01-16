const BASE = import.meta.env.BASE_URL;
const noteData = [
  {
    id: "components",
    title: "컴포넌트 단위 스타일 구조화",
    desc: "스타일 관리 복잡도 증가",
    issue:
      "컴포넌트가 늘어날수록 스타일 파일이 비대해졌고, 수정 시 영향 범위를 에측하기 어려워져 전역 스타일 관리 방식에 불편함을 느끼게 되었다. 이로 인해 사소한 수정에도 작업 시간이 점점 길어지는 문제가 발생했다.",
    issueImg: `${BASE}/img/components/components1.webp`,
    issueAlt: "컴포넌트 문제점 사진.",
    approach:
      "전역 스타일 관리의 한계를 해결하기 위해 컴포넌트별로 스타일 파일을 분리하고, 컴포넌트와 스타일을 1:1로 관리하는 구조를 시작했다. 이 방식을 이용하며 수정 범위를 예측하기 쉬운 구조로 만들었다고 생각한다.",
    result:
      "컴포넌트 단위로 스타일을 분리한 이후, 스타일 수정 시 영향 범위를 파악할 수 있었고 불필요한 확인 작업이 줄어들었다. 그 결과 유지보수 효율이 좋아졌다고 생각하며, 스타일을 안정적으로 관리할 수 있게 되었다.",
    resultImg: `${BASE}/img/components/components2.webp`,
    resultAlt: "컴포넌트 결과 사진",
    link: "",
  },
  {
    id: "animation",
    title: "애니메이션 JS 재사용",
    desc: "같은 애니메이션 JS 여러곳 에서 반복",
    issue:
      "요소 등장 시 적용되는 JavaScript 함수가 여러 위치에서 반복적으로 사용되면서, 코드 길이가 불필요하게 증가하여 관리에 불편함을 겪는 문제가 발생했다.",
    issueImg: `${BASE}/img/animationJS/animationJS1.webp`,
    issueAlt: "애니메이션JS 문제점 사진.",
    approach:
      "여러 곳에서 반복되던 요소 등장 애니메이션 로직을 공통 함수를 재사용 구조로 개선했다. 이를 통해 동일한 동작을 하나의 함수에서 일관되게 관리할 수 있도록 했다.",
    result:
      "공통 함수로 애니메이션 로직을 관리하면서 중복 코드가 크게 줄어들었고, 하나의 함수로 관리를 하다보니 가독성과 재사용성이 좋아졌다. 애니메이션 동작 수정이나 추가 작업도 휠씬 수월하게 진행할 수 있게 되었다.",
    resultImg: `${BASE}/img/animationJS/animationJS2.webp`,
    resultAlt: "애니메이션JS 결과 사진",
    link: "",
  },
  {
    id: "api",
    title: "API 데이터 렌더링",
    desc: "영화 포스터 데이터가 대량으로 필요",
    issue:
      "영화 목록 화면을 구성하기 위해 다수의 영화 포스터 이미지와 관련된 콘텐츠 데이터를 한 번에 안정적으로 제공할 필요가 있었다. 이미지를 하나하나 정리해서 데이터를 만들고 관리하기엔 한계가 있었다.",
    issueImg: `${BASE}/img/API/API1.webp`,
    issueAlt: "API 문제점 사진.",
    approach:
      "TMDB API로 영화 데이터를 비동기로 가져와 상태로 관리하고, 로딩/에러를 포함한 조건부 렌더링으로 UI를 안정적으로 구성했다.",
    result:
      "API를 통해 영화와 콘텐츠 데이터를 상태로 관리하면서, 대량의 데이터를 효율적으로 처리하고 UI를 안정적으로 렌더링할 수 있었다.",
    resultImg: `${BASE}/img/API/API2.webp`,
    resultAlt: "API 결과 사진",
    link: "",
  },
  {
    id: "controlUI",
    title: "상태 기반  UI 제어",
    desc: "사용자 행동에 따라 UI 변화",
    issue:
      "사용자 행동에 따라 여러 UI 요소의 상태가 변경되어야 했고, 이를 조건별로 일관되게 제어할 필요가 있었다.",
    issueImg: `${BASE}/img/StateUI/StateUI1.webp`,
    issueAlt: "stateUI 문제점 사진.",
    approach:
      "사용자 행동에 따라 달라지는 UI를 상태값을 기준으로 제어하도록 구조를 정리했다. 조건부 렌더링과 class토글을 활용해 UI제어를 했다",
    result:
      "UI 동작을 상태 값을 기준으로 관리하면서, 조건에 따른 UI동작을 안정적으로 제어할 수 있게 되었고 코드 관리에도 효율적이라고 생각한다.",
    resultImg: `${BASE}/img/StateUI/StateUI2.webp`,
    resultAlt: "stateUI 결과 사진",
    link: "",
  },
  {
    id: "localStorage",
    title: "사용자 상태 유지(localStorage)",
    desc: "새로고침 이후 상태 유지",
    issue:
      "페이지를 새로고침하거나 다시 방문할 경우 사용자가 선택한 상태가 초기화되는 문제가 있었다. 이로 인해 사용에 문제가 생기고 이전 상태를 다시 설정해야하는 불편함이 있었다.",
    issueImg: `${BASE}/img/localstorage/localstorage1.webp`,
    issueAlt: "localStorage 문제점 사진.",
    approach:
      "사용자가 선택한 설정을 유지하기 위해 필요한 상태값을 localStorage에 저장하고, 페이지 진입시 해당 값을 다시 불러와 초기 상태로 설정하도록 구현했다.",
    result:
      "localStorage를 활용해 사용자 상태를 유지하면서, 페이지 재진입에도 이전 상태가 유지되도록 구성할 수 있었다. 상태 초기화로 인한 불편함을 해소할 수 있게 되었다.",
    resultImg: `${BASE}/img/localstorage/localstorage2.webp`,
    resultAlt: "localStorage 결과 사진",
    link: "",
  },
];
export default noteData;
