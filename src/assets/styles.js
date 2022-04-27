import styled from "styled-components";
import magnifier from "../assets/images/search-icon.svg";

export const MainBox = styled.body``;
export const HeaderBox = styled.header`
  width: 100%;
  /* height: 15vh; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;
`;
export const Title = styled.h1`
  color: red;
`;
export const TitleBox = styled.div`
  display: flex;

  width: 25vw;
  justify-content: space-evenly;
  align-items: center;
`;
export const SearchBox = styled.div`
  display: flex;
  width: 39vw;
  justify-content: space-evenly;
`;
export const AddButton = styled.button`
  background-color: #e71b27;
  border: none;
  color: white;
  width: 115px;
  height: 35px;
  border-radius: 4px;
  &:hover {
    border: 0.5px solid #fff;
    cursor: pointer;
  }
`;
export const SearchInput = styled.input`
  background-color: #2c2c2c;
  background-image: url(${magnifier});
  background-repeat: no-repeat;
  background-position: 3%;
  width: 400px;
  border-radius: 4px;
  border: none;
  color: white;
  text-align: left;
  &:focus {
    background-image: none;
    border: none;
  }
`;
export const NavBar = styled.ul`
  color: #fff;
  display: flex;
  width: 15vw;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
`;
export const RecentBox = styled.div`
  margin-top: 40px;
  height: 50vh;
  color: #fff;
  display: flex;
  align-items: center;
`;
export const RecentMovie = styled.div`
  /* border: solid red; */
  display: flex;
  width: 80%;
  align-items: center;
  justify-content: space-evenly;
`;
export const RecentImg = styled.img`
  width: 30%;
  border-radius: 4px;
  /* height: px; */
`;
export const RecentInfo = styled.div`
  /* border: solid blue; */
  padding: 1rem;
  width: 50%;
`;
export const RecentTitle = styled.h2`
  font-size: 2.3em;
  margin: 9px 0 9px 0;
`;
export const RecentText = styled.div`
  /* border: solid yellow; */
  width: 69%;
  text-align: justify;
`;
export const Highlights = styled.h3`
  color: #fff;
  margin-left: 15px;
`;
export const Movie = styled.div`
  height: 47vh;
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  /* margin: 0 15px 0 15px; */
`;
export const Cover = styled.img`
  width: 250px;
  height: 140px;
`;
export const MovieTitle = styled.h4`
  margin: 10px 0 10px 0;
`;
export const HighlightsContainer = styled.div``;
export const HighlightsWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Dropdown = styled.ul`
  position: absolute;
  z-index: 1;
  padding: 10px;
  width: 125px;
  /* margin: 0; */
`;
export const NavItem = styled.li`
  :hover {
    cursor: pointer;
  }
`;
export const NameInputModal = styled.input`
  height: 40px;
  width: 100%;
  border: none;
  background-color: #2c2c2c;
  border-radius: 4px;
`;
export const OverviewInputModal = styled.input`
  height: 85px;
  width: 100%;
  border: none;
  background-color: #2c2c2c;
  text-align: justify;
  border-radius: 4px;
`;
export const AddMovieBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  height: 400px;
`;
export const RadioInputModal = styled.div`
  display: flex;
  width: 85%;
  justify-content: space-evenly;
`;
export const FooterModal = styled.div`
  display: flex;
  justify-content: center;
`;
export const HeaderModalButtons = styled.button`
  margin: 10px;
  font-weight: bolder;
  background-color: #e71b27;
  border: none;
  color: white;
  width: 115px;
  height: 35px;
  border-radius: 4px;
  &:hover {
    border: 0.5px solid #fff;
    cursor: pointer;
  }
`;
export const HeaderModalClose = styled.button`
  margin: 10px;
  font-weight: bolder;
  background-color: black;
  border: none;
  color: white;
  width: 115px;
  height: 35px;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
`;
export const AddImg = styled.img`
  width: 220px;
  margin-bottom: 50px;
`;
export const AddImgButton = styled.button`
  height: 35px;
  border-radius: 4px;
  border: none;
  width: 150px;
  margin-bottom: 125px;
`;
export const CloseButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  color: white;
`;
export const CloseHeaderModalBtn = styled.button`
  color: #fff;
  border: none;
  background-color: inherit;
  width: 25px;
  height: 25px;
  & :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
export const ModalWrapper = styled.div`
  height: 100%;
  display: flex;
  height: fit-content;
  justify-content: space-around;
`;
export const AddImgBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: fit-content;
  justify-content: first baseline;
`;
export const DropdownItem = styled.li`
  :hover {
    background-color: #525252;
    transform: scale(1.1);
  }
`;
export const RatingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 220px;
`;
export const AllMoviesBox = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 50px;
  flex-wrap: wrap;
`;
export const MoviesComplete = styled.div`
  width: 23%;
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
`;
export const FavIconBox = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 1;
  width: fit-content;
`;
export const FavIconSvg = styled.img`
  position: absolute;
  margin: 3px;
  z-index: 2;
  :hover {
    cursor: pointer;
  }
`;
