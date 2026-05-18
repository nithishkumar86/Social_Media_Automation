// Fetch all newsletter rows
const supabase = require('./client');

(async () => {
  const rows = await supabase.getTopicsByContentType('newsletter');
  console.log(`Found ${rows.length} newsletter row(s):\n`);
  console.log(JSON.stringify(rows, null, 2));
})();
