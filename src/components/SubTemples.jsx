


import useTempleData from "../hooks/useTempleData";

export default function SubTemples() {
  const data = useTempleData();

  if (!data) return <p className="text-center py-10 font-bold">Loading...</p>;

  return (
    <div className="w-full min-h-screen bg-[#fffde7] [background-image:radial-gradient(#d4af37_0.8px,transparent_0.8px)] [background-size:20px_20px] py-10 px-2 md:px-8">
      <h2 className="text-center text-3xl md:text-5xl font-black mb-10 text-red-900 uppercase tracking-tighter">
        Sub Temples
      </h2>

      {/* Grid: 2 columns on mobile, matching your requirement for side-by-side display */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6 max-w-[1800px] mx-auto">
        {data.subTemples.map((temple) => (
          <div 
            key={temple.id} 
            className="bg-white border-[2px] border-yellow-500 rounded-lg overflow-hidden shadow-xl flex flex-col h-full"
          >
            
            {/* 
                THE COMPLETE IMAGE FIX: 
                - aspect-[4/5]: Forces a portrait shape common for deity images.
                - object-contain: Ensures 100% of the image is visible inside the frame.
                - bg-gray-50: Provides a neutral background if the image doesn't perfectly fill the box.
            */}
            <div className="w-full aspect-[4/5] bg-gray-50 flex items-center justify-center overflow-hidden border-b-2 border-yellow-500">
              <img
                src={temple.image}
                alt={temple.title}
                /* 
                   Using 'object-contain' instead of 'object-cover' prevents any part of the 
                   deity or frame from being cut off.
                */
                className="w-full h-full object-contain p-1"
                loading="lazy"
              />
            </div>

            {/* Content Section */}
            <div className="p-3 md:p-5 flex-grow flex flex-col bg-white">
              <h3 className="text-xs sm:text-sm md:text-xl font-black text-gray-900 uppercase mb-1 md:mb-3 border-b-2 border-yellow-400 inline-block pb-1">
                {temple.title}
              </h3>

              <p className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-700 mb-4 italic leading-tight md:leading-relaxed flex-grow">
                {temple.description}
              </p>

              <div className="flex items-center gap-1 text-[10px] md:text-sm font-black text-red-700 mt-auto pt-2 border-t border-gray-100">
                <span className="text-xs md:text-base">📍</span>
                <span className="truncate uppercase">{temple.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}