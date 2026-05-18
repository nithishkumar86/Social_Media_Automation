// Supabase Configuration for User Topic Tracking
const fs = require('fs');
const path = require('path');

// Read .env file directly
const envPath = path.join(__dirname, '..', '.env');
const envContent = fs.readFileSync(envPath, 'utf8');

const supabaseConfig = {};
envContent.split('\n').forEach(line => {
  const [key, value] = line.split('=');
  if (key && value) {
    supabaseConfig[key.trim()] = value.trim();
  }
});

const config = {
  projectUrl: supabaseConfig.SUPABASE_PROJECT_URL,
  serviceRoleKey: supabaseConfig.SUPABASE_SERVICE_ROLE_KEY,
  tableName: supabaseConfig.TABLE_NAME || 'Social_Automation'
};

module.exports = config;
