<script setup>
import Codetime from '@/components/Codetime.vue';
import Hitokoto from '@/components/Hitokoto.vue';
</script>

<template>
    <div class="new-codetime-hit">
        <div class="new-c-h-card">
            <Codetime />
        </div>
        <div class="new-c-h-card">
            <Hitokoto />
        </div>
    </div>
</template>

<style>
.new-c-h-card {
  padding: 10px;
  border-radius: 5px;
  background-color: var(--card-bg-color);
  /* box-shadow: 0 0 10px #dbdbdb; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.new-codetime-hit {
  margin: 5px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
}
</style>