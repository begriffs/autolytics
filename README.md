## Track. Visitors'. Every. Move.

Record enough Google Analytics events to be able to "play back" a user's
browsing session like you're watching a video.

1. Have Google Analytics already running on your site.
1. Include `jquery-creepalytics.js` in your project.
1. Leer at the page elements you care about, e.g. `$('input, a').leer()`.

Tracked elements will report visitor interactions straight to Google.

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

The analytics events contain the css selector path of the originating
element, the event triggered, and any extra info. This is enough
information to replay the user's action on a fresh copy of the page in
realtime.
