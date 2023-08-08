"use client";
import { styled } from "styled-components";
import { Inner, MoreButton } from "../../styles/style";
import { useEffect, useRef, useState } from "react";
import useWebsocket from "@/websocket/wsHandler";
import * as StompJs from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { makepercent, makewon } from "@/util/common";
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
  top: 130px;
`;
const RankingContainer = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  border-radius: 1rem;
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
  align-items: center;
  height: 5rem;
  border-radius: 1rem;
  box-shadow: 10px 5px 5px #d5d5d5;
`;
const NameIconDiv = styled.div`
  display: flex;
  width: 30%;
  margin-right: 1rem;
  align-items: center;
`;
const CoinImg = styled.img`
  width: 2.5rem;
  text-align: center;
  margin-right: 1rem;
  object-fit: contain;
`;
const CoinName = styled.div``;
const DataDiv = styled.div<{ $change?: string }>`
  padding: 0;
  width: 15%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation-name: ${(props) => (props.$change === "none" ? "" : "change")};
  animation-timing-function: ease;
  animation-duration: 1s;
  @keyframes change {
    0% {
    }
    50% {
      border-style: solid;
      border-width: thin;
      border-color: ${(props) =>
        props.$change === "up"
          ? "red"
          : props.$change === "down"
          ? "blue"
          : "none"};
    }
    100% {
      border-style: none;
    }
  }
`;
export const Ranking = () => {
  const [wsrankingList, setWsRankingList] = useState<CoinRanking[]>([]);
  const [viewwsrankingList, setViewsRankingList] = useState<CoinRanking[]>([]);
  const [count, setCount] = useState(5);
  const [newdata, setNewdata] = useState<CoinRanking | null>();
  const [useClient, setUseClient] = useState<StompJs.Client>(
    new StompJs.Client({
      brokerURL: "ws://localhost:8080/coinview-websocket",
    })
  );
  const handleClickMore = () => {
    if (count + 5 < wsrankingList.length) setCount(count + 5);
    else setCount(count + (wsrankingList.length - count));
  };
  useEffect(() => {
    useClient.onConnect = () => {
      useClient?.subscribe("/coinview/getSoarCoin", (message) => {
        const wsdata: CoinRanking = JSON.parse(message.body);
        wsdata.change = "none";
        setNewdata(wsdata);
      });
      useClient?.publish({
        destination: "/coinviewclient/call",
        body: "hello",
      });
    };
    useClient.activate();

    return () => {
      useClient?.deactivate();
    };
  }, []);
  useEffect(() => {
    const index = wsrankingList.findIndex((ele: CoinRanking) => {
      return ele.market === newdata?.market;
    });
    let newwsrankingList: CoinRanking[] = wsrankingList.slice();

    if (newdata !== undefined && newdata !== null) {
      if (index === -1) newwsrankingList.push(newdata);
      else {
        if (
          newwsrankingList[index].signed_change_price >
          newdata.signed_change_price
        )
          newdata.change = "up";
        else if (
          newwsrankingList[index].signed_change_price <
          newdata.signed_change_price
        )
          newdata.change = "down";
        newwsrankingList[index] = newdata;
      }
      newwsrankingList = newwsrankingList.filter(
        (ele) => ele.signed_change_rate > 0.01
      );
      newwsrankingList.sort(
        (a, b) => b.signed_change_rate - a.signed_change_rate
      );
      setWsRankingList(newwsrankingList);
      setViewsRankingList(newwsrankingList.slice(0, count));
    }

    console.log(newdata);
  }, [newdata, count]);
  return (
    <Section>
      <Inner>
        <RankingContainer>
          <RankingTitle>급등코인</RankingTitle>
          <RankingUl>
            {viewwsrankingList.map((ele: CoinRanking) => {
              return (
                <RankingLi key={ele.id}>
                  <RankingDiv>
                    <NameIconDiv>
                      <CoinImg src={ele.logo}></CoinImg>
                      <CoinName>{ele.korean_name}</CoinName>
                    </NameIconDiv>
                    <DataDiv $change={ele.change}>
                      {makewon(ele.trade_price)}
                    </DataDiv>
                    <DataDiv $change={ele.change}>
                      {makepercent(ele.signed_change_rate)}
                    </DataDiv>
                    <DataDiv $change={ele.change}>
                      {makewon(ele.signed_change_price)}
                    </DataDiv>
                  </RankingDiv>
                </RankingLi>
              );
            })}
            {count < wsrankingList.length && (
              <MoreButton
                onClick={() => {
                  handleClickMore();
                }}
              >
                더보기
              </MoreButton>
            )}
          </RankingUl>
        </RankingContainer>
      </Inner>
    </Section>
  );
};
