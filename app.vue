<template>
  <div style="height: 100vh">
    <TresCanvas alpha clear-color="#123">
      <TresPerspectiveCamera :position="[0, 0, 2]" />
      <MouseParallax :factor="0.2" :ease="5" />
      <TresDirectionalLight
        :position="[0, 2, 4]"
        :intensity="1.2"
        cast-shadow
      />
      <ScrollControls v-model="progress" :pages="3" :smooth-scroll="0.01" />
      <Suspense>
        <ProjectsWrapper :progress="progress" />
      </Suspense>
    </TresCanvas>
  </div>
</template>

<script setup lang="ts">
const progress = ref(0);
</script>
