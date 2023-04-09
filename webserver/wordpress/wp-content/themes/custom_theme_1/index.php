<?php get_header(); ?>
  <section class="preview section block-1">
    <div class="preview__wrapper section block-5">
      <div class="preview__contacts contacts section block-4">
        <div
          class="contacts__tel phones-8 widget-5 phones-block contacts-block widget-type-contacts_phone section layer-type-widget">
          <div class="contacts__tel-wrap inner">
            <div class="contacts__tel-icon cell-icon">
              <div class="icon"></div>
            </div>
            <div class="contacts__tel-num title text_body">
              <a href="tel:+79183951298">+7 (918) 395-12-98</a>
            </div>
          </div>
        </div>
        <div
          class="contacts__address address-50 widget-33 address-block contacts-block widget-type-contacts_address section layer-type-widget">
          <div class="contacts__address-wrap inner">
            <div class="contacts__address-icon cell-icon">
              <div class="icon"></div>
            </div>

            <div class="contacts__address-text cell-text">
              <p class="title align-elem">Мы находимся по адресу:</p>

              <p class="text_body">
                г.Туапсе, ул.Ленинградскя, дом 11
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="preview__description editable_block-11 widget-7 section layer-type-widget">
        <div class="preview__description-wrap body">
          <h1 class="preview__text-one title align-elem">
            Клининг домов, квартир и офисов
          </h1>

          <p class="preview__text-two text align-elem">
            Доверьте уборку нам
          </p>

          <div class="preview__button  more">
            <a href="#order"><span class="align-elem">Оформить заявку</span></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="service section block-29">
    <div class="service__wrap section block-31">
      <div class="service__stages stages layout column layout_52">
        <div class="stages__container">
          <ul class="stages__list accordion-55 widget-41 accordion-wr widget-type-accordion section layer-type-widget">
            <li class="stages__item header">
              <div class="headeralign-elem">Этапы работы</div>
            </li>
            <div class="accordion">
              <dl>
                <dt>
                  <a href="#accordion1" aria-expanded="false" aria-controls="accordion1"
                    class="accordion-title accordionTitle js-accordionTrigger">Заявка</a>
                </dt>
                <dd class="accordion-content accordionItem is-collapsed" id="accordion1" aria-hidden="true">
                  <p> Звоните или оставляете заявку с сайта </p>
                </dd>
                <dt>
                  <a href="#accordion2" aria-expanded="false" aria-controls="accordion2"
                    class="accordion-title accordionTitle js-accordionTrigger">
                    Заключение договора
                  </a>
                </dt>
                <dd class="accordion-content accordionItem is-collapsed" id="accordion2" aria-hidden="true">
                  <p>Осматриваем помещение и заключаем договор </p>

                </dd>
                <dt>
                  <a href="#accordion3" aria-expanded="false" aria-controls="accordion3"
                    class="accordion-title accordionTitle js-accordionTrigger">

                    Расчет стоимости
                  </a>
                </dt>
                <dd class="accordion-content accordionItem is-collapsed" id="accordion3" aria-hidden="true">

                  <p>Сообщаем стоимость и согласовываем дату работ</p>
                </dd>
                <dt>
                  <a href="#accordion3" aria-expanded="false" aria-controls="accordion3"
                    class="accordion-title accordionTitle js-accordionTrigger">

                    Уборка
                  </a>
                </dt>
                <dd class="accordion-content accordionItem is-collapsed" id="accordion3" aria-hidden="true">

                  <p>Выполняем работу с учетом всех нюансов </p>
                </dd>
                <dt>
                  <a href="#accordion3" aria-expanded="false" aria-controls="accordion3"
                    class="accordion-title accordionTitle js-accordionTrigger">

                    Оплата
                  </a>
                </dt>
                <dd class="accordion-content accordionItem is-collapsed" id="accordion3" aria-hidden="true">

                  <p>Принимаете работу и производите оплату
                  </p>
                </dd>
              </dl>
            </div>
          </ul>

          <script>
            (function () {
              var d = document,
                accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
                setAria,
                setAccordionAria,
                switchAccordion,
                touchSupported = ('ontouchstart' in window),
                pointerSupported = ('pointerdown' in window);

              skipClickDelay = function (e) {
                e.preventDefault();
                e.target.click();
              }

              setAriaAttr = function (el, ariaType, newProperty) {
                el.setAttribute(ariaType, newProperty);
              };
              setAccordionAria = function (el1, el2, expanded) {
                switch (expanded) {
                  case "true":
                    setAriaAttr(el1, 'aria-expanded', 'true');
                    setAriaAttr(el2, 'aria-hidden', 'false');
                    break;
                  case "false":
                    setAriaAttr(el1, 'aria-expanded', 'false');
                    setAriaAttr(el2, 'aria-hidden', 'true');
                    break;
                  default:
                    break;
                }
              };
              //function
              switchAccordion = function (e) {
                e.preventDefault();
                var thisAnswer = e.target.parentNode.nextElementSibling;
                var thisQuestion = e.target;
                if (thisAnswer.classList.contains('is-collapsed')) {
                  setAccordionAria(thisQuestion, thisAnswer, 'true');
                } else {
                  setAccordionAria(thisQuestion, thisAnswer, 'false');
                }
                thisQuestion.classList.toggle('is-collapsed');
                thisQuestion.classList.toggle('is-expanded');
                thisAnswer.classList.toggle('is-collapsed');
                thisAnswer.classList.toggle('is-expanded');

                thisAnswer.classList.toggle('animateIn');
              };
              for (var i = 0, len = accordionToggles.length; i < len; i++) {
                if (touchSupported) {
                  accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
                }
                if (pointerSupported) {
                  accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
                }
                accordionToggles[i].addEventListener('click', switchAccordion, false);
                // accordionToggles[i].addEventListener('mouseout', switchAccordion, false);
              }
            })();
          </script>
          <img class="stages__image" src="images/pngwing.com (2).png" width="400">

        </div>
      </div>
      <div class="service__types types" id="link2">
        <div
          class="types__wrapper blocklist blocklist-14 widget-8 horizontal_mode widget-type-block_list section layer-type-widget">
          <div class=" types__inner body">
            <ul class="types__list list">

              <li class="types__item item">
                <div class="types__image-wrap image">
                  <img class="types__image" src="images/1.svg" alt="Уборка квартир" width="100" height="100" />
                </div>
                <span class="types__title title">Уборка квартир</span>
                <span class="types__price">1000р.</span>
                <div class="types__button-wrap more">
                  <a class="types__button " href="">Заказать услугу</a>
                </div>
              </li>

              <li class="types__item item">
                <div class="types__image-wrap image">
                  <img class="types__image" src="images/2.svg" alt="Уборка домов и коттеджей" width="100"
                    height="100" />

                </div>
                <span class="types__title title">Уборка домов и коттеджей</span>
                <span class="types__price">1000р.</span>
                <div class="types__button-wrap more">
                  <a class="types__button " href="">Заказать услугу</a>
                </div>
              </li>

              <li class="types__item item">
                <div class="types__image-wrap image">
                  <img class="types__image" src="images/3.svg" alt="Поддерживающая уборка" width="100" height="100" />
                </div>
                <span class="types__title title">Поддерживающая уборка</span>
                <span class="types__price">1000р.</span>
                <div class="types__button-wrap more">
                  <a class="types__button " href="">Заказать услугу</a>
                </div>
              </li>

              <li class="types__item item">
                <div class="types__image-wrap image">
                  <img src="images/4.svg" alt="Уборка после ремонта" width="100" height="100" />
                </div>
                <span class="types__title title">Уборка после ремонта</span>
                <span class="types__price">1000р.</span>
                <div class="types__button-wrap more">
                  <a class="types__button " href="">Заказать услугу</a>
                </div>
              </li>

              <li class="types__item item">
                <div class="types__image-wrap image">
                  <img src="images/5.svg" alt="Уборка после ремонта" width="100" height="100" />

                </div>
                <span class="types__title title">Уборка после ремонта</span>
                <span class="types__price">1000р.</span>
                <div class="types__button-wrap more">
                  <a class="types__button " href="">Заказать услугу</a>
                </div>
              </li>

              <li class="types__item item">
                <div class="types__image-wrap image">
                  <img src="images/6.svg" alt="Уборка после ремонта" width="100" height="100" />

                </div>
                <span class="types__title title">Уборка после ремонта</span>
                <span class="types__price">1000р.</span>
                <div class="types__button-wrap more">
                  <a class="types__button " href="">Заказать услугу</a>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="advantages section block-10">
    <div class="advantages__wrap section ">
      <div class="advantages__inner blocklist blocklist-17 widget-9">
        <div class="advantages__header header">
          <h2 class="header_text">
            5 причин выбрать нашу компанию
          </h2>
        </div>
        <div class="advantages__content ">

          <ul class="advantages__list list">
            <li class="advantages__item ">
              <div class="advantages__item-inner item">
                <div class="advantages__image-wrapper image">
                  <span class="advantages__image-span img-convert img-cover"><img class="advantages__image"
                      src="fonts/svg_image_1.svg" alt="Отличный коллектив" /></span>
                  <div class="image-inner"></div>
                </div>
                <p class="advantages__title title">Отличный коллектив</p>
                <div class="advantages__text-wrapper text">
                  <p class="advantages__text">
                    10 бригад по 5-20 человек для уборки любой
                    сложности<br />
                  </p>
                </div>
              </div>
            </li>
            <li class="advantages__item ">
              <div class="advantages__item-inner item">
                <div class="advantages__image-wrapper image">
                  <span class="advantages__image-span img-convert img-cover"><img class="advantages__image"
                      src="fonts/svg_image_2.svg" alt="6 лет в индустрии чистоты" /></span>
                  <div class="image-inner"></div>
                </div>
                <span class="advantages__title title">6 лет в индустрии чистоты</span>
                <div class="advantages__text-wrapper text">

                  <p class="advantages__text">
                    Качество услуг соответствует требованиям ГОСТ Р
                    51870-2002<br />
                  </p>

                </div>
              </div>
            </li>
            <li class="advantages__item ">
              <div class="advantages__item-inner item">
                <div class="advantages__image-wrapper image">
                  <span class="advantages__image-span img-convert img-cover"><img class="advantages__image"
                      src="fonts/svg_image_3.svg" alt="Выгодные цены" /></span>
                  <div class="image-inner"></div>
                </div>
                <span class="advantages__title title">Выгодные цены</span>
                <div class="advantages__text-wrapper text">

                  <p class="advantages__text">
                    Система накопительных скидок для постоянных
                    клиентов<br />
                  </p>

                </div>
              </div>
            </li>
            <li class="advantages__item ">
              <div class="advantages__item-inner item">
                <div class="advantages__image-wrapper image">
                  <span class="advantages__image-span img-convert img-cover"><img class="advantages__image"
                      src="fonts/svg_image_4.svg" alt="Гарантируем сохранность имущества заказчика" /></span>
                  <div class="image-inner"></div>
                </div>
                <span class="advantages__title title">Гарантируем сохранность имущества заказчика</span>
                <div class="advantages__text-wrapper text">

                  <p class="advantages__text">
                    Комплексная очистка поверхностей – от пола до
                    потолка<br />
                  </p>

                </div>
              </div>
            </li>
            <li class="advantages__item">
              <div class="advantages__item-inner item">
                <div class="advantages__image-wrapper image">
                  <span class="advantages__image-span img-convert img-cover"><img class="advantages__image"
                      src="fonts/svg_image_3.svg" alt="Современное оборудование импортного производства" /></span>
                  <div class="image-inner"></div>
                </div>
                <span class="advantages__title title">Современное оборудование импортного
                  производства</span>
                <div class="advantages__text-wrapper text">

                  <p class="advantages__text">
                    Комплексная очистка поверхностей – от пола до
                    потолка<br />
                  </p>

                </div>
              </div>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </section>

  <section class="about" id="link1">
    <div class="about__wrapper section">
      <div class="about__description  editable_block-29 widget-14  ">
        <h2 class="about__header header">
          Немного о нашей компании 
        </h2>
        <div class="about__body body">
          <div class="about__title title">

            Наша компания зарекомендовала себя как надежный, стабильный и,
            в тоже время, энергично развивающийся партнер.

          </div>
          <div class="about__text text">

            <p>
              Чистота и порядок - естественная потребность цивилизованного
              человека. Ведь от микроклимата в офисе, квартире, коттедже,
              даче зависит настроение, работоспособность и здоровье людей.
              А психологическая обстановка в свою очередь зависит от
              качества уборки. К сожалению, далеко не все могут посвящать
              свое свободное время этой важной процедуре, да и
              удовольствие это весьма сомнительное.
            </p>

          </div>

        </div>
      </div>

      <div class="about__form form-32 widget-16" id="order">
        <div class="about__form-header form__header">
          Заказать уборку
        </div>
        <div class="about__form-text form__text">

          Оставьте заявку, наши менеджеры свяжутся с вами в ближайшее
          время<br />

        </div>
        <form class="form" method="post">

          <div class="form__input-wrapper form-item form-text name">
            <input class="form__input wm-input-default" placeholder="* Ваше имя: " type="text" size="1" maxlength="100"
              value required />
          </div>
          <div class="form__input-wrapper form-item form-text phone">
            <input class="form__input wm-input-default" placeholder="* Телефон: " type="text" size="1" maxlength="100"
              value required />
          </div>
          <div class="form__button-wrapper form-submit">
            <button class="form__button wm-input-default" type="submit">
              Заказать
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  <section class="reviews" id="link3">
    <div class="reviews__wrapper">
      <h2 class="reviews__header header">
        Отзывы
      </h2>
      <div class="slider-reviews swiper">

        <div class="reviews-navigations">
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <div class="reviews-wrapper swiper-wrapper">
          <div class="reviews-slide swiper-slide">
            <div class="reviews-slide-wrapper">
              <div class="reviews-header">
                <!-- <img class="reviews-image" src="./img/bg-slide-1.png" /> -->
                <p class="reviews-name">Ирина Бельчикова</p>
              </div>

              <div class="reviews-text">
                <p class="">
                  Профессионально убрали всю квартиру, которая была в очень ужасном состоянии, все отмыли отчистили.
                  Квартира сияет и благоухает чистотой. Спасибо Вам. Буду пользоваться Вашими услугами и советовать
                  другим.
                </p>
              </div>
            </div>
          </div>

          <div class="reviews-slide swiper-slide">
            <div class="reviews-slide-wrapper">
              <div class="reviews-header">
                <!-- <img class="reviews-image" src="./img/bg-slide-1.png" /> -->
                <p class="reviews-name">Леонид Кулаков</p>
              </div>

              <div class="reviews-text">
                <p class="">
                  Нас затопило на кухне, вызвали клининговую компанию Добрая Фея. Приехали быстро и с помощью пылесоса
                  всю
                  воду собрали. Спасибо Вам. Своим знакомым буду Вас рекомендовать.
                </p>
              </div>
            </div>
          </div>
          <div class="reviews-slide swiper-slide">
            <div class="reviews-slide-wrapper">
              <div class="reviews-header">
                <!-- <img class="reviews-image" src="./img/bg-slide-1.png" /> -->
                <p class="reviews-name">Леонид Кулаков</p>
              </div>

              <div class="reviews-text">
                <p class="">
                  Нас затопило на кухне, вызвали клининговую компанию Добрая Фея. Приехали быстро и с помощью пылесоса
                  всю
                  воду собрали. Спасибо Вам. Своим знакомым буду Вас рекомендовать.
                </p>
              </div>
            </div>
          </div>
          <div class="reviews-slide swiper-slide">
            <div class="reviews-slide-wrapper">
              <div class="reviews-header">
                <!-- <img class="reviews-image" src="./img/bg-slide-1.png" /> -->
                <p class="reviews-name">Леонид Кулаков</p>
              </div>

              <div class="reviews-text">
                <p class="">
                  Нас затопило на кухне, вызвали клининговую компанию Добрая Фея. Приехали быстро и с помощью пылесоса
                  всю
                  воду собрали. Спасибо Вам. Своим знакомым буду Вас рекомендовать.
                </p>
              </div>
            </div>
          </div>
          <div class="reviews-slide swiper-slide">
            <div class="reviews-slide-wrapper">
              <div class="reviews-header">
                <!-- <img class="reviews-image" src="./img/bg-slide-1.png" /> -->
                <p class="reviews-name">Леонид Кулаков</p>
              </div>

              <div class="reviews-text">
                <p class="">
                  Нас затопило на кухне, вызвали клининговую компанию Добрая Фея. Приехали быстро и с помощью пылесоса
                  всю
                  воду собрали. Спасибо Вам. Своим знакомым буду Вас рекомендовать.
                </p>
              </div>
            </div>
          </div>
          <div class="reviews-slide swiper-slide">
            <div class="reviews-slide-wrapper">
              <div class="reviews-header">
                <!-- <img class="reviews-image" src="./img/bg-slide-1.png" /> -->
                <p class="reviews-name">Леонид Кулаков</p>
              </div>

              <div class="reviews-text">
                <p class="">
                  Нас затопило на кухне, вызвали клининговую компанию Добрая Фея. Приехали быстро и с помощью пылесоса
                  всю
                  воду собрали. Спасибо Вам. Своим знакомым буду Вас рекомендовать.
                </p>
              </div>
            </div>
          </div>
          <div class="reviews-slide swiper-slide">
            <div class="reviews-slide-wrapper">
              <div class="reviews-header">
                <!-- <img class="reviews-image" src="./img/bg-slide-1.png" /> -->
                <p class="reviews-name">Вера Лапина</p>
              </div>

              <div class="reviews-text">
                <p class="">
                  Большое спасибо! Вы помогли мне убрать коттедж 320 кв. после
                  ремонта и помыли винтажные окна. Они приехали вовремя как я просила, и быстро все помыли. Спасибо,
                  теперь буду Вас вызывать.
                </p>
              </div>
            </div>
          </div>
          <div class="reviews-slide swiper-slide">
            <div class="reviews-slide-wrapper">
              <div class="reviews-header">
                <!-- <img class="reviews-image" src="./img/bg-slide-1.png" /> -->
                <p class="reviews-name">Ксения Осминина</p>
              </div>

              <div class="reviews-text">
                <p class="">
                  Все очень чисто и аккуратно, а также быстро. Но забыли выбросить мусор и почистить ведро, заметила
                  после
                  вашего ухода.
                </p>
              </div>
            </div>
          </div>
          <div class="reviews-slide swiper-slide">
            <div class="reviews-slide-wrapper">
              <div class="reviews-header">
                <!-- <img class="reviews-image" src="./img/bg-slide-1.png" /> -->
                <p class="reviews-name">Татьяна Колонина</p>
              </div>

              <div class="reviews-text">
                <p class="">
                  Раньше я сама мыла окна, но с возрастом становиться тяжелее. Я решила вызвать клининговую компанию
                  Добрая Фея, и приехали две девушки Света и Оля. Они мне быстро и качественно помыли окна. Большое
                  спасибо Вам.
                  Раньше я сама мыла окна, но с возрастом становиться тяжелее. Я решила вызвать клининговую компанию
                  Добрая Фея, и приехали две девушки Света и Оля. Они мне быстро и качественно помыли окна. Большое
                  спасибо Вам.
                </p>
              </div>
            </div>
          </div>



        </div>
      </div>
      <div class="reviews__button-wrapper">
        <button class="reviews__button button" type="button">
          Оставить отзыв
        </button>
      </div>
    </div>
  </section>

  <section class="questions">
    <div class="questions__wrapper">
      <h2 class="questions__header header">
        Вопросы и ответы
      </h2>
      <div class="slider-questions swiper">
        <div class="questions-navigations">
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>

        <div class="questions-wrapper swiper-wrapper">
          <div class="questions-slide swiper-slide">
            <div class="questions-slide-wrapper">
              <div class="questions-header">
                <p class="questions-name">Сколько времени длится клининг?</p>
              </div>

              <div class="questions-text-wrapper">
                <p class="questions-text">
                  Продолжительность работ зависит от площади помещения и уровня сложности поставленных задач.
                  Поддерживающий клининг включает услуги уборки во всех комнатах и коридорах на высоту не более 1,8 м.
                  Генеральная уборка предполагает более тщательную чистку пятен, мытье кондиционеров, вытяжек и
                  фильтров, а также очищение межплиточных швов.
                </p>
              </div>
            </div>
          </div>
          <div class="questions-slide swiper-slide">
            <div class="questions-slide-wrapper">
              <div class="questions-header">
                <p class="questions-name">Обязательно ли присутствовать на клининге?</p>
              </div>

              <div class="questions-text-wrapper">
                <p class="questions-text">
                  Помощники по хозяйству могут убрать помещение, пока вы заняты своими делами. Просто передайте ключ от
                  дома в наш офис и спокойно отправляйтесь на работу, по магазинам или на встречу с друзьями. К моменту
                  вашего возвращения квартира преобразится. Клининговая компания Добрая Фея - уборка без лишней головной
                  боли!
                </p>
              </div>
            </div>
          </div>
          <div class="questions-slide swiper-slide">
            <div class="questions-slide-wrapper">
              <div class="questions-header">
                <p class="questions-name">Какую бытовую химию используете для уборки?</p>
              </div>

              <div class="questions-text-wrapper">
                <p class="questions-text">
                  Мы используем профессиональные гипоаллергенные средства Pro-Brite, Attitude, Amway.
                </p>
              </div>
            </div>
          </div>
          <div class="questions-slide swiper-slide">
            <div class="questions-slide-wrapper">
              <div class="questions-header">
                <p class="questions-name">Какие гарантии предоставляет компания?</p>
              </div>

              <div class="questions-text-wrapper">
                <p class="questions-text">
                  Вас не в полной мере устроила профессиональная уборка квартир и помещений? Мы готовы оперативно
                  исправить любые недочеты, выявленные клиентом в течение 24 часов. Каждый исполнитель компании
                  стремится постоянно совершенствовать свои навыки.
                </p>
              </div>
            </div>
          </div>
          <div class="questions-slide swiper-slide">
            <div class="questions-slide-wrapper">
              <div class="questions-header">
                <p class="questions-name">Как часто я могу пользоваться услугами клининговой компании?</p>
              </div>
              <div class="questions-text-wrapper">
                <p class="questions-text">
                  Если вам необходимо срочно привести дом в порядок, закажите разовую уборку без оформления подписки.
                  Исполнители нашего сервиса помогут вам справиться с последствиями ремонта, подготовиться к переезду и
                  добиться идеальной чистоты в квартире перед приходом гостей.
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>

    </div>
  </section>

  <section class="questions-desktop">
    <div class="questions-desktop__box">
      <h2 class="questions-desktop__header header">
        Вопросы и ответы
      </h2>

      <div class="questions-desktop__wrapper">
        <div class="questions-desktop__card">
          <p class="questions-desktop__title">Сколько времени длится клининг?</p>
          <p class="questions-desktop__text">
            Продолжительность работ зависит от площади помещения и уровня сложности поставленных задач.
            Поддерживающий клининг включает услуги уборки во всех комнатах и коридорах на высоту не более 1,8 м.
            Генеральная уборка предполагает более тщательную чистку пятен, мытье кондиционеров, вытяжек и
            фильтров, а также очищение межплиточных швов.
          </p>
        </div>
        <div class="questions-desktop__card">
          <p class="questions-desktop__title">Обязательно ли присутствовать на клининге?</p>
          <p class="questions-desktop__text">
            Помощники по хозяйству могут убрать помещение, пока вы заняты своими делами. Просто передайте ключ от
            дома в наш офис и спокойно отправляйтесь на работу, по магазинам или на встречу с друзьями. К моменту
            вашего возвращения квартира преобразится. Клининговая компания Добрая Фея - уборка без лишней головной
            боли!
          </p>
        </div>
        <div class="questions-desktop__card">
          <p class="questions-desktop__title">Какую бытовую химию используете для уборки?</p>
          <p class="questions-desktop__text">
            Мы используем профессиональные гипоаллергенные средства Pro-Brite, Attitude, Amway.
          </p>
        </div>
        <div class="questions-desktop__card">
          <p class="questions-desktop__title">Какие гарантии предоставляет компания?</p>
          <p class="questions-desktop__text">
            Вас не в полной мере устроила профессиональная уборка квартир и помещений? Мы готовы оперативно
            исправить любые недочеты, выявленные клиентом в течение 24 часов. Каждый исполнитель компании
            стремится постоянно совершенствовать свои навыки.
          </p>
        </div>
        <div class="questions-desktop__card">
          <p class="questions-desktop__title">Как часто я могу пользоваться услугами клининговой компании?</p>
          <p class="questions-desktop__text">
            Если вам необходимо срочно привести дом в порядок, закажите разовую уборку без оформления подписки.
            Исполнители нашего сервиса помогут вам справиться с последствиями ремонта, подготовиться к переезду и
            добиться идеальной чистоты в квартире перед приходом гостей.
          </p>
        </div>

      </div>
    </div>
  </section>

  <?php get_footer(); ?>