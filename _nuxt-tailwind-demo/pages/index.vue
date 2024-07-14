<template>
    <h2>Landing / Featured</h2>
    <NuxtLink to="/products" class="btn flex justify-center mt-5 mb-5">View all products</NuxtLink>
    <div class="container bg-white">
        <div class="grid grid-cols-3 gap-5">
            <div v-for="item in products" v-bind:key="item.id">
                <ProductCard :item="item"/>
            </div>        
        </div>
        <NuxtLink to="/products" class="btn flex justify-center mt-5">View all products</NuxtLink>

    </div>
</template>

<script setup>
    const { data: products } = await useFetch('https://fakestoreapi.com/products?limit=3')
</script>

<style scoped>
    .btn{
        background-color: #cf5894;
        color: white;
        padding: 10px;
        border-radius: 5px;
    }
</style>