# React.jsの勉強用リポジトリ
## githubリポジトリ
  - https://github.com/HokutoMorita/react-tutorial
## プロジェクト作成
```
$ npm init
```

## webpackに関するパッケージをインストール
```
$ npm install --save-dev webpack webpack-cli webpack-dev-server
$ npm install -g webpack webpack-cli
$ npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
$ npm install --save-dev react react-dom
```

## webpackコマンドでclient.min.jsファイルを生成
```
$ webpack --mode development
```

## 開発時に使用するwebpackで用意されているwebサーバの起動
```
$ npm start
```

WebブラウザへのリクエストURL
http://localhost:8080


## 参考資料
  - https://qiita.com/TsutomuNakamura/items/72d8cf9f07a5a30be048

  - webpack-cliのバージョン違いによるエラーの対応方法
    - https://zenn.dev/fuuukeee3/articles/ab4189779b6602457742
