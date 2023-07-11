---
title: 'MongoDB'
description: 'aqued-dev/aqued/utilsのMongoDBについて。'
---

Aquedには、MongoDBを簡単に操作するための`MongoDB`クラスが提供されています。<br/>
setメソッドの引数であるvalueは暗号化されてデータベースに保存されます。<br/>
getの返り値のvalueは復号化されて返されます。<br/>
Collection Nameはsha512でハッシュ化されます。<br/>

## Collection を作成する

```js
const mongoDB = new MongoDB({ url: 'mongoDB URL', name: 'CollectionName' });
```

## データをセットする

```js
await mongoDB.set('name', 'value');
```

## データを取得する

```js
await mongoDB.get('name');
```
