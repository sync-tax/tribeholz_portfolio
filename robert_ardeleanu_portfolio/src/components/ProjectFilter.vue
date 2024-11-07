<script setup>
//Implement Icon Logic (switch between dark & lightmode css on click)
//Implemet Vue Routing
</script>

<template>
    <nav class="projectNav">
        <li id="listTitle">Project Filter:</li>
        <li id="activeFilter">procedural_art</li>
        <li>coded_sound</li>
        <li>tech_tutorials</li>
        <li>web_development</li>
        <li>different_designs</li>
        <li>random_stuff</li>
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
        background-color: #1c1c1c;

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
        background-color: rgba(0, 0, 0, 0);

        font-size: large;
    }

    #activeFilter{
        color: #181818;
        background-color: white;
        opacity: 80%;
    }

</style>
