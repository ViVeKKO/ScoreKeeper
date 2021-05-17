const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const Reset = document.querySelector('#reset');
const ws = document.querySelector('#DD');

let p1Score = 0,p2Score = 0 ;
let win = ws;

p1Button.addEventListener('click',function(){
    if(p1Score != win && p2Score != win){
        p1Score += 1;
        p1Display.textContent = p1Score;
    }else
    ResetFx();
});
p2Button.addEventListener('click',function(){
    if(p1Score != win && p2Score != win){
        p2Score += 1;
        p2Display.textContent = p2Score;
    }
    else
    ResetFx();
});
function ResetFx(){
    p1Score = 0;p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
}
Reset.addEventListener('click',ResetFx);
ws.addEventListener('change',function(){
    win = parseInt(this.value);
})