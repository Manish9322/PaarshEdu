const SingleFeature = ({ feature }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg text-center">
      <img src={feature.icon} alt={feature.title} className="mx-auto w-16 h-16 mb-4" />
      <h3 className="text-xl font-semibold">{feature.title}</h3>
      <p className="text-gray-600 mt-2">{feature.description}</p>
    </div>
  );
};

export default SingleFeature;
