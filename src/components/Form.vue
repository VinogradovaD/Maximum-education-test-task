<template>
  <div class="form-container">
    <h1>Форма подачи заявки в отдел сервиса и качества</h1>
    <form>
      <fieldset>
        <legend>Ваш филиал<span>*</span></legend>
        <select name="city">
        </select>
        <label><input type="checkbox"/> Онлайн</label>
      </fieldset>
      <fieldset>
        <legend>Тема обращения<span>*</span></legend>
        <label><input type="radio" name="topic"> Недоволен качеством услуг</label>
        <label><input type="radio" name="topic"> Расторжение договора</label>
        <label><input type="radio" name="topic"> Не приходит письмо активации на почту</label>
        <label><input type="radio" name="topic"> Не работает личный кабинет</label>
        <input type="text" placeholder="Другое">
      </fieldset>
      <fieldset>
        <legend>Описание проблемы<span>*</span></legend>
        <textarea placeholder="Введите текст"></textarea>
      </fieldset>
      <fieldset>
        <legend>Загрузка документов</legend>
        <p>Приложите, пожалуйста, полноэкранный скриншот.<br>
          Это поможет быстрее решить проблему.</p>
        <input type="file">
      </fieldset>
    </form>
  </div>
</template>