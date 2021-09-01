import { defineComponent } from 'vue';
import Header from '@/components/header/view.vue';
import GameCard from '@/components/gameCard/view.vue';
import GameCardsList from '@/components/gameCardsList/view.vue';
import axios from 'axios';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    GameCardsList,
    GameCard
  },
  data() {
    return {
      cardsList: null
    };
  },
  mounted() {
    axios
      .get('http://localhost:3001/api/get_game_cards')
      .then(response => (this.cardsList = response.data.game_cards));
  },
});