
export default function PartnersSection() {
  const partners = [
    {
      name: "University of Colorado",
      logo: "/placeholder.svg?height=80&width=200",
    },
    {
      name: "University of Arizona",
      logo: "/placeholder.svg?height=80&width=200",
    },
    {
      name: "Western University Canada",
      logo: "/placeholder.svg?height=80&width=200",
    },
    {
      name: "Western Michigan University",
      logo: "/placeholder.svg?height=80&width=200",
    },
    {
      name: "San Francisco State University",
      logo: "/placeholder.svg?height=80&width=200",
    },
    {
      name: "Washington State University",
      logo: "/placeholder.svg?height=80&width=200",
    },
    {
      name: "Rochester Institute of Technology",
      logo: "/placeholder.svg?height=80&width=200",
    },
    {
      name: "California State University Long Beach",
      logo: "/placeholder.svg?height=80&width=200",
    },
  ]

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Trusted by 1,500+ Universities, Colleges, and Schools <span className="block">Worldwide</span>
        </h2>
        <div className="mt-16">
          <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center col-span-1">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={200}
                  height={80}
                  className="max-h-12 w-full object-contain"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(23%) sepia(20%) saturate(1815%) hue-rotate(188deg) brightness(96%) contrast(88%)",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

