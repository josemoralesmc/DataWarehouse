// Login


const buttonIngresar = document.getElementById('buttonIngresar');
console.log(buttonIngresar);
buttonIngresar.addEventListener('click', Ingresar)
  
console.log(contrasena);
    
async function Ingresar(e) {
    e.preventDefault();
   const Usuario = document.getElementById('Usuario').value;
   const contrasena = document.getElementById('contrasena').value;
   
    const data = {
        "nombre_usuario": Usuario,
        "contrasena": contrasena
    }
    
    console.log(data);

    const response = await fetch("/api/login", {
        method: 'POST',
        headers: {

            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(data)
    })
    const res = await response.json();
    console.log(response);
     if (response.ok) {
        localStorage.setItem("Token", JSON.stringify(res));
       window.location.href = "index.html";
        
    } else {
       alert("Usuario y/o contraseña incorrecta")
    } 

}