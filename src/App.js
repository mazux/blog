import React from "react";

import "./App.css";
import HeaderMenu from "./components/HeaderMenu";
import Main from "./components/Main";
import { Container } from "react-bootstrap";
import ArticlesList from "./components/ArticlesList";
import ProjectsList from "./components/ProjectsList";
import Footer from "./components/Footer";

const App = () => (
  <Container>
    <div className="invisible">
      <h1>Mazen Kenjrawi | DEV</h1>
    </div>
    <HeaderMenu />
    <Main />
    <ArticlesList />
    <ProjectsList />
    <Footer />
  </Container>
);

export default App;
