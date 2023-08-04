"use client";
import { styled, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'SpoqaHanSansNeo';
  font-weight: 700;
  font-style: normal;
  src: url("../public/fonts/SpoqaHanSansNeo-Bold.ttf") format('ttf');
}@font-face {
  font-family: 'SpoqaHanSansNeo';
  font-weight: 400;
  font-style: normal;
  src: url("../public/fonts/SpoqaHanSansNeo-Regular.ttf") format('ttf');
}
  *{
    font-family: "SpoqaHanSansNeo";
    box-sizing: border-box;
    margin: 0 ;
    padding : 0 ;
    list-style: none;



  }
  
  body{
    background-color: #e4e2e2;
  }

  
  `;
export const Inner = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  overflow: hidden;

  @media screen and (min-width: 960px) {
    max-width: 960px;
  }
  @media screen and (max-width: 708px) {
    min-width: 708px;
  }
`;
