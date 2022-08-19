import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/purplelogo.png";
import React from "react";

const HeaderWrap = styled.header`
	display: flex;
	width: 100vw;
  height: 10vh; 
	background-color: #410F94;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	justify-content: space-between;
	align-items: center;
`;
const PurpleLogo = styled.img`
	width: 8vh;
	margin: 1vh;
`;
export default function Header() {
	return (
		<HeaderWrap>
			
		</HeaderWrap>
	);
}
