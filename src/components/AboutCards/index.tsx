import SectionTitle from "../Common/SectionTitle";
import SingleAboutCard from "./singleAboutCard";
import aboutData from "./aboutCardData";

const AboutSection = () => {
  return (
    <section id="about" className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="About Us"
          paragraph="Learn more about our mission, vision, and values that drive our success." center
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {aboutData.map((about) => (
            <SingleAboutCard 
            key={about.id} 
            about={about} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;