import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import shrek from "../assets/images/shrek.png";
import sozinho from "../assets/images/sozinho.png";
import spider from "../assets/images/spider-man.png";
import liberdade from "../assets/images/sonho.png";
import horas from "../assets/images/horas.png";
import fuga from "../assets/images/fuga.jpeg";
import rocketman from "../assets/images/rocketman.jpeg";
import amarelo from "../assets/images/amarelo.jpeg";
import {
  AllMoviesBox,
  MoviesComplete,
  Cover,
  MovieTitle,
  SearchBox,
  SearchInput,
} from "../assets/styles";

export default class AllMovies extends React.Component {
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
      {
        id: 6,
        img: fuga,
        title: "A Fuga das Galinhas",
        overview:
          "O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro.",
      },
      {
        id: 7,
        img: amarelo,
        title: "AmarElo",
        overview:
          "Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira.",
      },
      {
        id: 8,
        img: rocketman,
        title: "Rocketman",
        overview:
          "Em reabilitação, Elton John relembra suas origens humildes, as músicas atemporais e os momentos de inspiração e excesso. Baseado em sua verdadeira história.",
      },
    ],
    filteredMovies: [],
  };

  componentDidMount() {
    this.setState({ filteredMovies: this.state.movies });
  }

  search = (e) => {
    const { movies, filteredMovies } = this.state;

    const query = e.target.value;

    if (query !== "") {
      const results = movies.filter((item) => {
        return item.title.toLowerCase().startsWith(query.toLowerCase());
      });
      this.setState({ filteredMovies: results });
    } else {
      this.setState({ filteredMovies: movies });
    }
  };

  render() {
    return (
      <>
        <SearchBox>
          <SearchInput
            type="text"
            placeholder="        Pesquisar"
            onChange={this.search}
          />
        </SearchBox>
        <AllMoviesBox>
          {this.state.filteredMovies.map((item) => (
            <MoviesComplete>
              <Cover
                key={item.id}
                onClick={() => {
                  this.handleModal(item.id);
                }}
                src={item.img}
              />
              <MovieTitle>{item.title}</MovieTitle>
              <p>{item.overview}</p>
            </MoviesComplete>
          ))}
        </AllMoviesBox>
      </>
    );
  }
}
