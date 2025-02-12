<script lang="ts" setup>
import { ref, computed, onMounted, watch } from 'vue';

    let nota = ref<string>("");
    
    onMounted(()=> {
        let miNota = localStorage.getItem("miNota");
        if (miNota) {
            nota.value = miNota;
        }
    });

    watch(nota, (newValue) => {
        localStorage.setItem('miNota', newValue);
    });

</script>

<template>
    <div>
        <div>
            <textarea v-model="nota" type="text" placeholder="Introduce una nota" />
        </div>
        <div class="productosFiltrados">
            <p>Nota: {{ nota }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>