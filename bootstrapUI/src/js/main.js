import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import Alert from 'bootstrap/js/dist/alert';
import { Tooltip, Toast, Popover } from 'bootstrap';

// Example of programmatically controlling the modal
const myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
  keyboard: false
});

// To show the modal
myModal.show();

// To hide the modal
myModal.hide();