<template>
<div class="d-flex flex-row fixed-top m-2 justify-content-between" id="navbar">
    <router-link :to="{name: 'homepage'}">
        <b-button variant="light" class="btn-circle" :class="{'btn-circle-dark' : darkMode}">
            <b-icon icon="chevron-compact-left" class="btn-icon"></b-icon>
        </b-button>
    </router-link>
    <div class="flex-fill ml-2 d-none"></div> 
    <router-link :to="{name: 'account'}">
        <b-button variant="light" class="btn-circle" :class="{'btn-circle-dark' : darkMode}">
            <b-icon icon="person-circle" class="btn-icon"></b-icon>
        </b-button>
    </router-link>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['darkMode'])
    },
}
</script>

<style scoped>
.btn-circle {
    background-color: #e9e9e9;
    width: 50px;
    height: 50px;
    padding: 8px 16px;
    border-radius: 35px;
    text-align: center;
    font-size: 18px;
    line-height: 1.33;
}

.btn-icon {
    margin-left: -4px;
}

#navbar {
    opacity: 0.5;
}

.btn-circle-dark {
    color: white;
    outline: none;
    background-color: #333 !important;
}

.btn-circle-dark:hover {
    color: white;
    opacity: 0.8;
}
</style>