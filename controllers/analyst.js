
const handlePromptAnalyst = async (res, req) => {
  try {
    const { prompt, models } = req.body;

    const results = {};

    for (const model of models) {

      results[model] = [];
      let responseText = '';
      if (model === 'openai') {
        responseText = await callOpenAI(prompt);
      } else if (model === 'deepseek') {
        responseText = await callDeepSeek(prompt);
      }
      results[model].push({
        prompt,
        response: responseText
      });
    }

    res.json({
      success: true,
      data: results
    });

  } catch (err) {
   console.error(err);
   res.status(500).json({ success: false, error: err.message });
  }
};

export default handlePromptAnalyst;
