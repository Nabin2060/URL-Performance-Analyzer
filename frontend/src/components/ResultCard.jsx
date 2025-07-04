import React from "react";

const ResultCard = ({ data }) => {
  return (
    <div className="mt-6 p-4 bg-white rounded shadow max-w-md w-full">
      <h2 className="text-xl font-semibold mb-4">📊 Performance Results</h2>
      <p>
        <strong>🔗 URL:</strong>{" "}
        <a
          href={data.url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          {data.url}
        </a>
      </p>
      <p>
        <strong>⏱️ Load Time:</strong> {data.loadTime}
      </p>
      <p>
        <strong>📦 Page Size:</strong> {data.pageSize} KB
      </p>
      <p>
        <strong>🔢 HTTP Requests:</strong> {data.requestCount}
      </p>
    </div>
  );
};

export default ResultCard;
