<script setup>
defineProps({
    subTitle: String,
    projectTitle: String,
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
                <div class="projectTags">

                </div>
                <div class="projectInfo">
                    
                </div>
            </div>
            <a href="{{ currentProjectView }}">View Project</a>
        </div>
        <div class="projectRightSection">
            <img src="{{ imagePath }}" alt="Image of the current project card.">
        </div>
    </div>
</template>

<style scoped>

</style>
