@extends('layouts.app')

@section('header')
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
<link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css" >
<link href="/css/app.css" rel="stylesheet" type="text/css" >
@endsection

@section('content')
<div id="guestRoutes">
</div>

<script src="js/app.js"></script>
@endsection