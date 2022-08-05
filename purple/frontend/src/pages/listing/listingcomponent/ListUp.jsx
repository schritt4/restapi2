import styled from "styled-components";
import React from "react";

/* const results = [
  { name: "파파커피 ", img: { CafeSample }, location: "신촌", num: "010", exp: "넓은카페~ " },
  { name: "파파커피 ", img: { CafeSample }, location: "신촌", num: "010", exp: "넓은카페~ " },
];*/

const CafeTitle = styled.div``
const CafeImg = styled.img``
const CafeLoc = styled.div``
const CafeNum = styled.div``
const CafeExp = styled.div``

export default function Searching(props) {
	return (
		<>
      <CafeTitle>{props.name}</CafeTitle>
      <CafeImg src={props.img} />
      <CafeLoc>{props.location}</CafeLoc>
      <CafeNum>{props.num}</CafeNum>
      <CafeExp>{props.exp}</CafeExp>
		</>
	);
}
