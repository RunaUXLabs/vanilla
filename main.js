import './style.css';
import './supabase.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';
import { createClient } from '@supabase/supabase-js';



document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    
    핀데이터 테스트
    <p id="pinDefault">
      <span></span>
      <span></span>
      <span></span>
    </p>
  </div>
`;
//vite 카운터
setupCounter(document.querySelector('#counter'));

//슈파베이스 테스트용
const supabaseUrl = 'https://gwgwtplocxkebwuqepbd.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3Z3d0cGxvY3hrZWJ3dXFlcGJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUyMjAwMjUsImV4cCI6MjAzMDc5NjAyNX0.mYZ71l_TUW54pJnPyuufcuT8a5QoAiUcvSfwOy9IlY8";
const supabase = createClient(supabaseUrl, supabaseKey);
async function test() {
  let { data: pins, error } = await supabase.from('pins').select('*');
  console.log(pins[0]);
  document.querySelector('#pinDefault > span:nth-child(1)').textContent = `장소명: ${pins[0].building_name}`;
  document.querySelector('#pinDefault > span:nth-child(2)').textContent = `위도: ${pins[0].latitude}`;
  document.querySelector('#pinDefault > span:nth-child(3)').textContent = `경도: ${pins[0].longitude}`;
}
test();