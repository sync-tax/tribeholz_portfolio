<script setup>
defineProps({
    subTitle: String,
    projectTitle: String,
    projectTag: String,
    projectInfo: String,
    currentProjectView: String,
    imagePath: String
})
</script>

<template>
    <div class="projectContainer">
        <div class="projectLeftSection">
            <h4>{{ subTitle }}</h4>
            <h2>{{ projectTitle }}</h2>
            <div class="projectInfoContainer">
                <div class="projectTag">
                    <p>{{ projectTag }}</p>
                </div>
                <div class="projectInfo">
                    <p>{{ projectInfo }}</p>
                </div>
            </div>
            <RouterLink :to="currentProjectView" class="navLink">
                <p>View Project</p>
            </RouterLink>
        </div>
        <div class="projectRightSection">
            <img :src="imagePath" alt="Image of the current project card." width="500px">
        </div>
    </div>
</template>

<style scoped>

</style>
