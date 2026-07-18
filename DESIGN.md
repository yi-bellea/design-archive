---
version: "alpha"
name: "Design Archive — Figma Editorial Blocks"
description: "흑백 편집 프레임과 큰 파스텔 컬러 블록을 결합한 디자인 아카이브"
colors:
  primary: "#000000"
  canvas: "#FFFFFF"
  hairline: "#E6E6E6"
  surface-soft: "#F7F7F5"
  block-lime: "#DCEEB1"
  block-lilac: "#C5B0F4"
  block-cream: "#F4ECD6"
  block-pink: "#EFD4D4"
  block-mint: "#C8E6CD"
  block-coral: "#F3C9B6"
  block-navy: "#1F1D3D"
typography:
  sans: "Inter, SF Pro Display, system-ui, Noto Sans KR, sans-serif"
  mono: "JetBrains Mono, SF Mono, monospace"
rounded:
  md: "8px"
  lg: "24px"
  pill: "50px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
  section: "96px"
---

## Overview

전체 디자인은 `DESIGN-figma.md`에서 정의한 Figma 마케팅 시스템을 아카이브 탐색 경험에 맞게 적용한다. 기본 프레임은 순백색과 검정색이며, 큰 파스텔 컬러 블록이 카드와 뉴스 섹션의 리듬을 만든다. 그림자와 그라디언트보다 색상 면, 자신감 있는 타이포그래피, 넓은 여백을 우선한다.

## Typography

- figmaSans 대체 서체로 Inter를 사용하며 340·480·540·700 수준의 무게 차이로 위계를 만든다.
- 분류, 날짜, 결과 수에는 JetBrains Mono를 사용한다.
- 제목은 타이트한 자간과 짧은 행간, 본문은 1.45~1.55 행간을 사용한다.

## Layout

- 최대 콘텐츠 폭은 1280px, 데스크톱 여백은 32px이다.
- 레퍼런스는 데스크톱 3열, 태블릿 2열, 모바일 1열이다.
- 카드 간격은 24px이며 모든 주요 카드는 24px 라운드를 사용한다.
- 상단 탐색은 라일락 컬러 블록으로 구성하고, 검색은 흰색 8px 라운드 입력을 사용한다.
- 1차 보기 전환과 2차 필터는 흰색 고정 내비게이션으로 유지한다.

## Components

### Reference card

레퍼런스 카드는 라임·크림·민트·핑크·코랄·라일락 배경을 순환한다. 썸네일은 내부 12px 여백과 14px 라운드를 사용한다. 제목, 설명, 디자이너 메모, 태그의 정보 구조는 유지하며 디자이너 메모에는 모노 레이블을 붙인다.

### Design news

뉴스는 파스텔 컬러 블록형 가로 카드로 표시한다. 작은 썸네일, 모노 메타데이터, 큰 제목, 요약, 실무 영향을 한 블록 안에서 읽게 한다. 모바일에서는 세로로 전환한다.

### Controls

- 모든 텍스트 버튼과 선택 상태는 pill 형태다.
- 선택 상태와 핵심 동작은 검정 배경·흰 글자다.
- 포커스는 검정 2~3px 링으로 명확히 표시한다.
- 검색창은 글래스나 그라디언트를 사용하지 않고 흰색 면과 검정 테두리로 표현한다.

## Do / Don't

- 흑백 UI 사이에 하나의 파스텔 블록이 충분한 면적으로 보이게 한다.
- 모노 서체는 분류와 캡션에만 사용한다.
- 카드에 그라디언트, 과한 그림자, 유리 질감을 사용하지 않는다.
- 작은 색상 포인트를 흩뿌리지 않고 컬러 블록 자체로 섹션을 구분한다.
- 외부 이미지 출처와 링크, 접근성, 키보드 탐색을 유지한다.
