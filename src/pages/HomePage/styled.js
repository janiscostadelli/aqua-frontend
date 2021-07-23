import styled from "styled-components";
import { backgroundColor, primaryColor } from "../../constants/colors";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  flex: 1;
  display: flex;
`;

export const Title = styled.h2`
  color: rgba(0, 0, 0, 0.6);
  margin: 10px;
  width: 100%;
  padding-left: 25px;
`;

export const SearchTextField = styled(TextField)`
  border-radius: 5px;
  width: 550px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const SubContainer = styled.div`
  flex: 1;
  background: ${backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MusicsContainer = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1px;
  align-items: center;
  overflow-y: auto;
`;

export const StyledSearch = styled(SearchIcon)`
  color: ${primaryColor};
  font-size: 20px;
`;

export const StyledAddIcon = styled(AddCircleIcon)`
  color: ${primaryColor};
  font-size: 40px;
  transition: 500ms;
  :hover {
    color: #485390;
  }
`;

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
justify-content: center;
`;

export const StyledTextField = styled(TextField)`
  border-radius: 5px;
  width: 250px;
`;