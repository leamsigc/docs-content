---
title: Date Picker Input
description: A Pro input that allows users to select a date via pop up calendar or typing the date in using their preferred localization.
---

:InputPageHero{title="Date Picker"}

:PageToc

:ProInstallSnippet
## Basic example

The `datepicker` input allows users to select a date from a customizable calendar, and type the date directly into the input with full internationalization support.

::Example
---
  name: 'Datepicker basic'
  file: '/_content/examples/datepicker/datepicker-basic.vue'
  min-height: 500
---
::

## Modes

FormKit uses a unique masking solution to allow users to type dates into the datepicker input (while limiting the available options to only valid values) or select their date via a calendar input.
### Dual entry

By default users can click or tab into any of the "parts" of the displayed date (month, date year etc) in the text input and type their desired value. Matching values will be displayed with automatic completion. In addition to typing the value of each segment of the date, users can hit the up arrow/down arrow keys to cycle through available options for each segment.

By clicking the "calendar" icon to the right of the input, users can also display a calendar popup to select their date visually.

::Example
---
  name: 'Datepicker basic'
  file: '/_content/examples/datepicker/datepicker-dual-mode.vue'
  min-height: 500
---
::

::Callout
---
  type: tip
  label: Overlay mode
---
When using dual entry mode you must enable the `overlay` to show a placeholder. This is not necessary with `picker-only` enabled.
::

### Picker only

At times it may be desirable to disable the text-entry mechanism all together and ensure someone uses the date picker dialog to enter their date. This can be enabled by adding a `picker-only` prop. In `picker-only` mode clicking on the input will open the dialog immediately. Additionally using an `overlay` is not required for placeholder support.

::Example
---
  name: 'Datepicker picker-only'
  file: '/_content/examples/datepicker/datepicker-picker-only.vue'
  min-height: 500
---
::

## Date format

The date picker supports `Intl.DateTimeFormat` "styled dates", as well as token based date formats. To change the format displayed to the user, modify the `format` prop.

### Styled formats

If your audience is international, you should consider sticking with "styled dates" since they are the most natural date formats in each locale. The default format for a date picker is `long`.

The `format` prop can accept a simple string like `long` or `medium` in which case it uses the corresponding `Intl.DateTimeFormat` `dateStyle`. Alternatively you can provide an object with `date` and `time` properties and their respective `Intl.DateTimeFormat` styles (`{ date: 'long', time: 'short' }`).


::Example
---
  name: 'Datepicker style formats'
  file: '/_content/examples/datepicker/datepicker-styles.vue'
  min-height: 500
---
::

#### Date styles

Enable any of the following date styles by assigning the `format` prop

Format Style | Examples
-------|------------
full | `Wednesday, March 1, 2023`, `Mercoledì 1 marzo 2023`
long | `March 1, 2023`, `1 marzo 2023`
medium | `Mar 6, 2023`, `6 mar 2023`
short | `3/1/23`, `1/3/23`

#### Time styles

Format style | Examples
-------|------------
long | `7:05:00 PM`, `19:05:00`
medium | `7:05:00 PM`, `19:05:00`
short | `7:05 PM`, `19:05`

### Token formats

You can use the `format` prop to explicitly set a tokenized date format. A token format is represented by a string with any arbitrary characters and one or more of the strings in the table below.

FormKit interfaces with the `Intl.DateTimeFormat` to automatically internationalize tokens based on the current `locale`. For example, the token `MMMM` for `2000-01-01` would produce `January` for the `en` locale but would produce `一月` for the `zh` locale.

::Callout
---
  type: 'warning'
  label: 'Dates required'
---
It is possible, when using tokens, to create non-parsable dates. For example, if your input only displays the day of the week (`dddd`). You can use non-parsable date formats only in `picker-only` mode. If you’d like to allow your users to type in their date, your format must include at least a month, day, and year token.
::

Token    | Examples                | Description
---------|-------------------------|-------------------------------------
`YY`     | `99`, `23`, `00`        | 2 digit year
`YYYY`   | `1999`, `2023`, `2100`  | 4 digit year
`M`      | `1`, `12`               | The month 1-12
`MM`     |  `01`, `12`             | The month 01-12
`MMM`    | `Jan`, `Feb`            | Short name Jan-Dec
`MMMM`   | `January`, `February`   | Full name January - December
`D`      | `1`, `9`, `22`          | The day of the month 1-31
`DD`     | `01`, `09`, `22`        | The day of the month 01-31
`d`      | `M`, `T`, `W`, `T`, `F`, `S`, `S` | Single digit day "T"
`ddd`    | `Thu`, `Sat`            | Short day name Thu
`dddd`   | `Monday`, `Tuesday`     | Full day name Wednesday
`H`      | `0`, `13`, `23`         | Minimum hour digits, 24 hour, 0-23
`HH`     | `00`, `13`, `23`        | 2 hour digits, 24 hour, 00-23
`h`      | `12`, `1`, `11`         | Minimum hour digits, 12 hour clock, 1-12
`hh`     | `12`, `01`, `11`        | 2 hour digits, 12 hour clock, 01-12
`m`      | `1`, `59`               | The minute 0-59
`mm`     |  `01`, `59`             | The minute 00-59
`s`      | `1`, `59`               | The second 0-59
`ss`     | `01`, `59`              | The second 00-59
`a`      | `am`, `pm`              | am/pm
`A`      | `AM`, `PM`              | AM/PM


::Callout
---
  type: 'tip'
  label: 'Internationalization'
---
Although FormKit will internationalize your tokens automatically — if your form is intended for a broadly international audience consider using date styles instead of tokens as this leads to a more readable date in many locales.
::

::Example
---
  name: 'Datepicker tokens'
  file: '/_content/examples/datepicker/datepicker-tokens.vue'
  min-height: 500
---
::

To include letters in the your format that are themselves tokens (like `a`) you can escape those tokens with a backslash `\` before the character.

::Example
---
  name: 'Datepicker escape tokens'
  file: '/_content/examples/datepicker/datepicker-escape-tokens.vue'
  min-height: 500
---
::

## Panel sequence

The datepicker’s calendar popup has four "panels":

- `day` — Shows a traditional calendar view of a month which each day selectable.
- `month` — Shows the 12 months of the year.
- `year` — Shows a decade or years at a time.
- `time` — Shows the time of day.

When a user opens the datepicker’s popup, they will be shown one or more of these panels. You can modify which panels are displayed to the user and the sequence those panels should be displayed in by providing a `sequence` prop. The default `sequence` value is `['day']` (which allows you to navigate to the `month` and `year` panels).

For example, when selecting a birthday it is natural to first select the birth year, then the month, then the day. The `sequence` prop allows this behavior.

::Example
---
  name: 'Datepicker sequence'
  file: '/_content/examples/datepicker/datepicker-sequence.vue'
  min-height: 500
---
::

### Selecting time

The `time` panel can be used to allow a user to select a specific time of day. If you choose a `format` that includes time (like `YYYY-MM-DD HH:mm`) — you’ll likely want to include `time` panel to your sequence.

::Example
---
  name: 'Datepicker time'
  file: '/_content/examples/datepicker/datepicker-time.vue'
  min-height: 500
---
::

## Values

Like all inputs, the `value` of the datepicker is both what is produced by the datepicker, and what is read back into the datepicker for hydration. By default the format of the value is a UTC normalized [ISO8601](https://www.w3.org/TR/NOTE-datetime) string (example: `2014-11-27T03:59:00.000Z`). However, this format can be changed to any of the supported date style or a token formats [listed above](#date-format) by using the `value-format` prop.

A valid question is why not always use `ISO8601`? Although it’s the most popular way to work with dates — it’s machine readable and human readable — it’s not *very* human readable. For example, if your form sends a contact request email to an catering business then `ISO8601` would likely not be the best choice.

::Callout
---
  type: tip
  label: Complete dates
---
The value format must contain all the necessary data to re-constitute a date object, at a minimum this includes month, day, year. If your input requests information from the user that is not represented in your value format, those details will be lost.
::

### Date styles

To use a date style as the value, simply pass the style you’d like to use to the `value-format` prop.

::Example
---
  name: 'Datepicker style value'
  file: '/_content/examples/datepicker/datepicker-style-value.vue'
  min-height: 500
---
::

### Token formats

Values can also be represented in any arbitrary format by using formatting tokens.

::Example
---
  name: 'Datepicker token value'
  file: '/_content/examples/datepicker/datepicker-token-value.vue'
  min-height: 500
---
::

### Setting values (hydrating)

Values passed to a datepicker must:

1. Match the `value-format` in the current `value-locale` OR.
2. Be a native JavaScript `Date` object.

Although native `Date` objects are always accepted as valid *inputs* for a datepicker, they will be immediately transformed into the `value-format` specified.

#### Matching the `value-format`


::Example
---
  name: 'Datepicker value locale'
  file: '/_content/examples/datepicker/datepicker-matching-value.vue'
  min-height: 500
---
::

#### Using a native `Date`

::Example
---
  name: 'Datepicker value locale'
  file: '/_content/examples/datepicker/datepicker-native-date.vue'
  min-height: 500
---
::


### Value locale

Since the format of the value needs to be parsed using the same locale it was created with, it is recommended to always specify the `value-locale` when defining a custom `value-format`. This ensures that no matter what the locale of the user entering the date is the value will stay consistent.

::Example
---
  name: 'Datepicker value locale'
  file: '/_content/examples/datepicker/datepicker-value-locale.vue'
  min-height: 500
---
::

## Timezones


## Disabling dates