<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import logo from '@/assets/logo.png'

const route = useRoute()
const mobileOpen = ref(false)

const nav = [
  { label: 'Главная', to: '/' },
  { label: 'Прайс и заказ', to: '/prices' },
  { label: 'О студии', to: '/about' },
]

function close() {
  mobileOpen.value = false
}
</script>

<template>
  <header class="hdr">
    <div class="container hdr-inner">
      <RouterLink to="/" class="brand" @click="close">
        <img :src="logo" alt="MAGIC photo" />
      </RouterLink>

      <nav class="nav" :class="{ open: mobileOpen }">
        <RouterLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          :class="{ active: route.path === item.to }"
          @click="close"
        >
          {{ item.label }}
        </RouterLink>
        <RouterLink to="/prices" class="nav-cta" @click="close">
          Заказать
        </RouterLink>
      </nav>

      <button
        class="burger"
        :aria-expanded="mobileOpen"
        aria-label="Меню"
        @click="mobileOpen = !mobileOpen"
      >
        <i :class="mobileOpen ? 'pi pi-times' : 'pi pi-bars'" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.hdr {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(250, 247, 240, 0.82);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);
}

.hdr-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 78px;
}

.brand img {
  height: 46px;
  width: auto;
}

.nav {
  display: flex;
  align-items: center;
  gap: 34px;
}

.nav-link {
  font-weight: 600;
  font-size: 0.98rem;
  color: var(--ink-soft);
  position: relative;
  padding: 6px 0;
  transition: color 0.2s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  background: var(--gold-gradient);
  transition: width 0.25s ease;
}

.nav-link:hover,
.nav-link.active {
  color: var(--ink);
}

.nav-link.active::after,
.nav-link:hover::after {
  width: 100%;
}

.nav-cta {
  font-weight: 700;
  color: var(--ink);
  background: var(--gold-gradient);
  padding: 11px 26px;
  border-radius: 999px;
  box-shadow: var(--shadow-card);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 30px -14px rgba(138, 101, 25, 0.6);
}

.burger {
  display: none;
  border: 1px solid var(--line);
  background: #fff;
  border-radius: 12px;
  width: 46px;
  height: 46px;
  font-size: 1.3rem;
  color: var(--ink);
  cursor: pointer;
}

@media (max-width: 860px) {
  .burger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .nav {
    position: absolute;
    top: 78px;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 8px;
    background: var(--cream);
    border-bottom: 1px solid var(--line);
    padding: 18px 24px 26px;
    align-items: stretch;
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.25s ease, opacity 0.25s ease;
  }

  .nav.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
    box-shadow: var(--shadow-soft);
  }

  .nav-cta {
    text-align: center;
    margin-top: 6px;
  }
}
</style>
