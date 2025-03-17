import { ArrowRight } from "lucide-react";

const destinations = [
  {
    title: "Study In The UK",
    image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319047/uk_avwejq.png",
    alt: "London Tower Bridge at sunset",
  },
  {
    title: "Study In The US",
    image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319047/us_v5rjwb.png",
    alt: "Statue of Liberty and New York City skyline",
  },
  {
    title: "Study In Australia",
    image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319045/australia_jcrv7c.png",
    alt: "Sydney Opera House and Harbour Bridge",
  },
  {
    title: "Study In Ireland",
    image: "https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319045/ireland_ky1dvj.png",
    alt: "Cliffs of Moher in Ireland",
  },
];

const StudyDestinations = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
          Choose Your Study Abroad Destination
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.title}
              className="bg-white rounded-lg shadow-sm overflow-hidden group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  {destination.title}
                </h2>
                <a
                  href="#"
                  className="inline-flex items-center text-green-700 hover:text-teal-800 font-medium transition-colors"
                >
                  Explore
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyDestinations;
