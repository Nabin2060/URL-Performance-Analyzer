import React from "react";

const ResultCard = ({ data }) => {
  return (
    <div
      className="mt-8 p-6 rounded-xl shadow-lg border max-w-md w-full transition-colors duration-300
        bg-white custom-dark:bg-[#23232a] border-gray-200 custom-dark:border-gray-700"
    >
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 custom-dark:text-blue-300 text-blue-700">
        <span role="img" aria-label="chart">
          📊
        </span>{" "}
        Performance Results
      </h2>
      <div className="space-y-4">
        <div>
          <span className="font-semibold">🔗 URL:</span>{" "}
          <a
            href={data.url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 custom-dark:text-blue-400 underline break-all"
          >
            {data.url}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">⏱️ Load Time:</span>
          <span className="text-lg font-mono">{data.loadTime}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">📦 Page Size:</span>
          <span className="text-lg font-mono">{data.pageSize} KB</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">🔢 HTTP Requests:</span>
          <span className="text-lg font-mono">{data.requestCount}</span>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
