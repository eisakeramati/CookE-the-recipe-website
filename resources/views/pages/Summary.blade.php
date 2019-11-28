@extends('layouts.app')
@section('content')
<div style=" margin-top:-30px; margin-bottom:-30px; background-color: #B8B8B8; color:#484848; font-size:20px; overflow-x:auto; font-family: arial; margin-left: auto; margin-right: auto; text-align:center;"> 
<h1 style=" margin-top:30px;">
    Our Frameworks
</h1>
<p>
    We used the Laravel framework for the backend of this website and React.JS for the frontend.
</p>

<div style="width:1400px; text-align:center; margin-left:auto;margin-right:auto;">
    <div id="page1" style="width:700px;float:left; display: inline-block;">
    </div>
    <div id="page3" style="width:700px;overflow: hidden;display: inline-block;loat:left; height:1173px; border-bottom:solid;">    
    </div>

    <script src="js/app.js"></script>

    <script>
            function bigImg(x) {
              x.style.height = 128px;
              x.style.width = 128px;
            }
            
            function normalImg(x) {
              x.style.height = 64px;
              x.style.width = 64px;
            }
            </script>
@endsection