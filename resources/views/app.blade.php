<!DOCTYPE html>

<html lang="en" class="light-style layout-navbar-fixed layout-menu-fixed " dir="ltr" data-theme="theme-default"
    data-template="vertical-menu-template">

<!-- Include Head -->
@include('layout.head')

<body>
    <!--  Layout wrapper -->

    <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">

            <!-- Menu -->
            {{-- @include('layout.sidebar') --}}
            <!-- / Menu -->

            <!-- Layout container -->
            <div class="layout-page">

                <!-- Navbar -->
                {{-- @include('layout.nav') --}}
                <!-- / Navbar -->

                <!-- Content wrapper -->
                <div class="content-wrapper">

                    <!-- Layout Content -->
                    @yield('content')
                    <!--/ Layout Content -->

                    <!-- Footer -->
                    {{-- @include('layout.footer') --}}
                    <!-- / Footer -->
                    <div class="content-backdrop fade"></div>
                </div>
                <!-- Content wrapper -->
            </div>
            <!-- / Layout page -->
        </div>

        <!-- Overlay -->
        <div class="layout-overlay layout-menu-toggle"></div>

        <!-- Drag Target Area To SlideIn Menu On Small Screens -->
        <div class="drag-target"></div>

    </div>

    <!-- / Layout wrapper -->

    <!-- Include Scripts -->
    @include('layout.foot')

</body>

</html>
