<script lang="ts" setup>
    interface Persona {
        nombre: string;
        edad: number;
    }

    let identificadorNumber: string | number = 1234;
    let identificadorString: string | number = "1234";  

    function obtenerSaludo(persona: Persona){
        return "Hola " + persona.nombre +  "\ntu edad es: " +  persona.edad;
    }

    let persona: Persona = {
        nombre: "Joaquin",
        edad: 22
    }
    

    console.log(obtenerSaludo(persona))
    console.log("Identificador númerico: " + identificadorNumber + " " + typeof(identificadorNumber));
    console.log("Identificador string: " + identificadorString + " " + typeof(identificadorString));
    
</script>