import React from "react";
import styled from "styled-components";
import { RecentBox, RecentImg, RecentMovie, RecentInfo, RecentTitle, RecentText } from "../assets/styles";
import Captain from "../assets/images/capitao-fantastico.png";
import favourite from "../assets/images/favourite.svg"


export default function Recently() {
  return (
    <RecentBox>
      <RecentMovie>
        <RecentImg src={Captain} />
        <RecentInfo>
          <img src={favourite}/>
          <h3>Visto recentemente</h3>
          <RecentTitle>Capitão Fantástico</RecentTitle>
          <RecentText>
            Nas florestas do estado de Washington, um pai cria seus seis filhos
            longe da civilização, em uma rígida rotina de aventuras. Ele é
            forçado a deixar o isolamento e leva sua família para encarar o
            mundo, desafiando sua ideia do que significa ser pai.
          </RecentText>
        </RecentInfo>
      </RecentMovie>
    </RecentBox>
  );
}
