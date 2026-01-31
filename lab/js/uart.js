const uartCanvas=document.getElementById('uartCanvas');
const uartCtx=uartCanvas.getContext('2d');
function updateUART(data=[]) {
    uartCtx.clearRect(0,0,uartCanvas.width, uartCanvas.height);
    uartCtx.strokeStyle='#0ea5a4'; uartCtx.beginPath();
    data.forEach((b,i)=>{ uartCtx.lineTo(i*10, uartCanvas.height-(b*2)); });
    uartCtx.stroke();
}
