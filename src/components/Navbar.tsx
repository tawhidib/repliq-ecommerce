import { FaCartArrowDown } from "react-icons/fa";

export default function Navbar(): JSX.Element {
  return (
    <div className="mx-auto block w-full max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="flex items-center">
        <div className="flex-none">
          <h3>Repliq</h3>
        </div>
        <div className="flex-auto">
          <ul className="hidden items-center gap-6 lg:flex justify-center">
            <li>Home</li>
            <li>Dashboard</li>
            <li>Products</li>
            <li>Orders</li>
          </ul>
        </div>
        <div className="flex-none">
          <button className="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            <FaCartArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
}
