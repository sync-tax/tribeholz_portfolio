<script setup>
//Implement Icon Logic (switch between dark & lightmode css on click)
//Implemet Vue Routing
</script>

<template>
    <nav class="projectNav">
        <li id="listTitle">FILTER:</li>
        <li id="activeFilter">#NewMediaArt</li>
        <li>#WebDevelopment</li>
        <li>#PrintDesign</li>
        <li>#Screenprints</li>
        <li>#Sound</li>
        <li>#Tutorials</li>
    </nav>
    <div class="projectListContainer">
        
    </div>
</template>

<style scoped>
    .projectNav{
        border: 1px solid white;

        display: flex;
        justify-content: left;

        padding: 10px 0;
    }

    li{
        cursor: pointer;

        margin-right: 20px;
        padding: 5px 20px;

        border-radius: 25px;
        background-color: #313131;

        list-style: none;
        text-align:  center;
        color:  white;
    }

    li:hover{
        color: #181818;
        background-color: white;
        opacity: 80%;
    }

    #listTitle {
        border-radius: 0px;
        background-color: #181818;
    }

    #activeFilter{
        color: #181818;
        background-color: white;
        opacity: 80%;
    }

</style>
