## Rich Events for Google Analytics

You collect too little data about your visitors. Use this library to
gather more data very easily.

Do this

1. Have Google Analytics already running on your site.
1. Include `jquery-autolytics.js`
1. Apply the plugin to any element on the page: `$('input, a').autolytics()`

and behold

* It will send detailed browser events to Google Analytics
* And will name the event based on CSS selectors identifying the page element

### Example

```html
<html>
  <body>
    <a class="main" href="#">A link</a>
    <a class="other" href="#">Another link</a>
    <input type="text"></input>

    // ... include jquery and jquery-autolytics
    <script>
      $(function () {
        // ... load google analytics

        $('a, input').autolytics();
      });
    </script>
  </body>
</html>
```

When I type `hi` into the input then click on the links it generates these events:

```js
["_trackEvent", "body > input", "focus"]
["_trackEvent", "body > input", "click", "228,24"]
["_trackEvent", "body > input", "keypress", 104]
["_trackEvent", "body > input", "keypress", 105]
["_trackEvent", "body > input", "change", "hi"]
["_trackEvent", "body > input", "blur"]
["_trackEvent", "body > a.other", "click", "141,24"]
["_trackEvent", "body > a.main", "click", "38,22"]
```

This is enough information to even replay the user typing in realtime!

### Why more data?

Recording events and identifying their originating dom elements can
give you information to define custom Analytics goals. You can watch
visitors' hesitation among various page elements and define goals inside
a single page, like "the user opens a menu and clicks a submenu."


### More Info

<table>
<caption>Recorded Events</caption>
<thead>
  <tr><th>Event</th><th>Extra Info</th></tr>
</thead>
<tbody>
  <tr><td>blur</td><td></td></tr>
  <tr><td>change</td><td>new value</td></tr>
  <tr><td>click</td><td>X,Y</td></tr>
  <tr><td>dblclick</td><td>X,Y</td></tr>
  <tr><td>focus</td><td></td></tr>
  <tr><td>keypress</td><td>keycode</td></tr>
  <tr><td>resize</td><td>width x height</td></tr>
  <tr><td>scroll</td><td>scroll-top</td></tr>
  <tr><td>submit</td><td></td></tr>
</tbody>
</table>

### Caveats

Google does impose
[limits](https://developers.google.com/analytics/devguides/collection/gajs/limits-quotas)
to the amount of information you can capture but you're probably coming
nowhere close right now, so take advantage of it. If you upgrade your
analytics account then you go collect even more.
