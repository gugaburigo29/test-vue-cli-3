<template>
  <b-card header="Log de Ações"
          header-tag="header"
          no-body>
    <b-list-group flush>
      <b-list-group-item>
        <div class="usuario-log">
          Por Lorem Ipsum em 25/10/1998
        </div>
        Boleto Gerado
      </b-list-group-item>
      <b-list-group-item>
        <div class="usuario-log">
          Por Lorem Ipsum em 25/10/1998
        </div>
        Boleto Gerado
      </b-list-group-item>
      <b-list-group-item>
        <div class="usuario-log">
          Por Lorem Ipsum em 25/10/1998
        </div>
        Boleto Gerado
      </b-list-group-item>
    </b-list-group>
  </b-card>
</template>

<script>
    export default {
        name: "LogDeAcoes",
        props: {
            id: ''
        }
    }
</script>

<style scoped>

</style>
