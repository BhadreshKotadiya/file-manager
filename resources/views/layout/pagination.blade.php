<!-- resources/views/vendor/pagination/custom.blade.php -->

<nav aria-label="Page navigation">
    <ul class="pagination justify-content-end pagination-lg">
        @if ($paginator->onFirstPage())
            <li class="page-item prev disabled">
                <span class="page-link"><i class="ti ti-chevrons-left ti-xs"></i></span>
            </li>
        @else
            <li class="page-item prev">
                <a class="page-link" href="{{ $paginator->previousPageUrl() }}"><i class="ti ti-chevrons-left ti-xs"></i></a>
            </li>
        @endif

        <!-- Loop through the page numbers -->
        @foreach ($elements as $element)
            @if (is_string($element))
                <li class="page-item disabled">
                    <span class="page-link">{{ $element }}</span>
                </li>
            @endif

            @if (is_array($element))
                @foreach ($element as $page => $url)
                    @if ($page == $paginator->currentPage())
                        <li class="page-item active">
                            <span class="page-link">{{ $page }}</span>
                        </li>
                    @else
                        <li class="page-item">
                            <a class="page-link" href="{{ $url }}">{{ $page }}</a>
                        </li>
                    @endif
                @endforeach
            @endif
        @endforeach

        @if ($paginator->hasMorePages())
            <li class="page-item next">
                <a class="page-link" href="{{ $paginator->nextPageUrl() }}"><i class="ti ti-chevrons-right ti-xs"></i></a>
            </li>
        @else
            <li class="page-item next disabled">
                <span class="page-link"><i class="ti ti-chevrons-right ti-xs"></i></span>
            </li>
        @endif
    </ul>
</nav>
