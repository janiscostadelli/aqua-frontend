import styled from "styled-components";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
//import FavoriteIcon from '@material-ui/icons/Favorite';

export const MainContainer = styled.div`
  height: 40px;
  width: 70vw;
  margin: 3px;
  padding: 10px;
  background-color: #5c6bc0;
  color: #292929;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const MusicContainer = styled.div`
  padding: 10px;
`;

export const Title = styled.h5`
  text-align: left;
  margin: 0px;
  font-size: 18px;
  font-family: "Oswald";
  font-weight: 300;
  color: white;
  width: 200px;
`;

export const SubTitle = styled.h6`
  margin: 0px;
  font-size: 16px;
  font-family: "Oswald";
  font-weight: 200;
  color: white;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;
export const StyledPlayIcon = styled(PlayCircleFilledIcon)`
  color: #ffffff;
  font-size: 30px;
`;

export const StyledFavoriteBorderIcon = styled(FavoriteBorderIcon)`
  color: #ffffff;
  font-size: 20px;
`;

export const TextContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  
`;

export const Notice = styled.p`
font-size: 12px;
width: 300px;
text-align: center;
color: rgba(0,0,0,0.7);
`
/* export const StyledFavoriteIcon = styled(StyledFavoriteIcon)` */
/* color: #FFFFFF; */
/* font-size: 20px; */
/* ` */
/*  */
/*  */
