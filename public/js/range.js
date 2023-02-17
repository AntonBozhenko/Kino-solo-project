const year = document.getElementById('year');
const yearSpan = document.getElementById('year-span');

const yearFrom = document.getElementById('range-year-from');
const yearTo = document.getElementById('range-year-to');

const grade = document.getElementById('grade');
const gradeRange = document.getElementById('gradeRange');

const stars = document.getElementById('stars');

const diapazon = document.getElementById('diapazon');

year.addEventListener('input', () => {
  yearFrom.value = '';
  yearTo.value = '';
  yearSpan.textContent = year.value;
});

[yearFrom, yearTo].forEach((el) => el.addEventListener('input', () => {
  yearSpan.textContent = 'любой';
  year.value = 1900;
}));

yearFrom.addEventListener('change', () => {
  if (+yearTo.value) {
    if (yearFrom.value > yearTo.value) {
      yearFrom.value = '';

      diapazon.classList.remove('diapazon-hidden');
      diapazon.classList.add('diapazon-visible');

      setTimeout(() => {
        diapazon.classList.remove('diapazon-visible');
        diapazon.classList.add('diapazon-hidden');
      }, 1500);
    }
  }
});

yearTo.addEventListener('change', () => {
  if (+yearFrom.value) {
    if (yearTo.value < yearFrom.value) {
      yearTo.value = '';

      diapazon.classList.remove('diapazon-hidden');
      diapazon.classList.add('diapazon-visible');

      setTimeout(() => {
        diapazon.classList.remove('diapazon-visible');
        diapazon.classList.add('diapazon-hidden');
      }, 1500);
    }
  }
});

[yearFrom, yearTo].forEach((el) => el.addEventListener('change', () => {
  if (yearFrom.value || yearTo.value) {
    yearFrom.setAttribute('required', '');
    yearTo.setAttribute('required', '');
  } else {
    yearFrom.removeAttribute('required');
    yearTo.removeAttribute('required');
  }
}));

gradeRange.addEventListener('input', () => {
  grade.textContent = gradeRange.value;
  stars.textContent = ('⭐'.repeat(gradeRange.value) + '☆'.repeat(10 - gradeRange.value));
});

document.addEventListener('click', (event) => {
  if (event.target.type === 'checkbox') {
    if (event.target.checked === false) {
      event.target.checked = false;
    } else {
      document.querySelectorAll('[type="checkbox"]').forEach((el) => {
        el.checked = false;
      });
      event.target.checked = true;
    }
  }
});
