exports.id = 162;
exports.ids = [162];
exports.modules = {

/***/ 9849:
/***/ ((module) => {

// Exports
module.exports = {
	"outerContainer": "layout_outerContainer__ExiGH",
	"container": "layout_container__fbLkO",
	"header": "layout_header__kY0Lt",
	"backToHome": "layout_backToHome__9sjx_"
};


/***/ }),

/***/ 6024:
/***/ ((module) => {

// Exports
module.exports = {
	"toggle": "toggle_toggle__dvuTg",
	"toggleInput": "toggle_toggleInput___RU7f",
	"toggleCheck": "toggle_toggleCheck__xUj3r",
	"toggleUncheck": "toggle_toggleUncheck__VtG_u",
	"toggleContainer": "toggle_toggleContainer__K3RPH",
	"toggleCircle": "toggle_toggleCircle__42TBJ",
	"toggleChecked": "toggle_toggleChecked__WEX0E"
};


/***/ }),

/***/ 4213:
/***/ ((module) => {

// Exports
module.exports = {
	"themeWrapper": "theme-dark_themeWrapper__Kp4gF",
	"tabHeading": "theme-dark_tabHeading__uiGkI",
	"activeTabHeading": "theme-dark_activeTabHeading__Rbxs4"
};


/***/ }),

/***/ 8836:
/***/ ((module) => {

// Exports
module.exports = {
	"themeWrapper": "theme-light_themeWrapper__bvKnI",
	"tabHeading": "theme-light_tabHeading__U_yuD",
	"activeTabHeading": "theme-light_activeTabHeading__9CFTC"
};


/***/ }),

/***/ 1928:
/***/ ((module) => {

// Exports
module.exports = {
	"heading2Xl": "utils_heading2Xl___9fFP",
	"headingXl": "utils_headingXl__u25Y2",
	"headingLg": "utils_headingLg__5535D",
	"headingMd": "utils_headingMd__gD1Ok",
	"borderCircle": "utils_borderCircle__s2nTm",
	"colorInherit": "utils_colorInherit__mSH_x",
	"padding1px": "utils_padding1px__PWQKR",
	"list": "utils_list__4Mu4l",
	"listItem": "utils_listItem__s2m6i",
	"lightText": "utils_lightText__eUzGY",
	"greyLightText": "utils_greyLightText__DCLw8",
	"tag": "utils_tag__r8GDN",
	"selectedTag": "utils_selectedTag__rQ1Jy",
	"headings": "utils_headings__ylTEg"
};


/***/ }),

/***/ 6162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout),
  "y": () => (/* binding */ siteTitle)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./components/layout.module.css
var layout_module = __webpack_require__(9849);
var layout_module_default = /*#__PURE__*/__webpack_require__.n(layout_module);
// EXTERNAL MODULE: ./styles/utils.module.css
var utils_module = __webpack_require__(1928);
var utils_module_default = /*#__PURE__*/__webpack_require__.n(utils_module);
// EXTERNAL MODULE: ./styles/theme-dark.module.css
var theme_dark_module = __webpack_require__(4213);
var theme_dark_module_default = /*#__PURE__*/__webpack_require__.n(theme_dark_module);
// EXTERNAL MODULE: ./styles/theme-light.module.css
var theme_light_module = __webpack_require__(8836);
var theme_light_module_default = /*#__PURE__*/__webpack_require__.n(theme_light_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/toggle.module.css
var toggle_module = __webpack_require__(6024);
var toggle_module_default = /*#__PURE__*/__webpack_require__.n(toggle_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/toggle.js



const ToggleButton = ({ onDarkmodeToggle , isDarkMode  })=>{
    const triggerToggle = ()=>{
        onDarkmodeToggle(!isDarkMode);
    };
    const toggleClasses = external_classnames_default()((toggle_module_default()).toggle, {
        [(toggle_module_default()).toggleChecked]: isDarkMode
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onClick: triggerToggle,
        className: toggleClasses,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (toggle_module_default()).toggleContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (toggle_module_default()).toggleCheck,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "\uD83C\uDF1C"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (toggle_module_default()).toggleUncheck,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "\uD83C\uDF1E"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (toggle_module_default()).toggleCircle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                onChange: triggerToggle,
                type: "checkbox",
                "aria-label": "Toggle Button",
                className: (toggle_module_default()).toggleInput
            })
        ]
    });
};
/* harmony default export */ const toggle = (ToggleButton);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/layout.js










const layout_name = "Luculent Lollygag";
const siteTitle = "Reyan Blog";
const THEMES = {
    DARK: "dark",
    LIGHT: "light"
};
const STORAGE_THEME_KEY = "theme";
const THEMES_MAP = {
    [THEMES.DARK]: (theme_dark_module_default()),
    [THEMES.LIGHT]: (theme_light_module_default())
};
function Layout({ children , home  }) {
    const { 0: theme , 1: setTheme  } = (0,external_react_.useState)(THEMES.LIGHT);
    const updateTheme = ()=>{
        const newTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
        setTheme(newTheme);
        window.localStorage.setItem(STORAGE_THEME_KEY, newTheme);
    };
    (0,external_react_.useEffect)(()=>{
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? THEMES.DARK : THEMES.LIGHT;
        // check local storage to initialize state
        const savedIsDarkMode = window.localStorage.getItem(STORAGE_THEME_KEY) || systemTheme;
        setTheme(savedIsDarkMode);
    }, []);
    const themeStyles = THEMES_MAP[theme];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: themeStyles.themeWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${(layout_module_default()).container}`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: "Blog about software engineering, management, and other interesting thoughts"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "og:title",
                            content: siteTitle
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(toggle, {
                    onDarkmodeToggle: updateTheme,
                    isDarkMode: theme === THEMES.DARK
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("header", {
                    className: (layout_module_default()).header,
                    children: home ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                priority: true,
                                src: "/images/reyan.png",
                                className: (utils_module_default()).borderCircle,
                                height: 300,
                                width: 300,
                                alt: layout_name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: (utils_module_default()).heading2Xl,
                                children: layout_name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: (utils_module_default()).lightText,
                                children: "A blog by Dan Uhl"
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        priority: true,
                                        src: "/images/scene.jpeg",
                                        className: (utils_module_default()).borderCircle,
                                        height: 108,
                                        width: 108,
                                        alt: layout_name
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: (utils_module_default()).headingLg,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: (utils_module_default()).colorInherit,
                                        children: layout_name
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    children: children({
                        theme: themeStyles
                    })
                }),
                !home && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (layout_module_default()).backToHome,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "← Back to home"
                        })
                    })
                })
            ]
        })
    });
};


/***/ })

};
;