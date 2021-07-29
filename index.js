$(document).ready(function(){
    $("body")
        .on("click", ".step",  step1)
        .on("click", ".step01", step2)
        .on("click", ".step02", step3)
        .on("click", ".step03", step4)
        .on("click", ".step04", step5)
        .on("click", ".step05", step6)
        .on("click", "img", drag);

    function step1(){
        $(this).addClass("active").prevAll().addClass("active");
        $(this).nextAll().removeClass("active");
    }
    function step2(){
        $("#line-progress").css("width", "3%");
        $(".discovery").addClass("active").siblings().removeClass("active");
    }
    function step3(){
        $("#line-progress").css("width", "25%");
        $(".strategy").addClass("active").siblings().removeClass("active");
    }
    function step4(){
        $("#line-progress").css("width", "50%");
        $(".creative").addClass("active").siblings().removeClass("active");
    }
    function step5(){
        $("#line-progress").css("width", "75%");
        $(".production").addClass("active").siblings().removeClass("active");
    }
    function step6(){
        $("#line-progress").css("width", "100%");
        $(".analysis").addClass("active").siblings().removeClass("active");
    }
    function drag(){
        $("img").draggable();
    }
}); 