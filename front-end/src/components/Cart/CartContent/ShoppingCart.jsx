import CartSection from "../CartSection";
import ProductCard from "../ProductCard";

function ShoppingCart() {
  return (
    <div className="flex flex-col items-start justify-center gap-6 md:flex-row">
      <div className="p-6 rounded-md border border-gray-4 w-full md:w-auto max-h-[500px] overflow-y-auto flex flex-col gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="">
        <CartSection />
      </div>
    </div>
  );
}

export default ShoppingCart;
