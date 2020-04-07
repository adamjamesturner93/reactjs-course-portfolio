import React from "react";
import image from "../../assets/ADA_AdamTurner_Professional _small.jpg";
import * as styles from "./Home.module.scss";

const Home = () => (
  <div className={styles.container}>
    <section>
      <h1>Adam Turner</h1>
      <h2>Software Developer and Rugby Referee</h2>
      <span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod explicabo,
        tenetur sapiente pariatur aperiam voluptate reiciendis excepturi, obcaecati
        quia, quibusdam alias eos facilis voluptatum. Consectetur, doloribus. Nam
        cupiditate commodi obcaecati?
      </span>
    </section>
    <img src={image} alt="Adam Turner" />
  </div>
);

export default Home;
