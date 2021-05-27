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


## create-react-appの実行方法

```sh
$ npx create-react-app <プロジェクト名> --template=typescript --use-npm
```
### semantic-uiのインストール方法
```sh
$ npm install semantic-ui-react semantic-ui-css
```

### react-routerのインストール方法
#### 1. react-routerをインストール
```sh
$ npm install react-router react-router-dom
```
#### 2. typesyncでTypeScriptにreact-routerの型ファイルを追加する
##### 2-1. 下記コマンドを実行する
```sh
$ npm install -D typesync
```

##### 2-2. package.jsonのscriptsに下記の設定を追加する
```json
"scripts": {
  ...
  "preinstall": "typesync || :",
  "postinstall": "typesync && npm install --ignore-scripts"
  ...
  }
```

##### 2-3. 2-2.までの設定内容を反映する
```sh
$ npm install
$ npm run preinstall
```

### react-helmetのインストール方法
```sh
$ npm install react-helmet
# typesyncでTypeScriptにreact-routerの型ファイルを追加する
$ npm run preinstall
$ npm install --save-dev @types/react-helmet
```

### reduxのインストール方法
```sh
$ npm install redux react-redux
# typesyncでTypeScriptにreact-routerの型ファイルを追加する
$ npm run preinstall
```

## オンライン教材
  - 苦しんで覚える React
    - https://zenn.dev/sadness_ojisan/books/introduction-of-react-introduction

## 参考資料
  - https://qiita.com/TsutomuNakamura/items/72d8cf9f07a5a30be048

  - webpack-cliのバージョン違いによるエラーの対応方法
    - https://zenn.dev/fuuukeee3/articles/ab4189779b6602457742
  
  - Visual Studio Code + mac で非常に良く使うショートカット
    - https://qiita.com/matsuyoro/items/bbf7ef7eb9f36b65cd27
  
  - JSのスプレッド構文を理解する
    - `<Todo key={todo.id} {...todo} />;`の`...演算子`を解読するのに必要
    - https://qiita.com/akisx/items/682a4283c13fe336c547
  - TypeScriptの@typesパッケージをtypesyncで自動管理する
     - https://qiita.com/yamadashy/items/225f287a25cd3f6ec151
