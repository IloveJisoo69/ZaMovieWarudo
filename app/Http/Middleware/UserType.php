<?php

namespace App\Http\Middleware;
use Closure;
use Illuminate\Auth\Middleware\UserType as Middleware;
use Illuminate\Support\Facades\Auth;

class UserType 
{
    public function handle($request, Closure $next, String $userType) {
        $user = Auth::user();
        if ($user->user_type == $userType) {
            return $next($request);
        }
        Auth::logout();
        return redirect('/');
    }
}
