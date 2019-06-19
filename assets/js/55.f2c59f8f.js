(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{273:function(t,e,a){"use strict";a.r(e);var s={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},r=a(6),o=Object(r.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[a("h1",{attrs:{id:"⚙️-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#⚙️-installation","aria-hidden":"true"}},[t._v("#")]),t._v(" ⚙️ Installation")]),t._v(" "),a("blockquote",[a("p",[t._v("The easiest way to get up-and-running is with the "),a("a",{attrs:{href:"https://github.com/directus/directus",target:"_blank",rel:"noopener noreferrer"}},[t._v("Directus Suite"),a("OutboundLink")],1),t._v(", which includes the "),a("a",{attrs:{href:"https://github.com/directus/api",target:"_blank",rel:"noopener noreferrer"}},[t._v("Directus API"),a("OutboundLink")],1),t._v(", the "),a("a",{attrs:{href:"https://github.com/directus/app",target:"_blank",rel:"noopener noreferrer"}},[t._v("Directus App"),a("OutboundLink")],1),t._v(", and all dependencies.")])]),t._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),a("p",[t._v("Directus is developed and tested on the LAMP stack, and therefore this is the only officially supported environment. Alternate stacks (NGINX, Caddy, MariaDB, Percona, etc) may also work but you should proceed at your own risk. Please ensure your server meets the following requirements:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Apache")])]),t._v(" "),a("li",[a("strong",[t._v("MySQL 5.7+")]),t._v(" "),a("ul",[a("li",[t._v("A Database (empty or existing)")]),t._v(" "),a("li",[t._v("A Database User (with access to database)")])])]),t._v(" "),a("li",[a("strong",[t._v("PHP 7.1+")]),t._v(" "),a("ul",[a("li",[t._v("Extensions:  "),a("code",[t._v("pdo")]),t._v(", "),a("code",[t._v("mysql")]),t._v(", "),a("code",[t._v("curl")]),t._v(", "),a("code",[t._v("gd")]),t._v(", "),a("code",[t._v("fileinfo")]),t._v(", and "),a("code",[t._v("mbstring")])])])])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Detailed Requirements")]),t._v(" "),a("p",[t._v("View our "),a("router-link",{attrs:{to:"/advanced/requirements.html"}},[t._v("detailed requirements page")]),t._v(" to learn more about these requirements, neccesary permissions, and other server-specific prerequisites.")],1)]),t._v(" "),a("h2",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup","aria-hidden":"true"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),a("p",[t._v("Running the following "),a("code",[t._v("git")]),t._v(" command from your server's command line is the preferred method of installing the codebase.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/directus/directus.git\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Other Install Methods")]),t._v(" "),a("p",[t._v("Alternatively, you can choose from one of these other installation methods.")]),t._v(" "),a("ul",[a("li",[a("router-link",{attrs:{to:"/advanced/other-install-methods.html#docker"}},[t._v("Docker")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/advanced/other-install-methods.html#manual"}},[t._v("Zip, Tar, or FTP")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/advanced/other-install-methods.html#standalone"}},[t._v("Standalone")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"/advanced/other-install-methods.html#source"}},[t._v("Source")])],1)])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If you are using Apache, make sure "),a("code",[t._v("mod_rewrite")]),t._v(" and "),a("code",[t._v("AllowOverride")]),t._v(" are enabled. "),a("router-link",{attrs:{to:"/advanced/server-setup.html#apache"}},[t._v("Read more")])],1)]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If after installation you are experiencing missing functions or packages errors, "),a("a",{attrs:{href:"https://github.com/directus/api/issues/620#issuecomment-449905619",target:"_blank",rel:"noopener noreferrer"}},[t._v("follow these steps"),a("OutboundLink")],1),t._v(" to recreate "),a("code",[t._v("composer.json")]),t._v(" and update the composer autoloader. If there's already a "),a("code",[t._v("composer.json")]),t._v(", either run "),a("a",{attrs:{href:"https://getcomposer.org/doc/03-cli.md#dump-autoload-dumpautoload-",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("composer dump-autoload")]),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"configure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure","aria-hidden":"true"}},[t._v("#")]),t._v(" Configure")]),t._v(" "),a("ol",[a("li",[t._v("Set your document root to the "),a("code",[t._v("/public")]),t._v(" directory")]),t._v(" "),a("li",[t._v("Navigate your browser to the App at "),a("code",[t._v("/admin")])]),t._v(" "),a("li",[t._v("Follow the prompts to complete configuration (see below)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Field")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Project Name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The name of your project")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Project Key")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("For now, only the "),a("code",[t._v("_")]),t._v(" default is available through the installer")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Admin Email")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The email address of your first administrator")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Admin Password")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The password for your first administrator")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Host")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The server/host of your database")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Port")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The port for the database (default is 3306)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Database User")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The database user")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Database Password")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The database user's password")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Database Name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The name of the database")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Database Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("As of now, Directus only supports MySQL")])])])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Manual Configuration")]),t._v(" "),a("p",[t._v("Alternatively, you can "),a("router-link",{attrs:{to:"/advanced/api/configuration.html"}},[t._v("manually configure Directus")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"logging-in"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging-in","aria-hidden":"true"}},[t._v("#")]),t._v(" Logging In")]),t._v(" "),a("p",[t._v("Once you've completed the installer you will automatically be taken to the login page of the Directus App (again, at "),a("code",[t._v("/admin")]),t._v("). You can then login with the credentials you provided during configuration, or the default credentials ("),a("code",[t._v("admin@example.com")]),t._v(" and "),a("code",[t._v("password")]),t._v(") if configured manually.")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("👍 You've successfully installed Directus! Now you're ready to "),a("router-link",{attrs:{to:"/guides/collections.html"}},[t._v("add your first collection")]),t._v(".")],1)])},[],!1,null,null,null);o.options.__file="installation.md";e.default=o.exports}}]);