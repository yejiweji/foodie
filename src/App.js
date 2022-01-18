import React, { PureComponent } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import './App.css';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      navCard: "fridge",
      title: "What's in your fridge?",
    };
  }

  handleNavChange = valueList => {
    this.setState({
      navCard: valueList[0],
      title: valueList[1],
    });
  };


  render() {
    const { navCard, title } = this.state;
  
    return (
      <div className="app">
        <Header />
        <div className="wrapper">
          <NavBar navChange={this.handleNavChange} />
          <Container title={title} navCard={navCard} />
        </div>
      </div>
    );
  }
}
