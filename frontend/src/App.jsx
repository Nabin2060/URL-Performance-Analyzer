import React, { useState, useEffect } from "react";
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
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.body.classList.remove("custom-dark", "custom-light");
    document.body.classList.add(
      theme === "dark" ? "custom-dark" : "custom-light"
    );
    localStorage.setItem("theme", theme);
  }, [theme]);

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

  // Custom classes for dark/light
  const bgClass = theme === "dark" ? "bg-[#18181b]" : "bg-gray-100";
  const textClass = theme === "dark" ? "text-gray-100" : "text-gray-900";

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-300 ${bgClass} ${textClass}`}
    >
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="flex flex-col items-center justify-center p-4 flex-1">
        <InputForm onSubmit={fetchPerformance} />
        {loading && <Loader />}
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {result && <ResultCard data={result} />}
      </div>
      <Footer />
    </div>
  );
};

export default App;
