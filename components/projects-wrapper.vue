<template>
  <ProjectCard :index="0" :progress="progress" video="1" />
  <ProjectCard :index="1" :progress="progress" video="2" />
  <ProjectCard :index="2" :progress="progress" video="3" />
  <ProjectCard :index="3" :progress="progress" video="4" />
</template>

<script lang="ts" setup>
defineProps<{ progress: number }>();
</script>
