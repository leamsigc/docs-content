# Internationalization (i18n)

FormKit ships with internationalization support for all of its interfaces and validation messages. Currently, FormKit supports the following languages (in the `@formkit/i18n` package):

- 🇩🇪 German (de) — 🙏 &nbsp;@digitalkaoz
- 🇺🇸 English (en)
- 🇫🇷 French (fr) — 🙏 &nbsp;@HoreKk

<callout type="info" label="Flags aren’t languages">
Although flags are <a href="http://www.flagsarenotlanguages.com/blog/why-flags-do-not-represent-language/">poor representations of languages</a> (flags indicate a geographic nation, while languages can be spoken in many ares of the world), we use the flags in the list above to indicate the location of the contributor who created that particular locale.
</callout>

## Using a locale

FormKit’s `defaultConfig` includes the english locale by default — to add an additional locale, import it from `@formkit/i18n` and append it to the `locales` option when you initialized the FormKit plugin. To set the active locale specify it with the `locale` option:

```js
import { createApp } from 'vue'
import App from 'App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { de, fr, zh } from '@formkit/i18n'

const app = createApp(App)
app.use(
  plugin,
  defaultConfig({
    // Define additional locales
    locales: { de, fr, zh },
    // Define the active locale
    locale: 'fr',
  })
)
app.mount('#app')
```

## Changing the active locale

There are two ways to change your active locale:

- Using `this.$formkit.setLocale()` from the Vue plugin (best for options API).
- Directly modifying the root `config` object (best for composition API).

### Using `setLocale`

When using Vue’s options API you have access to `this.$formkit` which contains a purpose-built method `setLocale('de')` which globally changes the current locale.

<example
  name="Changing locale example"
  file="/_content/examples/locale-change/locale-change"
  langs="vue">
</example>

### Using root `config`

When using the composition API, you won’t have access to `this.$formkit`. Instead, you can fetch and modify the root FormKit configuration object. This is made available globally via Vue’s `inject` mechanism and a unique Symbol.

<example
  name="Changing locale via config"
  file="/_content/examples/locale-change-config/locale-change-config"
  langs="vue">
</example>

## Adding your language

Writing a locale for your own native language is a great way to contribute to FormKit, and an easy way to get started with open source too! We are always eager to see pull requests for new locales. To support this effort, we’ve created a locale builder — a small web app to help make the translation process as easy as possible.

<cta href="https://i18n.formkit.com" label="Help others who speak your language!" button="Contribute a locale"></cta>

Of course, you are not required to use our locale builder to submit a language, and are more than welcome to submit a standard pull request with your locale included.

<callout type="info" label="Localization">
If your language is already on the list (lets say English), but your locality speaks a variation of that language (like 🇬🇧 <code>en-GB</code>), please feel free to submit your localized language.
</callout>