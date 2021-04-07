
$('.gform').on('submit', function(e) {
    $('.gform *').fadeOut(2000);
    $('.gform').prepend('¡Tu consulta fue enviada con exito!');
    $('.gform *').fadeIn(2000);
  });