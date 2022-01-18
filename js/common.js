// //loading
// $(window).load(function() { // 確認整個頁面讀取完畢再將這三個div隱藏起來
//     $(".loading img").delay(1000).fadeOut(3000); //delay --> 延遲幾秒才fadeOut
//     $(".loading").delay(2000).fadeOut(3000);
// })

//common start
// search 設定
// search txt 文字清空
$('.search_cancel_btn').click(function(){
    console.log("searchCancel click");
    console.log($('.search_type').val());
    $('.search_type').val(null);
});

// 手機search bar 顯示
$('#searchShowNav').click(function(){
    console.log("searchShow click");
    $('.search_bar').toggleClass('on');
})

// menu 顯示
$('#burgerBtns').click(function(){
    console.log("burgerBtnOn click");
    $('.menu').toggleClass('on');
    $('#burgerBtns').toggleClass('on');
});
//common end

//books start

// books aside btn

$('#asideBtn').click(function(){
    console.log("asideBtnOn click");
    $('.aside.filter').toggleClass('on');
});

$('.aside_link').click(function(){
    $('.aside.filter').toggleClass('on');
});

// books 產品 more 顯示(複製)
let i = 1;
$('#booksBtnCloseMoreCate1').click(function(){
    console.log('show');
    $('#cate1Book').addClass('on');
    let newID = `cate1Book${i}`;
    i++;
    $('#cate1Book').clone().attr('ID', newID).insertBefore('#booksBtnCloseMoreCate1Div');
    $(newID).addClass('.row.books_row');
});

$('#booksBtnCloseMoreCate2').click(function(){
    console.log('show');
    $('#cate2Book').addClass('on');
    let newID = `cate2Book${i}`;
    i++;
    $('#cate2Book').clone().attr('ID', newID).insertBefore('#booksBtnCloseMoreCate2Div');
    $(newID).addClass('.row.books_row');
});

$('#booksBtnCloseMoreCate3').click(function(){
    console.log('show');
    $('#cate3Book').addClass('on');
    let newID = `cate3Book${i}`;
    i++;
    $('#cate3Book').clone().attr('ID', newID).insertBefore('#booksBtnCloseMoreCate3Div');
    $(newID).addClass('.row.books_row');
});
//books end

// product
$('#BtnNavMore').click(function(){
    $('.profile .nav').toggleClass('on');
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        center: true,
        dots: false,
        nav: false,
        mouseDrag: true, // 滑鼠拖曳
        touchDrag: true, // 觸控拖曳
        pullDrag: false,
        autoplay:true,  /* 自動輪播 */
        autoplayTimeout:3000,  /* 輪播速度 */
        URLhashListener: true, //紀錄 a 標籤，如上面的 data-hash="slide1"
        startPosition: 'URLHash', // 可為 string / number
        dotsContainer: '.custom-dots', // nav bar 的名稱
        responsiveRefreshRate: 100, // 每多久計算一次 client 瀏覽器寬度
        responsiveClass: true,
        responsive: {   // 不同 width 下的調整
          0: {
            margin: 0,
            autoWidth: false
          },
          768: {
            items: 1,
            autoWidth: false
          },
          992: {
            items: 3,
            autoWidth: false
          },
          1200: {
            items: 4,
            autoWidth: false
          },
        }

    });

    // next.owl.carousel 事件，可以跳轉至下一張 slide
    $('.next').click(function () {
        $(".owl-carousel").trigger('next.owl.carousel')
      
      })

  });


//   $(".owl-carousel").owlCarousel({
//     loop: true, // 循環播放
//     margin: 10, // 外距 10px
//     nav: true, // 顯示點點
//     responsive: {
//       0: {
//         items: 1 // 螢幕大小為 0~600 顯示 1 個項目
//       },
//       600: {
//         items: 3 // 螢幕大小為 600~1000 顯示 3 個項目
//       },
//       1000: {
//         items: 5 // 螢幕大小為 1000 以上 顯示 5 個項目
//       }
//     }
//   });
  

// 放入Java Script程式碼
// $('.owl-carousel').owlCarousel({
// loop:true,
// margin:10,
// nav:true,   /* 控制列 */
// autoWidth:true,   /* 可自行設定輪播寬度 */
// items:3,  /* 一頁出現的張數 */
// autoplay:true,  /* 自動輪播 */
// autoplayTimeout:1500,  /* 輪播速度 */
// autoplayHoverPause:true
// });
// $('.play').on('click',function(){
// owl.trigger('play.owl.autoplay',[1000])
// })
// $('.stop').on('click',function(){
// owl.trigger('stop.owl.autoplay')
// })