import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PurPleLogo from "../../assets/purplelogo_p.png";
import { Link } from "react-router-dom";
import React from "react";
import { useState, useCallback } from "react";

const BodyWrapper = styled.div`
	height: 90vh;
`;
const Logo = styled.img``;

const AskingDiv = styled.div`
	font-weight: 700;
	font-size: 24px;
	line-height: 33px;
	color: #575757;
`;
const BtnDiv = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 14vh;
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
const OPTIONS_loc = [
	{ value: 1, name: "서대문구" },
	{ value: 2, name: "마포구" },
];
const OPTIONS_cat = [
	{ value: 1, name: "카페" },
	{ value: 2, name: "식당" },
];
const OPTIONS_pur1 = [
	{ value: 1, name: "업무하기 좋은 " },
	{ value: 2, name: "인스타그래머블한" },
	{ value: 3, name: "디저트가 맛있는" },
	{ value: 4, name: "뷰가 좋은" },
	{ value: 5, name: "애견동반 가능" },
];
const OPTIONS_pur2 = [
	{ value: 1, name: "사진찍기 좋은" },
	{ value: 2, name: "기념일에 방문하기 좋은" },
	{ value: 3, name: "간단하게 먹기 좋은 " },
	{ value: 4, name: "비건 식당" },
	{ value: 5, name: "애견동반 가능" },
];
const StyledSelect = styled.select`
	width: 130px;
	height: 80px;
	margin: 10px;
	font-weight: 700;
	font-size: 20px;
	line-height: 27px;
	color: #7d00d6;
	border: none;
`;
const QBox1 = styled.div`
	margin: 2vw;
`;
const QBox2 = styled.div`
	//${(props) => props.hide_1 && `display: none;`}
	margin: 2vw;
`;
const QBox3 = styled.div`
	//${(props) => props.hide_2 && `display: none;`}
	margin: 2vw;
`;

export default function Searching() {
	const QBox2 = styled.div`
		${(props) => props.hide_1 && `display: none;`}
		margin: 2vw;
	`;
	const QBox3 = styled.div`
		${(props) => props.hide_2 && `display: none;`}
		margin: 2vw;
	`;
	const [value_loc, setValue_loc] = useState(0);
	const [value_cat, setValue_cat] = useState(0);
	const [value_pur, setValue_pur] = useState(0);

	const [hide_1, setHide_1] = useState(true);
	const [hide_2, setHide_2] = useState(true);

	const showingDiv = useCallback(() => {
		console.log({ value_loc });
		console.log({ value_cat });

		if ({ value_loc } != 0 && { value_cat } == 1) {
			setHide_1(false);
			console.log({ hide_1 });
		} else if ({ value_loc } != 0 && { value_cat } == 2) {
			setHide_2(false);
			console.log({ hide_2 });
		} else {
			return <></>;
		}
	});

	const handleChange_loc = (e) => {
		setValue_loc(e.target.value);
		showingDiv();
	};
	const handleChange_cat = (e) => {
		setValue_cat(e.target.value);
		showingDiv();
	};
	const handleChange_pur = (e) => {
		setValue_pur(e.target.value);
		showingDiv();
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const SelectBox_Loc = (props) => {
		return (
			<StyledSelect onChange={handleChange_loc}>
				<option value={0} disabled>
					위치
				</option>
				{props.options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.name}
					</option>
				))}
			</StyledSelect>
		);
	};
	const SelectBox_Cat = (props) => {
		return (
			<StyledSelect onChange={handleChange_cat}>
				<option value={0} disabled>
					공간
				</option>
				{props.options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.name}
					</option>
				))}
			</StyledSelect>
		);
	};
	const SelectBox_Purpose = (props) => {
		return (
			<StyledSelect onChange={handleChange_pur}>
				<option value={0} disabled>
					목적
				</option>
				{props.options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.name}
					</option>
				))}
			</StyledSelect>
		);
	};

	return (
		<>
			<BodyWrapper>
				<Logo src={PurPleLogo} />
				<QBox1>
					<AskingDiv>어디로 가시나요? </AskingDiv>
					<SelectBox_Loc options={OPTIONS_loc}></SelectBox_Loc>
					<SelectBox_Cat options={OPTIONS_cat}></SelectBox_Cat>
				</QBox1>

				<QBox2 hide_1={hide_1}>
					<AskingDiv>무엇을 할 계획이신가요?(카페) </AskingDiv>
					<SelectBox_Purpose options={OPTIONS_pur1}></SelectBox_Purpose>
				</QBox2>
				<QBox3 hide_2={hide_2}>
					<AskingDiv>무엇을 할 계획이신가요?(식당)</AskingDiv>
					<SelectBox_Purpose options={OPTIONS_pur2}></SelectBox_Purpose>
				</QBox3>

				<BtnDiv>
					<Link to={"/listing/" + value_loc + value_cat + value_pur}
						state={{
							url: "http://127.0.0.1:8000/search/?loc_id=1&cat_id=1&pur1_id=1",
							id: value_loc + value_cat + value_pur,
					}}>
						<DoneBtn>완료 </DoneBtn>
					</Link>
				</BtnDiv>
			</BodyWrapper>
			<Footer />
		</>
	);
}
