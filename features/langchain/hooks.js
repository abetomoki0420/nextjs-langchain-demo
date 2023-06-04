import { useState } from "react"

export const useLangChain = () => {
  const [ processing, setProcessing ] = useState(false)
  const [ output, setOutput ] = useState("")

  const call = async (requestBody) => {
    try{
      setProcessing(true)
      const res = await fetch("/api/langchain", {
        method: "POST",
        body: JSON.stringify(requestBody)
      }).then( v => v.json())
      
      setOutput(res.response)
    }finally{
      setProcessing(false)
    }
  }

  return {
    call,
    output,
    processing
  }
}