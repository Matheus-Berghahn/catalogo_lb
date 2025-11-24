"use client";
import { useState, useRef, useEffect } from "react";
import ProductCard from "./components/ProductCard";

const products = [
  {
    id: "1",
    name: "nome da luva",
    refs: "L001",
    description: "descricao do produto, TAM: G GG",
    images: [
      "/images/produtos/luva01-1.png",
      "/images/produtos/luva01-2.png",
      "/images/produtos/luva01-3.png",
    ],
  },
  {
    id: "2",
    name: "nome da luva",
    refs: "L002",
    description: "descricao do produto, TAM: G GG",
    images: [
      "/images/produtos/luva02-1.png",
      "/images/produtos/luva02-2.png",
      "/images/produtos/luva02-3.png",
    ],
  },
  {
    id: "3",
    name: "nome da luva",
    refs: "L003",
    description: "descricao do produto, TAM: G GG",
    images: [
      "/images/produtos/luva03-1.png",
      "/images/produtos/luva03-2.png",
      "/images/produtos/luva03-3.png",
    ],
  },
  {
    id: "4",
    name: "nome da luva",
    refs: "L004",
    description: "descricao do produto, TAM: G GG",
    images: [
      "/images/produtos/luva04-1.png",
      "/images/produtos/luva04-2.png",
      "/images/produtos/luva04-3.png",
    ],
  },
  {
    id: "5",
    name: "nome da luva",
    refs: "L005",
    description: "descricao do produto, TAM: G GG",
    images: [
      "/images/produtos/luva05-1.png",
      "/images/produtos/luva05-2.png",
      "/images/produtos/luva05-3.png",
    ],
  },
  {
    id: "6",
    name: "nome da luva",
    refs: "L006",
    description: "descricao do produto, TAM: G GG",
    images: [
      "/images/produtos/luva06-1.png",
      "/images/produtos/luva06-2.png",
      "/images/produtos/luva06-3.png",
    ],
  },
  {
    id: "7",
    name: "nome da luva",
    refs: "L007",
    description: "descricao do produto, TAM: G GG",
    images: [
      "/images/produtos/luva07-1.png",
      "/images/produtos/luva07-2.png",
      "/images/produtos/luva07-3.png",
    ],
  },
  {
    id: "8",
    name: "nome da luva",
    refs: "L008",
    description: "descricao do produto, TAM: G GG",
    images: [
      "/images/produtos/luva08-1.png",
      "/images/produtos/luva08-2.png",
      "/images/produtos/luva08-3.png",
    ],
  },
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [currentImage, setCurrentImage] = useState(0);
  const [showMobileDetail, setShowMobileDetail] = useState(false);

  const imgContainerRef = useRef<HTMLDivElement | null>(null);

  const [isZoomEnabled, setIsZoomEnabled] = useState(false);



  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = window.matchMedia("(pointer: fine)").matches;
    setIsDesktop(checkDesktop);

    const listener = () =>
      setIsDesktop(window.matchMedia("(pointer: fine)").matches);

    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, []);

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % selectedProduct.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? selectedProduct.images.length - 1 : prev - 1
    );
  };

  const handleCardClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setCurrentImage(0);
    setShowMobileDetail(true);
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-50">
      {/* Banner */}
      <section
        className="w-full h-[200px] sm:h-[400px] bg-cover bg-top flex items-center justify-center"
        style={{ backgroundImage: "url('/images/banner.jpg')" }}
      >
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-[60%] sm:w-[20%] h-auto drop-shadow-lg"
        />
      </section>

      {/* Título */}
      <div className="flex relative h-20 sm:h-52 justify-center items-center w-full mb-20">
        <div className="absolute top-[-22%] bg-red-700 w-full sm:w-3/6 left-0 h-20 sm:h-52"></div>
        <h2 className="absolute top-[-28%] text-2xl sm:text-[7vw] font-semibold mt-8 mb-6 w-full text-center sm:text-left pl-0 sm:pl-[5rem] h-20 sm:h-52 text-white">
          CATÁLOGO
        </h2>
      </div>

      {/* Produtos */}
      <div className="flex h-full w-full justify-center items-start gap-8 px-6">
        {/* Lado esquerdo: Detalhes */}
        <div
          className={`w-full sm:w-2/6 bg-white p-6 border border-black/80 flex flex-col mb-20 absolute sm:relative 
          ${
            showMobileDetail
              ? "fixed top-1/5 left-0 z-50 block sm:flex h-[70%] bg-white p-6"
              : "hidden sm:flex"
          }`}
        >
       {/* IMAGEM */}
        <div
          ref={imgContainerRef}
          className={`w-full h-[48%] relative overflow-hidden bg-white flex items-center justify-center ${
            isZoomEnabled ? "zoom-active" : ""
          }`}
          onMouseMove={(e) => {
            if (!isZoomEnabled) return;

            const container = imgContainerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;

            container.style.setProperty("--zoom-x", `${x}%`);
            container.style.setProperty("--zoom-y", `${y}%`);
          }}
          onMouseEnter={() => setIsZoomEnabled(true)}
          onMouseLeave={() => setIsZoomEnabled(false)}
        >
          <img
            src={selectedProduct.images[currentImage]}
            alt={selectedProduct.name}
            className="zoom-image select-none pointer-events-none"
            draggable={false}
          />

          {/* SETA ESQUERDA */}
          <button
            onClick={handlePrevImage}
            className="absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer text-3xl sm:text-[2vw] text-gray-600 hover:text-red-700 px-2 pr-4 py-2 z-50 bg-white/70"
            onMouseEnter={() => setIsZoomEnabled(false)}  // 👈 DESATIVA ZOOM
            onMouseLeave={() => setIsZoomEnabled(true)}   // 👈 ATIVA QUANDO SAI
          >
            ◀
          </button>

  {/* SETA DIREITA */}
  <button
    onClick={handleNextImage}
    className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-3xl sm:text-[2vw] text-gray-600 hover:text-red-700 px-2 pl-4 py-2 z-50 bg-white/60"
    onMouseEnter={() => setIsZoomEnabled(false)}
    onMouseLeave={() => setIsZoomEnabled(true)}
  >
    ▶
  </button>
</div>




          <h3 className="mt-4 text-xl font-semibold text-left">
            {selectedProduct.name}
          </h3>
          <p className="mt-2 text-gray-700 text-left pb-10">
            {selectedProduct.description}
          </p>

          <div className="absolute bottom-4 right-4 bg-black text-white px-6 py-2 text-sm font-semibold">
            {selectedProduct.refs}
          </div>

          <button
            className="sm:hidden absolute top-4 right-4 text-2xl font-bold text-red-700"
            onClick={() => setShowMobileDetail(false)}
          >
            ✕
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full sm:w-4/6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              refs={product.refs}
              image={product.images[0]}
              selected={selectedProduct.id === product.id}
              onClick={() => handleCardClick(product)}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer
        className="w-full h-[300px] pt-8 sm:pt-0 bg-black text-white mt-12 bg-bottom bg-cover"
        style={{ backgroundImage: "url('/images/banner.jpg')" }}
      >
        <div className="max-w-6xl h-full mx-auto flex flex-col sm:flex-row items-center justify-between py-6 px-6 gap-4">
          <div className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Logo" className="w-60 h-auto" />
          </div>
          <div className="hidden sm:block h-[80%] border-l border-gray-500"></div>
          <div className="flex items-center gap-2 sm:text-xl">
            <span className="font-semibold">WhatsApp:</span>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600"
            >
              (11) 99999-9999
            </a>
          </div>
          <div className="hidden sm:block h-[80%] border-l border-gray-500"></div>
          <div className="flex items-center gap-2 text-sm sm:text-xl">
            <span className="font-semibold">Endereço:</span>
            <span>Rua Exemplo, 123 - São Paulo/SP</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
