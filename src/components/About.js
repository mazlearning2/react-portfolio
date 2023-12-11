import AboutImage from "../assets/images/AboutImage.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={AboutImage} className="w-full h-64" alt="" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Fugiat do nostrud cupidatat mollit reprehenderit Lorem elit nulla.
            Minim minim non veniam nulla eu. Aute pariatur eu irure sint
            cupidatat elit anim. Et cillum ut excepteur et sint dolore magna.
            Aute ex cillum fugiat officia cupidatat aute et magna anim ex
            ullamco voluptate. Commodo tempor sint dolore cillum Lorem non
            dolore sint aliquip elit sint. Minim reprehenderit esse ad ad sit
            incididunt incididunt tempor mollit. Cillum laborum commodo ea
            cillum fugiat ad dolor nostrud eiusmod tempor aliqua laboris dolor.
            Aliqua ad fugiat dolore duis qui excepteur et anim eu fugiat. Est
            deserunt amet incididunt culpa ea ullamco voluptate in. Duis irure
            eiusmod voluptate elit mollit enim aliqua laborum occaecat duis ut
            duis.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
