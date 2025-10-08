import { ANALYST_PROMPT_SYSTEM_MESSAGE } from "../constants";


const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: process.env.DEEPSEEK_API_KEY,
});

const callDeepSeek = async (userPrompt) => {
  const messages = [
    ANALYST_PROMPT_SYSTEM_MESSAGE,
    {
      role: "user",
      content: userPrompt
    }
  ];

  const completion = await openai.chat.completions.create({
    messages,
    model: "deepseek-reasoner",
  });

  const response = completion.choices[0].message.content;
  console.log("Raw response:", response);
};

export default callDeepSeek;
