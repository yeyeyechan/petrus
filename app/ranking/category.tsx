"use client";
import { Inner } from "@/styles/style";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CategoryNav = styled.nav`
  width: 100%;
  position: relative;
  top: 90px;
`;
const NavContainer = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  border-radius: 1rem;
  height: 7rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const NavDiv = styled.div`
  text-align: center;

  margin-left: 2rem;
`;
const NavDivIconSpan = styled.div`
  font-size: 3rem;
`;
const NavDivText = styled.div``;
export const Category = () => {
  return (
    <CategoryNav>
      <Inner>
        {" "}
        <NavContainer>
          <NavDiv>
            <NavDivIconSpan className="material-symbols-outlined">
              trending_up
            </NavDivIconSpan>
            <NavDivText>상승코인</NavDivText>
          </NavDiv>
          <NavDiv>
            {" "}
            <NavDivIconSpan className="material-symbols-outlined">
              rocket_launch
            </NavDivIconSpan>
            <NavDivText>급등코인</NavDivText>
          </NavDiv>
          <NavDiv>
            {" "}
            <NavDivIconSpan className="material-symbols-outlined">
              trending_down
            </NavDivIconSpan>
            <NavDivText>하락코인</NavDivText>
          </NavDiv>
          <NavDiv>
            {" "}
            <NavDivIconSpan className="material-symbols-outlined">
              block
            </NavDivIconSpan>
            <NavDivText>급락코인</NavDivText>
          </NavDiv>
        </NavContainer>
      </Inner>
    </CategoryNav>
  );
};
