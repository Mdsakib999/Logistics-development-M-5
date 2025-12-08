import mountainImage from "../../assets/mountain.jpg";
import Button from "../ui/Button";
export default function Request() {
  return (
    <div
      style={{
        backgroundImage: `url(${mountainImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
     <div id="request-quote" className="w-auto sm:w-96 font-text bg-[#020800] text-white p-8 rounded-xl relative mx-2 sm:mx-auto md:mx-0 top-28 md:top-40 md:left-40 hover:sm:scale-105 transition-all duration-300">
      <h1 className="text-2xl text-secondary mb-8">Angebot anfordern</h1>
      
      <div className="mb-8">
        <h2 className="text-lg mb-4">Über Sie</h2>
        <input 
          placeholder="Ihr Name" 
          className="w-full p-4 mb-4 bg-[#121212] text-white rounded-lg placeholder-gray-400"
        />
        <input 
          placeholder="E-Mail-Adresse" 
          className="w-full p-4 bg-[#121212] text-white rounded-lg placeholder-gray-400"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-lg mb-4">Umzug</h2>
        <input 
          placeholder="Umzug von" 
          className="w-full p-4 mb-4 bg-[#121212] text-white rounded-lg placeholder-gray-400"
        />
        <input 
          placeholder="Umzug nach" 
          className="w-full p-4 bg-[#121212] text-white rounded-lg placeholder-gray-400"
        />
      </div>
      <Button to="/contact" type="secondary">Angebot anfordern</Button>
    </div>   
    </div>
  );
}
