"use strict";
exports.id = 580;
exports.ids = [580];
exports.modules = {

/***/ 9564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactUs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6775);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function ContactUs() {
    const contactRef1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const contactRef2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const contactRef3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const contactRef4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const formRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    react__WEBPACK_IMPORTED_MODULE_2__.useRef;
    const contactRefs = [
        contactRef1,
        contactRef2,
        contactRef3,
        contactRef4
    ];
    // useContactReveal(contactRefs);
    const sendEmail = (e)=>{
        e.preventDefault();
        //emailjs intregration
        _emailjs_browser__WEBPACK_IMPORTED_MODULE_1__/* ["default"].sendForm */ .ZP.sendForm;
        process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_PUBLIC_ID().then(()=>{
            console.log("message sent");
        }, ()=>{
            console.log("Message not sent");
        });
        //reset
        e.target.querySelector(".fullname").value = "";
        e.target.querySelector(".email").value = "";
        e.target.querySelector(".message").value = "";
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "max-w-[1280px] mx-auto my-20 px-4 lg:px-0 md:flex gap-10 items-start justify-between",
        id: "contact",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "contact-left flex flex-col items-start text-left justify-start gap-5 md:gap-10 mb-5 md:mb-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-4xl font-bold uppercase text-yellow-500",
                        children: "Notify us"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-base md:text-xl text-yellow-50 flex gap-4 items-center ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__/* .FaPhoneAlt */ .DNl, {}),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__/* .FaWhatsapp */ .xpo, {}),
                            " +971 50 656 1669"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-base md:text-xl text-yellow-50 flex gap-4  items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__/* .FaPhoneAlt */ .DNl, {}),
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__/* .FaWhatsapp */ .xpo, {}),
                            " +971 54 517 6464"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-base md:text-xl text-yellow-50 flex gap-4  items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__/* .FaEnvelope */ .SRX, {}),
                            " samiajannatevent@gmail.com"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-base md:text-xl text-yellow-50 flex gap-4  items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__/* .FaMapMarkerAlt */ .Nh4, {}),
                            " 4th Floor 413, Adel Ahmed Al Wahedi Building, Al Murar, Deira, Dubai-U.A.E"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: sendEmail,
                className: "flex flex-col gap-5",
                ref: formRef,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "form-control overflow-hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            placeholder: "Write your full name",
                            name: "fullname",
                            required: true,
                            className: "fullname bg-transparent border text-yellow-50 py-4 px-2 md:px-28 rounded-md border-yellow-50/50 outline-none focus:border-yellow-400 duration-300 w-full text-center",
                            ref: contactRef1
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "form-control overflow-hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "text",
                            placeholder: "Write your email",
                            name: "email",
                            required: true,
                            className: "email bg-transparent border text-yellow-50 py-4 px-2 md:px-28 rounded-md border-yellow-50/50 outline-none focus:border-yellow-400 duration-300 w-full text-center",
                            ref: contactRef2
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "form-control overflow-hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            placeholder: "Write your message",
                            name: "message",
                            required: true,
                            rows: "1",
                            cols: "30",
                            className: "message bg-transparent border text-yellow-50 py-4 px-2 md:px-28 rounded-md border-yellow-50/50 outline-none focus:border-yellow-400 duration-300 w-full h-32 text-center  resize-none",
                            ref: contactRef3
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "form-control overflow-hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "submit",
                            value: "Send message",
                            className: "uppercase text-center text-yellow-950 font-semibold bg-yellow-500 border py-4 px-2 md:px-28 rounded-md border-yellow-50/50 outline-none focus:border-yellow-500 hover:bg-yellow-400  duration-300 w-full cursor-pointer ",
                            ref: contactRef4
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 9782:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7814);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`E:\Needed\Projects\samiajannatevent-web\app\components\ContactUs.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;