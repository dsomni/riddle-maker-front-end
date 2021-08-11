import { defineComponent } from 'vue';
import GameCard from '@/components/gameCard/view.vue';
import Header from '@/components/header/view.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    GameCard
  },
});