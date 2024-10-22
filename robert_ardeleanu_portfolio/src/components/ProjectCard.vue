<script setup>
//Implement Icon Logic (switch between dark & lightmode css on click)
//Implemet Vue Routing
</script>

<template>
    <div class="projectContainer">
        <div class="projectLeftSection">
            <h4>{{ subTitle }}</h4>
            <h2>{{ projectTitle }}</h2>
            <div class="projectTagsContainer">
                
            </div>
            <a href="{{ currentProjectView }}"><button>View Project</button></a>
        </div>
        <div class="projectRightSection">
            <img src="#" alt="Image of the current project card.">
        </div>
    </div>
</template>

<style scoped>

</style>
