$(document).ready(function(){

  new WOW().init();





//let bgcimg = $(".bgc-img");

///////////////////////////////////////////////////////auto type

var typed = new Typed(".auto-type",{

  strings:["webové stránky","web portfolio","web portfolio","programátor","designer","vývojář"],
  typeSpeed:400,
  backspeed:100, 
  loop:true

});


if(true){

  $(".eng").css("display","flex");
  

}
$(".out").on('click',function(){
  $(".eng").css("display","none");
  


});



///////////////////////////////////////////////////////scroll


var scroll = $(".scroll");
var scrolllist = $(".scroll-list");
let status = 0; 


scroll.on('click',function(){
  if(status == 1){//smaze se menu
    scrolllist.css("display","none");
    $(".scroll-query").css("border-radius","0 0 0 0");
    $(".scroll-query").css("background-color","transparent");
    status = 0;
    delay(1000);
  }

  if(status == 0){//spusti se menu
    scrolllist.css("display","flex");
    $(".scroll-query").css("border-radius","0 0 50% 50%");
    $(".scroll-query").css("background-color","rgba(183, 183, 183,.1)");
    status = 1;
    delay(1000);
  }
});

/*scroll.on('click',function(){
  
  
});

*/



///////////////////////////////////////////////////////1
 $('.portfolio__img1').on('mouseenter',function(){
  $('.portfolio__img1').css("box-shadow","2px 2px 10px white");
  $('.fa-solid1').css("box-shadow","2px 2px 10px white");
    });
        $('.portfolio__img1').on('mouseleave',function(){
          $('.portfolio__img1').css("box-shadow","2px 2px 20px white");
          $('.fa-solid1').css("box-shadow","2px 2px 20px white");
        });


$('.fa-solid1').on('mouseenter',function(){
  $('.portfolio__img1').css("box-shadow","2px 2px 10px white");
  $('.fa-solid1').css("box-shadow","2px 2px 10px white");
    });
        $('.fa-solid1').on('mouseleave',function(){
          $('.portfolio__img1').css("box-shadow","2px 2px 20px white");
          $('.fa-solid1').css("box-shadow","2px 2px 20px white");
        });



///////////////////////////////////////////////////////2
$('.portfolio__img2').on('mouseenter',function(){
  $('.portfolio__img2').css("box-shadow","2px 2px 10px white");
  $('.fa-solid2').css("box-shadow","2px 2px 10px white");
    });
        $('.portfolio__img2').on('mouseleave',function(){
          $('.portfolio__img2').css("box-shadow","2px 2px 20px white");
          $('.fa-solid2').css("box-shadow","2px 2px 20px white");
        });


$('.fa-solid2').on('mouseenter',function(){
  $('.portfolio__img2').css("box-shadow","2px 2px 10px white");
  $('.fa-solid2').css("box-shadow","2px 2px 10px white");
    });
        $('.fa-solid2').on('mouseleave',function(){
          $('.portfolio__img2').css("box-shadow","2px 2px 20px white");
          $('.fa-solid2').css("box-shadow","2px 2px 20px white");
        });

///////////////////////////////////////////////////////3
$('.portfolio__img3').on('mouseenter',function(){
  $('.portfolio__img3').css("box-shadow","2px 2px 10px white");
  $('.fa-solid3').css("box-shadow","2px 2px 10px white");
    });
        $('.portfolio__img3').on('mouseleave',function(){
          $('.portfolio__img3').css("box-shadow","2px 2px 20px white");
          $('.fa-solid3').css("box-shadow","2px 2px 20px white");
        });


$('.fa-solid3').on('mouseenter',function(){
  $('.portfolio__img3').css("box-shadow","2px 2px 10px white");
  $('.fa-solid3').css("box-shadow","2px 2px 10px white");
    });
        $('.fa-solid3').on('mouseleave',function(){
          $('.portfolio__img3').css("box-shadow","2px 2px 20px white");
          $('.fa-solid3').css("box-shadow","2px 2px 20px white");
        });

///////////////////////////////////////////////////////4
$('.portfolio__img4').on('mouseenter',function(){
  $('.portfolio__img4').css("box-shadow","2px 2px 10px white");
  $('.fa-solid4').css("box-shadow","2px 2px 10px white");
    });
        $('.portfolio__img4').on('mouseleave',function(){
          $('.portfolio__img4').css("box-shadow","2px 2px 20px white");
          $('.fa-solid4').css("box-shadow","2px 2px 20px white");
        });


$('.fa-solid4').on('mouseenter',function(){
  $('.portfolio__img4').css("box-shadow","2px 2px 10px white");
  $('.fa-solid4').css("box-shadow","2px 2px 10px white");
    });
        $('.fa-solid4').on('mouseleave',function(){
          $('.portfolio__img4').css("box-shadow","2px 2px 20px white");
          $('.fa-solid4').css("box-shadow","2px 2px 20px white");
        });

///////////////////////////////////////////////////////5
$('.portfolio__img5').on('mouseenter',function(){
  $('.portfolio__img5').css("box-shadow","2px 2px 10px white");
  $('.fa-solid5').css("box-shadow","2px 2px 10px white");
    });
        $('.portfolio__img5').on('mouseleave',function(){
          $('.portfolio__img5').css("box-shadow","2px 2px 20px white");
          $('.fa-solid5').css("box-shadow","2px 2px 20px white");
        });


$('.fa-solid5').on('mouseenter',function(){
  $('.portfolio__img5').css("box-shadow","2px 2px 10px white");
  $('.fa-solid5').css("box-shadow","2px 2px 10px white");
    });
        $('.fa-solid5').on('mouseleave',function(){
          $('.portfolio__img5').css("box-shadow","2px 2px 20px white");
          $('.fa-solid5').css("box-shadow","2px 2px 20px white");
        });

///////////////////////////////////////////////////////6
$('.portfolio__img6').on('mouseenter',function(){
  $('.portfolio__img6').css("box-shadow","2px 2px 10px white");
  $('.fa-solid6').css("box-shadow","2px 2px 10px white");
    });
        $('.portfolio__img6').on('mouseleave',function(){
          $('.portfolio__img6').css("box-shadow","2px 2px 20px white");
          $('.fa-solid6').css("box-shadow","2px 2px 20px white");
        });


$('.fa-solid6').on('mouseenter',function(){
  $('.portfolio__img6').css("box-shadow","2px 2px 10px white");
  $('.fa-solid6').css("box-shadow","2px 2px 10px white");
    });
        $('.fa-solid6').on('mouseleave',function(){
          $('.portfolio__img6').css("box-shadow","2px 2px 20px white");
          $('.fa-solid6').css("box-shadow","2px 2px 20px white");
        });








$(function($){     
$(function() {                     
  $(".modal__item1").click(function() {
    $(".modal").css("display","none");
    $("html, body").animate({scrollTop: $(".portfolio").offset().top}, 1000);
    });
    });

    $(function() {                     
      $(".modal__item2").click(function() {
        $(".modal").css("display","none");
        $("html, body").animate({scrollTop: $(".info").offset().top}, 1000);
        });
        });

        $(function() {                     
          $(".modal__item3").click(function() {
            $(".modal").css("display","none");
            $("html, body").animate({scrollTop: $(".promo").offset().top}, 1000);
            });
            });
            
            $(function() {                     
              $(".nav-logo__title").click(function() {
                $(".modal").css("display","none");
                $("html, body").animate({scrollTop: $("header").offset().top}, 1000);
                });
                });  
              });  


   var signbtn = $(".sign__btn");
   var signinfo = $(".sign__info");
   var progress = $("#progress__number");
   var burger = $(".burger");
   var cross = $(".cross");

  burger.on('click', function(){
    $(".modal").css("display","flex");

  });

  cross.on('click',function(){
    $(".modal").css("display","none");

  });

  signbtn.mouseenter(function(){

    signinfo.css("display","none");;              
    signbtn.css("flex-basis","100%");
 
  });

  signbtn.mouseleave(function(){
    
    signinfo.css("display","flex");              
    signbtn.css("flex-basis","50%");
   
  });


                           $(".confirm").on('mouseenter',function(){
                              $(".pravo").css("display","inline");
                              $(".levo").css("display","inline");
                           });

                           $(".confirm").on('mouseleave',function(){
                              $(".pravo").css("display","none");
                              $(".levo").css("display","none");
                           });




//sekce portfolio ***********************************************************************************************

var port1 = $(".portfolio__img1");
var port2 = $(".portfolio__img2");
var port3 = $(".portfolio__img3");
var port4 = $(".portfolio__img4");
var port5 = $(".portfolio__img5");
var port6 = $(".portfolio__img6");
var port = $(".portfolio__img");
var portfull = $(".portfolio__query");

  var port__text1 = $(".portfolio__text1");
  var port__text2 = $(".portfolio__text2");
  var port__text3 = $(".portfolio__text3");
  var port__text4 = $(".portfolio__text4");
  var port__text5 = $(".portfolio__text5");
  var port__text6 = $(".portfolio__text6");
  var port__block = $(".portfolio-block");

  var port__back = $(".port__back");
            
  let stav = 0;

portfull.on('click',function(){
  port6.css("display","block");
  port5.css("display","block");
  port4.css("display","block");
  portfull.css("display","none");
  stav = 1;
});

var width = $(window).width();


///////////////////////////////////////////////////////port1

    port1.on('click',function(){
        portfull.css("display","none");
        port.css("display","none");
        port1.css("display","block");
        port1.css("border-radius","5%");
          
          
        if (width <= 300){
          $(this).animate({"width":"200px","height":"150px"},1000,function(){
            port__text1.css("display","flex");
            port__block.css("display","flex");
            port__block.css("justify-content","center");
            port__block.css("align-items","center");
            port__block.css("flex-direction","column");
          });
        }
          
          
         
          if (width <= 549 && width >= 300){
            $(this).animate({"width":"200px","height":"150px"},1000,function(){
              port__text1.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 599&&width >= 550){
            $(this).animate({"width":"300px","height":"200px"},1000,function(){
              port__text1.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 699&&width >= 600){
            $(this).animate({"width":"400px","height":"300px"},1000,function(){
              port__text1.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 799&&width >= 700){
            $(this).animate({"width":"450px","height":"350px"},1000,function(){
              port__text1.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 999&&width >= 800){
            $(this).animate({"width":"500px","height":"380px"},1000,function(){
              port__text1.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 1000&&width >= 1000){
            $(this).animate({"width":"700px","height":"500px"},1000,function(){
              port__text1.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width >= 1000){
            $(this).animate({"width":"900px","height":"600px"},1000,function(){
              port__text1.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }



        port__back.on('click',function(){
            port.css("display","block");
            port1.css("display","none");
            $(port1).animate({"width":"400px","height":"350px"},10,function(){
            port__text1.css("display","none");
            port__block.css("display","flex");
            $("html, body").animate({scrollTop: $(".portfolio").offset().top}, 1000);
            if(stav == 1){
              port6.css("display","block");
              port5.css("display","block");
              port4.css("display","block");
            }
            else{
              port6.css("display","none");
              port5.css("display","none");
              port4.css("display","none");
              portfull.css("display","flex"); 

            }
            });
        });
      });


      ///////////////////////////////////////////////////////port2
      port2.on('click',function(){
          portfull.css("display","none");
          port.css("display","none");
          port2.css("display","block");
          port2.css("border-radius","5%");
          
          
        if (width <= 300){
          $(this).animate({"width":"200px","height":"150px"},1000,function(){
            port__text2.css("display","flex");
            port__block.css("display","flex");
            port__block.css("justify-content","center");
            port__block.css("align-items","center");
            port__block.css("flex-direction","column");
          });
        }
          
          
         
          if (width <= 549 && width >= 300){
            $(this).animate({"width":"200px","height":"150px"},1000,function(){
              port__text2.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 599&&width >= 550){
            $(this).animate({"width":"300px","height":"200px"},1000,function(){
              port__text2.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 699&&width >= 600){
            $(this).animate({"width":"400px","height":"300px"},1000,function(){
              port__text2.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 799&&width >= 700){
            $(this).animate({"width":"450px","height":"350px"},1000,function(){
              port__text2.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 999&&width >= 800){
            $(this).animate({"width":"500px","height":"380px"},1000,function(){
              port__text2.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 1000&&width >= 1000){
            $(this).animate({"width":"700px","height":"500px"},1000,function(){
              port__text2.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width >= 1000){
            $(this).animate({"width":"900px","height":"600px"},1000,function(){
              port__text2.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }

        port__back.on('click',function(){
            port.css("display","block");
            port2.css("display","none");
            $(port2).animate({"width":"400px","height":"350px"},10,function(){
            port__text2.css("display","none");
            port__block.css("display","flex");
            $("html, body").animate({scrollTop: $(".portfolio").offset().top}, 1000);
            if(stav == 1){
              port6.css("display","block");
              port5.css("display","block");
              port4.css("display","block");
            }
            else{
              port6.css("display","none");
              port5.css("display","none");
              port4.css("display","none");
              portfull.css("display","flex"); 

            }
            });
        });
      });

///////////////////////////////////////////////////////port3

        port3.on('click',function(){
            portfull.css("display","none");
            port.css("display","none");
            port3.css("display","block");
            port3.css("border-radius","5%");
            
          
        if (width <= 300){
          $(this).animate({"width":"200px","height":"150px"},1000,function(){
            port__text3.css("display","flex");
            port__block.css("display","flex");
            port__block.css("justify-content","center");
            port__block.css("align-items","center");
            port__block.css("flex-direction","column");
          });
        }
          
          
         
          if (width <= 549 && width >= 300){
            $(this).animate({"width":"200px","height":"150px"},1000,function(){
              port__text3.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 599&&width >= 550){
            $(this).animate({"width":"300px","height":"200px"},1000,function(){
              port__text3.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 699&&width >= 600){
            $(this).animate({"width":"400px","height":"300px"},1000,function(){
              port__text3.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 799&&width >= 700){
            $(this).animate({"width":"450px","height":"350px"},1000,function(){
              port__text3.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 999&&width >= 800){
            $(this).animate({"width":"500px","height":"380px"},1000,function(){
              port__text3.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 1000&&width >= 1000){
            $(this).animate({"width":"700px","height":"500px"},1000,function(){
              port__text3.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width >= 1000){
            $(this).animate({"width":"900px","height":"600px"},1000,function(){
              port__text3.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }

          port__back.on('click',function(){
              port.css("display","block");
              port3.css("display","none");
              $(port3).animate({"width":"400px","height":"350px"},10,function(){
              port__text3.css("display","none");
              port__block.css("display","flex");
              $("html, body").animate({scrollTop: $(".portfolio").offset().top}, 1000);
              if(stav == 1){
                port6.css("display","block");
                port5.css("display","block");
                port4.css("display","block");
              }
              else{
                port6.css("display","none");
                port5.css("display","none");
                port4.css("display","none");
                portfull.css("display","flex"); 
  
              }
              });
          });
        });

///////////////////////////////////////////////////////port4

          port4.on('click',function(){
              portfull.css("display","none");
              port.css("display","none");
              port4.css("display","block");
              port4.css("border-radius","5%");
              
          
        if (width <= 300){
          $(this).animate({"width":"200px","height":"150px"},1000,function(){
            port__text4.css("display","flex");
            port__block.css("display","flex");
            port__block.css("justify-content","center");
            port__block.css("align-items","center");
            port__block.css("flex-direction","column");
          });
        }
          
          
         
          if (width <= 549 && width >= 300){
            $(this).animate({"width":"200px","height":"150px"},1000,function(){
              port__text4.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 599&&width >= 550){
            $(this).animate({"width":"300px","height":"200px"},1000,function(){
              port__text4.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 699&&width >= 600){
            $(this).animate({"width":"400px","height":"300px"},1000,function(){
              port__text4.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 799&&width >= 700){
            $(this).animate({"width":"450px","height":"350px"},1000,function(){
              port__text4.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 999&&width >= 800){
            $(this).animate({"width":"500px","height":"380px"},1000,function(){
              port__text4.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 1000&&width >= 1000){
            $(this).animate({"width":"700px","height":"500px"},1000,function(){
              port__text4.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width >= 1000){
            $(this).animate({"width":"900px","height":"600px"},1000,function(){
              port__text4.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }

            port__back.on('click',function(){
                port.css("display","block");
                port4.css("display","none");
                $(port4).animate({"width":"400px","height":"350px"},10,function(){
                port__text4.css("display","none");
                port__block.css("display","flex");
                $("html, body").animate({scrollTop: $(".portfolio").offset().top}, 1000);
                if(stav == 1){
                  port6.css("display","block");
                  port5.css("display","block");
                  port4.css("display","block");
                }
                else{
                  port6.css("display","none");
                  port5.css("display","none");
                  port4.css("display","none");
                  portfull.css("display","flex"); 
    
                }
                });
            });
          });

///////////////////////////////////////////////////////port5

            port5.on('click',function(){
                portfull.css("display","none");
                port.css("display","none");
                port5.css("display","block");
                port5.css("border-radius","5%");
                
          
        if (width <= 300){
          $(this).animate({"width":"200px","height":"150px"},1000,function(){
            port__text5.css("display","flex");
            port__block.css("display","flex");
            port__block.css("justify-content","center");
            port__block.css("align-items","center");
            port__block.css("flex-direction","column");
          });
        }
          
          
         
          if (width <= 549 && width >= 300){
            $(this).animate({"width":"200px","height":"150px"},1000,function(){
              port__text5.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 599&&width >= 550){
            $(this).animate({"width":"300px","height":"200px"},1000,function(){
              port__text5.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 699&&width >= 600){
            $(this).animate({"width":"400px","height":"300px"},1000,function(){
              port__text5.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 799&&width >= 700){
            $(this).animate({"width":"450px","height":"350px"},1000,function(){
              port__text5.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 999&&width >= 800){
            $(this).animate({"width":"500px","height":"380px"},1000,function(){
              port__text5.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 1000&&width >= 1000){
            $(this).animate({"width":"700px","height":"500px"},1000,function(){
              port__text5.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width >= 1000){
            $(this).animate({"width":"900px","height":"600px"},1000,function(){
              port__text5.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }

                port__back.on('click',function(){
                    port.css("display","block");
                    port5.css("display","none");
                    $(port5).animate({"width":"400px","height":"350px"},10,function(){
                    port__text5.css("display","none");
                    port__block.css("display","flex");
                    $("html, body").animate({scrollTop: $(".portfolio").offset().top}, 1000);
                    if(stav == 1){
                      port6.css("display","block");
                      port5.css("display","block");
                      port4.css("display","block");
                    }
                    else{
                      port6.css("display","none");
                      port5.css("display","none");
                      port4.css("display","none");
                      portfull.css("display","flex"); 
        
                    }
                    });
                });
              });

///////////////////////////////////////////////////////port6

                port6.on('click',function(){
                  portfull.css("display","none");
                  port.css("display","none");
                  port6.css("display","block");
                  port6.css("border-radius","5%");
                  
          
        if (width <= 300){
          $(this).animate({"width":"200px","height":"150px"},1000,function(){
            port__text6.css("display","flex");
            port__block.css("display","flex");
            port__block.css("justify-content","center");
            port__block.css("align-items","center");
            port__block.css("flex-direction","column");
          });
        }
          
          
         
          if (width <= 549 && width >= 300){
            $(this).animate({"width":"200px","height":"150px"},1000,function(){
              port__text6.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 599&&width >= 550){
            $(this).animate({"width":"300px","height":"200px"},1000,function(){
              port__text6.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 699&&width >= 600){
            $(this).animate({"width":"400px","height":"300px"},1000,function(){
              port__text6.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 799&&width >= 700){
            $(this).animate({"width":"450px","height":"350px"},1000,function(){
              port__text6.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 999&&width >= 800){
            $(this).animate({"width":"500px","height":"380px"},1000,function(){
              port__text6.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width <= 1000&&width >= 1000){
            $(this).animate({"width":"700px","height":"500px"},1000,function(){
              port__text6.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }
          if (width >= 1000){
            $(this).animate({"width":"900px","height":"600px"},1000,function(){
              port__text6.css("display","flex");
              port__block.css("display","flex");
              port__block.css("justify-content","center");
              port__block.css("align-items","center");
              port__block.css("flex-direction","column");
            });
          }

                    port__back.on('click',function(){
                      port.css("display","block");
                      port6.css("display","none");
                      $(port6).animate({"width":"400px","height":"350px"},10,function(){
                        port__text6.css("display","none");
                        port__block.css("display","flex");
                        $("html, body").animate({scrollTop: $(".portfolio").offset().top}, 1000);
                        if(stav == 1){
                          port6.css("display","block");
                          port5.css("display","block");
                          port4.css("display","block");
                        }
                        else{
                          port6.css("display","none");
                          port5.css("display","none");
                          port4.css("display","none");
                          portfull.css("display","flex"); 
            
                        }
                        });
                    });
                  });

                });

      

