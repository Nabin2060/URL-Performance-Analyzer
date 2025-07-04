import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ResultCard from "./components/ResultCard";
import Loader from "./components/Loader";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPerformance = async (url) => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await axios.get(
        "https://www.googleapis.com/pagespeedonline/v5/runPagespeed",
        {
          params: {
            url,
            key: import.meta.env.VITE_PSI_API_KEY
          }
        }
      );

      const data = response.data;

      if (data.error) {
        setError(data.error.message);
        setLoading(false);
        return;
      }

      const metrics = {
        loadTime: data.lighthouseResult.audits["interactive"].displayValue,
        pageSize: (
          data.lighthouseResult.audits["total-byte-weight"].numericValue / 1024
        ).toFixed(2),
        requestCount:
          data.lighthouseResult.audits["network-requests"].details.items.length,
        url: data.id
      };

      setResult(metrics);
    } catch (error) {
      setError("Error fetching performance data. Please try again.", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
        <InputForm onSubmit={fetchPerformance} />
        {loading && <Loader />}
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {result && <ResultCard data={result} />}
      </div>
      <Footer />
    </>
  );
};

export default App;
