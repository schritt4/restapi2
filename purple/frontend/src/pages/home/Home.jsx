import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BodyWrapper from "../../components/Bodywrapper";
import styled from "styled-components";
import TodayRecommand from "./homecomponents/TodayRecommand";
import Searching from "./homecomponents/Searching";
import React from "react"; 

const Div1 = styled.div`
	background-color: #f5f5f5;
	width: 100vw;
	height: 50vw;
`;
const SearchingBar = styled.div`
	width: 100vw;
	height: 50vw;
	background-color: lightpink;
`;
const Recommendation = styled.div`
	width: 100vw;
	height: 50vw;
	background-color: lightgray;
`;

export default function Home() {
	return (
		<>
      <BodyWrapper>
        <TodayRecommand />
        <Searching/>
				<Recommendation>오늘의 추천장소 </Recommendation>
			</BodyWrapper>
			<Footer />
		</>
	);
}
