// Insert Edition 13 newsletter record
const supabase = require('./client');

(async () => {
  const record = {
    content_date: '2026-05-19',
    content_type: 'newsletter',
    topic: 'Newsletter - AI Investments, IPOs and Tool Updates (Cerebras IPO, Anduril $5B, Anthropic $900B, ChatGPT Finances, Cerebras Cloud)',
    day_of_week: 'Tuesday',
    summary: 'AI Dominators Edition 13 covering May 13-19, 2026: Cerebras IPO, Anduril $5B raise, Anthropic $900B talks, ChatGPT Finances, and Cerebras Cloud as trending tool.',
    status: 'success',
    Edition: 13
  };

  try {
    const result = await supabase.insertTopic(record);
    console.log('Inserted successfully:');
    console.log(JSON.stringify(result, null, 2));
  } catch (err) {
    console.error('Insert failed:', err.message);
    process.exit(1);
  }
})();
