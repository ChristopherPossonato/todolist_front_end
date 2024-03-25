<template>
  
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-toolbar-title>
          To-Do List
        </q-toolbar-title>
        <q-icon name="notifications" size="27px" class="cursor-pointer" @click="exibirNotificacoes" />
      </q-toolbar>
    </q-header>

   <main style="padding-top: 100px;">
    <FormTarefas :data="formData"/>

    <ListTarefasView @edit="editarTarefa"/>
   </main>
    
  </q-layout>
</template>

<script setup>
import ListTarefasView from './views/tarefas/ListTarefasView.vue';
import FormTarefas from './components/FormTarefas.vue';

import { ref } from 'vue';

const formData = ref({
  id: null,
  titulo: null,
  descricao: null,
  dataExpiracao: null,
  status: false
});

const exibirNotificacoes = () => {
 
};

const editarTarefa = (tarefa) => {
 formData.value = tarefa;
};
</script>

