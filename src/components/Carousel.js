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
  FavIconSvg
} from "../assets/styles";
import shrek from "../assets/images/shrek.png";
import sozinho from "../assets/images/sozinho.png";
import spider from "../assets/images/spider-man.png";
import liberdade from "../assets/images/sonho.png";
import horas from "../assets/images/horas.png";
import favbutton from "../assets/images/favbutton.svg"
import Carousel from "nuka-carousel";
import Modal from "react-modal/lib/components/Modal";

const settings = {
  autoplay: true,
  autoplayInterval: 2500,
  // dragging: true,
  slidesToShow: 5,
  wrapAround: true,
  speed: 1000,
};

const Arrow = styled.svg`
  fill:#fff;
  opacity:10;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover{
    opacity: 1;
  }
`;

export default class Destaques extends React.Component {
  state = {
    movies: [
      {
        id: 1,
        img: shrek,
        title: "Shrek",
        overview:
          "Para resgatar uma princesa das garras de um dragão que cospe fogo, o ogro Shrek se une a um companheiro improvável: um burro brincalhão.",
      },
      {
        id: 2,
        img: sozinho,
        title: "Hoje Eu Quero Voltar…",
        overview:
          "Um novo colega de sala transforma a vida do estudante Leonardo, que também é cego, e complica sua amizade com sua melhor amiga.",
      },
      {
        id: 3,
        img: spider,
        title: "Spider-Man",
        overview:
          "Após ser picado por uma aranha radioativa, o garoto Miles Morales logo aprende a lançar teias com seus parceiros de um universo alternativo.",
      },
      {
        id: 4,
        img: liberdade,
        title: "Um Sonho de Liberdade",
        overview:
          "Condenado pelo assassinato da esposa e do amante dela, um banqueiro se apega à esperança e à amizade com um detento chamado Red para sobreviver à prisão.",
      },
      {
        id: 5,
        img: horas,
        title: "Que Horas Ela Volta?",
        overview:
          "Val é a fiel empregada domestica de uma família rica. Mas a chegada de sua filha gera tensão na casa e faz com que ela comece a questionar esse papel.",
      },
    ],
    modalMovies: [],
    carouselModal: false,
  };

  handleModal = (id, event) => {
    this.setState({ carouselModal: !this.state.carouselModal });
    this.setState({
      modalMovies: this.state.movies.filter((item)=>{
        return item.id
      })
    })
  };

  closeModal = () => {
    this.setState({carouselModal: !this.state.carouselModal})
  }


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
                transform= "rotate(90)"
              >
                <path d="M30.033,20.967,17,7.933,3.967,20.967,0,17,17,0,34,17Z" />
              </Arrow>
            )}
            defaultControlsConfig={{
              nextButtonText: '>',
              prevButtonText: ' <',
              pagingDotsStyle: {
                fill: 'none',
              },
            }}
          >
            {/* // vvvvv carrosel visível */}
            {this.state.movies.map((item) => (
              <Movie>
                <FavIconBox>
                  <FavIconSvg src={favbutton}/>
                <Cover key={item.id} onClick={()=>{this.handleModal(item.id)}} src={item.img} />
                </FavIconBox>
                <MovieTitle>{item.title}</MovieTitle>
                <p>{item.overview}</p>
              </Movie>
            ))}
          </Carousel>    
            {this.state.modalMovies.map((i) => (
          <Modal isOpen={this.state.carouselModal}>
              <div>
                <button onClick={this.closeModal}>XXXX</button>
                <br />
                <img src={i.img} />
                <h3 key={i.id}>{i.title}</h3>
                <p>{i.overview}</p>
              </div>
          </Modal>
            ))}
        </HighlightsWrapper>
      </HighlightsContainer>
    );
  }
}
