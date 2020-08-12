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