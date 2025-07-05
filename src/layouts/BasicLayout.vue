<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://space.bilibili.com/149356204?spm_id_from=333.1007.0.0" target="_blank">
          hf
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { GlobalHeader },
})
</script>

<style scoped>
#basicLayout .header {
  padding-inline: 20px;
  background: #ffffff;
  color: unset;
  margin-bottom: 16px;
}

#basicLayout .content {
  padding: 20px;
  background: linear-gradient(to right, #fefefe, #ffffff);
  margin-bottom: 28px;
}

#basicLayout .footer {
  background: #efefef;
  padding: 20px;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
