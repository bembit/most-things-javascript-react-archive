<script lang="ts">

    import { auth } from "$lib/firebase";

    import { user } from "$lib/firebase";

    import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

    // async function signInWithGoogle() {
    //     const provider = new GoogleAuthProvider();
    //     // added custom param to always allow to select account
    //     provider.setCustomParameters({ prompt: "select_account" });
    //     const user = await signInWithPopup(auth, provider);
    //     console.log(user);
    // }

    async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    // added custom param to always allow to select account
    provider.setCustomParameters({ prompt: "select_account" });

    const credential = await signInWithPopup(auth, provider);

    const idToken = await credential.user.getIdToken();

    const res = await fetch("/api/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'CSRF-Token': csrfToken  // HANDLED by sveltekit automatically
        },
        body: JSON.stringify({ idToken }),
    });
  }

    async function signOutSSR() {
        const res = await fetch("/api/signin", { method: "DELETE" });
        // this triggers an error
        // +page.svelte:40     POST https://firestore.googleapis.com/google.firestore.v1.Firestore/Listen/channel?VER=8&database=projects%2Fsveltekit-app-fkit%2Fdatabases%2F(default)&gsessionid=iDB4KDqABn8w3rcD7ZjekLsr1sngkhT5bqQue0h7zMU&SID=8wJIuxJJqCD9BsWAOpyrkw&RID=66882&TYPE=terminate&zx=i1k7lcdqtf4p net::ERR_BLOCKED_BY_CLIENT
        await signOut(auth);
    }

</script>

<h2>Sign in</h2>

{#if $user}

    <h2 class="card-title">You are already logged in as: {$user.displayName}, {$user.email}</h2>
    <button class="btn btn-secondary" on:click={signOutSSR}>Sign out</button>
    <!-- <button class="btn btn-danger" on:click={() => signOut(auth)}>Sign out</button> -->
    <p>or go and</p>
    <a href="/login/username" class="btn btn-primary">Choose username</a>

{:else}

<!-- signinwithgoogle will remember the last google account and autosign in -->
<!-- this should be ok, except if I delib logout, maybe to change users -->
<button class="btn btn-primary" on:click={signInWithGoogle}>Sign in with Google</button>
<!-- <button disabled class="btn btn-secondary" on:click={signInWithGoogle}>Sign in with Facebook</button> -->

{/if}