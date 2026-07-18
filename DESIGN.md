---
version: "alpha"
name: Design Archive Editorial
description: 개인 디자인 레퍼런스를 차분하지만 선명하게 탐색하는 카드형 아카이브
colors:
  primary: "#171717"
  secondary: "#777671"
  tertiary: "#FF5C35"
  surface: "#F6F5F1"
  surface-raised: "#FFFFFF"
  border: "#D8D7D1"
  tag: "#ECEBE6"
  on-primary: "#FFFFFF"
typography:
  display:
    fontFamily: "Manrope, Noto Sans KR, sans-serif"
    fontSize: "clamp(40px, 6.4vw, 88px)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.08em"
  heading:
    fontFamily: "Manrope, Noto Sans KR, sans-serif"
    fontSize: "21px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.055em"
  body:
    fontFamily: "Manrope, Noto Sans KR, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "DM Mono, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  none: "0"
  pill: "999px"
spacing:
  xs: "7px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  xxl: "80px"
components:
  page:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
  filter:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm}"
  filter-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm}"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  tag:
    backgroundColor: "{colors.tag}"
    textColor: "{colors.secondary}"
    rounded: "{rounded.none}"
    padding: "4px 6px"
---

## Overview

이 아카이브는 **에디토리얼 미니멀리즘과 실험적인 그래픽 카드**를 결합한다. 화면 전체는 따뜻한 종이 질감처럼 차분하게 유지하고, 각각의 레퍼런스 카드는 강한 색과 추상 도형으로 발견의 감각을 만든다.

목표는 화려한 갤러리가 아니라, 오래 보아도 피로하지 않고 원본 자료로 빠르게 이동할 수 있는 디자이너의 작업용 서가다.

## Colors

- **Primary:** 모든 핵심 텍스트·선·선택 상태에 쓰는 거의 검은 잉크.
- **Surface:** 순백색 대신 따뜻한 종이색을 사용한다.
- **Tertiary:** 오렌지 코랄은 링크 화살표, 포커스, 강조에만 쓴다. 큰 면적에 반복하지 않는다.
- **Card colors:** 카드의 visual 데이터에서만 레퍼런스별로 달라질 수 있다. 본문·UI의 기본 색을 바꾸지 않는다.

## Typography

- 제목은 촘촘하고 강한 산세리프로, 설명은 읽기 편한 짧은 문장으로 구성한다.
- 메타데이터·날짜·태그는 DM Mono를 사용해 기록물의 성격을 만든다.
- 한글 줄바꿈은 자연스럽고 짧게 유지한다. 긴 영문 제목은 단어 중간에서 자르지 않는다.

## Layout

- 데스크톱은 3열 카드 그리드, 태블릿은 2열, 모바일은 1열이다.
- 카드 간 간격 대신 1px 선으로 구조를 만든다.
- 카드 내부 여백은 16~20px을 기본으로 한다.
- 첫 화면은 블랙 배경의 넓은 탐색 영역으로 시작한다. 큰 `레퍼런스 / 디자인 뉴스` 전환과 유리 질감 검색창을 충분한 여백 안에 배치하고, 그 아래 고정 필터와 카드 목록으로 이어진다.

## Elevation & Depth

- 드롭섀도는 기본적으로 사용하지 않는다.
- 카드의 추상 도형만 그림자 또는 겹침을 사용할 수 있다.
- 호버는 표면을 순백색으로 미세하게 바꾸는 정도로 제한한다.

## Shapes

- 본문 UI는 사각형 또는 필 형태를 유지한다.
- 카드의 추상 도형은 레퍼런스의 스타일을 암시하도록 유기적·기하학적 형태를 자유롭게 쓴다.
- 둥근 모서리를 장식적으로 과용하지 않는다.

## Components

### Reference card

카드는 반드시 분야, 수집일, 제목, 짧은 설명, 디자이너 메모, 태그를 포함한다. 원본 링크는 별도 텍스트 버튼 없이 썸네일에만 적용해 본문 텍스트를 선택·복사할 수 있게 한다. 프롬프트가 있는 카드에는 작은 복사 버튼을 제공한다.

### Filter

필터는 전체/분야 선택만 제공한다. 선택된 필터만 짙은 배경과 흰 글자를 사용한다.
`레퍼런스 / 디자인 뉴스` 1차 전환과 분야 2차 필터는 하나의 고정 내비게이션으로 묶는다. 검색창은 고정하지 않으며 스크롤과 함께 사라진다. 모바일의 2차 필터는 줄바꿈 대신 가로 스크롤한다.

### Design news

뉴스는 기존 레퍼런스 심사 데이터와 분리하며 상단의 `레퍼런스 / 디자인 뉴스` 전환으로 접근한다. `AI 디자인 뉴스`, `피그마 뉴스`, `UI·UX 뉴스`, `디자인 일반` 네 분류를 사용하고 대표 이미지, 출처, 발행일, 짧은 요약과 디자이너 관점의 중요도를 포함한다. 썸네일은 식별을 돕는 작은 보조 요소로 제한한다. 데스크톱에서는 가로형 에디토리얼 목록, 모바일에서는 세로형 목록을 사용하며 원문 링크를 명확히 제공한다. 세부 수집 기준은 `NEWS.md`를 따른다.

## Do's and Don'ts

**Do**

- 레퍼런스별 시각적 특성을 카드의 색·도형·짧은 레이블로 번역한다.
- 대비가 충분한 텍스트와 1px 구조선을 유지한다.
- 외부 이미지를 안전하게 쓸 수 없을 때는 추상 미리보기로 대체한다.

**Don't**

- 원본 출처가 불분명한 이미지를 복제하거나 저장하지 않는다.
- 그라데이션, 과도한 그림자, 유리 질감, 둥근 카드 UI를 기본 스타일로 사용하지 않는다.
- 유리 질감은 첫 화면의 검색창 한 곳에만 제한하고 카드나 일반 UI로 확장하지 않는다.
- 카드에 긴 설명이나 여러 개의 CTA를 넣지 않는다.
