
let age=18

//if (age>=16){
// console.log('Доступ разрешён')
//} else {
// console.log('Доступ запрещён')
//}

// if (age==14){
// console.log('Ещё маловат')
// } else if(age==16){
// console.log('Доступ разрешён')
// } else if(age<14){
// console.log('Ты малявка')
// } else{
// console.log('Доступ разрешён')
// }

// let age1=15,
// age2=18

// if (age1>=18 && age2>=18){
// console.log('Вы прошли вместе с другом')
// } else{
// alert('Вы не прошли')
// }

let block = document.querySelectorAll('.aboutUs .aboutUsBlock .info-block, .news .newsBlock .info-block');
console.log(block);
//let h2 = document.querySelector('.aboutUs .aboutUsBlock h2')
// h2.style.fontSize = '50px';
// h2.style.background = 'red';
// h2.style.paddingTop = '30px'
//h2.classList.add('error')
//h2.classList.toggle('error')
//let news = $('.news .newsBlock .info-block .block').eq(1)
let news = $('.news .newsBlock .info-block .block')
// news.css({
// 'background-color':'lightblue',
// 'padding':'50px'
// })
//news.addClass('error')

$('.news .newsBlock .text-news .first').on('click', function(){
//news.addClass('error')
news.toggleClass('error')
editText();
})

function editText() {
    let btnText = $('.news .newsBlock .text-news .first')
    if (btnText.val() == 'замена текста'){
        btnText.val('обратно')
    } else{
        btnText.val('замена текста')
    }
}