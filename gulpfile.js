/**
 * Created by songdonghong on 2016/6/13.
 */
var path = require('path');
var gutil = require('gulp-util');
//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
 //   less = require('gulp-less');
    uglify = require('gulp-uglify'),//压缩
 concat = require('gulp-concat'),//合并
    sourcemaps = require('gulp-sourcemaps'),//
autoprefixer = require('gulp-autoprefixer');//自动补全css
var gulpfs=require('gulp-fs');//创建目录结构


/*
*
* */
//定义一个testLess任务（自定义任务名称）
gulp.task('pack-js', function () {
    gulp.src(['./public/wap/src/js/*.js']) //该任务针对的文件
  //      .pipe(less()) //该任务调用的模块
       //
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('all.js'))//合并
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/wap/disk/js')); //将会在src/css下生成index.css
});

gulp.task('pack-css', function () {
    gulp.src(['./public/wap/src/css/*.css']) //该任务针对的文件
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(concat('all.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/wap/disk/css')); //将会在src/css下生成index.css
});
gulp.task('makeDir', function () {
    gulpfs(__dirname+"/public/web/src/js");
    gulpfs(__dirname+"/public/web/src/css");
    gulpfs(__dirname+"/public/web/src/img");
    gulpfs(__dirname+"/public/wap/src/js");
    gulpfs(__dirname+"/public/wap/src/css");
    gulpfs(__dirname+"/public/wap/src/img");
    gulpfs(__dirname+"/view");
    gulpfs(__dirname+"/routes");

});
gulp.task('default',['testUglify','testAutoprefixer']); //定义默认任务 elseTask为其他任务，该示例没有定义elseTask任务

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
//gulp.dest(path[, options]) 处理完后文件生成路径
