import React from "react";
import { Skill } from "../../components";
import * as styles from "./Skills.module.scss";

class Skills extends React.Component {
  state = {
    skills: [
      {
        id: 0,
        name: "ReactJS",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nobis consequatur voluptatem at quaerat quis labore veritatis obcaecati commodi? Error deleniti quam aut iusto eum recusandae officia nam tempore magni!",
      },
      {
        id: 1,
        name: "Making a fool of myself",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nobis consequatur voluptatem at quaerat quis labore veritatis obcaecati commodi? Error deleniti quam aut iusto eum recusandae officia nam tempore magni!",
      },
      {
        id: 2,
        name: "Talking random rubbish on Google Hangouts",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nobis consequatur voluptatem at quaerat quis labore veritatis obcaecati commodi? Error deleniti quam aut iusto eum recusandae officia nam tempore magni!",
      },
    ],
  };

  handleDeleteSkill = (id) => {
    this.setState((currState) => ({
      skills: currState.skills.filter((skill) => skill.id !== id),
    }));
  };

  render() {
    const { skills } = this.state;

    return (
      <React.Fragment>
        <article className={styles.container}>
          <h1>My Skills</h1>
          {skills.map(({ name, content, id }) => (
            <Skill key={id} title={name} onDelete={() => this.handleDeleteSkill(id)}>
              <h3>My Skill</h3>
              <p>{content}</p>
            </Skill>
          ))}
        </article>
      </React.Fragment>
    );
  }
}

// 1. Adding a click handler to delete the entry in the state.

// 1515
export default Skills;
