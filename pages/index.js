import { useForm } from "react-hook-form"
import { useLangChain } from "../features/langchain/hooks"

export default function Home() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { call, output, processing } = useLangChain()

  const onSubmit = async (data) => {
    await call(data)
  }

  const Response = () => {
    if(processing) {
      return <p>翻訳中...</p>
    }else{
      return <p>{output}</p>
    }
  }

  return (
    <>
    <h1>LangChain Translator</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea {...register("text", { required: true})} />
      <div>
        {errors.text && <span>This field is required</span>}
      </div>
      <input type="submit" />
    </form>
    <h2>ここに結果が表示されます</h2>
    <Response/>
    </>
  )
}
