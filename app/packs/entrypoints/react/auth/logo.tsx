import React from 'react';
import ReactDOM from 'react-dom';
import { MyUnsplashIcon } from '../../../javascript/icons/MyUnsplashIcon'

window.addEventListener('DOMContentLoaded', () => {
  const authLogoEl = document.querySelector('.auth__logo')
  if (authLogoEl) {
    ReactDOM.render(<MyUnsplashIcon />, authLogoEl)
  }
});
