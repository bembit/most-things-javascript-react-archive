<template>
    <div>
        <Head>
            <Title>Products | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <ProductDetails :product="product" />
    </div>
</template>

<script setup>
    const { id } = useRoute().params;

    const uri = 'https://fakestoreapi.com/products/' + id;

    const { data: product } = await useFetch(uri, {key: id});

    // this will be passed as error prop to error.vue
    // fatal: true will make sure that the error is handled on client side
    // also completely fucks the client side until manual refresh
    if(!product.value) {
        throw createError({ statusCode: 404, statusMessage: 'Product not found.', fatal: true})
    }

    definePageMeta({
        layout: 'products'
    });

</script>

<style scoped>

</style>