<script lang="ts">

    import { user, userData } from "$lib/firebase";

    import "../app.css";

    // subscribe to store in root layout
    $user;
    $userData;

</script>

<!-- / landing -->

<div class="min-h-screen flex flex-col">

    <slot />

</div>
