# about

Javascriptは2015年、大幅にアップデートされました。

通称ES6（ECMAScript6）

ES6ではJavaやC#等のオブジェクト指向言語を意識したClass構文が追加されました。

ネット上で、「ES6以降の記述では～」という記事をよく見かけると思います。

```
※Javascriptの正式名称はECMAScriptと言います。

※ECMA / European Computer Manufacturers Association（欧州電子計算機工業会）

※コンピューターの標準化団体です。
```

本ページでは、ES6以降のオブジェクト指向構文を使ってコードを記述していきたいと思います。

# ピカチュウクラス

```Javascript
//classPikachu.js
class Pikachu {

    //コンストラクタ
    constructor() {
        this.name = "ピカチュウ";
        this.type = "でんき";
    }

    //showメソッド
    show() {
        console.log("name:" + this.name);
        console.log("type:" + this.type);
    }

}

//インスタンス化
const pk = new Pikachu();

//showメソッド実行
pk.show();
```

## 実行1 Node.js

```
node classPikachu.js
```
```
name:ピカチュウ
type:でんき
```

## 実行2 GoogleChrome（開発ツール）
```
Chrome -> F12（開発ツール） -> Console
```
![pika](images/classpika1.png)
