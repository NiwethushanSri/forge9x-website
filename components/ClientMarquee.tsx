const clients = [
  { name: "Moon Village Restaurant & Café", file: "moon-village.png" },
  { name: "Gama Gama Indian & Chinese Cuisine", file: "gama-gama.png" },
  { name: "Café Wish Fine Dining", file: "cafe-wish.png" },
  { name: "Dev Restaurant", file: "dev-restaurant.png" },
  { name: "The Nelum Kitchen", file: "nelum-kitchen.png" },
  { name: "CFC", file: "cfc.png" },
  { name: "Ukay Surprise", file: "ukay-surprise.png" },
  { name: "Professional Services", file: "professional-services.png" },
  { name: "BH", file: "bh.png" },
  { name: "Aahaa Restaurant", file: "aahaa-restaurant.png" },
  { name: "Lullaby", file: "lullaby.png" },
  { name: "Dining Delight Family Restaurant", file: "dining-delight.png" },
  { name: "Anthas Kadai", file: "anthas-kadai.png" },
  { name: "ST", file: "st.png" },
  { name: "Wood Cafe", file: "wood-cafe.png" },
  { name: "K&P Family Restaurant", file: "kp-restaurant.png" },
];

const doubled = [...clients, ...clients];

export default function ClientMarquee() {
  return (
    <div className="relative w-full">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, white, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, white, transparent)" }} />

      <div className="flex" style={{ animation: "marquee 40s linear infinite" }}>
        {doubled.map((client, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-4 flex items-center justify-center bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
            style={{ width: "clamp(100px, 20vw, 130px)", height: "90px" }}
          >
            <img
              src={`/clients/${client.file}`}
              alt={client.name}
              className="max-h-16 max-w-[110px] w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
