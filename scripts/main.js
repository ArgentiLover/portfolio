document.addEventListener('DOMContentLoaded', ()=>{
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if(el) el.textContent = y;
});

// === МОДАЛЬНОЕ ОКНО ПРОЕКТОВ ===
const dialog = document.getElementById('projectDialog');
if (dialog) {
  const projects = {
    1: {
      title: 'Морской бой',
      img: '../images/p1.jpg',
      desc: 'Морской бой. Дополнительная кастомизация игры и вариантов стрельбы.',
      link: 'https://github.com/ArgentiLover/SeaBattleProject'
    },
    2: {
      title: 'Учебный сайт',
      img: '../images/p2.jpg',
      desc: 'HTML/CSS, JS.',
      link: 'https://github.com/ArgentiLover/my-awesome-project/'
    },
  };

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const id = card.getAttribute('data-project');
        const p = projects[id];
        if (!p) return;
        
        const dialogImage = document.getElementById('dialogImage');
        dialogImage.src = p.img;
        dialogImage.alt = p.title + ' - скриншот проекта';
        dialogImage.loading = 'lazy';
        
        document.getElementById('dialogTitle').textContent = p.title;
        document.getElementById('dialogDesc').textContent = p.desc;
        document.getElementById('dialogLink').href = p.link;
        dialog.showModal();
    });
});
}