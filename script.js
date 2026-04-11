// We are doing how to make the forms mandatory to fill according to it's required condtions using javascript
// for this project we already  did similar things with html attributes and css but we can use javascript jquery as well
console.log("hello world")
$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlenght:10},
            sname:{
                required:true,
                minlength:2,
                maxlength:10},
            emailId:{
                required:true,
                email:true
            },
            pass:{
                required:true,
                minlength:8
            },
            daySelect:{
                required:true
            },
            monthSelect:{
                required:true
            },
            yearSelect:{
                required:true
            },
            Gender:{
                required:true
            }
        },
        messages:{
            fname:{
                required:"Enter first name",
                minlength:"First name should contain atleast 4 characters"
            },
            sname:{
                required:"Enter last name",
                minlength:"Last name should contain atleast 2 characters"
            },
            emailId:{
                required:"Enter the email",
                email:"Please enter a vaild email address"
            },
            pass:{
                required:"You must enter a password",
                minlength:"Password has to contain atleast 8 characters"
            },
            daySelect:{
                required:"Select the day"
            },
            monthSelect:{
                required:"Select the month"
            },
            yearSelect:{
                required:"Select the year"
            },
            Gender:{
                required:"Please specify your gender"
            }
        }

    })
    $("#login-form").validate({
        rules:{
            loginMail:{
                required:true
            },
            loginPass:{
                required:true
            }
        },
        messages:{
            loginMail:{
                required:"Enter your registered email or phone number"
            },
            loginPass:{
                required:"You have to enter your password"
            }
        }
    })
})