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
        />
        <v-input-text
          v-model="userData.topic"
          :placeholder="topicForm.placeholder"
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
        <v-input-file
          v-model="file"
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
          selected_city: '',
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
          title: "Загрузка документов"
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
    onSubmit() {
      try {
        axios
          .post('https://624d935653326d0cfe4f0ab4.mockapi.io/api/v1/send-form', 
            {
              "city": this.userData.online_checkbox? "Online" : this.userData.selected_city, 
              "problem": this.userData.topic ? this.userData.topic : this.userData.selected_topic,  
              "desc": this.userData.desc, 
              "file": this.userData.file
            })
          .then(response => {
            if (response.data.success) 
              window.location.href = '/success';
            else 
              alert('Данные не отправлены');
          });
      } catch(e) {
          console.error(e.message);
      }
    }
  },
  computed: {
    activeBtn() {
      return ((this.userData.selected_city || this.userData.online_checkbox) 
              && (this.userData.selected_topic || this.userData.topic) && this.userData.desc) 
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
    margin: 30px 0 10px
  
    .form-section-title
      opacity: 90%
          
      span
        color: red
</style>