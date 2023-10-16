<template>
  <view class="index">
    <View className="text-[#acc855] text-[100px]">Hello TailwindCSS!</View>
    <Counter />
  </view>
</template>

<script>
import './index.css'
import Counter from '../../components/Counter.vue'

export default {
  name: 'Index',
  components: {
    Counter
  }
}
</script>
