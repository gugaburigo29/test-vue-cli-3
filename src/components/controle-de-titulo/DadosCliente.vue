<template>
  <b-card header="Dados Cliente"
          header-tag="header">
    <div class="card-text">
      <span>Nome: <strong>Lorem Ipsum</strong></span>
    </div>
    <div class="card-text">
      <span>Cpf: <strong>111.111.111-11</strong></span>
    </div>
    <div class="card-text">
      <span>Status: <strong>Excluido</strong></span>
    </div>
  </b-card>
</template>

<script>
    export default {
        name: "DadosCliente",
        props: {
            id: ''
        }
    }
</script>

<style scoped>

</style>
