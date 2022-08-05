import styled from "styled-components";
import Logo from "../assets/purplelogo.png";
import { Link } from "react-router-dom";
import SearchingIcon from '../assets/icon/searchingicon.png';
import HomeIcon from '../assets/icon/homeicon.png';
import MapIcon from '../assets/icon/mapicon.png'; 
import React from "react";

const GrayWrapper = styled.footer`
	width: 100vw;
	height: 10vh;
	margin: none;
	bottom: 0;
	display: flex;
	justify-content: space-between;
	position: sticky;
	background: #ffffff;
	box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
`;
const Button = styled.img`
	width: 4vh;
	height: 4vh;
	padding: 3vh 10vw 3vh 10vw;  
`;

export default function Footer() {
	return (
		<GrayWrapper>
			<Link to="/searching">
				<Button src={SearchingIcon} />
			</Link>
			<Link to="/">
				<Button src={HomeIcon} />
			</Link>
			<Link to="/map">
				<Button src={MapIcon}  />
			</Link>
		</GrayWrapper>
	);
}
