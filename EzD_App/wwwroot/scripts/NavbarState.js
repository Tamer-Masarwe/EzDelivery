// This function will show or hide the 'Deliveries' option
// depends if the user is a delivery-guy or not.
function NavbarState() {

    $.ajax({
        dataType: "json",
        url: "/api/User/NavbarState",
        contentType: "application/json",
        type: "POST",
        success: function (data) {
            if (data) {
                document.getElementById("deliveries").style.display = "block";
            }
            else {
                if (document.getElementById("deliveries"))
                    document.getElementById("deliveries").style.display = "none";
            }
        },
        error:
            function (err) {
                console.log("in error");
                console.log(err);
            }
    });
}

// This function will get the email of the logged in user
// and will change it in the navbar.
function GetEmail() {

    $.ajax({
        dataType: "json",
        url: "/api/User/GetEmailForNavbar",
        contentType: "application/json",
        type: "POST",
        success: function (data) {
            if (data == false) {
                document.getElementById("profileName").innerHTML = "My Profile";
            }
            else if( data != null){
                document.getElementById("profileName").innerHTML = data;
            }
        },
        error:
            function (err) {
                console.log("in error");
                console.log(err);
            }
    });
}
