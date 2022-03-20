import axios from "axios";
import { useEffect, useState } from "react";
import { CountryType } from "./types";
import Country from "./components/Country";
import Loading from "./components/Loading";

function App() {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [loading, setLoading]=useState<boolean>(false);
  const getCountries = async () => {
      setLoading(true);
    try {
      const { data } = await axios.get<CountryType[]>(
        "https://restcountries.com/v3.1/all"
      );
      setCountries(data);
    } catch {
      console.log("Ülkeleri alırken hata oluştu");
    } finally{
        setLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>

        <Loading loading={loading}>

      {countries.map((country) => {
        return (
          <Country key={country.name} country={country}/>
        );
      })}
        </Loading>

    </div>
  );
}

export default App;
