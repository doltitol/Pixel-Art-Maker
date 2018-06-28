// Select color input
// Select size input
//find table by its ID
const pixCanvas = document.getElementById('pixelCanvas');
let grdHeight = $('#inputHeight');
let grdWidth = $('#inputWeight');
let colr = $('#colorPicker');
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
  event.preventDefault();
let height = grdHeight.val();
let width = grdWidth.val();
  makeGrid(height, width);
});
function makeGrid(row, col) {
// Your code goes here!
//clear grid if not empty with while loop and change the inner HTML of #pixelCanvas
 pixCanvas.innerHTML='';
while($('table').is(':empty') === false){
     $('table').children.remove();
}
//create grid dynamically
for(let i = 1; i <= row; i++){
  $('#pixelCanvas').append('<tr id=tr' + i + '></tr>');
  for (let j = 1; j <= col; j++){
    $('#tr' + i).append('<td></td>');
  }
}
//add color to the Grid
$('td').on('click',function (evt){
  let color = colr.val();

if($(this).attr('style')){
  //remove background color
    $(this).removeAttr('style', 'background-color:'+color);
  }else {
    //add background color and change cursor to eraser
    $(this).css({ 'cursor':'url("eraser.ico"),auto','background-color':color});
  }
});
//clear canvas style elements
  $('.res').on('click', function (evt){
    $('td').removeAttr('style');
  });
  }
