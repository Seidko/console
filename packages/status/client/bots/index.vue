<template>
  <k-status>
    <template #tooltip>
      <bot-preview v-for="(bot, key) in store.profile.bots" :key="key" :data="bot"></bot-preview>
    </template>
    <status-light v-for="(bot, key) in store.profile.bots" :key="key" :class="bot.status"></status-light>
    <k-icon name="arrow-up"/>
    <span>{{ sent }}/min</span>
    <k-icon name="arrow-down"/>
    <span>{{ received }}/min</span>
  </k-status>
</template>

<script setup lang="ts">

import { computed } from 'vue'
import { store } from '@koishijs/client'
import BotPreview from './preview.vue'
import StatusLight from './light.vue'

const sent = computed(() => {
  return Object.values(store.profile.bots).reduce((acc, bot) => acc + bot.messageSent, 0)
})

const received = computed(() => {
  return Object.values(store.profile.bots).reduce((acc, bot) => acc + bot.messageReceived, 0)
})

</script>

<style lang="scss" scoped>

.k-status {
  .k-icon {
    margin: 0 4px 0 6px;
    transform: translateY(2px);
  }

  .status-light {
    width: 0.625rem;
    height: 0.625rem;
  }

  .status-light + .status-light {
    margin-left: 4px;
  }
}

</style>
