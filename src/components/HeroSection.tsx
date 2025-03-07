import React from 'react';


export default function Hero() {
  return (
    <div className="relative min-h-[600px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
<<<<<<< HEAD
          src="https://s3-alpha-sig.figma.com/img/8cf4/26f8/37a7bbda094bbe9276aaab178ba5f8a0?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hnTALytcszDzfO~JV4Np3QD7PM~Rc1UE8VqKIDll9ko1UWdHxmZFWqH3ZEesL~L~RUbA6BIszmVokG2duGoHwzvbEfvYWypClqBH1sJK3q3DalncS0jlVNpbujAwmzPpAmT1Wn5RQGbWBhIymF0nWEvAwiICfCHfdkFILTUlrB86-KSeo0PsyM1kL4yIqsulU-DFKTfb-TEVrsyslAsh0N0xYgGXWan8Ay8Gn2lvywvJwpMjbUiVzm218eTgcXPhZ7GxOkcJgHzw0tb2KKcu-zKT4bfHjcyF~2qpVgtasacbcuu2rypDiMVNizHFer~NrdbuXHGXlnvmhQ7WOnRCIQ__"
=======
          src="https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741319045/hero_zbwqon.png"
>>>>>>> 239fbe8 (service/student page added successfully)
          alt="Students collaborating"
          className="object-cover"
        />
        <div className="absolute inset-0 " />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your Future Goes Beyond Borders
          </h1>

          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="w-fit rounded-md bg-white px-8 py-3 text-base font-semibold text-blue-600 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              I want to study abroad
            </a>

            <a
              href="#"
              className="w-fit rounded-md border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              I want to guide international students
            </a>

            <a
              href="#"
              className="w-fit rounded-md border-2 border-white bg-transparent px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              I want to welcome students to my campus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

