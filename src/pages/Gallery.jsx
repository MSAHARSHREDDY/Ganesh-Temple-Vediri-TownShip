// import useTempleData from "../hooks/useTempleData";

// export default function Gallery() {
//   const data = useTempleData();

//   if (!data || !data.gallery) return null;

//   return (
//     <div className="temple-bg min-h-screen px-4 md:px-10 py-10">

//       {/* TITLE */}
//       <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 text-red-900">
//         Gallery
//       </h2>

//       {/* RESPONSIVE GRID */}
//       <div className="
//   grid 
//   grid-cols-1 
//   sm:grid-cols-2 
//   md:grid-cols-3 
//   lg:grid-cols-4 
//   gap-6
// ">
//   {data.gallery.map((g, i) => (
//     <div
//       key={i}
//       className="overflow-hidden rounded-xl group image-border"
//     >
//       <img
//         src={g.image}
//         alt="Temple"
//         className="
//           w-full 
//           h-[280px] md:h-[320px] lg:h-[350px]
//           object-cover
//           transition-transform duration-500
//           group-hover:scale-110
//         "
//       />
//     </div>
//   ))}
// </div>
//     </div>
//   );
// }



import useTempleData from "../hooks/useTempleData";

export default function Gallery() {
  const data = useTempleData();

  if (!data || !data.gallery) return null;

  return (
    <div className="temple-bg min-h-screen px-2 md:px-10 py-10 cursor-default">
      <h2 className="text-center text-3xl md:text-5xl font-black mb-10 text-red-900 uppercase tracking-tighter">
        Gallery
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6 max-w-[1800px] mx-auto">
        {data.gallery.map((g, i) => (
          <div key={i} className="bg-white border-[2px] border-yellow-500 rounded-lg overflow-hidden shadow-xl">
            <div className="w-full aspect-[4/5] bg-gray-50 flex items-center justify-center overflow-hidden">
              <img
                src={g.image}
                alt="Temple Gallery"
                className="w-full h-full object-contain p-1 transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}