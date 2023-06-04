import { ChatOpenAI } from "langchain/chat_models/openai"
import { LLMChain } from "langchain"
import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
  ChatPromptTemplate
} from "langchain/prompts"

const chat = new ChatOpenAI({ temperature: 0})

const translationPrompt = ChatPromptTemplate.fromPromptMessages([
  SystemMessagePromptTemplate.fromTemplate(
    "あなたは {input_language} から {output_language} に翻訳を行う優秀なアシスタントです"
  ),
  HumanMessagePromptTemplate.fromTemplate(
    "{text}"
  ),
])

export const chain = new LLMChain({
  prompt: translationPrompt,
  llm: chat
})