/*
 * Slim Time Picker Plugin (http://github.com/mustardamus/slim-time-picker)
 * Version 0.1 - Tested with jQuery 1.3.2
 * (c) 2009 Sebastian Senf (http://mustardamus.com)
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

defaults = {
  minutes : ["00", "15", "30", "45"],
  ampm : ["am", "pm"]
};

$.fn.slimTimePicker = function(options) {
  var opts = $.extend({}, $.fn.slimTimePicker.defaults, options);
  var h_class = 'hover';
  var hours = ''; minutes = ''; ampm = '';
  
  for(h = 1; h <= 12; h++) {
    leading_zero = h <= 9 ? '0' : '';
    hours += '<li><span>'+leading_zero+h+'</span></li>';
  }
  
  for(m = 0; m < opts.minutes.length; m++) {
    minutes += '<li><span>'+opts.minutes[m]+'</span></li>';
  }
  
  for(a = 0; a < 2; a++) {
    ampm += '<li><span>'+opts.ampm[a]+'</span></li>';
  }
  
  return this.each(function() {
    $(this).focus(function() {
      var input = $(this);
      var pos = input.offset();
      var stp_id = 'stp-'+$(this).attr('id');
      
      if($('#'+stp_id).length == 0) {
        $('body').append('<div class="slim-time-picker" id="'+stp_id+'"></div>');

        $('#'+stp_id).css({
          'position' : 'absolute',
          'top' : pos.top+input.height()+'px',
          'left' : pos.left+'px'
        }).append('<ul class="hours">'+hours+'</ul>').children('ul').children('li').hover(function() { //on hours hover
          $(this).addClass(h_class).append('<ul class="minutes">'+minutes+'</ul>').children('ul').children('li').hover(function() { //on minutes hover
            $(this).addClass(h_class).append('<ul class="ampm">'+ampm+'</ul>').children('ul').children('li').hover(function() { //on ampm hover
              $(this).addClass(h_class);
            }, function() { //on ampm out
              $(this).removeClass(h_class);
            }).click(function() { //on ampm click
              input.val($('#'+stp_id+' .hover > span:eq(0)').text()+':'+$('#'+stp_id+' .hover > span:eq(1)').text()+' '+$('#'+stp_id+' .hover > span:eq(2)').text());
              $('#'+stp_id).fadeOut('fast');
            });
          }, function() { //on minutes out
            $(this).removeClass(h_class).children('ul').remove();
          });
        }, function() { //on hours out
          $(this).removeClass(h_class).children('ul').remove();
        });
      } else {
        $('#'+stp_id).fadeIn('fast');
      }
    }).blur(function() {
      $('#stp-'+$(this).attr('id')).fadeOut('fast');
    });
  });
};
$.fn.slimTimePicker.defaults = defaults;