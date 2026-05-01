import templeData from "../../data/templeData.json";
import { FaQrcode, FaPhoneAlt } from "react-icons/fa";

export default function TopUtilityBar() {
  return (
    <div className="bg-amber-900 text-amber-50 py-1.5 px-4 text-xs md:text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        
        {/* Only Telugu Names and Prices */}
        <div className="flex items-center gap-4 overflow-hidden w-full md:w-auto">
          <div className="flex gap-4 animate-scroll whitespace-nowrap">
            {templeData.sevaPrices.map((seva, idx) => (
              <span key={idx} className="border-r border-amber-700 pr-4 last:border-0">
                {seva.telugu} - <span className="font-bold text-white">₹{seva.price}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Payment & Contact Info */}
        <div className="flex items-center gap-6 font-medium">
          <div className="flex items-center gap-2">
            <FaQrcode className="text-orange-400" />
            <span>UPI: <span className="font-bold text-white">{templeData.upiId}</span></span>
          </div>
          <div className="hidden sm:flex items-center gap-2 border-l border-amber-700 pl-6">
            <FaPhoneAlt className="text-orange-400" />
            <span>Support: +91 9XXXX XXXXX</span>
          </div>
        </div>
      </div>
    </div>
  );
}