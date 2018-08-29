<template>
  <CoreUiHeader class="bg-primary" fixed>
    <SidebarToggler class="d-md-down-none text-white" display="lg"/>
    <SidebarToggler class="d-lg-none text-white" display="md" mobile/>
    <b-link class="navbar-brand" to="#">
      <b-navbar-brand tag="h1" class="mb-0">
        Engeplus
      </b-navbar-brand>
    </b-link>
    <b-navbar-nav class="d-md-down-none">

    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">

    </b-navbar-nav>
  </CoreUiHeader>
</template>

<script>
    import {Header as CoreUiHeader, SidebarToggler} from '@coreui/vue'

    export default {
        name: "HeaderApp",
        components: {
            CoreUiHeader,
            SidebarToggler
        }
    }
</script>

<style scoped>

</style>
