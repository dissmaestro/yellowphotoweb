<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Button from 'primevue/button'
import { contacts } from '@/data'

const steps = [
  { n: '01', title: 'Заявка', text: 'Вы оставляете заявку и присылаете фото — на флешке, в облаке или прямо с телефона.' },
  { n: '02', title: 'Обработка', text: 'Делаю цветокоррекцию и ретушь, согласую результат с вами до печати.' },
  { n: '03', title: 'Изготовление', text: 'Печатаю на профессиональном оборудовании, собираю фотокниги и сувениры.' },
  { n: '04', title: 'Готово', text: 'Получаете готовые файлы или отпечатки — обычно уже через 24 часа.' },
]

const reasons = [
  { icon: 'pi pi-award', title: 'Опыт с 2015 года', text: 'Более 10 лет ретуши и обработки фотографий в Воронеже.' },
  { icon: 'pi pi-bolt', title: 'Быстро', text: 'Срочная обработка и печать — выручу, когда подарок нужен «на вчера».' },
  { icon: 'pi pi-heart', title: 'Вручную', text: 'Каждый кадр обрабатываю сам, а не «по шаблону».' },
  { icon: 'pi pi-shield', title: 'Бережно к данным', text: 'Ваши фото и контакты под защитой — работаю строго по ФЗ-152.' },
]

</script>

<template>
  <div class="route-view">
  <section class="page-hero">
    <div class="container">
      <span class="eyebrow">О студии</span>
      <h1>Студия обработки <span class="gold-text">MAGIC photo</span></h1>
      <p>
        Маленькая студия с большой любовью к деталям. Профессионально ретушируем,
        обрабатываем и улучшаем качество ваших фотографий — чтобы каждый кадр
        выглядел так, как вы его запомнили.
      </p>
    </div>
  </section>

  <!-- STORY -->
  <section class="section section--top">
    <div class="container story">
      <div class="story-art">
        <img src="https://picsum.photos/seed/magicabout/720/560" alt="Пример обработки фотографии" loading="lazy" />
      </div>
      <div class="story-text">
        <span class="eyebrow">Наша история</span>
        <h2>Обработка, которой хочется любоваться</h2>
        <p>
          MAGIC photo работает в Воронеже с 2015 года. Всё это время я обрабатываю
          фотографии — от семейных портретов до выцветших снимков из старых
          альбомов, и каждый заказ для меня по-прежнему особенный.
        </p>
        <p>
          Я верю: хорошая обработка не «перерисовывает» человека, а раскрывает кадр.
          Поэтому ретуширую аккуратно и вручную — от тона кожи до цвета и резкости,
          чтобы результат остался с вами надолго.
        </p>
        <RouterLink to="/prices">
          <Button label="Перейти к заказу" icon="pi pi-arrow-right" iconPos="right" />
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- WHY US -->
  <section class="section why-section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Почему мы</span>
        <h2>За что нас любят</h2>
        <div class="divider-dot" />
      </div>
      <div class="reasons">
        <article v-for="r in reasons" :key="r.title" class="reason">
          <i :class="r.icon" />
          <h3>{{ r.title }}</h3>
          <p>{{ r.text }}</p>
        </article>
      </div>
    </div>
  </section>

  <!-- PROCESS -->
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Как мы работаем</span>
        <h2>Всего четыре шага</h2>
        <div class="divider-dot" />
      </div>
      <div class="steps">
        <article v-for="s in steps" :key="s.n" class="step">
          <span class="step-n gold-text">{{ s.n }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
        </article>
      </div>
    </div>
  </section>

  <!-- FOUNDER -->
  <section class="section founder-section">
    <div class="container founder">
      <figure class="founder-photo">
        <img src="https://picsum.photos/seed/magicmaster/520/600" alt="Мастер студии MAGIC photo" loading="lazy" />
      </figure>
      <div class="founder-text">
        <span class="eyebrow">Кто делает магию</span>
        <h2>Один мастер — от заявки до готового кадра</h2>
        <p>
          MAGIC photo — это авторская студия. Здесь нет конвейера и «потока»: все
          фотографии обрабатываю я лично, поэтому отвечаю за результат и общаюсь
          с каждым клиентом напрямую.
        </p>
        <p class="founder-role">
          <i class="pi pi-sparkles" />
          Ретушёр и основатель студии MAGIC photo
        </p>
        <div class="founder-actions">
          <a :href="contacts.phoneHref">
            <Button label="Связаться со мной" icon="pi pi-phone" />
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACTS -->
  <section class="section contacts-section" id="contacts">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Контакты</span>
        <h2>Как нас найти</h2>
        <div class="divider-dot" />
      </div>

      <div class="contact-cards">
        <a :href="contacts.phoneHref" class="c-card">
          <i class="pi pi-phone" />
          <div>
            <span>Телефон</span>
            <strong>{{ contacts.phone }}</strong>
          </div>
        </a>
        <a :href="contacts.emailHref" class="c-card">
          <i class="pi pi-envelope" />
          <div>
            <span>E-mail</span>
            <strong>{{ contacts.email }}</strong>
          </div>
        </a>
        <div class="c-card">
          <i class="pi pi-map-marker" />
          <div>
            <span>Адрес</span>
            <strong>{{ contacts.address }}</strong>
          </div>
        </div>
        <div class="c-card">
          <i class="pi pi-clock" />
          <div>
            <span>Режим работы</span>
            <strong>{{ contacts.hours }}</strong>
          </div>
        </div>
        <a :href="contacts.siteHref" target="_blank" rel="noopener" class="c-card">
          <i class="pi pi-globe" />
          <div>
            <span>Сайт</span>
            <strong>{{ contacts.site }}</strong>
          </div>
        </a>
      </div>

      <div class="contact-note">
        <i class="pi pi-send" />
        <span>
          Работаем онлайн по всей России — присылайте фотографии, а готовый
          результат пришлём в электронном виде или отправим в печать.
        </span>
      </div>
    </div>
  </section>
  </div>
</template>

<style scoped>
.page-hero {
  padding: 64px 0 8px;
  text-align: center;
}
.page-hero h1 {
  font-size: clamp(2.2rem, 4.5vw, 3.4rem);
  margin: 14px 0 16px;
}
.page-hero p {
  max-width: 640px;
  margin: 0 auto;
  color: var(--ink-soft);
}
.section--top {
  padding-top: 56px;
}

/* STORY */
.story {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}
.story-art img {
  width: 100%;
  border-radius: 22px;
  box-shadow: var(--shadow-soft);
  border: 6px solid #fff;
  aspect-ratio: 9 / 7;
  object-fit: cover;
}
.story-text h2 {
  font-size: 2.3rem;
  margin: 12px 0 16px;
}
.story-text p {
  color: var(--ink-soft);
  margin-bottom: 14px;
}
.story-text :deep(.p-button) {
  margin-top: 8px;
}

/* WHY */
.why-section {
  background: var(--cream-2);
}
.reasons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}
.reason {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 30px 24px;
  text-align: center;
  box-shadow: var(--shadow-card);
}
.reason i {
  font-size: 1.9rem;
  color: var(--gold-deep);
}
.reason h3 {
  font-size: 1.35rem;
  margin: 14px 0 8px;
}
.reason p {
  color: var(--ink-soft);
  font-size: 0.92rem;
}

/* STEPS */
.steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}
.step {
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 28px 24px;
  background: #fff;
  box-shadow: var(--shadow-card);
}
.step-n {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.6rem;
  font-weight: 700;
}
.step h3 {
  font-size: 1.35rem;
  margin: 6px 0 8px;
}
.step p {
  color: var(--ink-soft);
  font-size: 0.92rem;
}

/* FOUNDER */
.founder-section {
  background: var(--cream-2);
}
.founder {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 48px;
  align-items: center;
}
.founder-photo {
  margin: 0;
}
.founder-photo img {
  width: 100%;
  border-radius: 22px;
  aspect-ratio: 5 / 6;
  object-fit: cover;
  border: 6px solid #fff;
  box-shadow: var(--shadow-soft);
}
.founder-text h2 {
  font-size: 2.3rem;
  margin: 12px 0 16px;
}
.founder-text p {
  color: var(--ink-soft);
}
.founder-role {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 18px;
  font-weight: 600;
  color: var(--ink);
}
.founder-role i {
  color: var(--gold-deep);
}
.founder-actions {
  margin-top: 24px;
}

/* CONTACTS */
.contact-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  max-width: 820px;
  margin: 0 auto;
}
.c-card {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 16px 20px;
  box-shadow: var(--shadow-card);
  transition: transform 0.2s ease;
}
a.c-card:hover {
  transform: translateX(4px);
}
.c-card i {
  font-size: 1.3rem;
  color: #fff;
  background: var(--gold-gradient);
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}
.c-card span {
  display: block;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--ink-soft);
}
.c-card strong {
  font-size: 1.02rem;
}

.contact-note {
  display: flex;
  gap: 14px;
  align-items: center;
  max-width: 820px;
  margin: 22px auto 0;
  background: var(--cream-2);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 18px 22px;
  color: var(--ink-soft);
  font-size: 0.94rem;
}
.contact-note i {
  color: var(--gold-deep);
  font-size: 1.3rem;
}

@media (max-width: 980px) {
  .reasons,
  .steps {
    grid-template-columns: repeat(2, 1fr);
  }
  .story,
  .founder {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
@media (max-width: 560px) {
  .reasons,
  .steps,
  .contact-cards {
    grid-template-columns: 1fr;
  }
}
</style>
