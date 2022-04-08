<template>
  <div class="form-container">
    <h1>Форма подачи заявки в отдел сервиса и качества</h1>
    <form @submit.prevent="onSubmit">

      <fieldset class="form-section">
        <legend class="form-section-title">Ваш филиал<span>*</span></legend>
        <v-select 
          v-model="userData.selected_city"
          :cities="cities"
          :disabled="userData.online_checkbox"
        />
        <v-checkbox
          v-model="userData.online_checkbox"
        />   
      </fieldset>

      <fieldset class="form-section">
        <legend class="form-section-title">Тема обращения<span>*</span></legend>
        <v-radio 
          v-model="userData.selected_topic"
          :topics="topics" 
          @delete-text="userData.topic=''"
        />
        <v-input-text
          v-model="userData.topic"
          placeholder="Другое"
          @delete-selected-topic="userData.selected_topic=''"
        />
      </fieldset>

      <fieldset class="form-section">
        <legend class="form-section-title">Описание проблемы<span>*</span></legend>
        <v-textarea 
          v-model="userData.desc"
          placeholder="Введите текст"
        />
      </fieldset>
      <fieldset class="form-section">
        <legend class="form-section-title">Загрузка документов</legend>
        <p>Приложите, пожалуйста, полноэкранный скриншот.<br> Это поможет быстрее решить проблему.</p>
        <input
          type="file" 
          ref="file" 
          @change="FileUpload"
        />
      </fieldset>

      <v-button 
        :disabled="!activeBtn"
        v-on:click="btnClick"
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        selected_city: 'Выберите город',
        online_checkbox: false,
        selected_topic: '',
        topic: '',
        desc: '',
        file: '',
      },
      topics: [
        {id: 1, title: 'Недоволен качеством услуг', name: 'radio'},
        {id: 2, title: 'Расторжение договора', name: 'radio'},
        {id: 3, title: 'Не приходит письмо активации на почту', name: 'radio'},
        {id: 4, title: 'Не работает личный кабинет', name: 'radio'},
        ], 
    }
  }, 
  mounted() {
    this.$store.dispatch("getCities");
  },
  methods: {
    FileUpload() {
      this.userData.file = this.$refs.file.files[0];
    },
    onSubmit() {
      let formData = new FormData();
      if(this.userData.file)
        formData.append('file', this.userData.file);
      let json = {
         "city": this.userData.online_checkbox? "Online" : this.userData.selected_city, 
         "problem": this.userData.topic ? this.userData.topic : this.userData.selected_topic,  
         "desc": this.userData.desc
          };
      this.$store.dispatch("postData", (this.userData.file) ? [json, formData] : json);
    }
  },
  computed: {
    cities() {
      return this.$store.state.cities;
    },
    activeBtn() {
      return ((this.userData.selected_city || this.userData.online_checkbox) 
              && (this.userData.selected_topic || this.userData.topic.trim()) && this.userData.desc.trim()) 
    }
  },
}
</script>

<style lang="sass">
h1
  color: black
  opacity: 75%
  font-size: 1.5em 
  text-align: left

.form-container
  width: 65%
  margin: 60px auto

form
  margin-top: 20px
  border: 1px solid lightgrey
  padding: 10px 30px

.form-section
  border: none
  margin: 30px 0 20px
  
  .form-section-title
    opacity: 90%
         
    span
      color: red

  p
    font-size: 12px
    opacity: 80%
    margin: 10px 0
  
@media screen and (max-width: 992px)
  h1
    font-size: 1.2em

  .form-container
    width: 75%
@media screen and (max-width: 768px)
  h1
    font-size: 1.1em

  .form-container
    width: 85%
@media screen and (max-width: 576px)
  h1
    text-align: center

  .form-container
    width: 90%
</style>