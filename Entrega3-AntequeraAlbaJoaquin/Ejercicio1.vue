<script lang="ts" setup>
import {ref} from 'vue';

    function calcularAreaRectangulo(height: number, width: number): number {
        return height*width;
    }

    function imprimirArea(area: number): void{
        console.log("El área es: " + area)
    }

    imprimirArea(calcularAreaRectangulo(5, 2));

</script>

<template>
    <div>
        
    </div>
</template>

<style lang="scss" scoped>
</style>