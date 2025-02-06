function inittabnav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  // Verificar se existe elemento em tabContent e tabMenu
  if(tabContent.length && tabMenu.length) {
    tabContent[0].classList.add('ativo');
    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
    
  }
}

inittabnav();

function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo'

  if(accordionList.length){
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion (){
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click' , activeAccordion);
    });
 }
}

initAccordion();

function initScrollSuave(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function ScrollSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute ('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block:'start',
    });

  }

  linksInternos.forEach((link)=> {
    link.addEventListener('click' , ScrollSection);
  });
}

initScrollSuave(); 

function initAnimacaoScroll(){
    const sections = document.querySelectorAll('.js-scroll');
    if(sections.length){
    const windowmetade = window.innerHeight * 0.6;

    function animascroll(){
      sections.forEach((section) =>{
        const sectiontop = section.getBoundingClientRect().top;
        const issectionvisible = (sectiontop - windowmetade) < 0;
        if(issectionvisible){
          section.classList.add('ativo');
        } 
      });
    }

    animascroll(); 
    window.addEventListener('scroll' , animascroll);  
  }
}

initAnimacaoScroll();