import Footer from "../../components/Footer";
import BodyWrapper from "../../components/Bodywrapper";
import styled from "styled-components";
import TodayRecommend from "./homecomponents/TodayRecommend";
import Searching from "./homecomponents/Searching";
import Curation from "./homecomponents/Curation"; 
import React from "react"; 

export default function Home() {
	return (
		<>
      <BodyWrapper>
        <TodayRecommend />
        <Searching/>
				<Curation/>
			</BodyWrapper>
			<Footer />
		</>
	);
}
