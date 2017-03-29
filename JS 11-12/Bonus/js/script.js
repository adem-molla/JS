$(function() {
    var myInfo = {
        name: 'Моллалиев Эдем Ибраимович',
        img_path: 'img/Adem.jpg',
        education: 'Студент GoIT Frontend',
        header1: 'Хочу учить форнтенд, потому что:',
        ul1: 'Это хорошие уютные рабочие места',
        ul2: 'Есть график',
        ul3: 'И заработнная плата',
        header2: 'Мой контактный телефон:',
        phone: '+380956979798',
        header3: 'Мой профиль в Фейсбук:',
        facebook: 'https://www.facebook.com/adem.mollalieyv',
        header4: 'Мой фидбек:',
        feedback: 'Если нужна помощь обращайтесь, чем смогу тем и помогу)) '
    };
    var tmpl = document.getElementById('mycont').innerHTML.trim();
    tmpl = _.template(tmpl);
    document.getElementById('holder').innerHTML = tmpl({
        content: myInfo
    });
});
