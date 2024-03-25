<template>
    <q-dialog :model-value="show" persistent @update:model-value="show = $event">
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="primary" text-color="white" />
          <span class="q-ml-sm">Tem certeza que deseja excluir está tarefa?</span>
        </q-card-section>
  
        <q-card-actions align="right">
          <q-btn label="Cancelar" color="primary" @click="confirmarExclusao('cancelar')" v-close-popup  />
          <q-btn label="Excluir" color="primary" @click="confirmarExclusao('excluir')"  v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  
  const show = ref(false);
  const emits = defineEmits(['confirmar']);
  
  const confirmarExclusao = (opcao) => {
    show.value = false;
    emits('confirmar', opcao);
  };
  
  
  </script>
  