import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6 animate-fadeIn">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">
        Selamat datang di aplikasi Kuis Matrix!
      </h2>
      <p className="text-lg text-gray-700 mb-4 lg:mx-40 text-left lg:text-center">
        Tes pemahaman anda mengenai matrix dengan berbagai soal menarik yang
        telah kami sediakan. Tingkatkan kemampuan anda dalam memahami dan
        mengoperasikan matriks dengan cara yang interaktif dan menyenangkan!
      </p>

      <div className="w-full md:w-2/3 lg:w-1/2 bg-white p-6 rounded-lg shadow-lg mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Fitur Utama:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Kuis interaktif untuk menguji pemahaman matriks</li>
          <li>Kalkulator matriks untuk perhitungan determinan dan invers</li>
          <li>Tampilan yang intuitif dan mudah digunakan</li>
          <li>Didukung dengan visualisasi matriks yang menarik</li>
        </ul>
      </div>

      <div className="flex space-x-4">
        <Link to="/quiz">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
            Mulai Kuis
          </button>
        </Link>
        <Link to="/calculator">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
            Buka Kalkulator
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
