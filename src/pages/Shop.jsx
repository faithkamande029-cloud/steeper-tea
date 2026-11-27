import { useEffect, useState } from "react";
import TeaCard from "../components/TeaCard";
import Navbar from "../components/Navbar";
import { CATEGORIES } from "../constants/categories";

const API_URL = import.meta.env.PROD
    ? "/teas.json"
    : "http://localhost:3001/teas"


function Shop() {
  const [teas, setTeas] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("All") 

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Server returned ${res.status}`);
        return res.json();
      })
      .then(setTeas)
      .catch((err) => setError(err.message));
  }, []);

  const q = search.toLowerCase();
  const filteredTeas = teas.filter(
    (tea) =>
      typeof tea.name === "string" &&
      (tea.name.toLowerCase().includes(q) ||
        tea.origin?.toLowerCase().includes(q)) &&
      (category === "All" || tea.category === category)
  );

  const handleBuy = (id) => {
    const tea = teas.find((t) => t.id === id);
    if (tea) setCart((prev) => [...prev, tea]);
  };

  return (
    <div className="bg-pink-50 min-h-screen mr-2 px-2">
      
      <Navbar />

      <div className="text-[#8D4B6E] border mt-2"></div>

      <div className="w-full max-w-7xl mx-auto px-6"> 
      
        <div className="pt-4 px-10">
          <h1 className="font-bold text-2xl">Shop Teas</h1>
          <p className="text-sm text-gray-500">Search by name or origin, or filter by type.</p>
        </div>

        {/* search bar */}
        <div className="flex justify-center pt-3 pb-2">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#D0C1CC] p-2 pl-5 rounded-3xl w-full mx-10 text-[#8D4B6E] placeholder-[#8D4B6E] focus:outline-none focus:ring-2 focus:ring-[#8D4B6E]"
          />
        </div>

        {/* error */}
        {error && (
          <p className="text-center text-red-700 mt-4">
            Couldn't load teas: {error}
          </p>
        )}

        {/* filters */}
        <div className="flex flex-wrap gap-2 pt-2 px-10">
          {["All", ...CATEGORIES]. map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`px-4 py-1 rounded-3xl text-sm font-medium border ${
                category === c
                  ? "bg-[#8D4B6E] text-white border-[#8D4B6E]"
                  : "bg-yellow-100 text-[#8D4B6E] border-[#8D4B6E] hover:bg-pink-100"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-3 m-8">
          {filteredTeas.map((tea) => (
            <TeaCard 
              key={tea.id} 
              tea={tea} 
              onBuy={handleBuy} 
              />
          ))}
        </div>
      </div>
      
    </div>
  );
}

export default Shop;