<aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
    <div class="app-brand demo ">
        <a href="{{ route('dashboard.home') }}" class="app-brand-link">
            <span class="avatar">
                <img src="{{ asset('assets/img/avatars/dws_logo.png') }}" alt="logo" class="h-auto ">
            </span>
            <span class="app-brand-text demo menu-text fw-bold">{{ config('app.name') }}</span>
        </a>

        <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto">
            <i class="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i>
            <i class="ti ti-x d-block d-xl-none ti-sm align-middle"></i>
        </a>
    </div>

    <div class="menu-inner-shadow"></div>

    <ul class="menu-inner py-1">

        <li class="menu-header small text-uppercase">
            <span class="menu-header-text">Catalog</span>
        </li>
            <li class="menu-item {{ request()->routeIs('product.*') ? 'active open' : '' }}">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                    <i class='menu-icon tf-icons ti ti-forms'></i>
                    <div data-i18n="Attributes">Product</div>
                </a>
                <ul class="menu-sub">

                    <li class="menu-item {{ request()->routeIs('product.create') ? 'active' : '' }} {{ request()->routeIs('attribute.create') ? 'active' : '' }} {{ request()->routeIs('attribute.editAttribute') ? 'active' : '' }}">
                        <a href="{{ route('product.create') }}" class="menu-link">
                            <div data-i18n="Attributes">Add new Product</div>
                        </a>
                        <ul class="menu-sub">

                            <li class="menu-item {{ request()->routeIs('attribute.showAttributes') ? 'active' : '' }} {{ request()->routeIs('attribute.create') ? 'active' : '' }} {{ request()->routeIs('attribute.editAttribute') ? 'active' : '' }}">
                                <a href="{{ route('attribute.showAttributes') }}" class="menu-link">
                                    <div data-i18n="Attributes">Product</div>
                                </a>
                            </li>
                            <li class="menu-item {{ request()->routeIs('attribute.showAttributeSet') ? 'active' : '' }}">
                                <a href="{{ route('attribute.showAttributeSet') }}" class="menu-link">
                                    <div data-i18n="Attributes Set">Attributes Set</div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item {{ request()->routeIs('attribute.showAttributeSet') ? 'active' : '' }}">
                        <a href="{{ route('attribute.showAttributeSet') }}" class="menu-link">
                            <div data-i18n="Attributes Set">Attributes Set</div>
                        </a>
                    </li>
                </ul>
            </li>
        {{--  Attributes routes --}}
        <!-- USERS -->
        <li class="menu-header small text-uppercase">
            <span class="menu-header-text">Attributes</span>
        </li>
        @if (auth()->check() && auth()->user()->is_admin == 0)
            <li class="menu-item {{ request()->routeIs('attribute.*') ? 'active open' : '' }}">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                    <i class='menu-icon tf-icons ti ti-forms'></i>
                    <div data-i18n="Attributes">Attributes</div>
                </a>
                <ul class="menu-sub">

                    <li class="menu-item {{ request()->routeIs('attribute.showAttributes') ? 'active' : '' }} {{ request()->routeIs('attribute.create') ? 'active' : '' }} {{ request()->routeIs('attribute.editAttribute') ? 'active' : '' }}">
                        <a href="{{ route('attribute.showAttributes') }}" class="menu-link">
                            <div data-i18n="Attributes">Attributes</div>
                        </a>
                    </li>
                    <li class="menu-item {{ request()->routeIs('attribute.showAttributeSet') ? 'active' : '' }}">
                        <a href="{{ route('attribute.showAttributeSet') }}" class="menu-link">
                            <div data-i18n="Attributes Set">Attributes Set</div>
                        </a>
                    </li>
                </ul>
            </li>
        @endif

        @if (auth()->check() && auth()->user()->is_admin == 1)
            {{-- System Attributes routes --}}
            <li class="menu-item {{ request()->routeIs('systemAttribute.*') ? 'active open' : '' }}">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                    <i class='menu-icon tf-icons ti ti-layout-navbar'></i>
                    <div data-i18n="System Attributes">System Attributes</div>
                </a>
                <ul class="menu-sub">

                    <li class="menu-item {{ request()->routeIs('systemAttribute.showAttributes') ? 'active' : '' }} {{ request()->routeIs('systemAttribute.create') ? 'active' : '' }} {{ request()->routeIs('systemAttribute.editAttribute') ? 'active' : '' }}">
                        <a href="{{ route('systemAttribute.showAttributes') }}" class="menu-link">
                            <div data-i18n="System Attributes">System Attributes</div>
                        </a>
                    </li>
                    <li
                        class="menu-item {{ request()->routeIs('systemAttribute.showAttributeSet') ? 'active' : '' }} {{ request()->routeIs('systemAttribute.editAttributeSet') ? 'active' : '' }} {{ request()->routeIs('systemAttribute.createAttributeSet') ? 'active' : '' }}">
                        <a href="{{ route('systemAttribute.showAttributeSet') }}" class="menu-link">
                            <div data-i18n="System Attributes Set">System Attributes Set</div>
                        </a>
                    </li>
                </ul>
            </li>
        @endif
        {{-- <li class="menu-header small text-uppercase">
            <span class="menu-header-text">Users</span>
        </li>
        
        <li class="menu-item {{ request()->routeIs('account.*') ? 'active open' : '' }}">
            <a href="javascript:void(0);" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons ti ti-users"></i>
                <div data-i18n="Users">Users</div>
            </a>
            <ul class="menu-sub">
               
                <li class="menu-item {{ request()->routeIs('account.setting') ? 'active' : '' }}">
                    <a href="{{ route('account.setting') }}" class="menu-link">
                        <div data-i18n="Profile">Profile</div>
                    </a>
                </li>
            </ul>
        </li> --}}

    </ul>

</aside>
