<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\ActivityController;
use App\Http\Controllers\MyActivitiesController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\NonLoggedUserController;

use App\Models\User;
use \App\Models\Activity;

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

Route::get('/', function () {
    $activities = Activity::inRandomOrder()->limit(4)->get();
    return Inertia::render('Welcome', [
        'activities' => $activities,
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $user = User::find(Auth::id());
    $activities = Activity::inRandomOrder()->limit(8)->get();
    return Inertia::render('Dashboard',['user'=>$user, 'activities'=>$activities]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('activities/store', [ActivityController::class, 'storeActivity']);
    Route::post('tags/store/tag', [TagController::class, 'storeTag']);
    Route::resource('activities', ActivityController::class);
    Route::resource('tags', TagController::class);
    Route::get('my_activities', [ActivityController::class, 'myActivities'])->name('myActivities');
    Route::get('access_denied', [ActivityController::class, 'access_denied'])->name('access_denied');
    Route::get('access_denied_tag', [TagController::class, 'access_denied_tag'])->name('access_denied_tag');
    //Route::get('/activities/my_activities', [MyActivitiesController::class, 'my_activities'])->name('my_activities');
    Route::put('/activities/{id}/update', [ActivityController::class, 'updateActivity'])->name('activity.update');

});

Route::get('AllActivities', [NonLoggedUserController::class, 'index'])->name('allActivities.index');

require __DIR__.'/auth.php';

/////// borja ruta prueba activity ////// 

Route::get('ActivityInfo/{id?}', function ($id) {
    $activity = Activity::find($id);
    $user_id = $activity->user_id;
    $teacher = User::find($user_id);
    return Inertia::render('Activities/ActivityInfo', ['activity' => $activity, 'teacher' => $teacher]);
})->name('activity_info');

Route::get('TeacherInfo/{id?}', function ($id) {
    
    $teacher = User::findOrFail($id);
    //return Inertia::render('ContactUs');
    return Inertia::render('Profile/TeacherInfo', ['teacher' => $teacher]);
})->name('teacher_info');

Route::get('/contact', function () {
    return Inertia::render('ContactUs');
})->name('contact_us');





