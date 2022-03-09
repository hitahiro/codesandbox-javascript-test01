/**
 * const, let等の変数宣言
 */

// 従来のJavaScript
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// varを使うと上書きや再宣言などが自由にできるため思わぬバグの原因となった
// そのためES2015では const、let という変数宣言ができるようになった

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // constは上書き不可能
// val3 = "const変数を上書き";

// // constは再宣言不可能
// const val3 = "const変数を再宣言";

// // constで定義したオブジェクトのプロパティを変更および追加することが可能
// const val4 = {
//   name: "hita",
//   age: 40
// };
// val4.name = "hitaを上書き";
// val4.address = "福岡を追加";

// // constで定義したオブジェクトの上書きや再宣言は不可能
// val4 = { a: 1 };
// console.log(val4);

// // constで定義した配列のプロパティを追加や変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "hita";
// const age = 40;

// // 従来の方法
// console.log("私の名前は" + name + "です。年齢は" + age + "です。");
// // テンプレート文字列
// console.log(`私の名前は${name}です。年齢は${age}です。`);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }

// // 変数に関数を定義することも可能
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// // 引数が１つの場合、 引数の括弧は省略できる。このエディタ上は括弧が自動保管される
// const func2 = (str) => {
//   return str;
// };

// // 中の処理が１行で完結する場合、波括弧やreturnは省略できる
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(1, 2));

/**
 * 分割代入
 */
// const profile = {
//   name: "hita",
//   age: 40
// };

// // 従来の方法
// console.log(`私の名前は${profile.name}です。年齢は${profile.age}です。`);

// // 分割代入
// var { name, age } = profile;
// name = "hita2";
// console.log(`私の名前は${name}です。年齢は${age}です。`);
// console.log(`私の名前は${profile.name}です。年齢は${profile.age}です。`);

// const profile = {
//   name: "hita",
//   age: 40,
//   address: {
//     city: "fukuoka",
//     zip: "814-0003"
//   }
// };

// // 従来の方法
// console.log(`私の名前は${profile.name}です。年齢は${profile.age}です。`);

// // 分割代入
// var { name, age } = profile;
// console.log(`私の名前は${name}です。年齢は${age}です。`);

// var { name, age2, city, zip } = profile;
// var { name, age3 } = profile;
// var { city, zip } = profile.address;
// name = "hita2";
// city = "sawara";

// console.log(
//   `私の名前は${profile.name}です。年齢は${profile.age}です。住所は${profile.address.city}です。郵便番号は${profile.address.zip}です`
// );
// console.log(
//   `私の名前は${name}です。年齢は${age2}です。住所は${city}です。郵便番号は${zip}です`
// );
// console.log(
//   `私の名前は${name}です。年齢は${age3}です。住所は${city}です。郵便番号は${zip}です`
// );

// // 配列での分割代入
// const profile = ["hita", 40];
// console.log(`私は${profile[0]}です。年齢は${profile[1]}です。`);

// const [name, age] = profile;
// console.log(`name:${name}, age:${age}`);

/**
 *  デフォルト値、引数など
 */
// const sayHello = (name = "NoName") => console.log(`hello!${name}!`);
// sayHello("hita");
// sayHello(); // 引数を指定しない場合、name=undefinedとなる

// const calcFunc = (num1 = 0, num2 = 0) => console.log(num1 + num2 * 0.1);
// calcFunc(2, 3);

/**
 * スプレッド構文
 */
// // 配列の展開
// const arr1 = [0, 1, 2, 3];
// console.log(arr1);
// console.log(...arr1); // 配列の要素を順番に引数として渡す
// console.log(1, 2, 3);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const dispFunc = (name1, name2) =>
//   console.log(`${name1}です。${name2}でーす。`);
// dispFunc(arr1[0], arr1[2]);
// dispFunc(...arr1);

// // まとめて受け取る
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// console.log([10, ...arr4, 10])

/**
 * map や　filter　を使用した配列の処理
 * →　従来の for文 を使用しなくなった
 */
// const nameArr = ["hita", "tanaka", "suzuki"];

// // 配列の中身のループ処理
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// // 配列をループ処理したくて全ての要素について処理する場合、mapを使用する。
// // mapの中にアロー関数を定義し、アロー関数の引数には配列のプロパティが順番に設定されて、アロー関数の処理内容で処理され、その結果を配列としたものを返す
// const nameArr2 = nameArr.map((name) => {
//   return `${name}さん`;
// });
// console.log(nameArr2);
// // 以下のように省略した形式でも定義できる
// console.log(nameArr.map((name) => `${name}さん`));

// console.log(
//   nameArr.map((name) => {
//     if (name !== "hita") {
//       return `${name}さん`;
//     }
//     return "ナナシさん";
//   })
// );

// const numArr = [1, 2, 3, 4, 5];

// 配列をループ処理したいが、条件に該当する要素のみを取得したい場合にfilterを使用する。
// filterの中にアロー関数を定義し、アロー関数の引数に配列のプロパティがじゅんばんに設定されて、アロー関数の処理内容でTrueを返すものの引数の配列を返す。
// 注意点としては、filterのアロー関数内の処理結果を返すのではなく、処理結果がTrueになるものの引数を返すことに注意しておく。
// const newNumArr = numArr.filter((num) => {
//   // ==　　　　　→　等価演算子。数値と文字列を比較するとき、文字列は数値に変換される。
//   // === 　→ 厳密等価演算子。右辺と左辺について変換はせずに比較する。つまり厳密に比較する。
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// // 下記のように、Indexと値の両方の条件でフィルターをかけることも可能
// console.log(numArr.filter((num, i) => i % 2 === 1 && num % 2 === 0));
// console.log(numArr.filter((num, i) => this.(i+1) > 3);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
const val1 = 1 > 0 ? "trueです" : "falseです";
console.log(val1);

const num1 = 1600; // "1600"
console.log(typeof num1 === "number" ? num1 : num1.toLocaleString());

const checkSum = (num2, num3) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};
console.log(checkSum(50, 51));

/**
 * 論理演算子の本当の意味を知る
 */
// || は左側がfalseならば右側を返す。左側がtrueならば左側を返す。
console.log(0 || "右辺が使用されています");
console.log("左側が使用されています" || "aaaaa");

// && は左側がtrueならば右側を返す。左側がfalseならば左側を返す。
console.log(0 && "右側が使用されています");
