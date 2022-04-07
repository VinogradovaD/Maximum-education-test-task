<template>
  <div class="form-container">
    <h1>{{ title }}</h1>
    <form @submit.prevent="onSubmit">

      <fieldset class="form-section">
        <legend class="form-section-title" v-html="cityForm.title"/>
        <v-select 
          v-model="userData.selected_city"
          :cities="cityForm.cities"
          :disabled="userData.online_checkbox"
        />
        <v-checkbox
          v-model="userData.online_checkbox"
        />   
      </fieldset>

      <fieldset class="form-section">
        <legend class="form-section-title" v-html="topicForm.title"/>
        <v-radio 
          v-model="userData.selected_topic"
          :topics="topicForm.topics" 
          @delete-text="userData.topic=''"
        />
        <v-input-text
          v-model="userData.topic"
          :placeholder="topicForm.placeholder"
          @delete-selected-topic="userData.selected_topic=''"
        />
      </fieldset>

      <fieldset class="form-section">
        <legend class="form-section-title" v-html="descForm.title"/>
        <v-textarea 
          v-model="userData.desc"
          :placeholder="descForm.placeholder"
        />
      </fieldset>

      <fieldset class="form-section">
        <legend class="form-section-title" v-html="fileForm.title"/>
        <p v-html="fileForm.text"/>
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
import axios from "axios"

export default {
  data() {
    return {
      title: "Форма подачи заявки в отдел сервиса и качества",
      userData: {
        selected_city: 'Выберите город',
        online_checkbox: false,
        selected_topic: '',
        topic: '',
        desc: '',
        file: '',
      },
      cityForm: {
        title: "Ваш филиал<span>*</span>",
        cities: '',
      },
      topicForm: {
        title: "Тема обращения<span>*</span>",
        topics: [
        {id: 1, title: 'Недоволен качеством услуг', name: 'radio'},
        {id: 2, title: 'Расторжение договора', name: 'radio'},
        {id: 3, title: 'Не приходит письмо активации на почту', name: 'radio'},
        {id: 4, title: 'Не работает личный кабинет', name: 'radio'},
        ],
        placeholder: "Другое"
      },
      descForm: {
        title: "Описание проблемы<span>*</span>",
        placeholder: "Введите текст"
      },
      fileForm: {
        title: "Загрузка документов",
        text: "Приложите, пожалуйста, полноэкранный скриншот.<br> Это поможет быстрее решить проблему."
      }
  }
}, 
mounted() {
  try {
    axios
      .get('https://624d935653326d0cfe4f0ab4.mockapi.io/api/v1/cities')
      .then(response => this.cityForm.cities = response.data);
  } catch(e) {
      console.error(e.message);
  }
}, 
methods: {
  FileUpload() {
    this.userData.file = this.$refs.file.files[0];
  },
  onSubmit() {
    let formData = new FormData();
    if (this.userData.file) 
      formData.append('file', this.userData.file);
    else 
      formData = null;

    try {
      axios
        .post('https://624d935653326d0cfe4f0ab4.mockapi.io/api/v1/send-form', 
          [
            {
            "city": this.userData.online_checkbox? "Online" : this.userData.selected_city, 
            "problem": this.userData.topic ? this.userData.topic : this.userData.selected_topic,  
            "desc": this.userData.desc, 
            }, 
            FormData
          ]
        )
        .then(response => {
          if (response.data.success) 
            window.location.href = '/success';
          else 
            alert('Ошибка отправки заявки');
        });
    } catch(e) {
        console.error(e.message);
    }
  }
},
computed: {
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