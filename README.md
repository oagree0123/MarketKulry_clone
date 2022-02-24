# Market kurly Clone (Front-End)

### 🗓 프로젝트 기간
- 2022년 2월 18일 ~ 2022년 2월 24일
<br />

## 🎈 LINK
- 🎥 유튜브 링크 : https://www.youtube.com/watch?v=nQC_6kRNjnY


- 📔 노션 링크 : https://www.notion.so/6-3fefaf3536464480b888cd0af8e586fd
<br />

## 👥 팀원
- [Front-End]: [오예준](https://github.com/oagree0123), [최종현](https://github.com/fatchoi3)
- [Back-End]: [고혜지], [김가은], [최규원]
<br></br>
[Back-End Github]: https://github.com/paran22/marketClone
<br />

## 🛠 Tech Stack
- Frontend Tech Stack
  - React.js
  - Redux
<br />

- Backend Tech Stack
  - Spring
  - MySQL
  - JWT
<br />
  
## 📜 ER 다이어그램
<details> 
    <summary>ER 다이어그램 확인하기</summary>

<img width="70%" alt="ERD" src="https://user-images.githubusercontent.com/90660499/155491026-41f807ae-2cff-4bfc-b3a9-fe8e530afb4a.png">
</details> 
<br />

## 🔨 API 설계
<details> 
    <summary>API 명세서 확인하기</summary>   
  
![6조 클론코딩 - Chrome 2022-02-24 오후 5_53_50 (2)](https://user-images.githubusercontent.com/90660499/155492413-58805171-a209-4ae3-9c7d-a3daf2fd7f4a.png)
![6조 클론코딩 - Chrome 2022-02-24 오후 5_53_59 (2)](https://user-images.githubusercontent.com/90660499/155492433-4ab2b80c-3e76-4ac1-89b9-6401f131f45c.png)
![6조 클론코딩 - Chrome 2022-02-24 오후 5_54_09 (2)](https://user-images.githubusercontent.com/90660499/155492438-508c05f2-1075-4877-a34c-2190dfce7e33.png)
![6조 클론코딩 - Chrome 2022-02-24 오후 5_54_20 (2)](https://user-images.githubusercontent.com/90660499/155492445-afb0cc15-7fe5-4c79-9888-3c83a48d01e4.png)

</details> 
<br />

## ✨ 핵심기능
* 로그인  
  - JWT 토큰 이용하여 로그인
  
* 메인 페이지  
  - 마켓컬리 물품 리스트
  - 이미지 슬라이더, carousel
  - Pagination
  
* 게시글 상세 페이지 
  - 물품 상세 정보
  - 물품 수량 변경
  - 장바구니 담기

* 장바구니 페이지
  - 사용자가 담은 장바구니 물품 리스트
  - 각 상품의 가격과 개수에 맞는 가격
  - 전체 합산된 가격
  - 장바구니 물품 수량 변경
  - 장바구니 물품 삭제
  - 주문하기 시 서버로 데이터 전송

* 댓글 
  - 댓글 작성
  - 댓글 작성시 이미지 업로드 가능
  - 댓글 삭제
<br/>

## 🐛 트러블 슈팅
<br/>
1. map메소드를 이용하여 만들어낸 자식 컴포넌트에서 useState로 수량을 관리하니 state가 남아있는 증상이 발견
   redux로 각 물품의 state를 관리하여 useState가 연결되어 있었던 문제를 해결했습니다.

<br />
<br />
<br />
