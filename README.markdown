Why?
====

There is already such a plugin: [jquery.timepickr](http://haineault.com/media/jquery/ui-timepickr/page/). It depends on jQuery UI. If you use UI anyway and want to style with the theme roller you may want to give this plugin a try. For my taste this plugin is too heavy, and I don't use UI. So I hacked together my own slim time picker. 1.2kb (not minified) is much more page load friendly.

How?
====

See example.html. It's straight forward.

Options?
========

Yep.

    defaults = {
      minutes : ["00", "15", "30", "45"],
      ampm : ["am", "pm"]
    };

Demo?
=====

Sure: [http://lab.mustardamus.com/slim-time-picker/example.html](http://lab.mustardamus.com/slim-time-picker/example.html)

But it hasn't...
================

I know, this plugin is stupid simple and only supports 12h format. Maybe I'll update it in future if I need to. If you want to add your own features please fork this project instead of requesting features. 