export default function StatsSection() {
    const stats = [
      {
        number: "1,500+",
        label: "Partner Institutions",
      },
      {
        number: "140,000+",
        label: "Programs",
      },
      {
        number: "6,500+",
        label: "Recruitment Partners",
      },
      {
        number: "1M+",
        label: "Students Helped",
      },
      {
        number: "150+",
        label: "Student Nationalities",
      },
    ]
  
    return (
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            We&apos;ve Helped Over 1M Students And Counting
          </h2>
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="text-3xl font-bold text-blue-600 sm:text-4xl">{stat.number}</span>
                <span className="mt-2 text-sm text-gray-600 sm:text-base">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  