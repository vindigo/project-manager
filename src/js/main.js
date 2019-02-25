$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(".box").animate(
      {
        width: ["toggle", "linear"]
      }, 200, "linear"
    );
  });
});

// $(document).ready(function () {
//   var slider_width = $('#main-nav').width();//get width automaticly
//   $('.fa-bars').click(function () {
//     if ($('#main-nav').css("margin-right") == slider_width + "px" && !$('#main-nav').is(':animated')) {
//       console.log("top");
//       $('#main-nav').animate({ "margin-left": '+=' + slider_width }, 'slow', 'easeOutBounce');
//     }
//     else {
//       console.log("middle");
//       if (!$('#main-nav').is(':animated'))//perevent double click to double margin
//       {
//         console.log("bottome")
//         $('#main-nav').animate({ "margin-left": '-=' + slider_width }, 'slow', 'easeInQuart');
//       }
//     }


//   });
// });     
