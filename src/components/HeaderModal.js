import React from "react";
import Modal from "react-modal";
import {
  NameInputModal,
  OverviewInputModal,
  ModalWrapper,
  RadioInputModal,
  FooterModal,
  HeaderModalButtons,
  HeaderModalClose,
  AddImg,
  AddImgButton,
  CloseButtonWrapper,
  CloseHeaderModalBtn,
  AddMovieBox,
  AddImgBox,
  AddButton,
  RatingBox
} from "../assets/styles";
import addimg from "../assets/images/add-img.svg";
import ReactStars from "react-rating-stars-component";

export default class HeaderModal extends React.Component {
  state = {
    headerModal: false,
    starNum: 0,
    RatingSettings: {
      size: 40,
      count: 5,
      color: "white",
      isHalf: true,
      activeColor: "#daa520",
      onChange: (newValue) => {
        this.setState({starNum: newValue})
      }
    }
  };

  handleModal = () => {
    this.setState({ headerModal: !this.state.headerModal });
  };
  render() {
    return (
      <>
        <AddButton onClick={this.handleModal}>Adicionar filme</AddButton>
        <Modal
          style={{
            content: {
              backgroundColor: "black",
              color: "white",
              width: 750,
              height: 550,
              left: "27vw",
              top: "6vw",
            },
          }}
          isOpen={this.state.headerModal}
          shouldCloseOnEsc={true}
        >
          <CloseButtonWrapper>
            <CloseHeaderModalBtn onClick={this.handleModal}>
              X
            </CloseHeaderModalBtn>
          </CloseButtonWrapper>
          <h3>Adicionar Filme</h3>
          <ModalWrapper>
            <AddMovieBox>
              <h3>Nome</h3>
              <NameInputModal type="text" />
              <h3>Descrição</h3>
              <OverviewInputModal type="text" />
              <h3>Status</h3>
              <RadioInputModal>
                <label>
                  <input type="radio" name="watched" />
                </label>{" "}
                Já assisti
                <label>
                  <input type="radio" name="watched" />
                </label>{" "}
                Ainda não assisti
              </RadioInputModal>
              <h3>Nota</h3>
              <RatingBox>
          <ReactStars {...this.state.RatingSettings} /> 
          <span>({this.state.starNum}/5)</span>
          </RatingBox>
            </AddMovieBox>
            <AddImgBox>
              <AddImg src={addimg} />
              <AddImgButton>Selecionar Imagem</AddImgButton>
            </AddImgBox>
          </ModalWrapper>
          <FooterModal>
            <HeaderModalClose onClick={this.handleModal}>
              Cancelar
            </HeaderModalClose>
            <HeaderModalButtons onClick={this.handleModal}>
              Confirmar
            </HeaderModalButtons>
          </FooterModal>
        </Modal>
      </>
    );
  }
}
