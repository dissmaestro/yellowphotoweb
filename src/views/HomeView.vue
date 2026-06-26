<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Button from 'primevue/button'
import { services, priceList } from '@/data'

const ruble = new Intl.NumberFormat('ru-RU')

const featured = priceList.filter((p) =>
  ['p1015', 'digital', 'canvas', 'book'].includes(p.id),
)

const gallery = [
  { img: 'gallery-portrait.jpg', tall: true, label: 'Ретушь портрета' },
  { img: 'gallery-color.jpg', tall: false, label: 'Цветокоррекция' },
  { img: 'gallery-art.jpg', tall: false, label: 'Художественная обработка' },
  { img: 'gallery-quality.jpg', tall: true, label: 'Улучшение качества' },
  { img: 'gallery-restore.jpg', tall: false, label: 'Реставрация фото' },
  { img: 'gallery-before-after.jpg', tall: false, label: 'До и после' },
]

const stats = [
  { value: '2015', suffix: '', label: 'работаем с этого года' },
  { value: '40 000+', suffix: '', label: 'обработанных кадров' },
  { value: '10', suffix: 'дн', label: 'срок заказа + доставка' },
  { value: '4.9', suffix: '★', label: 'средняя оценка' },
]
</script>

<template>
  <div class="route-view">
  <!-- HERO -->
  <section class="hero">
    <div class="container hero-inner">
      <div class="hero-text">
        <span class="eyebrow">Ретушь и обработка фотографий · Воронеж</span>
        <h1>
          Превращаем ваши фото<br />в <span class="gold-text">магию</span> —
          ретушь, обработка, качество
        </h1>
        <p class="lead">
          Профессиональная ретушь, цветокоррекция, реставрация и улучшение качества
          ваших снимков. Пришлите кадры — мы доведём их до идеала и отдадим в
          электронном виде или напечатаем.
        </p>
        <div class="hero-actions">
          <RouterLink to="/prices">
            <Button label="Посмотреть прайс" icon="pi pi-arrow-right" iconPos="right" size="large" />
          </RouterLink>
          <RouterLink to="/about">
            <Button label="О студии" outlined size="large" />
          </RouterLink>
        </div>

        <div class="hero-trust">
          <i class="pi pi-verified" />
          <span>Ручная ретушь · естественный результат без «пластика»</span>
        </div>
      </div>

      <div class="hero-art">
        <div class="art-frame art-frame--main">
          <img src="/images/hero-main.jpg" alt="Пример работы студии" loading="eager" />
        </div>
        <div class="art-frame art-frame--small">
          <img src="/images/hero-small.jpg" alt="Пример работы студии" loading="lazy" />
        </div>
        <div class="art-badge">
          <strong>от 450 ₽</strong>
          <span>обработка фото</span>
        </div>
      </div>
    </div>
  </section>

  <!-- STATS -->
  <section class="stats">
    <div class="container stats-grid">
      <div v-for="s in stats" :key="s.label" class="stat">
        <div class="stat-value gold-text">
          {{ s.value }}<small>{{ s.suffix }}</small>
        </div>
        <div class="stat-label">{{ s.label }}</div>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Что мы делаем</span>
        <h2>Услуги студии</h2>
        <div class="divider-dot" />
        <p>Полный цикл — от обработки исходника до готового изделия в ваших руках.</p>
      </div>

      <div class="services-grid">
        <article v-for="srv in services" :key="srv.title" class="srv-card">
          <div class="srv-icon"><i :class="srv.icon" /></div>
          <h3>{{ srv.title }}</h3>
          <p>{{ srv.description }}</p>
        </article>
      </div>
    </div>
  </section>

  <!-- GALLERY -->
  <section class="section gallery-section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Портфолио</span>
        <h2>Наши работы</h2>
        <div class="divider-dot" />
        <p>Примеры ретуши, цветокоррекции и восстановления фотографий наших клиентов.</p>
      </div>

      <div class="gallery">
        <figure
          v-for="g in gallery"
          :key="g.img"
          class="gallery-item"
          :class="{ tall: g.tall }"
        >
          <img :src="`/images/${g.img}`" :alt="g.label" loading="lazy" />
          <figcaption>{{ g.label }}</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- PRICE PREVIEW -->
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Популярное</span>
        <h2>Цены, которые радуют</h2>
        <div class="divider-dot" />
        <p>Самое востребованное. Полный прайс — на странице заказа.</p>
      </div>

      <div class="price-preview">
        <div v-for="p in featured" :key="p.id" class="pp-card">
          <i :class="p.icon" />
          <h3>{{ p.name }}</h3>
          <span v-if="p.note" class="pp-note">{{ p.note }}</span>
          <div class="pp-price">{{ ruble.format(p.price) }} ₽<small>/ {{ p.unit }}</small></div>
        </div>
      </div>

      <div class="price-cta">
        <RouterLink to="/prices">
          <Button label="Весь прайс и оформить заказ" icon="pi pi-shopping-bag" size="large" />
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- CTA BAND -->
  <section class="cta-band">
    <div class="container cta-inner">
      <div>
        <h2>Готовы оживить ваши фотографии?</h2>
        <p>Оставьте заявку — рассчитаем стоимость и сделаем красиво. Обычно отвечаем в течение часа.</p>
      </div>
      <RouterLink to="/prices">
        <Button label="Оставить заявку" icon="pi pi-send" size="large" severity="contrast" />
      </RouterLink>
    </div>
  </section>
  </div>
</template>

<style scoped>
/* HERO */
.hero {
  padding: 70px 0 40px;
  overflow: hidden;
}
.hero-inner {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 56px;
  align-items: center;
}
.hero-text h1 {
  font-size: clamp(2.4rem, 5vw, 4rem);
  margin: 18px 0 22px;
}
.lead {
  color: var(--ink-soft);
  font-size: 1.12rem;
  max-width: 520px;
}
.hero-actions {
  display: flex;
  gap: 14px;
  margin: 34px 0 26px;
  flex-wrap: wrap;
}
.hero-trust {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--ink-soft);
  font-size: 0.92rem;
  font-weight: 500;
}
.hero-trust i {
  color: var(--gold-deep);
  font-size: 1.15rem;
}

.hero-art {
  position: relative;
  min-height: 460px;
}
.art-frame {
  border-radius: 22px;
  overflow: hidden;
  box-shadow: var(--shadow-soft);
  border: 6px solid #fff;
}
.art-frame--main {
  width: 78%;
  margin-left: auto;
  aspect-ratio: 4 / 5;
}
.art-frame--main img,
.art-frame--small img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.art-frame--small {
  position: absolute;
  bottom: -18px;
  left: 0;
  width: 46%;
  aspect-ratio: 1;
}
.art-badge {
  position: absolute;
  top: 24px;
  left: 6%;
  background: #fff;
  border-radius: 16px;
  padding: 14px 20px;
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  border: 1px solid var(--line);
}
.art-badge strong {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem;
  color: var(--gold-deep);
}
.art-badge span {
  font-size: 0.78rem;
  color: var(--ink-soft);
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* STATS */
.stats {
  padding: 18px 0 8px;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 34px 24px;
  box-shadow: var(--shadow-card);
}
.stat {
  text-align: center;
}
.stat-value {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.6rem;
  font-weight: 700;
}
.stat-value small {
  font-size: 1.1rem;
  margin-left: 3px;
}
.stat-label {
  color: var(--ink-soft);
  font-size: 0.9rem;
  margin-top: 4px;
}

/* SERVICES */
.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.srv-card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 32px 26px;
  box-shadow: var(--shadow-card);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.srv-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-soft);
}
.srv-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: var(--gold-gradient);
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 18px;
}
.srv-card h3 {
  font-size: 1.4rem;
  margin-bottom: 10px;
}
.srv-card p {
  color: var(--ink-soft);
  font-size: 0.94rem;
}

/* GALLERY */
.gallery-section {
  background: var(--cream-2);
}
.gallery {
  columns: 3;
  column-gap: 18px;
}
.gallery-item {
  margin: 0 0 18px;
  break-inside: avoid;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow-card);
}
.gallery-item img {
  width: 100%;
  display: block;
  transition: transform 0.5s ease;
}
.gallery-item.tall img {
  aspect-ratio: 3 / 4;
  object-fit: cover;
}
.gallery-item:hover img {
  transform: scale(1.06);
}
.gallery-item figcaption {
  position: absolute;
  inset: auto 0 0 0;
  padding: 28px 16px 14px;
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  background: linear-gradient(transparent, rgba(20, 15, 8, 0.78));
}

/* PRICE PREVIEW */
.price-preview {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.pp-card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 28px 24px;
  text-align: center;
  box-shadow: var(--shadow-card);
  transition: transform 0.25s ease;
}
.pp-card:hover {
  transform: translateY(-6px);
}
.pp-card i {
  font-size: 1.7rem;
  color: var(--gold-deep);
}
.pp-card h3 {
  font-size: 1.3rem;
  margin: 12px 0 4px;
}
.pp-note {
  display: block;
  font-size: 0.8rem;
  color: var(--ink-soft);
  min-height: 18px;
}
.pp-price {
  margin-top: 14px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.9rem;
  font-weight: 700;
  color: var(--ink);
}
.pp-price small {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--ink-soft);
  margin-left: 4px;
}
.price-cta {
  text-align: center;
  margin-top: 44px;
}

/* CTA BAND */
.cta-band {
  background: var(--ink);
  color: #fff;
  padding: 56px 0;
}
.cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
}
.cta-inner h2 {
  font-size: 2.2rem;
}
.cta-inner p {
  color: rgba(255, 255, 255, 0.72);
  margin-top: 8px;
  max-width: 520px;
}

@media (max-width: 980px) {
  .services-grid,
  .price-preview {
    grid-template-columns: repeat(2, 1fr);
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 28px 16px;
  }
}
@media (max-width: 860px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .hero-art {
    min-height: 380px;
  }
  .gallery {
    columns: 2;
  }
}
@media (max-width: 560px) {
  .services-grid,
  .price-preview {
    grid-template-columns: 1fr;
  }
  .gallery {
    columns: 1;
  }
}
</style>
