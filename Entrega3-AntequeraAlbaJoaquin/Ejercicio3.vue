<script lang="ts" setup>
    interface Producto {
        id: number | null;
        nombre: string | null;
        precio: number | null;
    }

    function crearProductoParcial(producto: Partial<Producto>){
        if (producto.id == null){
            producto.id = Math.round(Math.random() * 1000);
        }

        if (producto.nombre == null || producto.nombre == ""){
            producto.nombre = "Unknown name";
        }

        if (producto.precio == null){
            producto.precio = Math.round(Math.random() * 1000);
        }

        return producto;
    }

    function obtenerProductosPorID(producto: Record<number, Producto>, id: number): Producto | null{
        return producto[id];
    }

    const productos: Record<number, Producto> = {
        1: { id: 2, nombre: "Dos", precio: 12 },
        2: { id: null, nombre: "", precio: null },
        3: { id: null, nombre: "", precio: null },
    };

    console.log(crearProductoParcial(productos[1]));
    console.log(crearProductoParcial(productos[2]));

    console.log(obtenerProductosPorID(productos, 2));
    
</script>