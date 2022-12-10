// var content = $('.typing').text();
// var ele = '<span>' + content.split('').join('</span><span>') + '</span>';

// $(ele).hide().appendTo('p').each(function (i) {
//     $(this).delay(100 * i).css({
//         display: 'inline',
//         opacity: 0
//     }).animate({
//         opacity: 1
//     }, 100);
// });


// setTimeout(function () {
//     $('.typing').typed({
//         strings: ['If life is so blue, then select another colour from the rainbow'],
//         typeSpeed: 5,
//         contentType: 'html',
//         startDelay: 0,
//         backSpeed: 60,
//         backDelay: 2000,
//         loop: 1,
//         cursorChar: "|",
//     });
// }, 500);


setTimeout(function () {
    $('#intro').typed({
        strings: [
            "Hi! I'm Robert and currently I am studying to be a full-stack developer with a focus on front-end development."
        ],
        typeSpeed: 5,
        contentType: 'html'
    });
}, 500);