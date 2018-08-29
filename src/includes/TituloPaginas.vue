<template>
  <div class="titulo-pagina bg-light border-bottom">
    <b-container fluid>
      <h2 class="h4 font-weight-light">{{titulo}}</h2>
    </b-container>
  </div>
</template>

<script>
    export default {
        name: "TituloPaginas",
        props: {
            titulo: String
        }
    }
</script>

<style scoped>

</style>
