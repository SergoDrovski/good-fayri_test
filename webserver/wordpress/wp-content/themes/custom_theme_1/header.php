<!DOCTYPE html>
<html lang="ru" class="main-page" style="scroll-behavior: smooth;">

<head>
  <meta charset="utf-8" />
  <meta name="robots" content="none" />
  <title>Добрая фея</title>
  <meta name="viewport"
    content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

 <?php wp_head(); ?>

</head>

<body>

  <div class="button-menu button-menu-49 section widget-28" style="display: block">
    <div class="button-menu-top">
      <div class="button-menu-button" style="display: block">
        <span class="button-menu-button-icon">
          <span class="button-menu-button-icon-line"></span>
          <span class="button-menu-button-icon-line"></span>
          <span class="button-menu-button-icon-line"></span>
        </span>
      </div>
      <div class="button-menu-top-inner"></div>
    </div>
  </div>
  <header class="page-header" id="up">
    <div class="container">
      <div class="page-header__wrapper">
        <div class="page-header__logo">
          <a class="logo__link" href="<?php echo home_url(''); ?>">
            <img class="logo__img" src="./images/test2 1.svg" />
          </a>
        </div>
      
        <nav class="page-header__nav navigation ">
              <ul class="navigation__list">
                <?php
                $menu_items = wp_get_nav_menu_items(get_nav_menu_locations()['topMenu']);
                if (!empty($menu_items)):
                  foreach ($menu_items as $items): ?>
                    <li class="navigation__item">
                      <a class="navigation__link" href="<?php echo $items->url?>"><span class="menu-item-text"><?php echo $items->title?></span></a>
                    </li>
                  <?php endforeach ?>
                <?php endif ?>
              </ul>
         </nav>
      </div>
      <?php
        dynamic_sidebar('homepage-sidebar');
      ?>
    </div>
  </header>