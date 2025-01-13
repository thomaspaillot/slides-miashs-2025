<template>
  <div class="home-page">
    <h1>Sommaire</h1>
    <nav>
      <ul>
        <li>
          <RouterLink to="/courses/1">Cours #1 – 13 janvier 2025</RouterLink>
        </li>
        <li>
          <RouterLink to="/courses/2">Cours #2 – 16 janvier 2025</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.home-page {
  background-color: var(--r-background-color);
  padding: 40px;
  height: 100%;
}
</style>