<script lang="ts" src="./index.ts"></script>
<style lang="stylus" src="./style.styl"></style>

<template lang="pug">
.gameCardsListWrapper
    GameCard(
        v-for = "(card, index) in cardsList"
        v-bind = "card"
        :class = "{ right : (index%2) }"
      )
</template>