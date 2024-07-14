<template>

    <!-- header -->
            <header class="shadow-sm bg-slate-100">
                <nav class="container mx-auto p-4 flex justify-between border-b-2">
                    <NuxtLink class="font-bold" to="/">HOME</NuxtLink>
                    <p>LAYOUT / PRODUCTS . VUE</p>
                    <ul class="flex gap-4">
                        <li><NuxtLink to="/">Home</NuxtLink></li>
                        <li><NuxtLink to="/about">About</NuxtLink></li>
                        <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
                        <!-- client side render -->
                        <!-- set object prop fatal: true in [id].vue to handle client side errors -->
                        <li><NuxtLink to="/products/xyz" class="btn">Non existent product 404</NuxtLink></li>
                    </ul>
                </nav>
            </header>
        <!-- content -->
        <div class="container mx-auto p-4">
    
            <slot />
    
        </div>
    
        <footer class="container mx-auto p-4 flex justify-between border-t-2">
            <ul class="flex gap-4">
                FOOTER
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/products" class="btn">Products</NuxtLink></li>
            </ul>
        </footer>

    </template>
    
    <script setup>
    
    </script>
    
    <style scoped>
        .router-link-exact-active {
            background-color: #cf5894;
        }
    </style>