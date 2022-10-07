import React from "react";
import styled from "styled-components";
import GlobalStyles from "../GlobalStyles";
import MovieScreen from "./MoviesScreen";
import Showtime from "./Showtime";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Seats from "./Seats";
import Order from "./Order";

export default function App() {
  const [title, setTitle] = React.useState("Selecione o filme:");

  return (
    <>
      <BrowserRouter>
        <GlobalStyles />

        <Link to="/">
          <StyledHeader>CINEFLEX</StyledHeader>
        </Link>

        <Wrapper>
          <PageTitle>{title}</PageTitle>
          <Routes>
            <Route path="/" element={<MovieScreen setTitle={setTitle} />} />

            <Route
              path={`/sessoes/:movieId`}
              element={<Showtime setTitle={setTitle} />}
            />

            <Route
              path="/assentos/:sessionId"
              element={<Seats setTitle={setTitle} />}
            />
            <Route path="/sucesso" element={<Order setTitle={setTitle} />} />
          </Routes>
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 67px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #c3cfd9;

  color: #e8833a;
  font-size: 32px;
  font-weight: 700;
  text-align: center;

  cursor: pointer;
`;

const Wrapper = styled.div`
  margin: 67px auto 130px;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.p`
  margin: 30px 0;
  font-size: 24px;
`;
