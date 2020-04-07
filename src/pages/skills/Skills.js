import React, { useState } from "react";
import { Skill } from "../../components";

const Skills = () => {
  const [skillsData, setSkillsData] = useState([
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
  ]);

  const handleDeleteSkill = (id) => {
    console.log(id);
    setSkillsData((currSkillData) =>
      currSkillData.filter((skill) => skill.id !== id),
    );
  };

  return (
    <React.Fragment>
      <article>
        <h1>My Skills</h1>
        {skillsData.map(({ name, content, id }) => (
          <Skill key={id} title={name} onDelete={() => handleDeleteSkill(id)}>
            <h3>My Skill</h3>
            <p>{content}</p>
          </Skill>
        ))}
      </article>
    </React.Fragment>
  );
};

// 1. Adding a click handler to delete the entry in the state.

// 1515
export default Skills;
