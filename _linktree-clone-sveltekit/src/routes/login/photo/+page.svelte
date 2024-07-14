<script lang="ts">

    import AuthCheckMiddleware from "$lib/components/AuthCheckMiddleware.svelte";
    import { user, userData, storage, db } from "$lib/firebase";
    import { doc, updateDoc } from "firebase/firestore";
    import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

    let previewURL: string;
    let uploading = false;
    $: href = `/${$userData?.username}`;

    // set firebase storage rules to allow write if user is logged in
    async function upload(e: any) {
        uploading = true;
        const file = e.target.files[0];
        previewURL = URL.createObjectURL(file);

        const storageRef = ref(storage, `users/${$user.uid}/profile.png`);
        const result = await uploadBytes(storageRef, file);
        const url = await getDownloadURL(result.ref);

        await updateDoc(doc(db, "users", $user!.uid), { photoURL: url });
        uploading = false;
    }

</script>

<AuthCheckMiddleware>
    <h2>Upload a photo, or leave the google default</h2>

    <form class="">

        <div class="">
            <!-- from preview, aready saved, google base we fall back to a static img -->
            <!-- create a proper image preview div -->
            <div id="photoURL" class="w-48 h-48 mx-auto my-5 rounded-full" style="
            background-image: url({previewURL ?? $userData?.photoURL ?? $user.photoURL ?? "/user.png"});
            background-position: center center;
            background-size: 300px auto;
            width: 250px;
            height: 250px;
            "/>
            <label for="photoURL" class="label">
                <span class="">Supported files are: png, jpg, gif, avif</span>
            </label>
            <!-- rewrite this to button click upload -->
            <input 
                on:change={upload}
                name="photoURL"
                type="file"
                class=""
                accept="image/png, image/jpeg, image/gif, image/webp, image/avif"
            />
            {#if uploading}
                <p>Uploading...</p>
                <progress class="progress progress-info w-56 mt6" />
            {/if}

        </div>

    </form>

    <a {href} class="btn btn-primary mt-5">Finish</a>

</AuthCheckMiddleware>
