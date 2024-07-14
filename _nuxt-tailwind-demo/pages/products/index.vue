<template>
    <div>
        <div class="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-5">
            <div v-for="item in products" v-bind:key="item.id">
                <ProductCard :item="item"/>
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    // fetch products
    const { data: products } = await useFetch('https://fakestoreapi.com/products')

    // global title override
    useHead({
        title: 'Products main',
        meta: [
            { name: 'description', content: 'Prods desc' }
        ]
    })

</script>

<style scoped>

</style>