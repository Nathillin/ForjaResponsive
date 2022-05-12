let boton= document.querySelector("#entrada");

function ingresar(){
    console.log("entre");
    let c= document.getElementById("user").value;
    let u= document.getElementById("password").value;

    if (c =="Admin" && u == "Kuepa2022"){
        window.location="dashboard.html";
    }

    if(c !="Admin" && u != "Kuepa2022"){
        Swal.fire({
            title: 'Credenciales incorrectas',
            confirmButtonColor: '#c55110',
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
    else{
        Swal.fire({
            title: '',
            confirmButtonColor: '#c55110',
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
}