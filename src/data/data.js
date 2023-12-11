import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="fab fa-html5 h-16 w-16 text-emerald-500" />,
    text: "Adipisicing cupidatat sit elit ea nisi adipisicing labore irure.",
  },
  {
    id: nanoid(),
    title: "JavaScript",
    icon: <FaJs className="fas fa-scroll h-16 w-16 text-emerald-500" />,
    text: "Elit ex ut nulla anim nulla.In ullamco ad consequat incididunt fugiat occaecat.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="fab fa-react h-16 w-16 text-emerald-500" />,
    text: "Ex dolore ex laborum anim adipisicing nostrud. ",
  },
];

export const projects = [
    {
      id: nanoid(),
      img: 'assets/images/image1.jpg',
      url: '#',
      github: '#',
      title: 'first project',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    },
    {
      id: nanoid(),
      img: 'assets/images/image2.jpg',
      url: '#',
      github: '#',
      title: 'second project',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    },
    {
      id: nanoid(),
      img: 'assets/images/image3.jpg',
      url: '#',
      github: '#',
      title: 'third project',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
    },
  ];