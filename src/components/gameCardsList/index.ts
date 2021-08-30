import { defineComponent } from 'vue';
import GameCard from '@/components/gameCard/view.vue';

export default defineComponent({
  name: 'GameCardsList',
  props: {
    cardsList: Array,
  },
  components: {
    GameCard
  }
});