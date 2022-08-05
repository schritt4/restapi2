import styled from "styled-components";
import purplelogo from "../../../assets/purplelogo1.png";
import cafesample from "../../../assets/cafesample.jpeg";
import { Link } from "react-router-dom";
import React from "react";

const Div1 = styled.div`
	width: 100vw;
	height: 50vw;
	display: flex;
	flex-direction: column;
	z-index: -5;
	margin: none;
  display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const LetterDiv1 = styled.div`
	margin-top: 31px;
	margin-left: 21px;
	font-weight: 600;
	font-size: 24px;
	line-height: 33px;
`;
const LetterDiv2 = styled.div`
	margin-left: 21px;
	font-weight: 600;
	font-size: 24px;
	line-height: 33px;
`;
const SearchingBtn = styled.div`
	margin-top: 31px;
	width: 334px;
	height: 55px;
	left: 28px;
	top: 476px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-weight: 700;
	font-size: 16px;
	line-height: 22px;
	background: #7d00d6;
	border-radius: 27.5px;
	color: #ffffff;
`;

export default function TodayRecommand() {
	return (
		<>
			<Div1>
				<LetterDiv1>김퍼플님,</LetterDiv1>
				<LetterDiv2>원하는 장소를 찾아보세요 </LetterDiv2>
				<Link to="/searching">
					<SearchingBtn>장소 찾으러 가기</SearchingBtn>
        </Link>
			</Div1>
		</>
	);
}
