import React from "react";
import { ShoppingBag } from "lucide-react";

const Highlights = () => {
  return (
    <div className="flex items-center justify-between mt-10">
      <div className="flex items-center gap-4">
        <ShoppingBag className="text-[#5b3799] text-[24px]" />
      </div>
      <div>
        <h4 className="font-semibold">Free Delivery</h4>
        <p className="text-sm text-gray-600">
          Get free, speedy delivery on every order — no hidden fees!
        </p>
      </div>

      {/* Feature 2 */}
      <div className="flex items-start gap-3 mt-5 max-w-md w-full mx-auto">
        <BadgeCheck className="text-[#F86D72] w-8 h-8 shrink-0" />
        <div>
          <h4 className="font-semibold">Quality Guarantee</h4>
          <p className="text-sm text-gray-600">
            We ensure premium quality for every book and product we offer.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex items-start gap-3 mt-5 max-w-md w-full mx-auto">
        <Tag className="text-[#F86D72] w-8 h-8 shrink-0" />
        <div>
          <h4 className="font-semibold">Daily Offers</h4>
          <p className="text-sm text-gray-600">
            Discover new deals and discounts every day on top titles.
          </p>
        </div>
      </div>

      {/* Feature 4 */}
      <div className="flex items-start mt-5 gap-3 max-w-md w-full mx-auto">
        <ShieldCheck className="text-[#F86D72] w-8 h-8 shrink-0" />
        <div>
          <h4 className="font-semibold">100% Secure Payment</h4>
          <p className="text-sm text-gray-600">
            Your payments are fully protected with safe and reliable checkout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
