<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\TagController;

Route::get('/health', function () {
    return response()->json(['status' => 'ok']);
});

Route::apiResource('news', NewsController::class);
Route::apiResource('categories', CategoryController::class);
Route::apiResource('tags', TagController::class);
