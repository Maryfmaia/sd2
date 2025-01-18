import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.open-meteo.com/v1/forecast?latitude=-6.2942&longitude=-38.1672&hourly=temperature_2m")
      .then((response) => {
        const temp = response.data.hourly.temperature_2m[0]; // Pegando a primeira temperatura disponível
        setTemperature(temp);
      })
      .catch((error) => console.error("Erro ao buscar a temperatura:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🌤️ Previsão do Tempo</h1>
      {temperature !== null ? (
        <p>A temperatura atual é de {temperature}°C</p>
      ) : (
        <p>Carregando temperatura...</p>
      )}
    </div>
  );
}

export default App;
