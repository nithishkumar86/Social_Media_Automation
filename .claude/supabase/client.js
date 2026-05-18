// Supabase Client for Topic Tracking
const { createClient } = require('@supabase/supabase-js');
const config = require('./config');

class SupabaseClient {
  constructor() {
    this.client = createClient(config.projectUrl, config.serviceRoleKey);
    this.tableName = config.tableName;
  }

  // Insert a new topic entry
  async insertTopic(topicData) {
    // Remove id and created_at as they are auto-generated in Supabase
    const { id, created_at, ...filteredData } = topicData;

    const { data, error } = await this.client
      .from(this.tableName)
      .insert([filteredData])
      .select();

    if (error) throw new Error(`Insert error: ${error.message}`);
    return data;
  }

  // Get topics by content date
  async getTopicsByContentDate(contentDate) {
    const { data, error } = await this.client
      .from(this.tableName)
      .select('*')
      .eq('content_date', contentDate)
      .order('created_at', { ascending: false });

    if (error) throw new Error(`Fetch error: ${error.message}`);
    return data;
  }

  // Get topics by content type
  async getTopicsByContentType(contentType) {
    const { data, error } = await this.client
      .from(this.tableName)
      .select('*')
      .eq('content_type', contentType)
      .order('created_at', { ascending: false });

    if (error) throw new Error(`Fetch error: ${error.message}`);
    return data;
  }
}

module.exports = new SupabaseClient();
