<script lang="ts" src="./index.ts"></script>
<style lang="stylus" src="./style.styl"></style>

<template lang="pug">
a.CreateRef(
    href = href ? href : "#"
    ) {{ msg ? msg : "Create" }}
</template>