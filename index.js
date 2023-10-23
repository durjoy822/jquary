$("h2").text("Hello I  am md nayem hossain"); 
$('#pen,.first').html("<h1> yea this is a pen here</h1>"); 
$(".my_code h1 ").text("oke");   
$('.html').html('<b>How are you</b>')


// text      $("h2").text("Hello I  am md nayem hossain");  (replaceing method)
// html      $('#pen,.first').html("<h1> yea this is a pen here</h1>");    (styling method)
// append    $(".append").append('how are you?'); (after adding method)
// prepend   $('.append').prepend('Kadir said to salam .');  (Before adding method)
// after 
// before

$(".append").append('how are you?');
$('.append').prepend('1.');
$('.append').prepend('Kadir said to salam .');

// Attibute manupulation
// remove attibute 

$("a").attr("href"); 
$("a").removeAttr("href"); 

// style attebute add
$(".css").css("color","red"); 
$(".css").css("font-size","5rem"); 