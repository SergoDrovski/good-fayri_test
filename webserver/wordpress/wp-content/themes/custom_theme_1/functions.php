<?php 


add_action( 'wp_enqueue_scripts', 'add_site_scripts' );
add_action( 'wp_footer', 'add_footer_scripts' );
add_action( 'after_setup_theme', 'registerMenu' );
add_action( 'widgets_init', 'register_popup' );

function register_popup() {
    register_sidebar([
        'name' => 'Боковая панель на главной странице',
        'id' => 'homepage-sidebar',
        'description' => 'Выводиться как боковая панель только на главной странице сайта.'
    ]);
}

function add_site_scripts() {
//    wp_enqueue_style( 'style', get_stylesheet_uri());
	wp_enqueue_style( 'fonts', get_template_directory_uri() . '/assets/css/fonts.css' );
	wp_enqueue_style( 'title-style', get_template_directory_uri() . '/assets/css/title.styles.css' );
	wp_enqueue_style( 'style', get_template_directory_uri() . '/assets/css/default.css' );
    wp_enqueue_style( 'swiper', 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css' );

    wp_deregister_script( 'jquery' );
    wp_register_script( 'jquery', '//ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js' );
	wp_enqueue_script( 'jquery');
}

function add_footer_scripts() {
	wp_enqueue_script( 'swiper-js', 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js');
	wp_enqueue_script( 'main', get_template_directory_uri() . '/assets/js/main.js' );
}


function registerMenu () {
    register_nav_menu( 'topMenu', 'Меню в шапке' );
}
