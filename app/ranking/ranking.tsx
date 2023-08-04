"use client";
import { styled } from "styled-components";
import { Inner } from "../../styles/style";
import { useEffect, useRef, useState } from "react";
import useWebsocket from "@/websocket/wsHandler";
import * as StompJs from "@stomp/stompjs";
import SockJS from "sockjs-client";
const callRankingData = async () => {
  const res = await fetch("http://localhost:8080/api/v1/lamp/getSoarCoin", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};
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
const RankingDiv = styled.div`
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
  const [wsrankingList, setWsRankingList] = useState([]);
  useEffect(() => {
    const client = new StompJs.Client({
      brokerURL: "ws://localhost:8080/coinview-websocket",
    });

    client.onConnect = () => {
      client?.subscribe("/coinview/getSoarCoin", (message) => {
        setWsRankingList(JSON.parse(message.body));
        console.log(JSON.parse(message.body));
      });
      client?.publish({ destination: "/coinviewclient/call", body: "hello" });
    };
    client.activate();
    return () => {
      client?.deactivate();
    };
  }, []);

  return (
    <Section>
      <Inner>
        <RankingContainer>
          <RankingTitle>급등코인</RankingTitle>
          <RankingUl>
            {wsrankingList.map((ele: CoinRanking) => {
              return (
                <RankingLi key={ele.id}>
                  <RankingDiv>
                    <NameIconDiv>
                      <CoinImg src={ele.logo}></CoinImg>
                      <CoinName>{ele.korean_name}</CoinName>
                    </NameIconDiv>
                    <DataDiv>{ele.trade_price}</DataDiv>
                    <DataDiv>{ele.signed_change_rate}%</DataDiv>
                    <DataDiv>{ele.signed_change_price}</DataDiv>
                  </RankingDiv>
                </RankingLi>
              );
            })}
          </RankingUl>
        </RankingContainer>
      </Inner>
    </Section>
  );
};
