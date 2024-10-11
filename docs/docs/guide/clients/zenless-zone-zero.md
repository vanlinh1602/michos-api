# Zenless Zone Zero

## Usage

There are several methods to instantiate an object from the ZenlessZoneZero class.

The following method will instantiate an object with the provided data.

```ts
import { ZenlessZoneZero, LanguageEnum } from 'michos-api';

const hsr = new ZenlessZoneZero({
  cookie: 'YOUR COOKIE HERE', // Required. Cookie can be string or object, see the api refeence below
  lang: LanguageEnum.ENGLISH, // optional
  uid: 837_678_687, // Several modules will require UID, which if not filled in will throw an error.
});
```

Meanwhile, the method below will instantiate an object with some automatically filled data like UID, and will return a Promise.

```ts
import { ZenlessZoneZero, LanguageEnum } from 'michos-api';

const hsr = ZenlessZoneZero.create({
  cookie: 'YOUR COOKIE HERE', // Required. Cookie can be string or object, see the api refeence below
  lang: LanguageEnum.ENGLISH, // optional
});
```

Find out more reference in [Zenless Zone Zero API Refence](/docs/api/classes/ZenlessZoneZero)
