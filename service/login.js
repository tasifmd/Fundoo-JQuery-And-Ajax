$(document).ready(function () {
    $("#loginform").validate({
        rules:{
            emailId:{
                required:true,
                email:true
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages:{
            emailId: {
                required: "Enter your email address",
                email: "Enter a valid email address"
            },
            password: {
                required: "Enter the password",
                minlength: "Password must have minimun 5 character"
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    })

    $("#loginbtn").click(function () {
        login();
        return false;
    })
    function login() {
        console.log("Inside Login");
        var email = $("#emailId").val();
        var password = $("#password").val();
        var loginData = { "userEmail": email, "password": password };

        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "http://localhost:8081/user/login",
            data: JSON.stringify(loginData),
            dataType: 'json',
            success: function (response) {
                if (response.statusCode == 1) {
                    console.log(response);
                    alert(response.statusMessage);
                    return false;
                } else {
                    console.log(response);
                    alert(response.statusMessage);
                    return false;
                }
            },
            error: function (errorResponse) {
                alert(errorResponse);
                console.log(errorResponse);
                return false;
            }
        })
        return false;
    }
})