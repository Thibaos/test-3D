<template>
  <ProjectCard :index="1" :progress="progress" video="codeconf" />
  <ProjectCard :index="2" :progress="progress" video="experiment" />
  <ProjectCard :index="3" :progress="progress" video="onboarding" />
  <ProjectCard :index="4" :progress="progress" video="sefaclean" />
</template>

<script lang="ts" setup>
defineProps<{ progress: number }>();

function mapProgressToIndex(progress: number, index: number, total: number) {
  if (progress > index / total) return 1 - progress;
  return progress * (total / index);
}

const group = ref();
</script>
