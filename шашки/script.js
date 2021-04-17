$(function () {
   arr_EN = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
   for (let i = 0; i < 10; i++) {
      for (let a = 0; a < 10; a++) {
         $('.board').append("<span class = 'fred'><div> <span class = 'dot'> </span></div></span>")
         let f = i * 10 + a
         $($(".fred")[f]).attr('id', f)
         if (a == 0 || a == 9) {
            $($(".fred")[f]).text(i).addClass("letter")
         }
         if (i == 0 || i == 9) {
            $($(".fred")[f]).text(arr_EN[a]).addClass("letter")
         }
         $(".fred").toggleClass("black")
         if (i > 0 && i < 4) {
            $(".fred div").toggleClass('white dad')
         }
         if (i > 5 && i < 10) {
            $(".fred div").toggleClass('dark dad')
         }
      }
      $(".fred").toggleClass("black")
      if (i > 0 && i < 4) {
         $(".fred div").toggleClass('white dad')
      }
      if (i > 5 && i < 10) {
         $(".fred div").toggleClass('dark dad')
      }
   }

   $('.dad').on('click', function () {
      let ths = $(this)
      $('span').removeClass('active')
      let id = +$(this).parent(".fred").attr('id'),
         pos2 = id - 9,
         pos4 = id - 11;
         
      poss = [pos2, pos4];
      for (let pos of poss) {
         if ($('#' + pos + ' div').attr('class') == '') {
            $('#' + pos + ' span').addClass('active')
         }
      }
      $('.active').on('click', function () {
         $(this).parent('div').addClass('dad dark')
         $('.active').removeClass('active')
         ths.removeClass('dad dark')
      })
   })

})
// let r = 10,
//    board = '',
//    boardHTML = document.querySelector('.board'),
//    element = document.createElement('span'),
//    br = "<br>",
//    arr_EN = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
//    c = 10;

// for (let i = 0; i < r; i++) {

//    for (let a = 0; a < c; a++) {
//       element.classList.toggle('black')
//       if (a == 0 || a == 9) {
//          element.textContent = i
//          element.classList.add('num')
//       }
//       else{
//          element.classList.remove('num')
//          element.textContent = ''
//       } 
//       if (i == 0 || i == 9) {
//          element.classList.add('letter')
//          element.textContent = arr_EN[a]
//       }else{
//          element.classList.remove('letter')
//       }
//       boardHTML.append(element)
//       boardHTML.innerHTML += br
//    }
//    element.classList.toggle('black')
// }

// let r = 10,
//    board = '',
//    boardHTML = document.querySelector('.board'),
//    element = "<span class = 'fred'><div class = 'ded'></div></span>",

//    br = "<br>",
//    arr_EN = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
//    c = 10;

// for (let i = 0; i < r; i++) {
//    boardHTML.innerHTML += element
//    document.querySelectorAll('.fred')[i].textContent = ' '
//    for (let a = 0; a < c; a++) {

//       boardHTML.innerHTML += element
//       document.querySelectorAll('.fred')[a].textContent = 'sdf'

//       if (a == 0 || a == 9) {
//          element.textContent = i
//          element.classList.add('num')
//       }
//       else{
//          element.classList.remove('num')
//          element.textContent = ''
//       } 
//       if (i == 0 || i == 9) {
//          element.classList.add('letter')
//          element.textContent = arr_EN[a]
//       }else{
//          element.classList.remove('letter')
//       }
//       span.innerHTML += br
//    }
// }

