<template>
  <div id="mySpace">
    <p>正在跳转，请稍后...</p>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useLoginUserStore } from '@/stores/useLoginUserStore'
import { listSpaceVoByPageUsingPost } from '@/api/spaceController'
import { message } from 'ant-design-vue'
import { onMounted } from 'vue'

const router = useRouter()
const loginUserStore = useLoginUserStore()
// 检查用户是否有个人空间
const checkUserSpace = async () => {
  const loginUser = loginUserStore.loginUser
  if (!loginUser?.id) {
    router.replace('/user/login');
    return
  }
  // 获取用户空间信息
  const res = await listSpaceVoByPageUsingPost({
    userId: loginUser.id,
    current: 1,
    pageSize: 1,
  })
  if (res.data.code === 0) {
    const records = res.data.data?.records??[]
    if (records.length > 0){
      const space = records[0]
      await router.replace(`/space/${space.id}`);
    }else {
      router.replace('/add_space');
      message.warn('请先创建空间');
    }
  }else {
    message.error('加载我的空间失败，' + res.data.message);
  }
}

// 在页面加载时检查用户空间
onMounted(() => {
  checkUserSpace()
})
</script>

<style scoped>

</style>
