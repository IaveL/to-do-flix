import React from "react";
import styled from "styled-components";
import {
  Highlights,
  Movie,
  Cover,
  MovieTitle,
  HighlightsContainer,
  HighlightsWrapper,
  FavIconBox,
  FavIconSvg,
} from "../assets/styles";
import shrek from "../assets/images/shrek.png";
import sozinho from "../assets/images/sozinho.png";
import spider from "../assets/images/spider-man.png";
import liberdade from "../assets/images/sonho.png";
import horas from "../assets/images/horas.png";
import favbutton from "../assets/images/favbutton.svg";
import Carousel from "nuka-carousel";
import Modal from "react-modal";

Modal.setAppElement("body");

const settings = {
  autoplay: true,
  autoplayInterval: 2500,
  // dragging: true,
  slidesToShow: 5,
  wrapAround: true,
  speed: 1000,
};

const Arrow = styled.svg`
  fill: #fff;
  opacity: 10;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export default class Destaques extends React.Component {
  state = {
    movies: [
      {
        img: shrek,
        title: "Shrek",
        overview:
          "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
      },
      {
        img: sozinho,
        title: "Hoje Eu Quero Voltar…",
        overview:
          "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.",
      },
      {
        img: spider,
        title: "Spider-Man",
        overview:
          "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.",
      },
      {
        img: liberdade,
        title: "Um Sonho de Liberdade",
        overview:
          "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.",
      },
      {
        img: horas,
        title: "Que Horas Ela Volta?",
        overview:
          "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.",
      },
    ],
    carouselModal: false,
    testState: 0,
  };

  render() {
    return (
      <HighlightsContainer>
        <Highlights>Destaques!</Highlights>
        <HighlightsWrapper>
          <Carousel
            {...settings}
            renderCenterRightControls={({ nextSlide }) => (
              <Arrow
                onClick={nextSlide}
                xmlns="http://www.w3.org/2000/svg"
                width="68"
                height="68"
                viewBox="0 0 68 68"
                transform="rotate(90)"
              >
                <path d="M30.033,20.967,17,7.933,3.967,20.967,0,17,17,0,34,17Z" />
              </Arrow>
            )}
            defaultControlsConfig={{
              nextButtonText: ">",
              pagingDotsStyle: {
                fill: "none",
              },
            }}
          >
            {/* // vvvvv carrosel visível */}
            {this.state.movies.map((item, i) => (
              <Movie
                key={i}
                onClick={() => {
                  this.setState({
                    carouselModal: !this.state.carouselModal,
                    testState: i,
                  });
                }}
              >
                <FavIconBox>
                  <FavIconSvg src={favbutton} />
                  <Cover src={item.img} />
                </FavIconBox>
                <MovieTitle>{item.title}</MovieTitle>
                <p>{item.overview}</p>

                {/* modal vvv */}

                {this.state.testState === i && (
                  <Modal
                    key={i}
                    isOpen={this.state.carouselModal}
                    style={{
                      content: {
                        display: "flex",
                        flexDirection: "column",
                        backgroundColor: "black",
                        color: "white",
                        width: 450,
                        height: 550,
                        left: "27vw",
                        top: "6vw",
                      },
                      overlay: {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <button>XXXX</button>
                    <br />
                    <img src={item.img} alt="Imagem do filme" />
                    <li>{item.title}</li>
                    <li>{item.overview}</li>
                  </Modal>
                )}
              </Movie>
            ))}
          </Carousel>
        </HighlightsWrapper>
      </HighlightsContainer>
    );
  }
}
