<template>
  <div class="q-pa-md">
    <q-toolbar>
      <q-toolbar-title>Criar nova tarefa</q-toolbar-title>
    </q-toolbar>
    <form @submit.prevent="onSubmit">
      <div class="q-gutter-md row items-start">
        <div class="col-12 q-pa-sm" >
          <q-input v-model="form.titulo" filled type="text" label="Titulo" />
        </div> 
        <div class="col-12 q-pa-sm">
          <q-input v-model="form.dataExpiracao" filled type="date" label="Data de término" />
        </div>

        <div class="col-12 q-pa-sm">
         <q-input v-model="form.descricao"  filled type="textarea" label="Descrição da tarefa" />
        </div>

      </div>

      <div class="q-pa-md q-gutter-sm">
        <q-btn color="primary" type="button" label="Novo" @click="novo" />
        <q-btn color="primary" type="submit" label="Salvar" />
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, defineProps, onUpdated } from 'vue';
import { api } from '@/boot/axios';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const props = defineProps({
  data: Object
  
});

console.log(props.data);
const form = ref(props.data);

const onSubmit = async () => {
  
    if(form.value.id == null ) {
      await api.post(`/api/tarefas`, form.value).then(() => {
        notificarSucesso('Tarefa criada com sucesso');
      }).catch(() => { 
        notificarErro('Erro ao criar tarefa'); 
      });
    }else {
      await api.put(`/api/tarefas/${form.value.id}`, form.value).then(()=> {
        notificarSucesso('Tarefa atualizada com sucesso');
      }).catch(() => { 
        notificarErro('Erro ao atualizar tarefa'); 
      });
    }
    novo();
}

onUpdated(() => {
  form.value = props.data;
});


const notificarSucesso = (mensagem) => {
  $q.notify({
    color: 'green-4',
    textColor: 'white',
    icon: 'cloud_done',
    message: mensagem
  });
};

const notificarErro = (mensagem) => {
  $q.notify({
    color: 'red-5',
    textColor: 'white',
    icon: 'warning',
    message: mensagem
  });
};

const novo = () => {
  form.value.id = null;
  form.value.titulo = null;
  form.value.descricao = null;
  form.value.dataExpiracao = null;
  form.value.status = false;
};
</script>
