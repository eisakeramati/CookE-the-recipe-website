
  <nav id="navbar" class="navbar navbar-expand-md navbar-light bg-dark shadow-sm" >
      <div class="container">
          <a class="navbar-brand" href="{{ url('/') }}" style="color:gray; margin-left:-150px; font-family: 'Pacifico';">
              {{ config('CookE', 'CookE') }}
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <!-- Left Side Of Navbar -->
              
              <ul class="navbar-nav mr-auto">
                  
                  <li class="nav-item">
                    <a class="nav-link" href="/about" style="color:white;">About</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="/posts" style="color:white;">Blog</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/summary" style="color:white;">Summary</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/tutorial" style="color:white;">Tutorial</a>
                  </li>
                  <li class="nav-item">
                        <a class="nav-link" href="/install" style="color:white;">Install</a>
                      </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/services" style="color:white;">Conclusion</a>
                  </li>
                  
                </ul>

              <!-- Right Side Of Navbar -->
              <ul class="navbar-nav ml-auto">
                  <!-- Authentication Links -->
                  @guest
                      <li class="nav-item">
                          <a class="nav-link" href="{{ route('login') }}" style="color:white;">{{ __('Login') }}</a>
                      </li>
                      @if (Route::has('register'))
                          <li class="nav-item">
                              <a class="nav-link" href="{{ route('register') }}" style="color:white;">{{ __('Register') }}</a>
                          </li>
                      @endif
                  @else
                      <li class="nav-item dropdown">
                        
                          <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" style="color:gray;" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                              {{ Auth::user()->name }} <span class="caret"></span>
                          </a>

                          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">

                              <a class="dropdown-item" href="{{ route('logout') }}"
                                  onclick="event.preventDefault();
                                                document.getElementById('logout-form').submit();">
                                  {{ __('Logout') }}
                              </a>
                              <a class="dropdown-item" href="/home">
                                  Dashboard
                              </a>

                              <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                  @csrf
                              </form>
                          </div>
                      </li>
                  @endguest
              </ul>
          </div>
      </div>
  </nav>

  <script>
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
          if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
          } else {
            document.getElementById("navbar").style.top = "-50px";
          }
          prevScrollpos = currentScrollPos;
        }
    </script>

  <main class="py-4">
      @yield('content')
  </main>