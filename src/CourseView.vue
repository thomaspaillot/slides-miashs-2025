<template>
  <RouterLink
    style="
      position: absolute;
      top: 8px;
      left: 8px;
      z-index: 3000;
      color: white;
      font-size: 0.4em;
    "
    to="/"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1"
      />
    </svg>
  </RouterLink>
  <div class="slides">
    <section
      :data-markdown="markdownFilePath"
      data-separator-vertical="------"
    ></section>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, computed, ref, watchEffect } from "vue";
import { onBeforeRouteLeave, useRoute, useRouter } from "vue-router";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";
import Notes from "reveal.js/plugin/notes/notes.esm.js";

const baseUrl = import.meta.env.BASE_URL;
const route = useRoute();
const router = useRouter();
const deck = ref(null);

const courseId = computed(() => route.params.id);
const markdownFilePath = computed(
  () => `${baseUrl}slides/course-${courseId.value}.md`
);

const initializeDeck = () => {
  if (deck.value) {
    deck.value.destroy();
  }

  deck.value = new Reveal({
    width: 1050,
    height: 700,
    margin: 0.1,
    hash: false,
    slideNumber: true,
    center: false,
    plugins: [Markdown, Highlight, Notes],
  });

  // Sync Reveal.js state with router
  deck.value.addEventListener("slidechanged", (event) => {
    const h = event.indexh;
    const v = event.indexv;
    const slide = v > 0 ? `${h}/${v}` : `${h}`;
    router.replace(
      {
        path: `/courses/${courseId.value}`,
        hash: `#slide-${slide}`,
      },
      { replace: true }
    );
  });

  // Initialize to current slide if in URL
  deck.value.initialize().then(() => {
    const slideMatch = route.hash.match(/slide-(\d+)(?:\/(\d+))?/);
    if (slideMatch) {
      const h = parseInt(slideMatch[1]);
      const v = slideMatch[2] ? parseInt(slideMatch[2]) : 0;
      deck.value.slide(h, v);
    }
  });
};

watchEffect(() => {
  if (courseId.value) {
    // Small delay to ensure the DOM is updated with the new markdown path
    setTimeout(initializeDeck, 100);
  }
});

onBeforeRouteLeave(() => {
  deck.value?.destroy();
});
</script>
