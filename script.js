$(document).ready(function(){

//alert('you really should  not use this website.');

$('#pizza').click(function(){
    $('#pizzaimg').toggle();
    });
    
$('#pizza1').click(function(){
    $('#pizzaimg1').toggle();
    });

$('#pizza2').click(function(){
    $('#pizzaimg2').toggle();
    });
    
$('#pizza3').click(function(){
    $('#pizzaimg3').toggle();
    });
    
$('#pizza4').click(function(){
    $('#pizzaimg4').toggle();
    });
    
$('#pizza5').click(function(){
    $('#pizzaimg5').toggle();
    });
    
//pay?

$('#pizza7').click(function(){
    $('.img').slideUp();
    $('#pizzaimg6').slideToggle();
    $('#pizza7').css('color','green');
    });

$('#pizza8').click(function(){
    $('#pizza8').fadeToggle();
    });
//pizza6

$('#pizza6').click(function(){
    alert('you should choose yes');
    });
    
$('#child').click(function(){
    alert("don't click random things");
    });

//fade when click

$('#pizzaimg').click(function(){
    $('#pizzaimg').fadeToggle();
    });
    
$('#pizzaimg1').click(function(){
    $('#pizzaimg1').fadeToggle();
    });

$('#pizzaimg2').click(function(){
    $('#pizzaimg2').fadeToggle();
    });
    
$('#pizzaimg3').click(function(){
    $('#pizzaimg3').fadeToggle();
    });
    
$('#pizzaimg4').click(function(){
    $('#pizzaimg4').fadeToggle();
    });
    
$('#pizzaimg5').click(function(){
    $('#pizzaimg5').fadeToggle();
    });
    
    
$('#pizzaimg6').click(function(){
    $('#pizzaimg6').slideToggle();
    });
  
});