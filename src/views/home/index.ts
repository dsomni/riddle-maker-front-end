import { defineComponent } from 'vue';
import Header from '@/components/header/view.vue';
import GameCard from '@/components/gameCard/view.vue';
import GameCardsList from '@/components/gameCardsList/view.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Header,
    GameCardsList,
    GameCard
  },
  computed: {
    getCardsList(){
      return [
        {
          title: "Curabitur arcu erat",
          info: "Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada.",
          imgURL: "https://www.svgrepo.com/show/45383/sudoku.svg",
          pageURL: "lol"
        },
        {
          title: "C",
          info: "Pellentegna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada.",
          imgURL: "https://www.svgrepo.com/show/45383/sudoku.svg",
          pageURL: "kek"
        },
        {
          title: "C",
          info: "porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada.",
          imgURL: "https://www.svgrepo.com/show/4057/calendar.svg",
          pageURL: "fff"
        },
      ];
    }
  },
  data() {
    return {
    };
  },
});