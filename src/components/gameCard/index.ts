import { defineComponent } from 'vue';
import CreateButton from '@/components/createButton/view.vue';

export default defineComponent({
  name: 'GameCard',
  props: {
    title: String,
    info: String,
  },
  components: {
    CreateButton
  }
});