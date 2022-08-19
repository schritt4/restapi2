import styled from "styled-components";
import React from "react";
import { useLocation } from "react-router-dom";

/* const results = [
  { name: "파파커피 ", img: { CafeSample }, location: "신촌", num: "010", exp: "넓은카페~ " },
  { name: "파파커피 ", img: { CafeSample }, location: "신촌", num: "010", exp: "넓은카페~ " },
];*/

const CafeTitle = styled.div``;
const CafeImg = styled.img``;
const CafeLoc = styled.div``;
const CafeNum = styled.div``;
const CafeExp = styled.div``;

/*'''const location = useLocation();
const id = location.state.id;
const pur2 = location.state.pur2;
const place = location.state.place;
const info = location.state.info;
const address = location.state.address;
const open = location.state.open;
const number = location.state.number;
const sns = location.state.sns;
const image = location.state.image*/

export default function ListUp(props) {
	return (
		<>
			<CafeTitle>{props.id}</CafeTitle>
			<CafeLoc>{props.pur2}</CafeLoc>
			<CafeNum>{props.place}</CafeNum>
			<CafeExp>{props.info}</CafeExp>
			<div>{props.address}</div>
			<div>{props.open}</div>
			<div>{props.number}</div>
			<div>{props.sns}</div>
			<div>{props.image}</div>
		</>
	);
}
