let button= document.querySelector("#buscar");

function busqueda(){
    let b= document.getElementById("texBuscar").value;

    if(b === "52368795"){
        Swal.fire({
            title: 'Ana Catalina Arango Perez',
            color: '#1D1B45',
            text: 'Paciente de 65 años con CC No. 52368795 cuenta con una (1) dosis de Pfizer el 15/01/2022',
            imageUrl: 'https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2014/02/17/140217173806_iris_krasnow_224x280_iriskrasnow_nocredit.jpg',
            imageWidth: 200,
            imageHeight: 200,
            confirmButtonText: 'Consultar otro paciente',
            confirmButtonColor: '#c55110',
            imageAlt: 'Custom image',
            footer: '<a href="registroVacuna.html">¿Desea registrar la segunda dosis?</a>'
        })
    }

    else if(b === "1001235478"){
        Swal.fire({
            title: 'Jhon Arley Peralta Samos',
            color: '#1D1B45',
            text: 'Paciente de 85 años con CC No. 1001235478 cuenta con un (2) dosis de Moderna, la fecha de aplicación de las dosis AstraZeneca No. 1 es el 12/11/2021 y No. 2 el 12/02/2022.',
            imageUrl: 'https://s.libertaddigital.com/fotos/noticias/henry-allingham.jpg',
            imageWidth: 200,
            imageHeight: 200,
            confirmButtonText: 'Consultar otro paciente',
            confirmButtonColor: '#c55110',
            imageAlt: 'Custom image',
            footer: '<a href="registroVacuna.html">¿Desea registrar la tercera dosis?</a>'
        })
    }

    else if(b === "25413574"){
        Swal.fire({
            title: 'Danna Antonieta Saldarriaga',
            color: '#1D1B45',
            text: 'Paciente de 35 años con CC No. 25413574 tiene el esquema completo de vacunación, la fecha de aplicación de las dosis Novavax No. 1 es 18/11/2021 y la No. 2 el 31/02/2022 y la No. 3 el 11/05/2022.',
            imageUrl: 'https://static.abc.es/media/estilo/2016/11/26/ines-arrimadas-kPXB--510x287@abc.jpg',
            imageWidth: 200,
            imageHeight: 200,
            confirmButtonText: 'Consultar otro paciente',
            confirmButtonColor: '#c55110',
            imageAlt: 'Custom image',
        })
    }

    else if(b === "1007203506"){
        Swal.fire({
            title: 'Adrian Javier Sanchez',
            color: '#1D1B45',
            text: 'Paciente de 20 años con CC No. 1007203506 aun no tiene registro de vacunación.',
            imageUrl: 'https://media.istockphoto.com/photos/studio-portrait-of-an-attractive-20-year-old-man-in-a-black-tshirt-on-picture-id1164019418?b=1&k=20&m=1164019418&s=170667a&w=0&h=os_L9sP2Zd_jdfujylZCg8rDwcF1GcLxKFB6OsgTNxo=',
            imageWidth: 150,
            imageHeight: 200,
            confirmButtonText: 'Consultar otro paciente',
            confirmButtonColor: '#c55110',
            imageAlt: 'Custom image',
            footer: '<a href="registroVacuna.html">¿Desea registrar la primera dosis?</a>'
        })
    }
}