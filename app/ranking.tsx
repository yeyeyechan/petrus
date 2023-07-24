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
const RankingLi = styled.li`
  margin-bottom: 2rem;
`;
export const Ranking = () => {
  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:8080/api/v1/get-coin/soar");

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      return res.json();
    }
    let rankinglist = getData();
    console.log(rankinglist);
  }, []);

  return (
    <Section>
      <Inner>
        <RankingContainer>
          <RankingTitle>급등코인</RankingTitle>
          <RankingUl>
            <RankingLi>test1</RankingLi>
            <RankingLi>test1</RankingLi>
            <RankingLi>test1</RankingLi>
            <RankingLi>test1</RankingLi>
            <RankingLi>test1</RankingLi>
            <RankingLi>test1</RankingLi>
          </RankingUl>
        </RankingContainer>
      </Inner>
    </Section>
  );
};
