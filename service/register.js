$(document).ready(function () {

    $("#registration").validate({
        rules: {
            name: "required",
            emailId: {
                required: true,
                email: true
            },
            mobno: {
                required: true,
                length: 10
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            name: "Please provide your name ",
            emailId: {
                required: "Enter your email address",
                email: "Enter a valid email address"
            },
            mobno: {
                length: "Enter 10 digit mobile number"
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

    $("#registerbtn").click(function () {
        registration();
        return false;
    })


    function registration() {
        console.info("Iside register")
        var name = $("#name").val();
        var email = $("#emailId").val();
        var mobileNumber = $("#mobno").val();
        var password = $("#password").val();

        var registerData = { "userName": name, "userEmail": email, "password": password, "userMobileNumber": mobileNumber };

        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "http://localhost:8081/user",
            data: JSON.stringify(registerData),
            dataType: 'json',
            success: function (response) {
                if (response.statusCode == 1) {
                    console.log(response);
                    alert(response.statusMessage);
                } else {
                    console.log(response);
                    alert(response.statusMessage);
                }
                console.log(response);
            },
            error: function (errorResponse) {
                alert(errorResponse);
                console.log(errorResponse);
            }
        })
        return false;
    }
})
// $(function() {
//     $("form[name='registration']").validate({
//         rules:{
//             name:"required",
//             emailId:{
//                 required:true,
//                 email:true
//             },
//             mobno:{
//                 required:true,
//                 length:10
//             },
//             password: {
//                 required: true,
//                 minlength: 5
//               }
//         },
//         messages:{
//             name : "Please provide your name ",
//             emailId: {
//                 required:"Enter your email address",
//                 email : "Enter a valid email address"
//             },
//             mobno:{
//                 length:"Enter 10 digit mobile number"
//             },
//             password:{
//                 required : "Enter the password",
//                 minlength : "Password must have minimun 5 character"
//             }
//         },
//         submitHandler: function (form) {
//             form.submit();
//         }
//     })
// })