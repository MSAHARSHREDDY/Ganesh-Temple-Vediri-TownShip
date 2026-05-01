import templeData from "../../data/templeData.json";
import { FaQrcode, FaPhoneAlt } from "react-icons/fa";

export default function TopUtilityBar() {
  return (
    <div className="bg-amber-900 text-amber-50 py-2 px-4 text-[10px] md:text-sm sticky top-0 z-[100]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        
        {/* Responsive Price List: Wraps on mobile, single line on desktop */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          {templeData.sevaPrices.map((seva, idx) => (
            <span key={idx} className="border-r border-amber-700 pr-4 last:border-0 whitespace-nowrap">
              {seva.telugu} - <span className="font-bold text-white">₹{seva.price}</span>
            </span>
          ))}
        </div>

        {/* Payment Info: Hidden icons on tiny screens to save space */}
        <div className="flex items-center gap-4 font-medium">
          <div className="flex items-center gap-2">
            <FaQrcode className="text-orange-400 hidden xs:block" />
            <span className="whitespace-nowrap">UPI: <span className="font-bold text-white select-all">{templeData.upiId}</span></span>
          </div>
          <div className="hidden sm:flex items-center gap-2 border-l border-amber-700 pl-4">
            <FaPhoneAlt className="text-orange-400" />
            <span className="whitespace-nowrap">+91 9XXXX XXXXX</span>
          </div>
        </div>
      </div>
    </div>
  );
}