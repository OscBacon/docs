(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{287:function(e,t,a){"use strict";a.r(t);var s={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},r=a(6),o=Object(r.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[a("h1",{attrs:{id:"setup-development-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-development-environment","aria-hidden":"true"}},[e._v("#")]),e._v(" Setup Development Environment")]),e._v(" "),a("blockquote",[a("p",[e._v("If you would like to make contributions to the Directus codebase then you'll need to install the App and API from source. However, you do not need to do this to build new extensions.")])]),e._v(" "),a("h2",{attrs:{id:"api-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-source","aria-hidden":"true"}},[e._v("#")]),e._v(" API Source")]),e._v(" "),a("p",[e._v("In order to work on the API, you'll need to install the source version locally. The application sourcecode is being hosted in the "),a("a",{attrs:{href:"https://github.com/directus/api",target:"_blank",rel:"noopener noreferrer"}},[e._v("directus/api"),a("OutboundLink")],1),e._v(" repo on GitHub.")]),e._v(" "),a("h3",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("ul",[a("li",[e._v("A HTTP Web Server that supports URL rewrites\n"),a("ul",[a("li",[a("em",[e._v("Comes with .htaccess included for Apache")])])])]),e._v(" "),a("li",[e._v("MySQL 5.7+\n"),a("ul",[a("li",[e._v("Database (empty or existing)")]),e._v(" "),a("li",[e._v("Database User (with access to database)")])])]),e._v(" "),a("li",[e._v("PHP 7.1+\n"),a("ul",[a("li",[a("code",[e._v("pdo")]),e._v(" + "),a("code",[e._v("mysql")])]),e._v(" "),a("li",[a("code",[e._v("curl")])]),e._v(" "),a("li",[a("code",[e._v("gd")])]),e._v(" "),a("li",[a("code",[e._v("fileinfo")])]),e._v(" "),a("li",[a("code",[e._v("mbstring")])]),e._v(" "),a("li",[a("code",[e._v("xml")]),e._v(" (Only if you are installing phpunit)")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),a("OutboundLink")],1),e._v(" v8.11.3 or higher (preferably v10.6+)")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git"),a("OutboundLink")],1),e._v(" to fetch the source code from GitHub")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx",target:"_blank",rel:"noopener noreferrer"}},[e._v("Composer"),a("OutboundLink")],1),e._v(" to install dependencies")])]),e._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Important")]),e._v(" "),a("p",[a("router-link",{attrs:{to:"/advanced/requirements.html"}},[e._v("Click here to learn more about these system requirements, neccesary permissions, and other important and server-specific prerequisites.")])],1)]),e._v(" "),a("h3",{attrs:{id:"setup-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-steps","aria-hidden":"true"}},[e._v("#")]),e._v(" Setup Steps")]),e._v(" "),a("h4",{attrs:{id:"_1-clone-the-repo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-clone-the-repo","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. Clone the repo")]),e._v(" "),a("p",[e._v("Clone the repo by running")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/directus/api.git\n")])])]),a("p",[e._v("OR")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" clone git@github.com:directus/api.git\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Fork")]),e._v(" "),a("p",[e._v("If you want to work on your fork of the project, remember to replace "),a("code",[e._v("directus")]),e._v(" with your GitHub username in the url above")])]),e._v(" "),a("h4",{attrs:{id:"_2-install-the-composer-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-install-the-composer-dependencies","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. Install the Composer dependencies")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("composer "),a("span",{attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])]),a("p",[e._v("If you don't want to install any development package use the "),a("code",[e._v("--no-dev")]),e._v(" option.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("composer "),a("span",{attrs:{class:"token function"}},[e._v("install")]),e._v(" --no-dev\n")])])]),a("h4",{attrs:{id:"_3-create-a-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-create-a-database","aria-hidden":"true"}},[e._v("#")]),e._v(" 3. Create a database")]),e._v(" "),a("p",[e._v("On your local server, create a new database to use with the API.")]),e._v(" "),a("h5",{attrs:{id:"boilerplate-sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#boilerplate-sql","aria-hidden":"true"}},[e._v("#")]),e._v(" Boilerplate SQL")]),e._v(" "),a("p",[e._v("If you'd rather skip the installer (next step), you can simply import the boilerplate schema file from "),a("a",{attrs:{href:"https://github.com/directus/api/blob/master/src/schema.sql",target:"_blank",rel:"noopener noreferrer"}},[e._v("the included schema.sql file"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h5",{attrs:{id:"demo-sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo-sql","aria-hidden":"true"}},[e._v("#")]),e._v(" Demo SQL")]),e._v(" "),a("p",[e._v("This file comes with the boilerplate schema as well as some dummy collections, fields, data, and Settings. You can "),a("a",{attrs:{href:"https://sql.directus.app/demo.sql",target:"_blank",rel:"noopener noreferrer"}},[e._v("download a demo SQL schema"),a("OutboundLink")],1),e._v(" to skip the API's installation process.")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Credentials")]),e._v(" "),a("p",[e._v("If you are skipping the installer and adding the SQL directly to your database, the default login credentials are:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("User:")]),e._v(" "),a("code",[e._v("admin@example.com")])]),e._v(" "),a("li",[a("strong",[e._v("Password:")]),e._v(" "),a("code",[e._v("password")])])])]),e._v(" "),a("h4",{attrs:{id:"_4-config-file-installer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-config-file-installer","aria-hidden":"true"}},[e._v("#")]),e._v(" 4. Config File Installer")]),e._v(" "),a("p",[e._v("The API uses a config file to know which database to connect to. Copy or rename the "),a("code",[e._v("/config/api_sample.php")]),e._v(" file to "),a("code",[e._v("/config/api.php")]),e._v(" (default project) and edit the settings as indicated.")]),e._v(" "),a("p",[a("router-link",{attrs:{to:"/advanced/api/standalone.html"}},[e._v("Learn more about configuring the API")])],1),e._v(" "),a("h2",{attrs:{id:"application-source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-source","aria-hidden":"true"}},[e._v("#")]),e._v(" Application Source")]),e._v(" "),a("p",[e._v("In order to work on the app, you'll need to install the application locally.")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("To quickly debug the application you can use "),a("a",{attrs:{href:"https://next.demo-api.directus.app",target:"_blank",rel:"noopener noreferrer"}},[e._v("our demo API"),a("OutboundLink")],1),e._v(" by authenticating with the credentials: "),a("code",[e._v("admin@example.com")]),e._v(" and "),a("code",[e._v("password")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"requirements-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("p",[e._v("The application is built with "),a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js"),a("OutboundLink")],1),e._v(" and heavily relies on "),a("a",{attrs:{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),a("OutboundLink")],1),e._v(" to be bundled / transpiled to browser-usable code. In order to work on Directus, you need "),a("a",{attrs:{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),a("OutboundLink")],1),e._v(" v8.11.3 or higher (preferably v10.6+).")]),e._v(" "),a("p",[e._v("The application source code is being hosted in the "),a("a",{attrs:{href:"https://github.com/directus/app",target:"_blank",rel:"noopener noreferrer"}},[e._v("directus/app"),a("OutboundLink")],1),e._v(" repo on GitHub.")]),e._v(" "),a("h3",{attrs:{id:"steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps","aria-hidden":"true"}},[e._v("#")]),e._v(" Steps")]),e._v(" "),a("h4",{attrs:{id:"_1-clone-the-repo-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-clone-the-repo-2","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. Clone the repo")]),e._v(" "),a("p",[e._v("Clone the repo by running")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/directus/app.git\n")])])]),a("p",[e._v("OR")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[e._v("git")]),e._v(" clone git@github.com:directus/app.git\n")])])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Fork")]),e._v(" "),a("p",[e._v("If you want to work on your fork of the project, remember to replace "),a("code",[e._v("directus")]),e._v(" with your GitHub username in the url above.")])]),e._v(" "),a("h4",{attrs:{id:"_2-install-the-npm-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-install-the-npm-dependencies","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. Install the "),a("a",{attrs:{href:"https://npmjs.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm"),a("OutboundLink")],1),e._v(" dependencies")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])]),a("h4",{attrs:{id:"_3-add-a-config-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-add-a-config-file","aria-hidden":"true"}},[e._v("#")]),e._v(" 3. Add a config file")]),e._v(" "),a("p",[e._v("The application makes use of a config file that's found in the "),a("code",[e._v("public")]),e._v(" folder in the root of the folder. To prevent issues when upgrading the app, we decided to ignore the default version of this config file. We do provide an example that you can duplicate. Move or rename the "),a("code",[e._v("/public/config_example.js")]),e._v(" file to "),a("code",[e._v("/public/config.js")]),e._v(" file to your hearts content.")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The default config file lets you test the app using the live Directus Demo API. Don't forget to add the address of your local API in order to test it.")])]),e._v(" "),a("h4",{attrs:{id:"_4-build-run-the-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-build-run-the-app","aria-hidden":"true"}},[e._v("#")]),e._v(" 4. Build / run the app")]),e._v(" "),a("p",[e._v("The production version of the application is a static html file that can be hosted on any static file server. In order to build the app for production, run")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build\n")])])]),a("p",[e._v("To checkout the app itself, you'll need a static file server. Any static file server, like MAMP, local Apache or Caddy, should work. If you don't have a quick server at hand, I recommend using "),a("a",{attrs:{href:"https://www.npmjs.com/package/http-server",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("http-server")]),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Install "),a("code",[e._v("http-server")]),e._v(" globally, run")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{attrs:{class:"token function"}},[e._v("install")]),e._v(" --global http-server\n")])])]),a("p",[e._v("When it's installed, you can serve the app by running "),a("code",[e._v("http-server")]),e._v(" from the "),a("code",[e._v("dist")]),e._v(" folder that has been created by the "),a("code",[e._v("build")]),e._v(" command:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[e._v("cd")]),e._v(" dist\nhttp-server\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Development Mode")]),e._v(" "),a("p",[e._v("If you're actively working on the application, we recommend using the development mode. By using "),a("code",[e._v("npm run dev")]),e._v(" instead of "),a("code",[e._v("npm run build")]),e._v(", the buildchain will launch a local file server and will auto-rebuild the code and auto-refresh the browser on save of a file.")])])])},[],!1,null,null,null);o.options.__file="source.md";t.default=o.exports}}]);