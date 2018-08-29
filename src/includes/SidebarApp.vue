<template>
  <AppSidebar fixed>
    <SidebarHeader/>
    <SidebarForm/>
    <SidebarNav :navItems="nav"></SidebarNav>
    <SidebarFooter/>
  </AppSidebar>
</template>

<script>
    import {
        Sidebar as AppSidebar,
        SidebarFooter,
        SidebarForm,
        SidebarHeader,
        SidebarNav,
    } from '@coreui/vue'

    export default {
        name: "SidebarApp",
        components: {
            AppSidebar,
            SidebarFooter,
            SidebarForm,
            SidebarHeader,
            SidebarNav,
        },
        data: () => {
            return {
                nav: [
                    {name: 'Pagina Inicial', url: '/', icon: 'icon-home'},
                    {name: 'Controle de Titulo', url: '/controle-de-titulo', icon: 'icon-wallet'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>
