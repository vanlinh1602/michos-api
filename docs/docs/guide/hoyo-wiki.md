# Hoyolab Wiki

## Usage

There are several methods to instantiate an object from the `HoyoWiki` class.


```ts
import { HoyoWiki } from 'michos-api';

const hoyoWiki = new HoyoWiki({
    lang: LanguageEnum.ENGLISH,
});
```

## Honkai Star Rail Wiki

There are several methods to instantiate an object from the `HSRWiki` class.

- Using HSR wiki

Options 1

```ts
import { HSRWiki, LanguageEnum } from 'michos-api';

const hsrWiki = new HSRWiki(LanguageEnum.ENGLISH);
```

Options 2

```ts
import { HoyoWiki, LanguageEnum} from 'michos-api';

const hoyoWiki = new HoyoWiki({
    lang: LanguageEnum.ENGLISH,
});

const hsrWiki = hoyoWiki.hsr;
```
- Function support: [read hear](/docs/api/classes/HSRWiki)



Find out more reference in [HoyoWiki Refence](/docs/api/classes/HoyoWiki)
