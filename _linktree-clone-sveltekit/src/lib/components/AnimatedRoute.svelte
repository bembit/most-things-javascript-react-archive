<script>
    import { fly } from "svelte/transition";
    import { page } from "$app/stores";
</script>

{#key $page.url}
    <div in:fly={{ x: "-100%", duration: 650 }}>
        <slot />
    </div>
{/key}