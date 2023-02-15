const year = document.getElementById('year');
const yearSpan = document.getElementById('year-span');

const yearFrom = document.getElementById('range-year-from');
const yearTo = document.getElementById('range-year-to');

const grade = document.getElementById('grade');
const gradeRange = document.getElementById('gradeRange');

const stars = document.getElementById('stars');

year.addEventListener('input', () => {
  yearFrom.value = '';
  yearTo.value = '';
  yearSpan.textContent = year.value;
});

[yearFrom, yearTo].forEach((el) => el.addEventListener('input', () => {
  yearSpan.textContent = 'любой';
  year.value = 1900;
}));

gradeRange.addEventListener('input', () => {
  grade.textContent = gradeRange.value;
  stars.textContent = ('⭐'.repeat(gradeRange.value) + '☆'.repeat(10 - gradeRange.value));
});

document.addEventListener('click', (event) => {
  if (event.target.type === 'checkbox') {
    document.querySelectorAll('[type="checkbox"]').forEach((el) => {
      el.checked = false;
    });
    event.target.checked = true;
  }
});
