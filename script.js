let xp =0
let health=100;
let gold=50
var curweapon=0;
let fighting;
let monsterhealth;
let inventory=['stick'];
const button1=document.querySelector('#button1')
const button2=document.querySelector('#button2')
const button3=document.querySelector('#button3')
const text=document.querySelector('#text')
const xptext=document.querySelector('#xpText')
const healthtext=document.querySelector('#healthText')
const goldtext=document.querySelector('#goldText')
const monsterstats=document.querySelector('#monsterStats')
const monsternametext=document.querySelector('#monsterName')
const monsterhealthtext=document.querySelector('#monsterHealth')
button1.onclick=gostore
button2.onclick=gocave
button3.onclick=fight

function gostore(){
    button1.innerText='buy 10 health(10 gold )'
    button2.innerText='go to town square'
    button3.innerText='buy weapon(20 gold )'
    button1.onclick=buyhealth
    button2.onclick=gotown
    button3.onclick=buyweapon
    text.innerText='you enter the store.'

}
function gocave(){
    console.log('Going to cave')
}
function fight(){
    console.log('fight the dragon')
}
function buyhealth(){

}
function gotown(){
    button1.innerText='Go to store'
    button2.innerText='Go to cave'
    button3.innerText='Fight dragon'
    button1.onclick=gostore
    button2.onclick=gocave
    button3.onclick=fight
    text.innerText=' You are in town square.you see that says \'store\'.'
}
function buyweapon(){

}
const location=[{name:'town square','button text':['Go to store','Go to cave','Fight dragon'],'button function':[gostore,gocave,fight],
text:' You are in town square.you see that says \'store\'.'}]
function uodate(location){

}

