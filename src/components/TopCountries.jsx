const TopCountries = () => (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Top Countries</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((country) => (
            <div key={country} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src={`https://via.placeholder.com/400x300`} alt={`country-${country}`} className="w-full" />
              <div className="p-6">
                <h3 className="font-semibold mb-2">Country {country}</h3>
                <p className="text-gray-600">1,200+ schools</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  

  export default TopCountries;