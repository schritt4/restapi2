import styled from "styled-components";
import purplelogo from "../../../assets/purplelogo1.png";
import cafesample from "../../../assets/cafesample.jpeg";
import React from "react";
import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const Div1 = styled.div`
	background-color: #f5f5f5;
	width: 100vw;
	height: 60vw;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	z-index: -5;
	padding: none;
`;

const LetterDiv1 = styled.div`
	position: absolute;
	margin-top: -70px;
	font-weight: 400;
	font-size: 17px;
	line-height: 22px;
	text-align: center;
	letter-spacing: -0.408px;
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
`;
const LetterDiv3 = styled.div`
	position: absolute;
	margin-top: 180px;

	font-family: "Noto Sans";
	font-style: normal;
	font-weight: 600;
	font-size: 40px;
	line-height: 22px;

	text-align: center;
	letter-spacing: -0.408px;
`;

export default function Curation() {
	const [data, setData] = useState([]);

	const getData = useCallback(() => {
		axios
			.get("http://127.0.0.1:8000/")
			.then((response) => {
				console.log(response.data);
				setData(response.data);
			})
			.catch((e) => {
				console.log(e);
			});
	});
	useEffect(getData, []);

	return (
		<>
			<Div1>
				{data.map((datas) => (
					<>
						<div>{datas.id}</div>
						<img src={datas.image} />
						<div>{datas.title}</div>
						<div>{datas.content}</div>
						<div>{datas.created_at}</div>
					</>
				))}
			</Div1>
		</>
	);
}
