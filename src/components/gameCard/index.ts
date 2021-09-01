import { defineComponent } from 'vue';
import CreateRef from '@/components/createRef/view.vue';

export default defineComponent({
  name: 'GameCard',
  props: {
    title: String,
    info: String,
    img_url: String,
    page_url: String
  },
  components: {
    CreateRef
  }
});