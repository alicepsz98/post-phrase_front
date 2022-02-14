import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://sxjjgwveuneildbmphwv.supabase.co/rest/v1'
})