<template>
  <div class="form-container">
    <h1>Форма подачи заявки в отдел сервиса и качества</h1>
    <form action="https://6196084574c1bd00176c6ff1.mockapi.io/api/v1/send-form" method="post">

      <fieldset>
        <legend>Ваш филиал<span>*</span></legend> 
        <v-select 
          v-bind:cities="cities"
        />
        <v-checkbox/>      
      </fieldset>

      <fieldset>
        <legend>Тема обращения<span>*</span></legend>
        <v-radio 
          v-for="topic of topics" 
          v-bind:topic="topic"
        />
        <v-input-text
          placeholder="Другое"
        />
      </fieldset>

      <fieldset>
        <legend>Описание проблемы<span>*</span></legend>
        <v-textarea 
          placeholder="Введите текст"
        />
      </fieldset>

      <fieldset>
        <legend>Загрузка документов</legend>
        <v-file/>
      </fieldset>

      <v-button disabled/>
    </form>
  </div>
</template>

<script>
  
  export default {
    data() {
      return {
        cities: [
          {id:1, title:"Москва"},
          {id:2, title:"Санкт-Петербург"},
          {id:3, title:"Екатеринбург"},
          {id:4, title:"Челябинск"}
        ],
        topics: [
          {id: 1, title: ' Недоволен качеством услуг', name: 'topic'},
          {id: 2, title: ' Расторжение договора', name: 'topic'},
          {id: 3, title: ' Не приходит письмо активации на почту', name: 'topic'},
          {id: 4, title: ' Не работает личный кабинет', name: 'topic'},
        ],
        message: {
          city: '',
          topic: '',
          desc: '',
          file: ''
        }
    }
  }, 
  }
</script>

<style lang="sass">
  * 
    margin: 0
    padding: 0
    box-sizing: border-box
    font-family: Avenir, Helvetica, Arial, sans-serif
  
  h1
    color: black
    opacity: 75%
    font-size: 1.5em 
    text-align: left

  .form-container
    width: 70%
    margin: 0 auto

  form
    margin-top: 20px
    border: 1px solid lightgrey
    text-align: left
    padding: 30px

  fieldset
    border: none
    margin-bottom: 20px
  
  legend
    opacity: 90%
</style>