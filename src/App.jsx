import { useEffect, useState } from "react";
import supabase from "../utils/supabase";
import './App.css';

function App() {
  /*   const [countries, setCountries] = useState({});
  
    async function getCountries() {
      const { data } = await supabase.from("countries").select().eq('id', '1').single();
      setCountries(data);
    }
  
    useEffect(() => {
      getCountries();
    }, []); */

  const [defaults, setDefaults] = useState({});
  useEffect(() => {
    const getDefaults = async () => {
      const { data } = await supabase.from('defaults').select().limit(1).single();
      setDefaults(data);
    }
    getDefaults();
  })

  return (
    // <ul>
    //   {countries.map((country) => (
    //     <li key={country.name}>{country.name}</li>
    //   ))}
    // </ul>
    <table>
      <caption>
        The defaults as of {(new Date).toLocaleString()}
      </caption>
      <thead>
        <tr>
          {Object.keys(defaults).map((property, i) => (<th key={i}>{property}</th>))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Object.keys(defaults).map((property, i) => (<td key={i}>{defaults[property]}</td>))}
        </tr>
        <tr>
          {Object.keys(defaults).map((property, i) => (<td key={i}>{typeof (defaults[property])}</td>))}
        </tr>
      </tbody>
    </table>
  );
}

export default App;