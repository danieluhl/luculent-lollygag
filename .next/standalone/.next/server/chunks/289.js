"use strict";
exports.id = 289;
exports.ids = [289];
exports.modules = {

/***/ 3858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Date)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);


function Date({ dateString , title  }) {
    const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.parseISO)(dateString);
    let foo;
    try {
        foo = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, "dd MMM yyyy");
    } catch (e) {
        console.log(date);
        console.log(dateString);
        console.log(title);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
        dateTime: dateString,
        children: (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(date, "dd MMM yyyy")
    });
};


/***/ }),

/***/ 4738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qr": () => (/* binding */ getPageExtraData),
/* harmony export */   "g4": () => (/* binding */ updatePageViews),
/* harmony export */   "y8": () => (/* binding */ updatePageLikes)
/* harmony export */ });
/* unused harmony export supabase */
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2885);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);

const supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)("https://iyvwqamzwsuiekomctrp.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0NDI3Njk1MywiZXhwIjoxOTU5ODUyOTUzfQ.7XYYmauqXCCa-xm43vYbxAfV6qdaLlBv2_Pv6oMo5TI");
const PAGE_DATA_TABLE_NAME = "page_data";
const getPageExtraData = async ()=>{
    const { data: pageViews , error  } = await supabase.from(PAGE_DATA_TABLE_NAME).select("*");
    const allPageViewsData = pageViews.reduce((acc, { id , view_count , like_count  })=>{
        acc[id] = {
            views: view_count,
            likes: like_count
        };
        return acc;
    }, {});
    if (error) {
        console.error(`getAllPageViews: ${error}`);
    }
    return allPageViewsData;
};
const insertPageRecord = async (pageId)=>{
    const { data , error  } = await supabase.from(PAGE_DATA_TABLE_NAME).insert([
        {
            id: pageId,
            view_count: 0,
            like_count: 0
        }
    ]);
    if (error) {
        console.error(`getAllPageViews: ${error}`);
    }
    return data;
};
const updatePageViews = async (pageId)=>{
    // if it's not already there, insert
    const allPageViews = await getPageExtraData();
    if (!allPageViews[pageId]) {
        await insertPageRecord(pageId);
    }
    console.log(`incrementing ${pageId}`);
    const { data , error  } = await supabase.rpc("incrementviews", {
        page_id: pageId
    });
    if (error) {
        console.error(`getAllPageViews: ${error}`);
    }
    return data;
};
const updatePageLikes = async (pageId)=>{
    // if it's not already there, insert
    const allPageViews = await getPageExtraData();
    if (!allPageViews[pageId]) {
        await insertPageRecord(pageId);
    }
    console.log(`incrementing ${pageId}`);
    const { data , error  } = await supabase.rpc("incrementlikes", {
        page_id: pageId
    });
    if (error) {
        console.error(`getAllPageViews: ${error}`);
    }
    return data;
};


/***/ }),

/***/ 8904:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AU": () => (/* binding */ getPostData),
/* harmony export */   "Le": () => (/* binding */ getAllPostIds),
/* harmony export */   "ld": () => (/* binding */ getSortedPostsData)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4390);
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6688);
/* harmony import */ var remark_frontmatter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(222);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6809);
/* harmony import */ var remark_rehype__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2509);
/* harmony import */ var rehype_stringify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([unified__WEBPACK_IMPORTED_MODULE_3__, remark_parse__WEBPACK_IMPORTED_MODULE_4__, remark_frontmatter__WEBPACK_IMPORTED_MODULE_5__, remark_gfm__WEBPACK_IMPORTED_MODULE_6__, remark_rehype__WEBPACK_IMPORTED_MODULE_7__, rehype_stringify__WEBPACK_IMPORTED_MODULE_8__]);
([unified__WEBPACK_IMPORTED_MODULE_3__, remark_parse__WEBPACK_IMPORTED_MODULE_4__, remark_frontmatter__WEBPACK_IMPORTED_MODULE_5__, remark_gfm__WEBPACK_IMPORTED_MODULE_6__, remark_rehype__WEBPACK_IMPORTED_MODULE_7__, rehype_stringify__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// lib is where you fetch data from sources, here we're fetching at build
//   time from the filesystem but we could just as easily hit some endpoint









const postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "posts");
async function getFiles(currentPath = postsDirectory) {
    // map with shape {[post-id]: [path-to-post]}
    let idPathMap = new Map();
    // cache the result so this is only called once
    if (idPathMap.size > 0) {
        return;
    }
    const entries = await fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(currentPath, {
        withFileTypes: true
    });
    // Get files within the current directory and add a currentPath key to the file objects
    entries.filter((file)=>!file.isDirectory()).forEach((file)=>idPathMap.set(file.name.replace(".md", ""), `${currentPath}/${file.name}`));
    // Get folders within the current directory
    const folders = entries.filter((folder)=>folder.isDirectory());
    /*
    Add the found files within the subdirectory to the files array by calling the
    current function itself
  */ for (let folder of folders){
        const folderContentsMap = await getFiles(`${currentPath}/${folder.name}`);
        idPathMap = new Map([
            ...idPathMap,
            ...folderContentsMap
        ]);
    }
    return idPathMap;
}
async function getSortedPostsData() {
    // sets idPathMap
    const idPathMap = await getFiles();
    let allPostsData = [];
    idPathMap.forEach((path, id)=>{
        // Read markdown file as string
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path, "utf8");
        // Use gray-matter to parse the post metadata section
        const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
        // Combine the data with the id
        allPostsData.push({
            id,
            ...matterResult.data
        });
    });
    // Sort posts by date
    return allPostsData.sort((a, b)=>{
        const compareDateA = a.updatedDate ?? a.date;
        const compareDateB = b.updatedDate ?? b.date;
        return compareDateA < compareDateB ? 1 : -1;
    });
}
async function getAllPostIds() {
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    const idPathMap = await getFiles();
    return Array.from(idPathMap.keys()).map((id)=>{
        return {
            params: {
                id
            }
        };
    });
}
// get frontmatter data related to one post given it's id
async function getPostData(id) {
    const idPathMap = await getFiles();
    const fullPath = idPathMap.get(id);
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
    // use gray-matter to parse the post metdata section
    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
    // use remark to convert markdown to HTML string
    const processedContent = await (0,unified__WEBPACK_IMPORTED_MODULE_3__.unified)().use(remark_parse__WEBPACK_IMPORTED_MODULE_4__["default"]).use(remark_frontmatter__WEBPACK_IMPORTED_MODULE_5__["default"]).use(remark_gfm__WEBPACK_IMPORTED_MODULE_6__["default"]).use(remark_rehype__WEBPACK_IMPORTED_MODULE_7__["default"]).use(rehype_stringify__WEBPACK_IMPORTED_MODULE_8__["default"]).process(fileContents);
    const contentHtml = processedContent.toString();
    // combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;