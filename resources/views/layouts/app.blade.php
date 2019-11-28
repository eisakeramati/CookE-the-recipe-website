<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <style>
        
        .grid-container {
    display: grid;
    grid-template-areas:
      'menu header header header header header header header header header header header header header header header header'
      'menu main main main main main main main main main main main main main main main main'
      'menu footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer';

  }

.grid-container > div {
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }

.item1 { grid-area: header; }
.item2 { grid-area: menu; background-color: #DCDCDC; border-right:solid; border-top:solid; border-bottom:solid;}
.item3 { grid-area: main; }
.item5 { grid-area: footer; }

        
    </style>
    <link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ 'CookE'}}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="/vendor/unisharp/laravel-ckeditor/ckeditor.js"></script>
    <script>
        CKEDITOR.replace( 'article-ckeditor' );
    </script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        @include('inc.navbar')
        <div class="container">
            @yield('contain')
            @include('inc.messages')
        </div>
    </div>
    
    
</body>
</html>
