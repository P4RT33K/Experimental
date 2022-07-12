document.addEventListener("DOMContentLoaded", main);

function main(){
    let circle = document.getElementById('icon');
const onMouseMove = (e) =>{
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);
}