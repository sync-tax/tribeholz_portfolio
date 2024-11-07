<script setup>

</script>

<template>
    <div class="linkContainer">
        <a href="">YouTube</a>
        <a href="">Instagram</a>
        <a href="">Github</a>
        <a href="">Soundcloud</a>
        <a href="">TD Files</a>
        <a href="">DURCH</a>
    </div>
</template>

<style scoped>
    .linkContainer {
        display: flex;
        justify-content: space-around;
        flex-direction: column;

        height: 92vh;
        width: fit-content;
        margin: 20px auto;
        padding-top: 20px;
        padding-bottom: 50px;
    }

    a{
        font-family: "Anek Devanagari", sans-serif;
        font-style: expanded;
        font-weight: 600;
        font-size: xx-large;
        font-variation-settings:
        "wdth" 125;

        border: 1px solid lightgrey;
        border-radius: 15px;

        padding: 15px 180px 10px 180px;
        margin: 5px;

        text-align:  center;
        text-decoration: none;
        color:  white;
    }

    a:hover{
        background-color: white;
        color:#181818;
    }
</style>