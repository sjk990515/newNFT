import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import GlobalStyles from "../layout/GlobalStyles";
import Layout from "../layout/Layout";

function Router() {
  return (
    <BrowserRouter>
      <GlobalStyles />

        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
          </Route>
        </Routes>

    </BrowserRouter>
  )
}

export default Router