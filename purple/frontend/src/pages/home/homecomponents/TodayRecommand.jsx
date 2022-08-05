import styled from "styled-components";
import purplelogo from "../../../assets/purplelogo1.png";
import cafesample from "../../../assets/cafesample.jpeg";
import React from "react";

const Div1 = styled.div`
	background-color: #f5f5f5;
	width: 100vw;
	height: 85vw;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	z-index: -5;
  padding:none;
`;
const CafeImg = styled.img`
	width: 100vw;
	height: 85vw;
	filter: brightness(50%);
	z-index: 0;
`;
const PurpleLogo = styled.img`
	position: absolute;
	width: 200px;
	height: 200px;
	left: 0px;
	top: 0px;
`;
const LetterDiv1 = styled.div`
	position: absolute;
	margin-top: -70px;
	font-weight: 400;
	font-size: 17px;
	line-height: 22px;
	text-align: center;
	letter-spacing: -0.408px;
	color: #ffffff;
`;
const LetterDiv2 = styled.div`
	position: absolute;
	margin-top: 50px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 22px;
	letter-spacing: -0.408px;

	color: #ffffff;
`;
const LetterDiv3 = styled.div`
	position: absolute;
  margin-top:180px; 

	font-family: "Noto Sans";
	font-style: normal;
	font-weight: 600;
	font-size: 40px;
	line-height: 22px;

	text-align: center;
	letter-spacing: -0.408px;

	color: #ffffff;
`;

export default function TodayRecommand() {
	return (
		<>
			<Div1>
				<CafeImg src={cafesample}></CafeImg>
				<PurpleLogo src={purplelogo}></PurpleLogo>
				<LetterDiv1>오늘의 추천장소</LetterDiv1>
				<LetterDiv2>비오는 날 혼자 공부하기 좋은 </LetterDiv2>
				<LetterDiv3>파파커피</LetterDiv3>
			</Div1>
		</>
	);
}
