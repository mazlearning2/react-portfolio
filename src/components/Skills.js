import React from "react";
import SectionTitle from "./SectionTitle";
import { skills } from "../data/data";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div className="bg-slate-50">
        <section className="align-element py-20 " id="skills">
      <SectionTitle text="tech stack" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
    </div>
  );
};

export default Skills;
