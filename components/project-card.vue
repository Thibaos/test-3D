<template>
  <TresMesh ref="mesh" :position="[0, -index * progress, -progress - index]">
    <TresPlaneGeometry :args="[1.6, 0.9]" />
    <TresMeshBasicMaterial :map="texture" />
  </TresMesh>
</template>

<script lang="ts" setup>
import type { TresInstance } from "@tresjs/core";

const props = defineProps<{
  index: number;
  progress: number;
  video: string;
}>();

const mesh = shallowRef<TresInstance | null>();

const exampleVideo = `projects/${props.video}.webm`;
const texture = ref();
texture.value = await useVideoTexture(exampleVideo);
</script>
