const rHearts = document.querySelectorAll('.hearts .heart')

rHearts.forEach( (item, idx)=>{
  item.addEventListener('click',function(){
    rHearts.forEach(i=>{
      i.classList.replace('fa-solid','fa-regular')
    })
          for(let i=0; i<rHearts.length; i++){
            if(i <= idx){
              rHearts[i].classList.replace('fa-regular','fa-solid')
            }
          }
    })
})

const rates = document.querySelectorAll('.rate');

const question1 = document.getElementsByName('q1');
const question2 = document.getElementsByName('q2');

function handleQuestionSelection(question) {
  question.forEach(radio => {
    const icon = radio.parentNode.querySelector('.rate');
    radio.addEventListener('click', () => {
      question.forEach(radio => {
        const icon = radio.parentNode.querySelector('.rate');
        icon.classList.remove('selected');
        icon.parentNode.style.color = '#F4EFED'; // reset color of all labels
      });
      icon.classList.add('selected');
      const label = icon.parentNode;
      label.style.color = '#F2AA9B';
    });
  });
}

handleQuestionSelection(question1);
handleQuestionSelection(question2);
