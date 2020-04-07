import React from "react";
import * as styles from "./App.module.scss";

import { Header } from "./components/header";
import image from './assets/ADA_AdamTurner_Professional _small.jpg';

class App extends React.Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <div className={styles.container}>
            <section>
              <h1>Adam Turner</h1>
              <h2>Software Developer and Rugby Referee</h2>
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                explicabo, tenetur sapiente pariatur aperiam voluptate reiciendis
                excepturi, obcaecati quia, quibusdam alias eos facilis voluptatum.
                Consectetur, doloribus. Nam cupiditate commodi obcaecati?
              </span>
            </section>
            <img src={image} alt="Adam Turner" />
          </div>
        </main>
      </React.Fragment>
    );
  }
}
export default App;
