<template>
  <form
    class="form"
    @submit.prevent
  >
    <div class="form_title">
      <div class="form_title__img"></div>
      <div class="form_title__text">
        Получить бесплатную консультацию
      </div>
    </div>
    <input
      class="form_input"
      type="text"
      placeholder="Ваше имя"
      required=""
      :disabled="formWasSend"
      :value="formData.name"
      @input="setFormValue($event, 'name')"
    >
    <input
      class="form_input"
      type="tel"
      placeholder="Телефон"
      required=""
      :disabled="formWasSend"
      :value="formData.phone"
      @input="setFormValue($event, 'phone')"
    >
    <input
      class="form_input"
      type="email"
      placeholder="Email"
      :value="formData.email"
      @input="setFormValue($event, 'email')"
    >
    <textarea
      placeholder="Сообщение..."
      :value="formData.message"
      @input="setFormValue($event, 'message')"
    />
    <button
      :disabled="formWasSend || !formIsReady"
      @click="formSubmit"
      class="form_button"> Отправить
    </button>
  </form>
</template>

<script>
import * as $emailjs from "@emailjs/browser";

const EMAIL_USER_ID = 'O_442LwO7v8y2DUgq';
const EMAIL_SERVICE_ID = 'service_yzdbaa3';
const EMAIL_TEMPLATE_ID = 'template_063bwgf';
const EMAIL_NAME = 'GLAVPRO';

export default {
  name: "FormOrder",
  data() {
    return {
      formWasSend: false,
      modalIsVisible: false,
      formData: {
        name: '',
        phone: '',
        email: '',
        message: ''
      },
    };
  },
  computed: {
    templateParams() {
      return {
        emailName: EMAIL_NAME,
        userPhone: this.formData.phone,
        userName: this.formData.name,
        userMail: this.formData.email,
        userMessage: this.formData.message
      };
    },
    formIsReady() {
      const name = this.formData.name;
      const phone = this.formData.phone;

      return name.length && phone.length;
    },
  },
  methods: {
    close() {
      this.$nuxt.$emit('close');
    },
    setFormValue(event, field) {
      this.formData[field] = event.target.value;
    },
    clearFormData() {
      this.formData.name = '';
      this.formData.phone = '';
      this.formData.email = '';
      this.formData.message = '';
    },
    formSubmit() {
      const templateParams = this.templateParams;
      const serviceId = EMAIL_SERVICE_ID;
      const userId = EMAIL_USER_ID;
      const templateId = EMAIL_TEMPLATE_ID;

      this.formWasSend = true;
      $emailjs.send(serviceId, templateId, templateParams, userId)
        .then(() => {
          setTimeout(() => {
            this.formWasSend = false;
            this.clearFormData();
            this.$nuxt.$emit('show-success');
          }, 5000);
        }, () => {
          this.formWasSend = false;
          console.warn('Ошибка');
        });
    },
  }
}
</script>

<style scoped>
.form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  background: #ffffff;
  border: 1px solid #cccccc;
  box-shadow: 1px 1px #cccccc;
}

.form_title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}

.form_title__text {
  font-size: 20px;
  font-weight: bold;
}

.form_input {
  width: 250px;
  height: 40px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin-bottom: 25px;
}

.form_input:first-child {
  margin-top: 30px;
}

textarea {
  width: 250px;
  height: 80px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin-bottom: 25px;
}

.form_button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FABB38;
  padding: 15px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  height: 50px;
  width: 200px;
}
</style>
