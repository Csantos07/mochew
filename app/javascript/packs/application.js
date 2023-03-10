// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.toggle-button');
  const dropdown = document.querySelector('.dropdown');
  let menuOpen = false;

  menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
      menuBtn.classList.add('open');
      dropdown.classList.remove('hidden');
      menuOpen = true;
    } else {
      dropdown.classList.add('fast');
      menuBtn.classList.remove('open');
      dropdown.classList.add('hidden');
      menuOpen = false;
    }
  })
});