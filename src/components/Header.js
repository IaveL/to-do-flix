import styled from "styled-components";
import {
  HeaderBox,
  TitleBox,
  Title,
  SearchBox,
  SearchInput,
  NavBar,
  Dropdown,
  NavItem,

} from "../assets/styles";
import profile from "../assets/images/profile.svg";
import dropdown from "../assets/images/dropdown.svg"
import React from "react";
import HeaderModal from "./HeaderModal";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

export default class Header extends React.Component {
  state = {
    dropdownState: false,
  };

  handleList = () => {
    this.setState({ dropdownState: !this.state.dropdownState });
  };


  render() {
    return (
      <HeaderBox>
        <TitleBox>
          <Title>TODOFLIX</Title>
          <NavBar>
            <NavItem>Início</NavItem>
            <NavItem onMouseEnter={this.handleList}>
              Categorias
              {this.state.dropdownState && (
                <Dropdown onMouseLeave={this.handleList}>
                  <li>Todos</li>
                  <li>Favoritos</li>
                  <li>Já vistos</li>
                  <li>Adicionados</li>
                </Dropdown>
              )}
                          <img src={dropdown}/>
            </NavItem>
          </NavBar>
        </TitleBox>
        <SearchBox>
          <HeaderModal/>
          <SearchInput type="text" placeholder="        Pesquisar" onChange={this.search} />
          <img src={profile} />
          {/* (to-do: remover a borda do input ao focar nele) */}
        </SearchBox>
      </HeaderBox>
    );
  }
}
