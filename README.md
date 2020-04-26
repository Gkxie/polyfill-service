# 在线polyfill

## 说明

根据浏览器缺少的esnext语法自动填充。如果检测到已经存在通过其他方式打包的polyfill语法，则不会替换避免引起冲突。

## 使用

运行以下命令
```bash
cd polyfill-service
npm ci
npm start
```
访问
```http request
http://localhost:8080/polyfill.js
```
或者
```http request
http://localhost:8080/polyfill.min.js
```
更多使用说明
```http request
https://polyfill.io/v3/url-builder/
```
