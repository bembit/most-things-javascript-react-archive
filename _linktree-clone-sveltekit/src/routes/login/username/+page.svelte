<script lang="ts">

    import AuthCheckMiddleware from "$lib/components/AuthCheckMiddleware.svelte";

    import { db, user, userData } from '$lib/firebase';
    import { doc, getDoc, writeBatch } from "firebase/firestore";

    let username = "";

    let isLoading = false;
    let isAvailable = false;

    let debounceTimer: NodeJS.Timeout;

    // input validation
    const re = /^(?=[a-zA-Z0-9._]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

    $: isValid = username?.length > 2 && username.length < 24 && re.test(username);
    $: isNotEmpty = username.length > 0;
    $: isTaken = isValid && !isAvailable && !isLoading
    // $: isBlank = username.length === 0;

    // check if username is available
    async function checkAvailability() {
        
        isAvailable = false;

        clearTimeout(debounceTimer);

        isLoading = true;
        // could be refactored and used for a later search users feature
        // debounce the search to .5sec
        debounceTimer = setTimeout(async () => {

            const docRef = doc(db, "usernames", username);
            const exists = await getDoc(docRef).then((doc) => doc.exists());

            isAvailable = !exists;
            isLoading = false;
            
        }, 500);

    }

    // write to db
    async function confirmUsername() {
        // atomic batch write, write together or fail together
        console.log("confirming username", username);
        const batchWrite = writeBatch(db);
        batchWrite.set(doc(db, "usernames", username), { uid: $user?.uid });
        batchWrite.set(doc(db, "users", $user?.uid), {
            username,
            photoURL: $user?.photoURL,
            published: true,
            bio: "placeholder bio",
            links: [
                { title: "twitter", url: "https://twitter.com", icon: "custom" },
            ],
        })
        
        await batchWrite.commit();

    }

</script>

<AuthCheckMiddleware>

  {#if $userData?.username}
  <!-- allow only lowercase -->
  <p class="text-primary">You already have a username @{ $userData.username }</p>
  <!-- later changable in profile -->
  <p>usernames can't be changed for now</p>
  <a class="btn btn-primary" href="/login/photo">Upload a profile photo</a>

	{:else}

  <h2>Choose your unique username</h2>
    <form class="w-2/5" on:submit|preventDefault={confirmUsername}>
        <!-- placeholder as google displayname || username -->
        <input type="text" placeholder={$user.displayName || "Username"} class="input w-full text-black"
            bind:value={username}
            on:input={checkAvailability}
            class:input-error={(!isValid && isNotEmpty)}
            class:input-warning={isTaken}
            class:input-success={isAvailable && isValid && !isLoading}
        />
        <!-- show isAvailable, isLoading states -->
        <div class="my-4 min-h-16 px-8 w-full">
            <!-- deleting back to zero doesnt remove loading -->
            <!-- does it need a reset to initial "" state? -->

            <!-- {#if isBlank}
                <p class="text-primary">type something</p>
            {/if} -->

            {#if isLoading}
              <p class="text-secondary">Checking availability of @{username}...</p>
            {/if}
        
            {#if !isValid && isNotEmpty}
              <p class="text-error text-sm">
                must be 3-24 characters long, alphanumeric only
              </p>
            {/if}
        
            {#if isValid && !isAvailable && !isLoading}
              <p class="text-warning text-sm">
                @{username} is not available
              </p>
            {/if}
        
            {#if isAvailable}
              <button class="btn btn-success">Confirm username @{username} </button>
            {/if}
          </div>
    </form>

	{/if}

</AuthCheckMiddleware>