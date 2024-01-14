<template>
  <TresMesh
    ref="mesh"
    :position="[0, -index * progress, -progress - index]"
    @pointer-enter="scale = 1.1"
    @pointer-leave="scale = 1"
  >
    <TresPlaneGeometry :args="[1.6, 0.9]" />
    <TresMeshBasicMaterial :map="texture" />
  </TresMesh>
</template>

<script lang="ts" setup>
const props = defineProps<{
  index: number;
  progress: number;
  video: string;
}>();

const mesh = shallowRef();
const scale = ref(1);

const exampleVideo = `projects/${props.video}-compressed.webm`;
const texture = ref();
texture.value = await useVideoTexture(exampleVideo, { loop: true });

function lerp(a: number, b: number, alpha: number) {
  return a + alpha * (b - a);
}

const { onLoop } = useRenderLoop();

// onLoop(({ delta, elapsed }) => {
//   mesh.value.scale.x = lerp(mesh.value.scale.x, scale.value, 0.3);
//   mesh.value.scale.y = lerp(mesh.value.scale.y, scale.value, 0.3);
//   mesh.value.scale.z = lerp(mesh.value.scale.z, scale.value, 0.3);
// });
</script>
