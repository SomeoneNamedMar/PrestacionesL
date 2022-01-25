function nombre1() 
{
    //obteniendo el valor que se puso en el campo text del formulario
    nombre1= document.getElementById("nombre1").value;

    //la condición

    // if (caja1=="") 
    // {
    //   alert("Esta vacío")
    //   return false;
    // }

    // else 


    if (/^([0-9])*$/.test(nombre1))
    {
        alert("El valor " +  nombre1 + " no es una letra");
        document.getElementById("nombre1").focus();
        document.getElementById("nombre1").style.borderColor="red";
        return false; 
    }