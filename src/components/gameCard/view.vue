<script lang="ts" src="./index.ts"></script>
<style lang="stylus" src="./style.styl"></style>

<template lang="pug">
.Card(:class="{ left: isLeft }")
  .TextSide
    .CardTitle {{ title }}
    .CardInfo {{ info }}
  .ImgSide
    img(src="https://www.svgrepo.com/show/45383/sudoku.svg")
  .CreateButtonContainer
    CreateButton
</template>