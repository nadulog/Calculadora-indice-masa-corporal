let calculador = () => {
    let peso = document.getElementById("peso").value;
    let estatura = document.getElementById("estatura").value;

    let resultado = Math.round(peso / Math.pow(estatura, 2));

    if (resultado < 18.5) {
        alert("Su nivel de peso es BAJO PESO.");
    } else if (resultado >= 18.5 && resultado <= 24.9) {
        alert("Su nivel de peso es NORMAL/SALUDABLE.");
    } else if (resultado >= 25.0 && resultado <= 29.9) {
        alert("Su nivel de peso es SOBREPESO.");
    } else {
        alert("Su nivel de peso es OBESIDAD.");
    }
};

boton.addEventListenner("click", calculador);
