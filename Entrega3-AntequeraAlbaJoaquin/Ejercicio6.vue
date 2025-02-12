<script lang="ts" setup>
import { ref, computed } from 'vue';

    let num1 = ref<number>(0);
    let num2 = ref<number>(0);

    let suma = computed(() => num1.value + num2.value);
    let producto = computed(() => num1.value * num2.value);
    let diferencia = computed(() => num1.value - num2.value);


</script>

<template>
    <div>
        <div class="inputs">
        <input v-model="num1" type="number" placeholder="Primer número" />
        <input v-model="num2" type="number" placeholder="Segundo número" />
    </div>
    <div class="operaciones">
        <p>Suma = {{ suma }}</p>
        <p>Producto = {{ producto }}</p>
        <p>Diferencia = {{ diferencia }}</p>
    </div>
    </div>
</template>

<style lang="scss" scoped>

</style>