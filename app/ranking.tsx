"use client";
import { styled } from "styled-components";
import { Inner } from "../styles/style";
import { useEffect } from "react";

const Section = styled.section`
  width: 100%;
  position: relative;
  top: 60px;
`;
const RankingContainer = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  border-radius: 9px;
`;
const RankingTitle = styled.div`
  padding: 1rem 2rem;
  font-weight: bold;
`;
const RankingUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
`;
const RankingLi = styled.li``;
const RankingDiv = styled.li`
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  height: 5rem;
  border-radius: 1rem;
  box-shadow: 10px 5px 5px #d5d5d5;
`;
const NameIconDiv = styled.div`
  display: flex;
  width: 30%;
  margin-right: 1rem;
`;
const CoinImg = styled.img`
  width: 2.5rem;
  text-align: center;
  margin-right: 1rem;
  object-fit: contain;
`;
const CoinName = styled.div`
  line-height: 5rem;
`;
const DataDiv = styled.div`
  width: 15%;
  line-height: 5rem;
`;
export const Ranking = () => {
  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:8080/api/v1/get-coin/soar");

      //  if (!res.ok) {
      //    throw new Error("Failed to fetch data");
      //  }

      return res.json();
    }
    // let rankinglist = getData();
    // console.log(rankinglist);
  }, []);

  return (
    <Section>
      <Inner>
        <RankingContainer>
          <RankingTitle>급등코인</RankingTitle>
          <RankingUl>
            <RankingLi>
              <RankingDiv>
                <NameIconDiv>
                  <CoinImg src="https://static.upbit.com/logos/BTC.png"></CoinImg>
                  <CoinName>비트코인</CoinName>
                </NameIconDiv>
                <DataDiv>39,103,110</DataDiv>
                <DataDiv>11.1%</DataDiv>
                <DataDiv>39,103,110</DataDiv>
              </RankingDiv>
            </RankingLi>
            <RankingLi>
              {" "}
              <RankingDiv>
                <NameIconDiv>
                  <CoinImg src="https://static.upbit.com/logos/BTC.png"></CoinImg>
                  <CoinName>비트코인</CoinName>
                </NameIconDiv>
                <DataDiv>39,103,110</DataDiv>
                <DataDiv>11.1%</DataDiv>
                <DataDiv>39,103,110</DataDiv>
              </RankingDiv>
            </RankingLi>
            <RankingLi>
              {" "}
              <RankingDiv>
                <NameIconDiv>
                  <CoinImg src="https://static.upbit.com/logos/BTC.png"></CoinImg>
                  <CoinName>비트코인</CoinName>
                </NameIconDiv>
                <DataDiv>39,103,110</DataDiv>
                <DataDiv>11.1%</DataDiv>
                <DataDiv>39,103,110</DataDiv>
              </RankingDiv>
            </RankingLi>
            <RankingLi>
              {" "}
              <RankingDiv>
                <NameIconDiv>
                  <CoinImg src="https://static.upbit.com/logos/BTC.png"></CoinImg>
                  <CoinName>비트코인</CoinName>
                </NameIconDiv>
                <DataDiv>39,103,110</DataDiv>
                <DataDiv>11.1%</DataDiv>
                <DataDiv>39,103,110</DataDiv>
              </RankingDiv>
            </RankingLi>
            <RankingLi>
              {" "}
              <RankingDiv>
                <NameIconDiv>
                  <CoinImg src="https://static.upbit.com/logos/BTC.png"></CoinImg>
                  <CoinName>비트코인</CoinName>
                </NameIconDiv>
                <DataDiv>39,103,110</DataDiv>
                <DataDiv>11.1%</DataDiv>
                <DataDiv>39,103,110</DataDiv>
              </RankingDiv>
            </RankingLi>
            <RankingLi>
              {" "}
              <RankingDiv>
                <NameIconDiv>
                  <CoinImg src="https://static.upbit.com/logos/BTC.png"></CoinImg>
                  <CoinName>비트코인</CoinName>
                </NameIconDiv>
                <DataDiv>39,103,110</DataDiv>
                <DataDiv>11.1%</DataDiv>
                <DataDiv>39,103,110</DataDiv>
              </RankingDiv>
            </RankingLi>
          </RankingUl>
        </RankingContainer>
      </Inner>
    </Section>
  );
};
