// console.log("connected");

//Resatrt
var restart = document.querySelector("#b")

//Grab all the Squares
var squares = document.querySelectorAll("td");

//Clear all Squares
function clear(){
  for(var i=0;i<squares.length;i++){
    squares[i].textContent='';
  }
}
restart.addEventListener('click',clear);

//check the square maeker
//basic way to do so
// var cell1=document.querySelector('#one1')
// cell1.addEventListener('click',function(){
//   if(cell1.textContent===''){
//     cell1.textContent='X';
//   }else if(cell1.textContent==='X'){
//     cell1.textContent='O';
//   }else{
//     cell1.textContent='';
//   }
// })
// var cell2=document.querySelector('#one2')
// cell2.addEventListener('click',function(){
//   if(cell2.textContent===''){
//     cell2.textContent='X';
//   }else if(cell2.textContent==='X'){
//     cell2.textContent='O';
//   }else{
//     cell2.textContent='';
//   }
// })
// var cell3=document.querySelector('#one3')
// cell3.addEventListener('click',function(){
//   if(cell3.textContent===''){
//     cell3.textContent='X';
//   }else if(cell3.textContent==='X'){
//     cell3.textContent='O';
//   }else{
//     cell3.textContent='';
//   }
// })
// var cell4=document.querySelector('#two1')
// cell4.addEventListener('click',function(){
//   if(cell4.textContent===''){
//     cell4.textContent='X';
//   }else if(cell4.textContent==='X'){
//     cell4.textContent='O';
//   }else{
//     cell4.textContent='';
//   }
// })
// var cell5=document.querySelector('#two2')
// cell5.addEventListener('click',function(){
//   if(cell5.textContent===''){
//     cell5.textContent='X';
//   }else if(cell5.textContent==='X'){
//     cell5.textContent='O';
//   }else{
//     cell5.textContent='';
//   }
// })
// var cell6=document.querySelector('#two3')
// cell6.addEventListener('click',function(){
//   if(cell6.textContent===''){
//     cell6.textContent='X';
//   }else if(cell6.textContent==='X'){
//     cell6.textContent='O';
//   }else{
//     cell6.textContent='';
//   }
// })
// var cell7=document.querySelector('#three1')
// cell7.addEventListener('click',function(){
//   if(cell7.textContent===''){
//     cell7.textContent='X';
//   }else if(cell7.textContent==='X'){
//     cell7.textContent='O';
//   }else{
//     cell7.textContent='';
//   }
// })
// var cell8=document.querySelector('#three2')
// cell8.addEventListener('click',function(){
//   if(cell8.textContent===''){
//     cell8.textContent='X';
//   }else if(cell8.textContent==='X'){
//     cell8.textContent='O';
//   }else{
//     cell8.textContent='';
//   }
// })
// var cell9=document.querySelector('#three3')
// cell9.addEventListener('click',function(){
//   if(cell9.textContent===''){
//     cell9.textContent='X';
//   }else if(cell9.textContent==='X'){
//     cell9.textContent='O';
//   }else{
//     cell9.textContent='';
//   }
// })

//advanced way
function changeMarker(){
  if(this.textContent===''){
    this.textContent='X';
  }else if(this.textContent==='X'){
    this.textContent='O';
  }else{
    this.textContent='';
  }
}
for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',changeMarker);
}
