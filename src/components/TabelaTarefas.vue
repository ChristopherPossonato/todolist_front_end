<template>
  <div class="q-pa-md">
    <q-table
      :rows="dadosTarefas"
      :columns="columns"
      :visible-columns="visibleColumns"
      row-key="id"
    >
     
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td>
            <q-checkbox v-model="props.row.concluida" hide-label :true-value="true" />
          </q-td>
          <q-td>{{ props.row.titulo }}</q-td>
          <q-td>{{ props.row.dataExpiracao }}</q-td>
          <q-td auto-width>
            <q-btn @click="editarTarefa(props.row)" icon="edit" class="q-mr-xs" />
            <q-btn @click="excluirTarefa(props.row)" icon="delete" class="q-mr-xs" />
            <q-btn @click="exibirMaisInformacoes(props.row)" icon="info" />
          </q-td>
        </q-tr>
      </template>
    </q-table>

    <DialogConfirmDelete v-model="showConfirm" @confirmar="confirmarExclusao"></DialogConfirmDelete>
  </div>
</template>

<script setup>
import DialogConfirmDelete from '@/components/DialogConfirmDelete.vue';
import { ref } from 'vue';

// Definição das props
const props = defineProps({
  dadosTarefas: Array,
  editarTarefa: Function,
  excluirTarefa: Function,
  exibirMaisInformacoes: Function,
  getTarefas: Function 
});


const showConfirm = ref(false);


const columns = [
  { name: 'concluida', label: 'Status', align: 'left', headerStyle: 'font-weight: bold' },
  { name: 'titulo', label: 'Título', align: 'left', headerStyle: 'font-weight: bold' },
  { name: 'dataExpiracao', label: 'Data de Expiração', align: 'left', headerStyle: 'font-weight: bold' }
];
const visibleColumns = ref(['concluida', 'titulo', 'dataExpiracao']);
</script>
