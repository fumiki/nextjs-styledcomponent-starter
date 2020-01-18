import { NextPage } from "next";
import { AppProps } from "next/app";
import React from "react";
import { Reset } from "styled-reset";

const App: NextPage<AppProps> = ({ Component }) => {
  return (
    <>
      <Reset />
      <Component />
    </>
  );
};

export default App;
