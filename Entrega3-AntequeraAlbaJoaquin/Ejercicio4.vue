<script lang="ts" setup>
import { onMounted, onUnmounted, ref} from 'vue';
    let displayHour = ref("");
    function getHour(){
        let tiempo: Date = new Date();
        let horas = tiempo.getHours();
        let minutos = tiempo.getMinutes();
        let segundos = tiempo.getSeconds();

        let msj = `${horas}:${minutos}:${segundos}`;
        displayHour.value = msj;
        console.log(msj)
        return displayHour;
    }
    let intervalId: any;

    onMounted(() =>{
        intervalId = setInterval(getHour, 1000);
    });
    
    onUnmounted(()=>{
        clearInterval(intervalId);
    });

    

</script>

<template>
    <div class="hora">
        <p> La hora actual es: {{getHour()}}</p>
    </div>
</template>