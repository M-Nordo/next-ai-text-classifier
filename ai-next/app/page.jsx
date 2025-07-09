'use client';

import { useState } from "react";

export default function HomePage() {
  const [text, setText] = useState("");
  const [labels, setLabels] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const classifyText = async () => {
    setLoading(true);
    setResults([]);

    const res = await fetch("/api/classify-text", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, labels: labels.split(",").map(l => l.trim()) }),
    });

    const data = await res.json();
    setResults(data || []);
    setLoading(false);
  };

  const getColor = (score) => {
    if (score >= 80) return "bg-green-200 text-green-800";
    if (score >= 50) return "bg-yellow-200 text-yellow-800";
    return "bg-red-200 text-red-800";
  };

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">AI Text Classifier</h1>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
        placeholder="Enter your text here..."
        className="w-full max-w-2xl p-4 border border-gray-300 rounded-lg mb-4"
      />

      <input
        type="text"
        value={labels}
        onChange={(e) => setLabels(e.target.value)}
        placeholder="Enter labels (comma-separated, e.g. love, sadness, hope)"
        className="w-full max-w-2xl p-3 border border-gray-300 rounded-lg mb-4"
      />

      <button
        onClick={classifyText}
        disabled={loading || !text || !labels}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? "Classifying..." : "Classify"}
      </button>

      {results.length > 0 && (
        <div className="mt-6 w-full max-w-2xl">
          <h2 className="text-xl font-semibold mb-4">Results:</h2>
          <div className="flex flex-wrap gap-3">
            {results.map((r, i) => (
              <div
                key={i}
                className={`px-4 py-2 rounded-lg font-medium ${getColor(r.score)} shadow`}
              >
                {r.label}: {r.score.toFixed(2)}%
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}