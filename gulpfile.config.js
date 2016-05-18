module.exports = {
    js: {
        bower: [
            "bower_components/jquery/dist/jquery.js",
            "bower_components/angular/angular.js",
            "bower_components/bootstrap/dist/js/bootstrap.js"
        ],
        node_modules: [
            "node_modules/angular-loading-bar/build/loading-bar.js",
            "node_modules/angular-toastr/dist/angular-toastr.js",
            "node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js",
            "node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js",
            "node_modules/angular-ui-router/release/angular-ui-router.js"
        ],
        app: [
            "www/**/*.js"
        ]
    },
    css: {
        node_modules: [
            "node_modules/angular-loading-bar/build/loading-bar.css",
            "node_modules/angular-toastr/dist/angular-toastr.css",
            "node_modules/angular-ui-bootstrap/dist/ui-bootstrap-csp.css"
        ],
        bower: [
            "bower_components/bootstrap/dist/css/bootstrap.css"
        ]
    },
    fonts: [
        "bower_components/bootstrap/dist/fonts/**"
    ],
    sass: [
        "www/main.scss"
    ],
    templatecache: [
        "www/app/**/*.html"
    ]
}