import { createRouter, createWebHashHistory } from 'vue-router';
import FormTarefas from '@/components/FormTarefas.vue';

const routes = [
  {
    path: '/nova-tarefa',
    component: FormTarefas
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
