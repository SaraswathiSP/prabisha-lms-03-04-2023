import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "typeface-muli";
export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  z-index: 9;
  align-items: center;
  height: 64px;
  justify-content: space-evenly;
  background: #fdf7c3;
  box-shadow: 0 2px 4px #00000012;
  @media screen and (max-width: 675px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    top: 75px;
    margin-left: ${(props) => (props.isClicked ? "-300px" : "0")};
    width: 270px;
    height: 100vh;
    box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
    padding: 40px 0 0 10px;
    transition: 0.3s ease-in-out;
  }
`;

export const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 55px;
  padding: 10px;
  @media screen and (min-width: 676px) {
    display: none;
  }
`;
export const ButtonContainer = styled.div`
  display: none;
  align-items: center;
  @media screen and (max-width: 675px) {
    display: flex;
  }
`;

export const Handlers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
  @media screen and (max-width: 675px) {
    font-size: 24px;
    cursor: pointer;
  }
  @media screeen and (min-width: 676px) {
    display: none;
  }
`;

export const Bars = styled(FaBars)`
  font-size: 30px;
  font-weight: bold;
  align-items: center;
`;

export const Close = styled(AiOutlineClose)`
  font-size: 30px;
  font-weight: bold;
  align-items: center;
`;

export const Logo = styled.img`
  height: 45px;
  width: 100px;
  @media screen and (max-width: 675px) {
    align-self: flex-start;
    margin-left: 20px;
  }
`;

export const NavContainer = styled.ul`
  display: flex;
  flex-direction: row;
  height: 64px;
  align-items: center;
  @media screen and (max-width: 675px) {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-left: -30px;
    align-items: flex-start;
    align-self: flex-start;
  }
`;

export const NavItem = styled.li`
  font-family: "Muli", sans-serif;
  height: 50px;
  font-style: normal;
  font-size: 16px;
  line-height: 22px;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  letter-spacing: 0.18px;
  position: relative;
  white-space: nowrap;
  border-bottom: 3px solid #ffffff;
  cursor: pointer;
`;

export const ProfileIconContainer = styled.div`
  font-family: "Muli", sans-serif;
  height: 50px;
  font-style: normal;
  font-size: 20px;
  line-height: 22px;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  letter-spacing: 0.18px;
  position: relative;
  font-weight: 700;
  white-space: nowrap;
  border-bottom: 3px solid #ffffff;
  @media screen and (max-width: 675px) {
    display: none;
  }
`;
export const MobileProfileIconContainer = styled.div`
  font-family: "Muli", sans-serif;
  height: 50px;
  font-style: normal;
  font-size: 20px;
  line-height: 22px;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  letter-spacing: 0.18px;
  position: relative;
  font-weight: 700;
  white-space: nowrap;
  border-bottom: 3px solid #ffffff;
`;
export const Profile = styled.img`
  height: 55px;
  width: 55px;
  border-radius: 100px;
  margin-left: 10px;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
`;

export const LogoutBtn = styled.button`
  border: 1px solid #8a8136;
  background-color: #fff;
  color: #000;
  border-radius: 5px;
  padding: 10px;
  margin-left: 20px;
  cursor: pointer;
`;

export const LogoutBtnMobile = styled.button`
  border: none;
  background: none;
  font-family: "Muli", sans-serif;
  height: 50px;
  font-style: normal;
  font-size: 16px;
  line-height: 22px;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  letter-spacing: 0.18px;
  position: relative;
  white-space: nowrap;
  border-bottom: 3px solid #ffffff;
  cursor: pointer;
  text-decoration: none;
  @media (min-width: 768px) {
    display: none;
  }
`;
