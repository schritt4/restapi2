import styled from "styled-components";
import Footer from "../../components/Footer";
import BodyWrapper from "../../components/Bodywrapper";
import PurPleLogo from "../../assets/purplelogo_p.png";
import { Link } from "react-router-dom";
import ListUp from "./listingcomponent/ListUp";
import { useState, useEffect } from "react";
import axios from "axios";
import CafeSample from "../../assets/cafesample.jpeg";
import React from "react";

const Logo = styled.img``;
const AskingDiv = styled.div`
	font-weight: 700;
	font-size: 24px;
	line-height: 33px;
`;

export default function Searching() {

	const results = [
		{ id:0, 'name': "파파커피 ", 'img': { CafeSample }, 'location': "신촌", 'num': "010", 'exp': "넓은카페~ " },
		{ id:1, 'name': "파파커피 ", 'img': { CafeSample }, 'location': "신촌", 'num': "010", 'exp': "넓은카페~ " },
  ];
  
	return (
		<>
			<BodyWrapper>
				<Logo src={PurPleLogo} />
				<div>장소리스팅 </div>
				<ListUp />
				{results.map((props) => (
          <ListUp props={props} key={props.id}  />
				))}
			</BodyWrapper>
			<Footer />
		</>
	);
}
