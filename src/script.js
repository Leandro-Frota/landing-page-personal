const changeThemeBtn = document.querySelector("#dark-mode");

changeThemeBtn.addEventListener("change", function() { // aciona o evento ao mudar o seletor checkbox
    document.body.classList.toggle("dark"); // procura a classe do body do documento, aciona o toggle que avalia a classList, se não tiver a
    // classe informada, ele add, se tiver, remove.
});


// let img = document.getElementById("profile_inf_personal_image");

// changeThemeBtn.addEventListener("check", function() { // aciona o evento ao mudar o seletor checkbox
//    if(body.classList.match("dark")){
//     img.src="assets/logo_avatar_dark.png";
//    }else{
//     img.src="assets/logo_avatar_ligth.png";
//    }

// });





