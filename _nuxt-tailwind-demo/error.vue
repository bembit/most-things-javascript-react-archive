<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl">Ooops</p>
        <p class="mt-7">{{ error.message }}</p>
        <button class="btn my-7" @click="handleClearError">GO HOME!</button>
    </div>
</template>
<script setup>
    // also an error from [id].vue 
    defineProps(['error'])
    // clear the error after redirection with button? nuxt clearError google
    const handleClearError = () => clearError({ redirect: '/' })
</script>

<style scoped>

</style>