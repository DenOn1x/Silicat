import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();
import {MaskInput} from "maska"


const onclickButtonShowMore = (event) => {
    let textForShowMore = event.currentTarget;
    let nextEl = textForShowMore.parentElement;
    let body = nextEl.parentElement;
    body.querySelector('.block-menu').classList.toggle('active')
    textForShowMore.classList.toggle('active');
}

const setOnClickBtnShowMore = (button) => {
    button.addEventListener('click', onclickButtonShowMore, false);
}

document.querySelectorAll(".menu-btn-page").forEach(button => setOnClickBtnShowMore(button));


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

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        BalloonContentLayout = ymaps.templateLayoutFactory.createClass(

            '<div class="baloon">' +
            '<img src="img/map-images/vetropark-map.svg" alt="vetropark" class="baloon__image">' +
            '<div class="baloon__body">' +
            '<div class="baloon__title">Ветропарк в Дрибинском районе</div>' +
            '<div class="baloon__text">Нами освоен совершенно новый для нас инвестиционный проект «Строительство ветропарка в Дрибинском районе».</div>' +

            '</div>' +
            '</div>', {

                build: function () {
                    BalloonContentLayout.superclass.build.call(this);

                },

                clear: function () {

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
            balloonContent: 'Тест 2',
            iconContent: '2'
        }, {

            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/map-images/house-map.svg',
            iconImageSize: [104, 104],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15],
            iconContentLayout: MyIconContentLayout
        }),
        hotelWithContent = new ymaps.Placemark(coordHotel, {

            balloonContent: 'Тест 3',
            iconContent: '3'
        }, {

            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/map-images/hotel-map.svg',
            iconImageSize: [104, 104],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15],
            iconContentLayout: MyIconContentLayout
        }),
        silicatWithContent = new ymaps.Placemark(coordSilicat, {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '4'
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'img/map-images/silicat-map.svg',
            iconImageSize: [104, 104],
            iconImageOffset: [-24, -24],
            iconContentOffset: [15, 15],
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


$(window).scroll(function(){
    let $sections = $('section');
    $sections.each(function(i,el){
        let top  = $(el).offset().top-10;
        let bottom = top +$(el).height();
        let scroll = $(window).scrollTop();
        let id = $(el).attr('id');
        if( scroll > top && scroll < bottom){
            $('a.active').removeClass('active');
            $('a[href="#'+id+'"]').addClass('active');

        }
    })
});


