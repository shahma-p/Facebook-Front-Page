$(document).ready(function(){
    $("#singupform").validate({

        rules:{
            fname:{
                required:true,
                minlength:4
            }

        }
        
        
    })
})