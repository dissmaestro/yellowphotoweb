<script setup lang="ts">
import { ref } from 'vue'
import logo from '@/assets/logo.png'
import { contacts } from '@/data'
import ConsentDialog from './ConsentDialog.vue'

const consentVisible = ref(false)
const year = new Date().getFullYear()
</script>

<template>
  <footer class="ftr">
    <div class="container ftr-grid">
      <div class="ftr-brand">
        <img :src="logo" alt="MAGIC photo" />
        <p>
          Студия ретуши и обработки фотографий: улучшаем качество, ретушируем,
          реставрируем и печатаем ваши снимки. Закажите онлайн — бережно храним
          ваши воспоминания.
        </p>
      </div>

      <div class="ftr-col">
        <h4>Навигация</h4>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/prices">Прайс и заказ</RouterLink>
        <RouterLink to="/about">О студии и контакты</RouterLink>
      </div>

      <div class="ftr-col">
        <h4>Контакты</h4>
        <span>{{ contacts.address }}</span>
        <span>{{ contacts.hours }}</span>
      </div>
    </div>

    <div class="container ftr-bottom">
      <span>© {{ year }} {{ contacts.studioName }}. {{ contacts.inn }}</span>
      <button class="link-btn" @click="consentVisible = true">
        Согласие на обработку персональных данных
      </button>
    </div>

    <ConsentDialog v-model:visible="consentVisible" />
  </footer>
</template>

<style scoped>
.ftr {
  background: var(--ink);
  color: rgba(255, 255, 255, 0.78);
  padding: 64px 0 28px;
  margin-top: 40px;
}

.ftr-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1.2fr;
  gap: 40px;
}

.ftr-brand img {
  height: 52px;
  filter: brightness(0) invert(1);
  opacity: 0.92;
  margin-bottom: 18px;
}

.ftr-brand p {
  max-width: 360px;
  font-size: 0.92rem;
  line-height: 1.7;
}

.ftr-col {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.ftr-col h4 {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  color: var(--gold-light);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.78rem;
  margin: 0 0 6px;
}

.ftr-col a,
.ftr-col span {
  font-size: 0.92rem;
  color: rgba(255, 255, 255, 0.75);
  transition: color 0.2s ease;
}

.ftr-col a:hover {
  color: var(--gold-light);
}

.ftr-bottom {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
  padding-top: 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 0.84rem;
  color: rgba(255, 255, 255, 0.55);
}

.link-btn {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  font-size: 0.84rem;
  font-family: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
  padding: 0;
}

.link-btn:hover {
  color: var(--gold-light);
}

@media (max-width: 768px) {
  .ftr-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
