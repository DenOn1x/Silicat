import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();
import {MaskInput} from "maska"


let menuBtn = document.querySelector('.header__menu-btn');
let menu = document.querySelector('.header-menu');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

let menuBtnPage = document.querySelector('.menu-btn-page');
let menuBlockPage = document.querySelector('.block-menu');
menuBtnPage.addEventListener('click', function () {
    menuBtnPage.classList.toggle('active');
    menuBlockPage.classList.toggle('active');
})

document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
        type: 'loop',
        speed: 2000,
        fixedWidth: '70%',
        updateOnMove: true,
        breakpoints: {
            1200: {
                fixedWidth: '100%',
            }
        }

    });
    splide.mount();

});

// let titleOfSlide = document.querySelectorAll('.blocks-slide__title')
//     .forEach((item)=>{
//         item.style.opacity = '0'
//         let activeSlide = document.querySelectorAll('.splide__slide')
//             .forEach((element)=>{
//                 if(element.classList.contains('is-active')){
//                     titleOfSlide[item].style.opacity = '1'
//                 }
//             })
//     })


let center = [53.894548, 30.330654]
let coordVeropark = [53.874025, 30.332981]
let coordHouse = [53.908999, 30.345566]
let coordHotel = [53.901212, 30.335829]
let coordSilicat = [53.932140, 30.350615]
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: center,
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),
        //    vetroparkWithContent = new ymaps.Placemark(coordVeropark, {
        //        hintContent: '',
        //        iconContent: '1',
        //        balloonContent: `
        //        <div class="baloon">
        //        <img src="img/map-images/vetropark-map.svg" alt="vetropark" class="baloon__image">
        //        <div class="baloon__body">
        //        <div class="baloon__title">Ветропарк в Дрибинском районе</div>
        //        <div class="baloon__text">Нами освоен совершенно новый для нас инвестиционный проект «Строительство ветропарка в Дрибинском районе».</div>
        //        <div class="baloon__wrapper-btn">
        //        <butoon class="baloon__btn">подробнее</butoon>
        //     </div>
        //   </div>
        // </div>
        //        `,
        //    }, {
        //        // Опции.
        //        // Необходимо указать данный тип макета.
        //        iconLayout: 'default#imageWithContent',
        //        // Своё изображение иконки метки.
        //        iconImageHref: 'img/map-images/vetropark-map.svg',
        //        // Размеры метки.
        //        iconImageSize: [104, 104],
        //        // Смещение левого верхнего угла иконки относительно
        //        // её "ножки" (точки привязки).
        //        iconImageOffset: [-24, -24],
        //        // Смещение слоя с содержимым относительно слоя с картинкой.
        //        iconContentOffset: [15, 15],
        //        // Макет содержимого.
        //        iconContentLayout: MyIconContentLayout
        //    }),
        BalloonContentLayout = ymaps.templateLayoutFactory.createClass(

            '<div class="baloon">' +
            '<img src="img/map-images/vetropark-map.svg" alt="vetropark" class="baloon__image">' +
            '<div class="baloon__body">' +
            '<div class="baloon__title">Ветропарк в Дрибинском районе</div>' +
            '<div class="baloon__text">Нами освоен совершенно новый для нас инвестиционный проект «Строительство ветропарка в Дрибинском районе».</div>' +

            '</div>' +
            '</div>', {

                // Переопределяем функцию build, чтобы при создании макета начинать
                // слушать событие click на кнопке-счетчике.
                build: function () {
                    // Сначала вызываем метод build родительского класса.
                    BalloonContentLayout.superclass.build.call(this);
                    // А затем выполняем дополнительные действия.

                },

                // Аналогично переопределяем функцию clear, чтобы снять
                // прослушивание клика при удалении макета с карты.
                clear: function () {
                    // Выполняем действия в обратном порядке - сначала снимаем слушателя,
                    // а потом вызываем метод clear родительского класса.

                },

                onCounterClick: function () {

                }
            });

    var placemark = new ymaps.Placemark(coordVeropark, {
            name: '',
            hasCloseButton: false,
            maxWidth: 50,

        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/map-images/vetropark-map.svg',
            iconImageSize: [104, 104],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15],
            draggable:false,

            balloonContentLayout: BalloonContentLayout,
        }),

        houseWithContent = new ymaps.Placemark(coordHouse, {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '2'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-images/house-map.svg',
            // Размеры метки.
            iconImageSize: [104, 104],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        }),
        hotelWithContent = new ymaps.Placemark(coordHotel, {

            balloonContent: 'А эта — новогодняя',
            iconContent: '3'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-images/hotel-map.svg',
            // Размеры метки.
            iconImageSize: [104, 104],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        }),
        silicatWithContent = new ymaps.Placemark(coordSilicat, {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '4'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-images/silicat-map.svg',
            // Размеры метки.
            iconImageSize: [104, 104],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        // .add(vetroparkWithContent)
        .add(placemark)
        .add(houseWithContent)
        .add(hotelWithContent)
        .add(silicatWithContent);

    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('rulerControl');
    myMap.behaviors.disable(['scrollZoom']);
});


new MaskInput("[data-maska]", {
    mask: "###-##-###-##-##",
    reversed: false,
    onMaska: (detail) => console.log(detail.completed),
    '#': {pattern: /[0-9]/},
})


let modalContacts = document.getElementById("modal-contact");
document.querySelectorAll(".btn-modal-get-contacts").forEach((item) => {
    item.onclick = getClickContact;
});
let closeModalWindowContacts = document.querySelector(".block-modal__close");

function getClickContact() {
    modalContacts.style.display = "block";
    document.body.style.overflow = 'hidden'
}

closeModalWindowContacts.onclick = function () {
    modalContacts.style.display = "none";
    document.body.style.overflow = 'visible'
}
window.onclick = function (event) {
    if (event.target === modalContacts) {
        modalContacts.style.display = "none";
        document.body.style.overflow = 'visible'
    }
}

let selector = '.page-navigation__link';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});


// $(".menu-btn-page").on("click", function() {
//     $(".block-menu").toggle();
// });
