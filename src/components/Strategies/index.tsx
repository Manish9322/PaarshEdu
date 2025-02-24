import SectionTitle from "../Common/SectionTitle";
import SingleStrategy from "./singleStrategy";
import strategyData from "./strategyData";

const StrategiesSection = () => {
  return (
    <section id="strategies" className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Strategies"
          paragraph="Explore our innovative strategies that drive success and enhance operational efficiency."
          center
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {strategyData.map((strategy) => (
            <SingleStrategy 
              key={strategy.id} 
              strategy={strategy} 
            />
          ))}
        </div>
      </div>
      {/* Optional SVG decorations can be added here similar to Testimonials */}
    </section>
  );
};

export default StrategiesSection;