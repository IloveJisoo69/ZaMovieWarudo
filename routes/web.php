<?php

use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// Routes for the user
Route::get('/home', [App\Http\Controllers\User\DashboardController::class, 'index']
    )->middleware('user_type:user');

// Routes for the admin
Route::get('/admin/home', [App\Http\Controllers\Admin\DashboardController::class, 'index']
    )->middleware('user_type:admin');
Route::get('/admin/{any?}', [App\Http\Controllers\Admin\DashboardController::class, 'index']
    )->where('any', '^(?!api).*$')->middleware('user_type:admin');

// Routes for the guest
Route::get('/', function () {
    return view('welcome');
});
Route::get('/coming_soon', function () {
    return view('welcome');
});

// Auth routes
Auth::routes();


