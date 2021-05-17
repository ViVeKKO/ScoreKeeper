const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const Reset = document.querySelector('#reset');
const ws = document.querySelector('#DD');
const ss = document.querySelector('.card');
document.querySelector('#butts').style.display = 'flex';
document.querySelector('#butts').style.justifyContent = 'center';
p2Button.lineHeight =  '3em';
ss.style.width = '33%';
ss.style.alignItems = 'center';
ss.style.display = 'block';
ss.style.lineHeight = '5em';
// document.body.style.fontSize = '4em';
document.querySelector('h1').style.textAlign = 'center';
p1Button.style.alignItems = 'center';
let p1Score = 0,p2Score = 0 ;
let win = 5;

p1Button.addEventListener('click',function(){
    if(p1Score != win && p2Score != win){
        p1Score += 1;
        p1Display.textContent = p1Score;
        if(p1Score == win) {
            p2Display.style.color = 'red';
            p1Display.style.color = 'green';
        }
    }else{
        ResetFx();
    }
});
p2Button.addEventListener('click',function(){
    if(p1Score != win && p2Score != win){
        p2Score += 1;
        p2Display.textContent = p2Score;
        if(p2Score == win) {
            p2Display.style.color = 'green';
            p1Display.style.color = 'red';
        }
    }
    else{
    
    ResetFx();
    }
});
function ResetFx(){
    p1Score = 0;p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p2Display.style.color = 'black';
    p1Display.style.color = 'black';
}
Reset.addEventListener('click',ResetFx);
ws.addEventListener('change',function(){
    win = parseInt(this.value);
    

})