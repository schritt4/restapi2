import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BodyWrapper from "../../components/Bodywrapper";
import PurPleLogo from "../../assets/purplelogo_p.png";
import { Link } from "react-router-dom";
import React from "react";

const Logo = styled.img``;
const AskingDiv = styled.div`
	font-weight: 700;
	font-size: 24px;
	line-height: 33px;
`;
const DoneBtn = styled.div`
	background-color: #7d00d6;
	color: #ffffff;
	width: 334px;
	height: 55px;
	border-radius: 27.5px;
	font-weight: 700;
	font-size: 16px;
	line-height: 22px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
export default function Searching() {
	return (
		<>
			<BodyWrapper>
				<Logo src={PurPleLogo} />
				<AskingDiv>무엇을 할 계획이신가요? </AskingDiv>
				<Link to="/listing">
					<DoneBtn>완료 </DoneBtn>
				</Link>
			</BodyWrapper>
			<Footer />
		</>
	);
}
