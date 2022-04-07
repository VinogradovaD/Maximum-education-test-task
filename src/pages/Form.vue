<template>
  <div class="form-container">
    <h1>Форма подачи заявки в отдел сервиса и качества</h1>
    <form @submit.prevent="onSubmit">

      <fieldset>
        <legend>Ваш филиал<span>*</span></legend> 
        <v-select 
          v-model="city"
          v-bind:cities="cities"
          v-bind:disabled="isDisabledSelect"
        />
        <v-checkbox
        v-model="city"
        v-on:change="isDisabledSelect = !isDisabledSelect"
        />   
      </fieldset>

      <fieldset>
        <legend>Тема обращения<span>*</span></legend>
        <v-radio 
          v-model="problem"
          v-bind:problems="problems" 
          v-on:click="another_problem=''"
        />
        <v-input-text
          v-model="another_problem"
          v-on:click="problem=''"
          placeholder="Другое"
        />
      </fieldset>

      <fieldset>
        <legend>Описание проблемы<span>*</span></legend>
        <v-textarea 
          v-model="desc"
          placeholder="Введите текст"
          requared/>
      </fieldset>

      <fieldset>
        <legend>Загрузка документов</legend>
        <v-input-file
          v-model="file"
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
        isDisabledButton: true,
        isDisabledSelect: false,
        city: '',
        problem: '',
        another_problem: '',
        desc: '',
        file: '',
        cities: '',
        problems: [
          {id: 1, title: 'Недоволен качеством услуг', name: 'problem'},
          {id: 2, title: 'Расторжение договора', name: 'problem'},
          {id: 3, title: 'Не приходит письмо активации на почту', name: 'problem'},
          {id: 4, title: 'Не работает личный кабинет', name: 'problem'},
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
    onSubmit() {
      try {
        axios
          .post('https://624d935653326d0cfe4f0ab4.mockapi.io/api/v1/send-form', 
            {
              "city": this.city, 
              "problem": this.problem ? this.problem : this.another_problem,  
              "desc": this.desc, 
              "file": this.file
            })
          .then(response => {
            if (response.data.success) {
              this.$router.push("/success");;
            }
            else {
              alert('Данные не отправлены');
            }
          });
      } catch(e) {
          console.error(e.message);
      }
    }
  },
  computed: {
    activateBtn() {
      if (this.city && (this.problem || this.another_problem) && this.desc) 
        this.isDisabledButton = false;
      else 
        this.isDisabledButton = true;
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