import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://sxjjgwveuneildbmphwv.supabase.co/rest/v1'
});

export const apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4ampnd3ZldW5laWxkYm1waHd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ3MDcyNjIsImV4cCI6MTk2MDI4MzI2Mn0.y1GF-rHZ2tMGO3yqiw7caFZdX0FeTvm9htUdpjMwVpk';
