import './style.css';
import { tombol } from './tombol.js';
import $ from "jquery";

$('#app').html(`
  <div class="box">
    <h2 id="heading">Hello World!</h2>
    <button id="changeText" class="btn">Change Heading Text</button>
  </div>
`);

tombol($('#changeText'));
