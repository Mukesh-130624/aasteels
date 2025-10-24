import React from "react";
import { useParams } from "react-router-dom";
import { CheckCircle } from "lucide-react";

interface Product {
  name: string;
  image: string;
  description: string;
  detail: string;
}

const products: Product[] = [
  {
    name: "Tor Steel",
    image: "/products/torsteel.jpg",
    description: "High-quality Tor Steel for construction.",
    detail:
      "Tor steel, also known as Cold Twisted Deformed (CTD) steel, was a pioneering product in the construction industry. After undergoing a heat treatment, these bars were cold-twisted and deformed to create surface irregularities. This process significantly increased the steel's yield strength and improved its bonding with concrete, preventing slippage and providing greater stability. Though newer technologies like TMT bars are now the industry standard, Tor steel played a vital role in advancing reinforced concrete construction. ",
  },
  {
    name: "Angles",
    image: "/products/angles.jpg",
    description: "Strong steel angles for building.",
    detail:
      "Steel angles are L-shaped structural steel components, also known as 'angle iron,' formed by rolling a single piece of steel into a 90-degree bend. Valued for their strength, durability, and versatility, they are one of the most widely used structural materials in construction and fabrication. ",
  },
  {
    name: "Patti",
    image: "/products/patti.jpg",
    description: "Durable steel patti for industrial use.",
    detail:
      "Explore our range of steel patti, the perfect solution for both structural and decorative needs. Made from durable, corrosion-resistant stainless steel, these flat strips are used for framing, finishing edges, and adding decorative details to walls, ceilings, and furniture. Available in multiple finishes and sizes, our steel patti offers a clean, modern finish to any project.",
  },
  {
    name: "Channel",
    image: "/products/channel.jpg",
    description: "Steel channels for structural support.",
    detail:
      "Steel channels are structural metal products characterized by their distinctive C- or U-shaped cross-section. A channel consists of a broad, flat vertical section called the 'web' and two right-angled flanges extending from the top and bottom of one side. They are hot-rolled from carbon steel to achieve excellent durability and a high strength-to-weight ratio. These versatile steel sections are essential in construction, fabrication, and manufacturing, providing robust support and structural integrity across many applications. They can be easily cut, welded, and drilled to meet specific project needs. ",
  },
  {
    name: "Beam",
    image: "/products/beam.jpg",
    description: "Heavy-duty steel beams.",
    detail: `A steel beam is a structural element used in construction to support and distribute heavy loads. Made from high-strength structural steel, beams are central to a building's framework, providing the critical support needed for floors, ceilings, and roofs. 
      
    Features and benefits:
      High strength and durability: Steel beams can support immense weight over long spans, ensuring a structure's safety and stability.
      Versatility: Beams come in various shapes and sizes—such as I-beams (Universal Beams) and H-beams (Wide Flange Beams)—to suit specific design and load requirements.
      Flexibility in design: The inherent strength of steel allows for open, column-free spaces and unique architectural designs.
      Sustainability: Steel is a highly recyclable material, making it an environmentally friendly choice for construction. `,
  },
  {
    name: "Bars",
    image: "/products/bars.jpg",
    description: "Reinforced steel bars.",
    detail: `Reinforcement steel bars, also known as rebars, are an essential component of modern construction. Concrete is naturally strong under compression but weak under tension. When embedded in concrete, steel bars significantly increase its tensile strength, forming a robust and durable material called Reinforced Cement Concrete (RCC). 
    This combination of steel and concrete creates a framework that can withstand heavy loads, temperature changes, and seismic forces, ensuring the long-term stability and safety of a structure. `,
  },
  {
    name: "MS & GI Pipe/Sheets",
    image: "/products/pipesheets.jpg",
    description: "MS and GI pipes/sheets for plumbing and construction.",
    detail: `Mild Steel is a versatile and affordable low-carbon steel, containing less than 0.25% carbon, which makes it highly malleable, ductile, and strong.
    MS Sheets: These flat sheets are cost-effective and easy to work with, making them the backbone of many industries. Applications include construction (roofing, cladding, framework), automotive bodies, appliance manufacturing, and machinery components. 
    Galvanized Iron is a type of steel coated with a layer of zinc to protect it from rust and corrosion. The zinc coating provides a durable, weather-resistant finish, making it ideal for use in wet or humid environments. 
    These zinc-coated steel sheets provide superior durability and protection against environmental factors like rain, wind, and UV radiation. They are extensively used for roofing, siding, fencing, and ducting. Corrugated GI sheets are a popular, cost-effective roofing material.  `,
  },
  {
    name: "JSW/Tata Profile Sheets",
    image: "/products/profilesheets.jpg",
    description: "High-Performance JSW & Tata Profile Sheets.",
    detail: `We offer a premium selection of profile sheets from JSW and Tata, two of India's most trusted steel manufacturers. Known for their superior quality, these steel sheets provide robust and aesthetically pleasing solutions for all your roofing and cladding needs.
    Our range features advanced protective coatings like JSW's Aluminium-Zinc coated Colouron+ and Tata's Galvalume-based products. This ensures exceptional resistance to corrosion, rust, and extreme weather, giving you peace of mind with a long-lasting and low-maintenance solution.
    Choose from a wide variety of colors, profiles, and coatings to find the perfect fit for your residential, commercial, or industrial project. With our JSW and Tata profile sheets, you get the perfect combination of strength, beauty, and durability.
`,
  },
  {
    name: "Water Tanks",
    image: "/products/watertank.jpg",
    description: "High-quality steel water tanks.",
    detail: `Our plastic water tanks provide a durable, safe, and cost-effective water storage solution for any home or business. Made from high-quality, food-grade plastic, our multi-layered tanks feature UV stabilization and antibacterial inner layers to keep your water fresh, cool, and free from contaminants. They are lightweight, easy to install, and built to last for years. `,
  },
  {
    name: "Cement - Ultratech, Ambuja, ACC",
    image: "/products/cement.jpg",
    description: "Top brand cement for durable construction.",
    detail: `Cement is the vital binding agent and foundational material that brings your construction projects to life. As the core ingredient in concrete, mortar, and plaster, it dictates the strength, durability, and finish of your structure, from the foundation to the final surface. 
    We offer a comprehensive selection of cement from the industry's most trusted brands, ensuring you have access to a wide range of options for any application. 
    Why choose the right cement?
    Different projects require different formulations. Our varied selection ensures you get the ideal product for your job, helping you build with confidence and achieve the best results. The type of cement you choose impacts key performance factors: 
    Strength: Higher-grade cements are engineered for rapid strength development, making them perfect for high-rise buildings and heavy-duty structures.
    Durability: Specialized blends offer enhanced resistance to environmental factors like moisture, sulfates, and chlorides, which is crucial for marine environments or foundations.
    Workability and finish: Certain cements provide better workability for a smoother finish, making them ideal for plastering and aesthetic applications.
    Setting time: We offer products with different setting times, allowing you to manage workflow, from quick-setting projects to larger pours with controlled hydration. `,
  },
  {
    name: "Corrugated Cement Sheets",
    image: "/products/corrugated.jpg",
    description: "Corrugated sheets for roofing and walls.",
    detail: `Charminar: Trusted and Durable Roofing Solutions
    As a market leader from HIL (CK Birla Group), Charminar has been a trusted name in roofing for decades. Our high-quality corrugated cement sheets are engineered for durability, weather resistance, and thermal and acoustic insulation, providing a cost-effective and long-lasting shelter solution. Whether for residential, commercial, or agricultural projects, Charminar delivers robust performance and aesthetic appeal. Explore our range, including eco-friendly and colored options, to find the perfect roofing solution for your needs. `,
  },
];

export const ProductDetail: React.FC = () => {
  const { productName } = useParams<{ productName: string }>();

  const product = products.find(
    (p) =>
      p.name.toLowerCase().replace(/[&/]+/g, "and").replace(/\s+/g, "-") ===
      productName
  );

  if (!product) {
    return (
      <div className="text-center py-20 text-red-500 text-xl font-semibold">
        Product not found!
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* 🖼️ Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center rounded-lg overflow-hidden shadow-lg bg-white p-4">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-[90%] h-auto object-contain rounded-md"
          />
        </div>

        {/* 📋 Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold text-yellow-500 mb-6">
            {product.name}
          </h1>
          <p className="text-gray-700 text-lg mb-4">{product.description}</p>
          <p
            className="text-gray-700 text-lg mb-4"
            style={{ whiteSpace: "pre-line" }}
          >
            {product.detail}
          </p>
          <div className="flex items-center space-x-2 text-gray-800 font-medium">
            <CheckCircle className="w-6 h-6 text-yellow-500" />
            <span>High Quality Materials</span>
          </div>
        </div>
      </div>
    </section>
  );
};
