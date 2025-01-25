import { useEffect, useState } from "react";
import axios from "axios";
import AmbientSound from "./components/AmbientSound"; // 1️⃣ Importando o componente de som

function App() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=-6.2942&longitude=-38.1672&hourly=temperature_2m"
      )
      .then((response) => {
        const temp = response.data.hourly.temperature_2m[0]; // Pegando a primeira temperatura disponível
        setTemperature(temp);
      })
      .catch((error) => console.error("Erro ao buscar a temperatura:", error));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">🌤️ Previsão do Tempo</h1>
      {temperature !== null ? (
        <p className="text-2xl mt-4">A temperatura atual é de {temperature}°C</p>
      ) : (
        <p className="text-2xl mt-4">Carregando temperatura...</p>
      )}

      <AmbientSound /> {/* 2️⃣ Adicionando o botão de som */}
    </div>
  );
}

export default App;
