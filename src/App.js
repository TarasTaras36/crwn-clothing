import React from "react";
import Header from "./components/header/header.component";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

const HatsPage = (props) => {
  console.log(props)
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

const TopicsList = () => (
  <div>
    <h1>TOPICS List</h1>
  </div>
);

const TopicDetail = () => (
  <div>
    <h1>TOPIC DETAIL</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  component={HatsPage} />
        <Route exact path="/topics" component={TopicsList} />
        <Route exact path="/topics/:topicId" component={TopicDetail} />
      </Switch>
    </div>
  );
}

export default App;
