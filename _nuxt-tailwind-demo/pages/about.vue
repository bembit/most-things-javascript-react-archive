<template>
    <div>
        {{ data }}
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/test?route=api/test.js', {
        method: 'post',
        body: {
            code: 1,
            text: 'it works'
        }
    })
</script>

<style scoped>

</style>