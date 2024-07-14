<template>
    <div class="flex flex-col justify-end card text-center">
        <img :src="item.image" alt="placeholder" class="thumb" />
        <p class="font-bold text-gray-500 m-4 truncate">{{ item.title }}</p>
        <p class="font-bold">$ {{ item.price }}</p>
        <NuxtLink :to="`/products/${item.id}`">
        <p class="btn m-4">View details</p>
    </NuxtLink>
    </div>

</template>

<script setup>
    const { product } = defineProps(['item'])
</script>

<style scoped>
    img {
        /* max-height: 250px; */
    }
</style>