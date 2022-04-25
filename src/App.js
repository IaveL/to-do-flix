import React from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllMovies from "./pages/AllMovies";
import HeaderModal from "./components/HeaderModal";
import styled from "styled-components"
import { NavBar, NavItem, Dropdown, HeaderBox, TitleBox, Title, SearchBox, SearchInput, DropdownItem} from "./assets/styles";
import profile from "./assets/images/profile.svg";
import shrek from "./assets/images/shrek.png";
import sozinho from "./assets/images/sozinho.png";
import spider from "./assets/images/spider-man.png";
import liberdade from "./assets/images/sonho.png";
import horas from "./assets/images/horas.png";
import fuga from "./assets/images/fuga.jpeg"
import rocketman from "./assets/images/rocketman.jpeg"
import amarelo from "./assets/images/amarelo.jpeg"
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  li{
    list-style-type: none;
  }
  body{
    background-color: black;
    width: 100%;
    height: fit-content;
  }
`;
const Anchor = styled(Link)`
  text-decoration: none;
  color: #fff;
    & :hover {
      background-color:  #525252;
    }
  `
export default class App extends React.Component {
  state = {
    dropdownState: false,
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
          overview: "O galo Rocky e a galinha Ginger querem ajudar todas as outras galinhas a fugirem da granja onde vivem em cativeiro.",
      },
      {
          id: 7,
          img: amarelo,
          title: "AmarElo",
          overview: "Nos bastidores do show no Theatro Municipal de São Paulo, o rapper e ativista Emicida celebra o grande legado da cultura negra brasileira.",
      },
      {
          id: 8,
          img: rocketman,
          title: "Rocketman",
          overview: "Em reabilitação, Elton John relembra suas origens humildes, as músicas atemporais e os momentos de inspiração e excesso. Baseado em sua verdadeira história.",
      },
    ],
    filteredMovies: []
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

  handleList = () => {
    this.setState({ dropdownState: !this.state.dropdownState });
  };

  render() {
    return (
      <Router>
        <GlobalStyle />
        <HeaderBox>
        <TitleBox>
          <Title>TODOFLIX</Title>
          <NavBar>
            <NavItem><Anchor to ="/">Início</Anchor></NavItem>
            <NavItem onMouseEnter={this.handleList}>
              Categorias
              {this.state.dropdownState && (
                <Dropdown onMouseLeave={this.handleList}>
                  <DropdownItem><Anchor to="/AllMovies">Todos</Anchor></DropdownItem>
                  <DropdownItem>Favoritos</DropdownItem>
                  <DropdownItem>Já vistos</DropdownItem>
                  <DropdownItem>Adicionados</DropdownItem>
                </Dropdown>
              )}
            </NavItem>
          </NavBar>
        </TitleBox>
        <SearchBox>
          <HeaderModal/> 
          {/* ^^ modal de adicionar filmes */}
          <SearchInput type="text" placeholder="        Pesquisar" onChange={this.search}/>
          <img src={profile} />
        </SearchBox>
      </HeaderBox>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AllMovies" element={<AllMovies/>}/>
        </Routes>
      </Router>
    );
  }
}
