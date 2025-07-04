"use strict";
let isRtl = window.Helpers.isRtl(),
    isDarkStyle = window.Helpers.isDarkStyle(),
    menu, animate, isHorizontalLayout = !1;
document.getElementById("layout-menu") && (isHorizontalLayout = document.getElementById("layout-menu").classList.contains("menu-horizontal")),
    function () {
        "undefined" != typeof Waves && (Waves.init(), Waves.attach(".btn[class*='btn-']:not([class*='btn-outline-']):not([class*='btn-label-'])", ["waves-light"]), Waves.attach("[class*='btn-outline-']"), Waves.attach("[class*='btn-label-']"), Waves.attach(".pagination .page-item .page-link")), document.querySelectorAll("#layout-menu").forEach(function (e) {
            menu = new Menu(e, {
                orientation: isHorizontalLayout ? "horizontal" : "vertical",
                closeChildren: !!isHorizontalLayout,
                showDropdownOnHover: localStorage.getItem("templateCustomizer-" + templateName + "--ShowDropdownOnHover") ? "true" === localStorage.getItem("templateCustomizer-" + templateName + "--ShowDropdownOnHover") : void 0 === window.templateCustomizer || window.templateCustomizer.settings.defaultShowDropdownOnHover
            }), window.Helpers.scrollToActive(animate = !1), window.Helpers.mainMenu = menu
        }), document.querySelectorAll(".layout-menu-toggle").forEach(e => {
            e.addEventListener("click", e => {
                if (e.preventDefault(), window.Helpers.toggleCollapsed(), config.enableMenuLocalStorage && !window.Helpers.isSmallScreen()) try {
                    localStorage.setItem("templateCustomizer-" + templateName + "--LayoutCollapsed", String(window.Helpers.isCollapsed()))
                } catch (e) {}
            })
        }), window.Helpers.swipeIn(".drag-target", function (e) {
            window.Helpers.setCollapsed(!1)
        }), window.Helpers.swipeOut("#layout-menu", function (e) {
            window.Helpers.isSmallScreen() && window.Helpers.setCollapsed(!0)
        });
        let e = document.getElementsByClassName("menu-inner"),
            t = document.getElementsByClassName("menu-inner-shadow")[0];
        0 < e.length && t && e[0].addEventListener("ps-scroll-y", function () {
            this.querySelector(".ps__thumb-y").offsetTop ? t.style.display = "block" : t.style.display = "none"
        });
        var a = document.querySelector(".style-switcher-toggle");

        function s(a) {
            [].slice.call(document.querySelectorAll("[data-app-" + a + "-img]")).map(function (e) {
                var t = e.getAttribute("data-app-" + a + "-img");
                e.src = assetsPath + "img/" + t
            })
        }
        window.templateCustomizer ? (a && a.addEventListener("click", function () {
            window.Helpers.isLightStyle() ? window.templateCustomizer.setStyle("dark") : window.templateCustomizer.setStyle("light")
        }), window.Helpers.isLightStyle() ? (a && (a.querySelector("i").classList.add("ti-moon-stars"), new bootstrap.Tooltip(a, {
            title: "Dark mode",
            fallbackPlacements: ["bottom"]
        })), s("light")) : (a && (a.querySelector("i").classList.add("ti-sun"), new bootstrap.Tooltip(a, {
            title: "Light mode",
            fallbackPlacements: ["bottom"]
        })), s("dark"))) : a.parentElement.remove(), "undefined" != typeof i18next && "undefined" != typeof i18NextHttpBackend && i18next.use(i18NextHttpBackend).init({
            lng: "en",
            debug: !1,
            fallbackLng: "en",
            backend: {
                loadPath: assetsPath + "json/locales/{{lng}}.json"
            },
            returnObjects: !0
        }).then(function (e) {
            l()
        });
        let n = document.getElementsByClassName("dropdown-language");
        if (n.length) {
            var o = n[0].querySelectorAll(".dropdown-item");
            for (let e = 0; e < o.length; e++) o[e].addEventListener("click", function () {
                var e, t = this.getAttribute("data-language"),
                    a = this.querySelector(".fi").getAttribute("class");
                for (e of this.parentNode.children) e.classList.remove("selected");
                this.classList.add("selected"), n[0].querySelector(".dropdown-toggle .fi").className = a, i18next.changeLanguage(t, (e, t) => {
                    if (e) return console.log("something went wrong loading", e);
                    l()
                })
            })
        }

        function l() {
            var e = document.querySelectorAll("[data-i18n]"),
                t = document.querySelector('.dropdown-item[data-language="' + i18next.language + '"]');
            t && t.click(), e.forEach(function (e) {
                e.innerHTML = i18next.t(e.dataset.i18n)
            })
        }
        a = document.querySelector(".dropdown-notifications-all");

        function i(e) {
            "show.bs.collapse" == e.type || "show.bs.collapse" == e.type ? e.target.closest(".accordion-item").classList.add("active") : e.target.closest(".accordion-item").classList.remove("active")
        }
        const r = document.querySelectorAll(".dropdown-notifications-read");
        a && a.addEventListener("click", e => {
            r.forEach(e => {
                e.closest(".dropdown-notifications-item").classList.add("marked-as-read")
            })
        }), r && r.forEach(t => {
            t.addEventListener("click", e => {
                t.closest(".dropdown-notifications-item").classList.toggle("marked-as-read")
            })
        }), document.querySelectorAll(".dropdown-notifications-archive").forEach(t => {
            t.addEventListener("click", e => {
                t.closest(".dropdown-notifications-item").remove()
            })
        }), [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function (e) {
            return new bootstrap.Tooltip(e)
        });
        [].slice.call(document.querySelectorAll(".accordion")).map(function (e) {
            e.addEventListener("show.bs.collapse", i), e.addEventListener("hide.bs.collapse", i)
        });
        if (isRtl && Helpers._addClass("dropdown-menu-end", document.querySelectorAll("#layout-navbar .dropdown-menu")), window.Helpers.setAutoUpdate(!0), window.Helpers.initPasswordToggle(), window.Helpers.initSpeechToText(), window.Helpers.initNavbarDropdownScrollbar(), window.addEventListener("resize", function (e) {
                window.innerWidth >= window.Helpers.LAYOUT_BREAKPOINT && document.querySelector(".search-input-wrapper") && (document.querySelector(".search-input-wrapper").classList.add("d-none"), document.querySelector(".search-input").value = ""), document.querySelector("[data-template^='horizontal-menu']") && setTimeout(function () {
                    window.innerWidth < window.Helpers.LAYOUT_BREAKPOINT ? document.getElementById("layout-menu") && document.getElementById("layout-menu").classList.contains("menu-horizontal") && menu.switchMenu("vertical") : document.getElementById("layout-menu") && document.getElementById("layout-menu").classList.contains("menu-vertical") && menu.switchMenu("horizontal")
                }, 100)
            }, !0), !isHorizontalLayout && !window.Helpers.isSmallScreen() && ("undefined" != typeof TemplateCustomizer && window.templateCustomizer.settings.defaultMenuCollapsed && window.Helpers.setCollapsed(!0, !1), "undefined" != typeof config && config.enableMenuLocalStorage)) try {
            null !== localStorage.getItem("templateCustomizer-" + templateName + "--LayoutCollapsed") && "false" !== localStorage.getItem("templateCustomizer-" + templateName + "--LayoutCollapsed") && window.Helpers.setCollapsed("true" === localStorage.getItem("templateCustomizer-" + templateName + "--LayoutCollapsed"), !1)
        } catch (e) {}
    }(), "undefined" != typeof $ && $(function () {
        window.Helpers.initSidebarToggle();
        var t, a, e, s = $(".search-toggler"),
            n = $(".search-input-wrapper"),
            o = $(".search-input"),
            l = $(".content-backdrop");
        s.length && s.on("click", function () {
            n.length && (n.toggleClass("d-none"), o.focus())
        }), $(document).on("keydown", function (e) {
            var t = e.ctrlKey,
                e = 191 === e.which;
            t && e && n.length && (n.toggleClass("d-none"), o.focus())
        }), o.on("focus", function () {
            n.hasClass("container-xxl") && n.find(".twitter-typeahead").addClass("container-xxl")
        }), o.length && (t = function (s) {
            return function (t, e) {
                let a;
                a = [], s.filter(function (e) {
                    if (e.name.toLowerCase().startsWith(t.toLowerCase())) a.push(e);
                    else {
                        if (e.name.toLowerCase().startsWith(t.toLowerCase()) || !e.name.toLowerCase().includes(t.toLowerCase())) return [];
                        a.push(e), a.sort(function (e, t) {
                            return t.name < e.name ? 1 : -1
                        })
                    }
                }), e(a)
            }
        }, s = "search-vertical.json", $("#layout-menu").hasClass("menu-horizontal") && (s = "search-horizontal.json"), a = $.ajax({
            url: assetsPath + "json/" + s,
            dataType: "json",
            async: !1
        }).responseJSON, o.each(function () {
            var e = $(this);
            o.typeahead({
                hint: !1,
                classNames: {
                    menu: "tt-menu navbar-search-suggestion",
                    cursor: "active",
                    suggestion: "suggestion d-flex justify-content-between px-3 py-2 w-100"
                }
            }, {
                name: "pages",
                display: "name",
                limit: 5,
                source: t(a.pages),
                templates: {
                    header: '<h6 class="suggestions-header text-primary mb-0 mx-3 mt-3 pb-2">Pages</h6>',
                    suggestion: function ({
                        url: e,
                        icon: t,
                        name: a
                    }) {
                        return '<a href="' + e + '"><div><i class="ti ' + t + ' me-2"></i><span class="align-middle">' + a + "</span></div></a>"
                    },
                    notFound: '<div class="not-found px-3 py-2"><h6 class="suggestions-header text-primary mb-2">Pages</h6><p class="py-2 mb-0"><i class="ti ti-alert-circle ti-xs me-2"></i> No Results Found</p></div>'
                }
            }, {
                name: "files",
                display: "name",
                limit: 4,
                source: t(a.files),
                templates: {
                    header: '<h6 class="suggestions-header text-primary mb-0 mx-3 mt-3 pb-2">Files</h6>',
                    suggestion: function ({
                        src: e,
                        name: t,
                        subtitle: a,
                        meta: s
                    }) {
                        return '<a href="javascript:;"><div class="d-flex w-50"><img class="me-3" src="' + assetsPath + e + '" alt="' + t + '" height="32"><div class="w-75"><h6 class="mb-0">' + t + '</h6><small class="text-muted">' + a + '</small></div></div><small class="text-muted">' + s + "</small></a>"
                    },
                    notFound: '<div class="not-found px-3 py-2"><h6 class="suggestions-header text-primary mb-2">Files</h6><p class="py-2 mb-0"><i class="ti ti-alert-circle ti-xs me-2"></i> No Results Found</p></div>'
                }
            }, {
                name: "members",
                display: "name",
                limit: 4,
                source: t(a.members),
                templates: {
                    header: '<h6 class="suggestions-header text-primary mb-0 mx-3 mt-3 pb-2">Members</h6>',
                    suggestion: function ({
                        name: e,
                        src: t,
                        subtitle: a
                    }) {
                        return '<a href="app-user-view-account.html"><div class="d-flex align-items-center"><img class="rounded-circle me-3" src="' + assetsPath + t + '" alt="' + e + '" height="32"><div class="user-info"><h6 class="mb-0">' + e + '</h6><small class="text-muted">' + a + "</small></div></div></a>"
                    },
                    notFound: '<div class="not-found px-3 py-2"><h6 class="suggestions-header text-primary mb-2">Members</h6><p class="py-2 mb-0"><i class="ti ti-alert-circle ti-xs me-2"></i> No Results Found</p></div>'
                }
            }).bind("typeahead:render", function () {
                l.addClass("show").removeClass("fade")
            }).bind("typeahead:select", function (e, t) {
                t.url && (window.location = t.url)
            }).bind("typeahead:close", function () {
                o.val(""), e.typeahead("val", ""), n.addClass("d-none"), l.addClass("fade").removeClass("show")
            }), o.on("keyup", function () {
                "" == o.val() && l.addClass("fade").removeClass("show")
            })
        }), $(".navbar-search-suggestion").each(function () {
            e = new PerfectScrollbar($(this)[0], {
                wheelPropagation: !1,
                suppressScrollX: !0
            })
        }), o.on("keyup", function () {
            e.update()
        }))
    });
