"use client";
import { css, styled } from "styled-components";
import { Inner } from "../styles/style";
const HeaderDiv = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;
const HeadContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NameDiv = styled.div`
  font-weight: 900;
  font-size: 2rem;
`;
export const Header = () => {
  return (
    <HeaderDiv>
      <Inner>
        <HeadContainer>
          <NameDiv>CoinAlert</NameDiv>
        </HeadContainer>
      </Inner>
    </HeaderDiv>
  );
};
