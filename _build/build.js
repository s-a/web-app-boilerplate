({
    optimizeCss: "standard",
    removeCombined: true,
    preserveLicenseComments: false,
    appDir: "../www-root-dev",
    dir: "../www-root",
    keepBuildDir: false,
    optimize: "uglify2",
    mainConfigFile: "../www-root-dev/assets/js/app_main.js",
    modules: [{
        name: "app_main"
    }]
})