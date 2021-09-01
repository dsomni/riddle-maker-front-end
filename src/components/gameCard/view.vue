<script lang="ts" src="./index.ts"></script>
<style lang="stylus" src="./style.styl"></style>

<template lang="pug">
.gameCardWrapper
  .Card
    .TextSide
      .CardTitle {{ title }}
      .CardInfo {{ info }}
    .ImgSide
      img(
        :src = "imgURL"
        )
    .CreateRefContainer
      CreateRef(
        :url = "pageURL"
      )
</template>