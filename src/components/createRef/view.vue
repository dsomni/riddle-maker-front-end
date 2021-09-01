<script lang="ts" src="./index.ts"></script>
<style lang="stylus" src="./style.styl"></style>

<template lang="pug">
a.CreateRef(
    :href = "'#/'+url"
    ) {{ msg ? msg : "Create" }}
</template>