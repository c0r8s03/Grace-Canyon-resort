
 
  $(function(){
    
    var myimg = "<img src='images/caribeanmenu.jpg'>";
    var myimg1 = "<img src='images/frenchmenu.jpg'>";
    
    // $('.icon').popover({placement:'top'},{html:'true', content:myimg1});
      $('.icon').popover({content:myimg1, html:'true', placement:'left'}); 
      $('.icon1').popover({content:myimg, html:'true', placement:'top'}); 
    
  });
    //  
  
   $(function () {
        $('#datetimepicker6').datetimepicker();
        $('#datetimepicker7').datetimepicker({
            useCurrent: false //Important! See issue #1075
        });
        $("#datetimepicker6").on("dp.change", function (e) {
            $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
        });
        $("#datetimepicker7").on("dp.change", function (e) {
            $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
        });
   });


  
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
});




/*$( "#clickme" ).click(function() {
  $("#book" ).slideUp( "slow", function() {
    // Animation complete.
*/






