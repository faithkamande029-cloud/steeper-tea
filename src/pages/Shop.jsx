import { useEffect, useState } from "react";
import TeaCard from "../components/TeaCard";
import Navbar from "../components/Navbar";

function Shop() {
  const [teas, setTeas] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/teas")
      .then((res) => {
        if (!res.ok) throw new Error(`Server returned ${res.status}`);
        return res.json();
      })
      .then(setTeas)
      .catch((err) => setError(err.message));
  }, []);

  const filteredTeas = teas.filter(
    (tea) =>
      typeof tea.name === "string" &&
      tea.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleBuy = (id) => {
    const tea = teas.find((t) => t.id === id);
    if (tea) setCart((prev) => [...prev, tea]);
  };

  return (
    <div className="bg-pink-50 min-h-screen m-2">
      <Navbar />

      <div className="line bg-[#8D4B6E] border mt-6"></div>

      <div className="px-14 pt-4">
        <h1 className="font-bold text-2xl">Shop Teas</h1>
        <p className="text-sm text-gray-500">Search by name or origin, or filter by type.</p>
      </div>

      <div className="flex justify-center pt-3 px-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#D0C1CC] p-2 pl-5 rounded-2xl w-full mx-10 text-[#8D4B6E] placeholder-[#8D4B6E] focus:outline-none focus:ring-2 focus:ring-[#8D4B6E]"
        />
      </div>

      {error && (
        <p className="text-center text-red-700 mt-4">
          Couldn't load teas: {error}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 m-10">
        {filteredTeas.map((tea) => (
          <TeaCard 
            key={tea.id} 
            tea={tea} 
            onBuy={handleBuy} 
            />
        ))}
      </div>
      
    </div>
  );
}

export default Shop;