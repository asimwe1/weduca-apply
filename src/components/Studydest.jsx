import { ArrowRight } from "lucide-react"

const destinations = [
  {
    title: "Study In The UK",
    image: "https://s3-alpha-sig.figma.com/img/65b3/d8b6/37aa0d2bcde6e2173e71da34a4271092?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PAZK7bdU6gjkT3~OTqfayR4~oTWnz5h1CuCODyIe5eEfBE5dZqxLNKLVqCqbALz6PGPWfFlfHXVKSfw6P9mEkCF1j1F9D5GbQ~C2nyI3OUh9IPONkaAhc3BIgoeZBZK-rfmJzG4td~0gM17hQjdKRRMGaphr~pvCidCAuGeQRSHBJE1rMTMSWCcn1mZUIVxnjkmh6RrqBx2MvxVFQZoPFM-qoP0U-hY48A5-O5fmDs3Jj40kkc5tKQivc-K00zzHTrIdc8x6T9ieeFypnSD6Uzbq4OEj6xU93SnNTtxbbkye3gYZaJ8GatEFFpy80FQRDYEKNoY~NRJTwPYwIuh1rg__",
    alt: "London Tower Bridge at sunset",
  },
  {
    title: "Study In The US",
    image: "https://s3-alpha-sig.figma.com/img/74ef/305d/f33593f2b6e21951d5b407e9da438c5e?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lXD861iTSX0EtfA-sM~sYj3WSMMyGeXxZ2XoC40NHKuyxUTwJG~HxnlJh2HdDZ3OTKlRanRgLgVKiOoMY0rwpe69kc-hR-EEYuofgjzf2nFNAPatQC6R9FbWMbejw5LJnFi-foYav0Q9Kctfx0fbLzoKAl~jPrn3TqzNayudtRd1TbvWMQJt8t8LQdgPnjjX3AJrlGs57pP51HBJ04RBaeaTM3yvEhok0mt8t09MYTuucJtVB1jGsHIUlLjmmNYKyGQ6~LMyFdshfQw4pQjTp3QSxhH3KsSzoz6cQbGe0EsoLqKgWRdzqfz4x7eHNrAFK4eYwd2u3OBlO3-9CksyRQ__",
    alt: "Statue of Liberty and New York City skyline",
  },
  {
    title: "Study In Australia",
    image: "https://s3-alpha-sig.figma.com/img/97f5/49a0/66dd86c737eabe8bdf7dc2490d9d688a?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FdSaUNZHdiz0urEdUXJ35yM8tZ64WGYcY5NO04CBprNgRe30oOCpYS~tvhR-tQMmIwqWNEDdRATuRoxZzUou~D-4Y0jGIZGQSudLbj6fdkGwS-RVBr0aLvqKxerULmOL89u9k3JwkLDVlijpKxveKUx0mtuJsneDiuhgUuOCuJlMu-4iYm-mPafjaPjoe0ny0gBvHMnCQepas1pIlsyZb~Fv5GraSlFlS8dpoCIqRMVxc9KDhOFbMFTXT3CZWoc1uCb8aV1FmqdRE-41D~yH0a7qJ18SJKEeZw9oL8wU8qB~VIXQ89CAooj~eAGZWOL~7ntXbCExGpYDzm8WikA2Tg__",
    alt: "Sydney Opera House and Harbour Bridge",
  },
  {
    title: "Study In Ireland",
    image: "https://s3-alpha-sig.figma.com/img/3165/0727/872ef7e2f1f010d4c0cb798a420f96a5?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aRvYnAeJ41FLTnrggMoIh2Qvtz-ZrUZRWdwbd1Wy6Z2v3uWDZwoaFE4gEcuAoEqnUphkpQ-eoZx7ct~fY88Jf4Pio~MF3wJ~Woonk~L~iGcO7GTCAdY~fJM3qq1pCfqS~DcJvA-dEYsj6K~mZmdCLLBLlyrmtQpZZcbYGRQRsfPW1jDVSd5CDmvpukAGP~ezAA60H~DtfGuXiOdM2DLRwqplPTN-HbPJhn7t4nkW1bwS5O~Wo7MHub9UUpvjkyM1QaDCsk19dK~PlTpZs6WBYVIJmTkGP10LnJxUIm1Yjyols0UDwdEjxp7Nn8n78owKepOn3nFMjFb5TyxM2qS3ZQ__",
    alt: "Cliffs of Moher in Ireland",
  },
]

const StudyDestinations = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
          Choose Your Study Abroad Destination
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <div key={destination.title} className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
               
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{destination.title}</h2>
                <a
                  href="#"
                  className="inline-flex items-center text-[#0047CC] hover:text-[#0039A3] font-medium transition-colors"
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
  )
}

export default StudyDestinations

