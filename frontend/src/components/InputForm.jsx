import React, { useState } from "react";

const InputForm = ({ onSubmit }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(url);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-3 w-full max-w-md"
    >
      <input
        type="url"
        placeholder="Enter a website URL (e.g. https://example.com)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
        className="px-4 py-2 rounded border w-full"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Analyze
      </button>
    </form>
  );
};

export default InputForm;
