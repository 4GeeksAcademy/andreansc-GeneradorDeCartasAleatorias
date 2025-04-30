import "./style.css";

window.onload = function() {
 
  const palos = ['♠', '♥', '♦', '♣'];
  const valores = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Q', 'K'];

  const palo = palos[Math.floor(Math.random() * palos.length)];
  const valor = valores[Math.floor(Math.random() * valores.length)];
  const color = (palo === '♥' || palo === '♦') ? 'red' : 'black';

  document.getElementById('top-left').innerHTML = `${palo}`;
  document.getElementById('bottom-right').innerHTML = `${palo}`;
  document.getElementById('centro').innerText = valor;


  document.getElementById('top-left').style.color = color;
  document.getElementById('bottom-right').style.color = color;
  
}
