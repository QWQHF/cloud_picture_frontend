<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout>
        <GlobalSider class="sider" />
        <a-layout-content class="content">
          <router-view />
        </a-layout-content>
      </a-layout>
      <a-layout-footer class="footer">
        <a href="https://github.com/QWQHF" target="_blank">
          QWQHF
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'
import { defineComponent } from 'vue'
import GlobalSider from '@/components/GlobalSider.vue'

export default defineComponent({
  components: { GlobalSider, GlobalHeader },
})
</script>

<style scoped>
#basicLayout .header {
  padding-inline: 20px;
  background: white;
  color: unset;
  margin-bottom: 1px;
}

#basicLayout .content {
  background: white;
  padding: 28px;
}

#basicLayout .sider {
  background: #fff;
  padding-top: 20px;
  border-right: 0.5px solid #eee;
}

#basicLayout :deep(.ant-menu-root) {
  border-bottom: none !important;
  border-inline-end: none !important;
}

#basicLayout .footer {
  background: #efefef;
  padding: 10px;
  bottom: 0;
  position: fixed;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
