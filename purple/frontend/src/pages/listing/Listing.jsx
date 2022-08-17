import styled from "styled-components";
import Footer from "../../components/Footer";
import BodyWrapper from "../../components/Bodywrapper";
import PurPleLogo from "../../assets/purplelogo_p.png";
import { Link } from "react-router-dom";
import ListUp from "./listingcomponent/ListUp";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import CafeSample from "../../assets/cafesample.jpeg";
import React from "react";

const Logo = styled.img``;
const AskingDiv = styled.div`
	font-weight: 700;
	font-size: 24px;
	line-height: 33px;
`;

export default function Listing() {
	const [data, setData] = useState([]);

	const getData = useCallback(() => {
		axios
			.get("http://127.0.0.1:8000/search/?loc_id=1&cat_id=1&pur1_id=1")
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
			<BodyWrapper>
				<Logo src={PurPleLogo} />
				<div>zzz</div>
				{data.map((datas) => (
					<>
						<Link
							to={"/placedetail/" + datas.number}
							state={{
								id: datas.id,
								pur2: datas.pur2,
								place: datas.place,
								info: datas.info,
								address: datas.address,
								open: datas.open,
								number: datas.number,
								sns: datas.sns,
								image: datas.image,
							}}
						>
							datas.id
							datas.pur2
						</Link>
					</>
				))}
			</BodyWrapper>
			<Footer />
		</>
	);
}
