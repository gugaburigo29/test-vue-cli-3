<template>
  <div>

    <!-- Título da pagina -->
    <TituloPagina titulo="Controle de titulo"/>

    <!-- Conteudo da pagina -->
    <b-container fluid class="conteudo-pagina">
      <b-row>
        <b-col cols="4">
          <DadosCliente :id="idMensalidade"/>
        </b-col>
        <b-col cols="4">
          <DadosTitulo :id="idMensalidade"/>
        </b-col>
        <b-col cols="4">
          <LogDeAcoes :id="idMensalidade"/>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
    import DadosCliente from './DadosCliente'
    import DadosTitulo from "./DadosTitulo"
    import LogDeAcoes from "./LogDeAcoes";
    import TituloPagina from "../../includes/TituloPaginas";

    export default {
        name: "ControleDeTitulo",
        components: {TituloPagina, LogDeAcoes, DadosTitulo, DadosCliente},
        data() {
            return {
                idMensalidade: '',
                cliente: {},
                cobranca: {}
            }
        },
        created: function () {
            this.idMensalidade = this.$route.params.id
        }
    }
</script>

<style scoped>

</style>
