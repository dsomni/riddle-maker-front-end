import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import GameCard from '@/components/gameCard/view.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
    GameCard
  },
});