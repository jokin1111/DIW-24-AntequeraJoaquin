<script lang="ts" setup>
import { ref, computed } from 'vue';

    let items = ref<{nombre: string}[]>([
        {nombre: "Manzana"},
        {nombre: "Melon"},
        {nombre: "Pera"},
        {nombre: "Platano"}
    ]);

    let filtro = ref<string>("");

    let itemsFiltrados = computed(() => {
        return items.value.filter(item => 
            item.nombre.toLowerCase().includes(filtro.value.toLowerCase())
        );
    });


</script>

<template>
    <div>
        <div class="inputs">
        <input v-model="filtro" type="text" placeholder="Filtrar items" />
    </div>
    <div class="productosFiltrados">
        <ul>
            <li v-for="item in itemsFiltrados" :key="item.nombre">{{ item.nombre }}</li>
        </ul>
    </div>
    </div>
</template>

<style lang="scss" scoped>

</style>