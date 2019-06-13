<?php 

/*
Plugin Name: Ninja Forms - Datepicker Date Disable
Plugin URI: http://devshawon.com/ninja-form-datepicker-date-disable
Description: Disable Multiple Date for the jQuery UI Datepicker in Ninja Forms
Version: 3.0
Author: devShawon
Author URI: http://devshawon.com

Copyright (c) 2017 The WP Ninjas/devShawon

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

 
add_filter( 'ninja_forms_enqueue_scripts', 'nf_datepicker_date_disable' );
function nf_datepicker_date_disable() {
    wp_enqueue_script( 'nf_datepicker_date_disable', plugin_dir_url( __FILE__ ) . 'script.js', array( 'jquery' ), false, true );
}