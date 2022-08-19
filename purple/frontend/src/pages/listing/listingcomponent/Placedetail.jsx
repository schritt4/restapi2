import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../../components/Footer";

export default function Placedetail() {
  const location = useLocation();
  const id = location.state.id;
  const pur2 = location.state.pur2;
  const place = location.state.place;
  const info = location.state.info; 
  const address = location.state.address; 
  const open = location.state.open; 
  const number = location.state.number; 
  const sns = location.state.sns; 
  const image = location.state.image; 
  const loc = location.state.loc; 
  const cat = location.state.cat; 
  
	return (
		<>
      <div>ㅋㅋ</div>
      {id}
      {loc}
      {cat}
      {pur2}
      {place}
      {info}
      {address}
      {open}
      {number}
      {sns}
      {image}
			<Footer />
		</>
	);
}
