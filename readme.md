# string-cut
[honeo/string-cut](https://github.com/honeo/string-cut)  
[string-cut](https://www.npmjs.com/package/string-cut)

## なにこれ
文字列から指定した文字列or正規表現と一致する部分をカットして残りを返す。

## 使い方
```sh
$ npm i -S string-cut
```
```js
import cut from 'string-cut';

cut('foobar', 'oo');
> "fbar"

cut('hogehoge', /g/g);
> "hoehoe"
```

## prototype拡張
ご利用は計画的に。
```js
import 'string-cut/register';

'hogefugapiyo'.cut('fuga');
> "hogepiyo"
```
