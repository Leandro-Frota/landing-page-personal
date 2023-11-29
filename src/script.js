const changeThemeBtn = document.querySelector("#dark-mode");

var img = document.getElementById("profile_inf_personal_image");


changeThemeBtn.addEventListener("change", function() { // aciona o evento ao mudar o seletor checkbox
    document.body.classList.toggle("dark"); // procura a classe do body do documento, aciona o toggle que avalia a classList, se não tiver a
    // classe informada, ele add, se tiver, remove.
});


changeThemeBtn.addEventListener("change", function() { // aciona o evento ao mudar o seletor checkbox
    document.img.setAttribute('src','logo_avatar_dark.png');

});