export async function POST(request) {
  const { text, labels } = await request.json();

  if (!text || !labels?.length) {
    return Response.json({ error: "Missing data" }, { status: 400 });
  }

  try {
    const response = await fetch("https://api-inference.huggingface.co/models/facebook/bart-large-mnli", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: text,
        parameters: { candidate_labels: labels },
      }),
    });

    const data = await response.json();

    if (data.error) {
      return Response.json({ error: `API Error: ${data.error}` }, { status: 500 });
    }

    const results = data.labels.map((label, i) => ({
      label,
      score: data.scores[i] * 100,
    }));

    return Response.json(results);
  } catch (err) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}