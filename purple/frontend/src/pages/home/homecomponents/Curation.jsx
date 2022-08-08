import styled from "styled-components";
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
	flex-direction: column;
`;
const CardsWrapper = styled.div`
	display: flex;
	overflow-x: scroll;
`;

const CurationImg = styled.img`
	width: 60px;
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
				<CardsWrapper>
					{data.map((datas) => (
						<>
							<div>id: {datas.id}</div>
							<CurationImg src={datas.image} />
							<div>title: {datas.title}</div>
							<div>content: {datas.content}</div>
							<div>created_at: {datas.created_at}</div>
						</>
					))}
				</CardsWrapper>
			</Div1>
		</>
	);
}
