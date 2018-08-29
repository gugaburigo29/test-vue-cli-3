<template>
  <div class="app">
    <HeaderApp/>
    <div class="app-body">
      <SidebarApp/>
      <main class="main">
        <router-view></router-view>
      </main>
    </div>
    <FooterApp/>
  </div>
</template>

<script>
    import HeaderApp from '@/includes/HeaderApp'
    import SidebarApp from '@/includes/SidebarApp'
    import FooterApp from '@/includes/FooterApp'

    export default {
        name: 'full',
        components: {
            HeaderApp,
            SidebarApp,
            FooterApp
        },
        mounted(){
            console.log(process.env)
        },
        data() {
            return {}
        },
        computed: {}
    }
</script>


<style lang="scss">
  // CoreUI Icons Set
  @import '~@coreui/icons/css/coreui-icons.min.css';
  /* Import Font Awesome Icons Set */
  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/scss/font-awesome.scss';
  /* Import Simple Line Icons Set */
  $simple-line-font-path: '~simple-line-icons/fonts/';
  @import '~simple-line-icons/scss/simple-line-icons.scss';
  /* Import Flag Icons Set */
  @import '~flag-icon-css/css/flag-icon.min.css';
  /* Import Bootstrap Vue Styles */
  @import '~bootstrap-vue/dist/bootstrap-vue.css';
  // Import Main styles for this application
  @import 'assets/scss/style';
</style>
