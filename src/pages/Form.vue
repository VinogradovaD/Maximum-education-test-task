<template>
  <div class="form-container">
    <h1>Форма подачи заявки в отдел сервиса и качества</h1>
    <form action="https://624d935653326d0cfe4f0ab4.mockapi.io/api/v1/send-form" method="post">

      <fieldset>
        <legend>Ваш филиал<span>*</span></legend> 
        <v-select 
          v-model="message.city"
          v-bind:cities="cities"
          v-bind:disabled="isDisabledSelect"
        />
        <v-checkbox
          v-on:click="onlineCheck"
        />      
      </fieldset>

      <fieldset>
        <legend>Тема обращения<span>*</span></legend>
        <v-radio 
          v-for="topic of topics" 
          :key="topic.id"
          v-bind:topic="topic"
          v-model="message.topic"
        />
        <v-input-text
          placeholder="Другое"
          v-model="message.topic"
        />
      </fieldset>

      <fieldset>
        <legend>Описание проблемы<span>*</span></legend>
        <v-textarea 
          v-model="message.desc"
          placeholder="Введите текст"
          requared/>
      </fieldset>

      <fieldset>
        <legend>Загрузка документов</legend>
        <v-input-file
          v-model="message.file"
        />
      </fieldset>

      <v-button 
        v-bind:disabled="isDisabledButton"
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
        isDisabledButton: false,
        isDisabledSelect: false,
        message: {
          city: '',
          topic: '',
          desc: '',
          file: '',
        },
        cities: '',
        topics: [
          {id: 1, title: ' Недоволен качеством услуг', name: 'topic'},
          {id: 2, title: ' Расторжение договора', name: 'topic'},
          {id: 3, title: ' Не приходит письмо активации на почту', name: 'topic'},
          {id: 4, title: ' Не работает личный кабинет', name: 'topic'},
        ],
    }
  }, 
  mounted() {
    try {
      axios
        .get('https://624d935653326d0cfe4f0ab4.mockapi.io/api/v1/cities')
        .then(response => this.cities = response.data);
    } catch(e) {
      console.error(e.message);
    }
  }, 
  methods: {
    onlineCheck() {
      if(this.isDisabledSelect)
        this.isDisabledSelect = false
      else {
        this.isDisabledSelect = true;
        this.message.city = "Online";
      }
    },
    btnClick() {
      try {
        axios
          .post('https://624d935653326d0cfe4f0ab4.mockapi.io/api/v1/send-form', {'city': '1', 'topic': '1', 'desc': 'wec','file': 'w'})
          .then(response => window.location.href = 'success');
      } catch(e) {
      console.error(e.message);
      }
    }
  },
  watch: {
    city(newValue) {
      if(newValue && this.topic && this.desc){
      console.log(this.topic);
        this.isActive = true
      }  
      else {
        this.isActive = true
      }
    },  
  }
}
</script>

<style lang="sass">
  h1
    color: black
    opacity: 75%
    font-size: 1.5em 
    text-align: left

  .form-container
    width: 70%
    margin: 60px auto

  form
    margin-top: 20px
    border: 1px solid lightgrey
    padding: 30px

  fieldset
    border: none
    margin-bottom: 20px
  
  legend
    opacity: 90%
    
    span
      color: red
</style>