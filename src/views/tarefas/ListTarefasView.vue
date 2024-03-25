<template>
  <div>
    <TabelaTarefas
      :dados-tarefas="dadosTarefas"
      :editar-tarefa="editarTarefa"
      :excluir-tarefa="excluirTarefa"
      :exibir-mais-informacoes="exibirMaisInformacoes"
      :getTarefas="getTarefas"
    />

    <DialogConfirmDelete v-model="showConfirm" @confirmar="confirmarExclusao"></DialogConfirmDelete>
  </div>
</template>

<script setup>
import TabelaTarefas from '@/components/TabelaTarefas.vue';
import DialogConfirmDelete from '@/components/DialogConfirmDelete.vue';
import { api } from '@/boot/axios';
import { useQuasar } from 'quasar';
import { ref, onMounted, defineEmits } from 'vue';

const $q = useQuasar();
const dadosTarefas = ref([]);
const showConfirm = ref(false);
const tarefaSelecionada = ref(null);
const idTarefa = ref(null);

const getTarefas = async () => {
  try {
    const response = await api.get('/api/tarefas');
    dadosTarefas.value = response.data;
  } catch (error) {
    console.log('Erro:', error);
  }
};

const excluirTarefa = async (tarefa) => {
  idTarefa.value = tarefa.id;
  tarefaSelecionada.value = tarefa;
  showConfirm.value = true;
};

const confirmarExclusao = async (opcao) => {
  if (opcao === 'excluir') {
    try {
      await api.delete('/api/tarefas/' + idTarefa.value);
      getTarefas();

      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: `Tarefa foi excluída com sucesso!`
      });
      
    } catch (error) {
      $q.notify({
        color: 'red-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: `Erro ao excluir! Erro: ${error}`
      });
    }
  }
};
const emits = defineEmits(['edit']);

const editarTarefa = (tarefa) => {
  emits('edit', tarefa);
};

const exibirMaisInformacoes = (tarefa) => {
};

onMounted(() => {
  getTarefas();
});
</script>
