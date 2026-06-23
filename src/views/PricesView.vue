<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useToast } from 'primevue/usetoast'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Checkbox from 'primevue/checkbox'
import Select from 'primevue/select'
import Button from 'primevue/button'
import Message from 'primevue/message'
import { priceList, type PriceItem } from '@/data'
import ConsentDialog from '@/components/ConsentDialog.vue'

const ruble = new Intl.NumberFormat('ru-RU')
const toast = useToast()

const categories = ['Печать', 'Сувениры', 'Цифра'] as const
const grouped = computed(() =>
  categories.map((cat) => ({
    name: cat,
    items: priceList.filter((p) => p.category === cat),
  })),
)

const productOptions = priceList.map((p) => ({
  label: `${p.name} — ${ruble.format(p.price)} ₽`,
  value: p.id,
}))

interface FormState {
  name: string
  phone: string
  email: string
  product: string | null
  message: string
  consent: boolean
}

const form = reactive<FormState>({
  name: '',
  phone: '',
  email: '',
  product: null,
  message: '',
  consent: false,
})

const submitted = ref(false)
const consentVisible = ref(false)

const errors = computed(() => ({
  name: submitted.value && form.name.trim().length < 2,
  phone: submitted.value && !/[\d]{6,}/.test(form.phone.replace(/\D/g, '')),
  consent: submitted.value && !form.consent,
}))

const isValid = computed(
  () => !errors.value.name && !errors.value.phone && form.consent,
)

function submit() {
  submitted.value = true
  if (!isValid.value) {
    if (!form.consent) {
      toast.add({
        severity: 'warn',
        summary: 'Нужно согласие',
        detail: 'Для отправки заявки подтвердите согласие на обработку персональных данных.',
        life: 4000,
      })
    }
    return
  }

  toast.add({
    severity: 'success',
    summary: 'Заявка отправлена!',
    detail: `Спасибо, ${form.name.trim()}! Мы свяжемся с вами в ближайшее время.`,
    life: 5000,
  })

  form.name = ''
  form.phone = ''
  form.email = ''
  form.product = null
  form.message = ''
  form.consent = false
  submitted.value = false
}

function categoryIcon(item: PriceItem) {
  return item.icon
}
</script>

<template>
  <div class="route-view">
  <!-- PAGE HEADER -->
  <section class="page-hero">
    <div class="container">
      <span class="eyebrow">Прайс-лист</span>
      <h1>Цены и оформление заказа</h1>
      <p>
        Актуальные цены на ретушь, обработку, улучшение качества и печать
        фотографий. Выберите услугу и оставьте заявку — рассчитаем итоговую
        стоимость и согласуем сроки.
      </p>
    </div>
  </section>

  <!-- PRICE TABLES -->
  <section class="section section--top">
    <div class="container price-cats">
      <div v-for="group in grouped" :key="group.name" class="cat-card">
        <h2>{{ group.name }}</h2>
        <ul class="price-rows">
          <li v-for="item in group.items" :key="item.id">
            <span class="row-name">
              <i :class="categoryIcon(item)" />
              <span>
                {{ item.name }}
                <small v-if="item.note">{{ item.note }}</small>
              </span>
            </span>
            <span class="row-price">
              {{ ruble.format(item.price) }} ₽
              <small>/ {{ item.unit }}</small>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="container price-hint">
      <i class="pi pi-info-circle" />
      <span>
        Фото 10×15 не регулируются по размеру; остальные форматы могут иметь
        минимальные «уши». Сложная ретушь (склейка, замена фона) оплачивается
        отдельно. Цены указаны в рублях.
      </span>
    </div>
  </section>

  <!-- ORDER FORM -->
  <section class="section order-section" id="order">
    <div class="container order-grid">
      <div class="order-aside">
        <span class="eyebrow">Оставить заявку</span>
        <h2>Оформите заказ онлайн</h2>
        <p>
          Заполните форму — и мастер свяжется с вами для уточнения деталей. Это
          бесплатно и ни к чему не обязывает.
        </p>

        <ul class="order-perks">
          <li><i class="pi pi-check-circle" /> Ответим в течение часа в рабочее время</li>
          <li><i class="pi pi-check-circle" /> Поможем выбрать формат и оформление</li>
          <li><i class="pi pi-check-circle" /> Готовый заказ — обычно за 24 часа</li>
        </ul>
      </div>

      <form class="order-form" novalidate @submit.prevent="submit">
        <div class="field">
          <label for="name">Ваше имя <span class="req">*</span></label>
          <InputText
            id="name"
            v-model="form.name"
            placeholder="Как к вам обращаться"
            :invalid="errors.name"
            fluid
          />
          <small v-if="errors.name" class="err">Укажите имя</small>
        </div>

        <div class="field-row">
          <div class="field">
            <label for="phone">Телефон <span class="req">*</span></label>
            <InputText
              id="phone"
              v-model="form.phone"
              placeholder="+7 (___) ___-__-__"
              :invalid="errors.phone"
              fluid
            />
            <small v-if="errors.phone" class="err">Укажите корректный телефон</small>
          </div>

          <div class="field">
            <label for="email">E-mail</label>
            <InputText id="email" v-model="form.email" placeholder="necessary@mail.ru" fluid />
          </div>
        </div>

        <div class="field">
          <label for="product">Что вас интересует</label>
          <Select
            id="product"
            v-model="form.product"
            :options="productOptions"
            optionLabel="label"
            optionValue="value"
            placeholder="Выберите услугу"
            fluid
          />
        </div>

        <div class="field">
          <label for="message">Комментарий</label>
          <Textarea
            id="message"
            v-model="form.message"
            rows="3"
            placeholder="Количество кадров, пожелания по обработке и т. д."
            autoResize
            fluid
          />
        </div>

        <!-- CONSENT — обязательное согласие на обработку ПД -->
        <div class="consent-field" :class="{ 'consent-error': errors.consent }">
          <Checkbox v-model="form.consent" :binary="true" inputId="consent" />
          <label for="consent">
            Я даю согласие на обработку моих персональных данных и принимаю условия
            <button type="button" class="consent-link" @click="consentVisible = true">
              согласия на обработку персональных данных
            </button>.
          </label>
        </div>
        <Message v-if="errors.consent" severity="error" :closable="false" size="small">
          Без согласия на обработку персональных данных заявку отправить нельзя.
        </Message>

        <Button
          type="submit"
          label="Отправить заявку"
          icon="pi pi-send"
          size="large"
          class="submit-btn"
        />
        <p class="form-note">
          Нажимая кнопку, вы соглашаетесь с обработкой персональных данных в
          соответствии с ФЗ-152.
        </p>
      </form>
    </div>

    <ConsentDialog v-model:visible="consentVisible" @accept="form.consent = true" />
  </section>
  </div>
</template>

<style scoped>
.page-hero {
  padding: 64px 0 18px;
  text-align: center;
}
.page-hero h1 {
  font-size: clamp(2.2rem, 4.5vw, 3.4rem);
  margin: 14px 0 16px;
}
.page-hero p {
  max-width: 620px;
  margin: 0 auto;
  color: var(--ink-soft);
}

.section--top {
  padding-top: 48px;
}

/* PRICE CATEGORIES */
.price-cats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.cat-card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 30px 28px;
  box-shadow: var(--shadow-card);
}
.cat-card h2 {
  font-size: 1.7rem;
  padding-bottom: 14px;
  margin-bottom: 8px;
  border-bottom: 2px solid var(--line);
}
.price-rows {
  list-style: none;
  margin: 0;
  padding: 0;
}
.price-rows li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 0;
  border-bottom: 1px dashed var(--line);
}
.price-rows li:last-child {
  border-bottom: none;
}
.row-name {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
}
.row-name i {
  color: var(--gold-deep);
  font-size: 1.05rem;
}
.row-name small {
  display: block;
  font-weight: 400;
  font-size: 0.78rem;
  color: var(--ink-soft);
}
.row-price {
  white-space: nowrap;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--ink);
}
.row-price small {
  font-family: 'Manrope', sans-serif;
  font-size: 0.74rem;
  font-weight: 500;
  color: var(--ink-soft);
}

.price-hint {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin-top: 28px;
  background: var(--cream-2);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 16px 20px;
  color: var(--ink-soft);
  font-size: 0.9rem;
}
.price-hint i {
  color: var(--gold-deep);
  font-size: 1.2rem;
  margin-top: 1px;
}

/* ORDER */
.order-section {
  background: var(--cream-2);
}
.order-grid {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 48px;
  align-items: start;
}
.order-aside h2 {
  font-size: 2.1rem;
  margin: 12px 0 14px;
}
.order-aside p {
  color: var(--ink-soft);
}
.order-perks {
  list-style: none;
  padding: 0;
  margin: 26px 0;
  display: grid;
  gap: 12px;
}
.order-perks li {
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: 500;
}
.order-perks i {
  color: var(--gold-deep);
}
.order-form {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 36px;
  box-shadow: var(--shadow-soft);
  display: grid;
  gap: 18px;
}
.field {
  display: grid;
  gap: 7px;
}
.field-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.field label {
  font-weight: 600;
  font-size: 0.92rem;
}
.req {
  color: #c0392b;
}
.err {
  color: #c0392b;
  font-size: 0.82rem;
}

.consent-field {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  background: var(--cream);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 16px 18px;
  margin-top: 4px;
}
.consent-field label {
  font-size: 0.88rem;
  color: var(--ink-soft);
  line-height: 1.5;
}
.consent-error {
  border-color: #c0392b;
  background: #fdf3f2;
}
.consent-link {
  background: none;
  border: none;
  padding: 0;
  color: var(--gold-deep);
  font: inherit;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 2px;
  cursor: pointer;
}
.submit-btn {
  margin-top: 6px;
}
.form-note {
  font-size: 0.78rem;
  color: var(--ink-soft);
  text-align: center;
}

@media (max-width: 980px) {
  .price-cats {
    grid-template-columns: 1fr;
  }
  .order-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
@media (max-width: 560px) {
  .field-row {
    grid-template-columns: 1fr;
  }
  .order-form {
    padding: 24px;
  }
}
</style>
