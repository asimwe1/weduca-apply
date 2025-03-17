const HeroSection = () => (
    <div className="bg-cover bg-center h-[64vh] relative" style={{ backgroundImage: 'url(https://res.cloudinary.com/dhrhfjgqa/image/upload/v1741442689/Frame-31693-1_trodoz_1_fgi9ar.png)' }}>
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <div className="container mx-auto px-10 flex items-center h-full">
        <div className="text-white gap-y-[5rem] text-left">
          <h1 className="text-[2.5rem] w-[40rem] font-semibold mb-4">One Global Platform—Millions of Student Searches</h1>
          <p className="text-l w-[48rem] mb-8">Revolutionize your international student enrolment with the smartest all-in-one platform for global student mobility, trusted by over 1,500 institutions worldwide.</p>
          <button className="text-green-600 font-semibold bg-white px-8 py-4 rounded-[10px] hover:cursor-pointer transition duration-300">
            Open Your Campus To The World
          </button>
        </div>
        {/* <div className='w-[90rem]'></div> */}
      </div>
    </div>
  );

  export default HeroSection;