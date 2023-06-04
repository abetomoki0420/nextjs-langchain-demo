import { chain } from "../../features/langchain"

export default async function handler(req, res) {
  const response = await chain.call({
    input_language: "日本語",
    output_language: "英語",
    text: JSON.parse(req.body).text
  })

  res.status(200).json({ response: response.text })
}
