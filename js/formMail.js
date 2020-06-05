$("#sendMail").on("click", function() {
    var email = $("#email").val().trim();
    var name = $("#name").val().trim();
    var phone = $("#phone").val().trim();
    var message = $("#message").val().trim();

    if(email == "")
    {
        $(errorMess).text("Введите email");
        return false;
    } else if (name == "")
    {
        $(errorMess).text("Введите имя");
        return false;
    }
    else if (phone == "")
    {
        $(errorMess).text("Введите телефон");
        return false;
    }
    else if (message.length < 5)
    {
        $(errorMess).text("Введите сообщение не менее 5 символов");
        return false;
    }

    $(errorMess).text("");

    $.ajax({
        url: 'ajax/mail.php',
        type: 'POST',
        cache: false,
        data: { 'email': email, 'name': name, 'phone': phone, 'message': message },
        dataType: 'html',
        beforeSend: function()
        {
            $("#sendMail").prop("disabled", true);
        },
        success: function(data)
        {
            if(!data)
                alert("Произошла ошибка, сообщение не отправлено");
            else
                $("#mailForm").trigger("reset");

            $("#sendMail").prop("disabled", false);
        }
    })

});