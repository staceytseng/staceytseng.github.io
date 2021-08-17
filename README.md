# How to create your own interactive maps without coding?

Here are 2 interactive map examples:<br>
1/ https://fredmeng.github.io/visited-countries<br>
2/ https://fredmeng.github.io/rtw-travel-route<br>

# Follow the step by step guide to build yours
1/ Create a GitHub account if you don't have one<br>
2/ Fork https://github.com/fredmeng/fredmeng.github.io<br>
3/ Rename the forked repository to `your-github-username.github.io` in Settings.<br>
4/ Create an account on https://developer.here.com<br>
5/ Sign up for a Freemium plan<br>
6/ Create an API key in JavaScript section and copy the key<br>
7/ Check the option "Create a trusted domain for your app credentials", insert `your-github-username.github.io` and hit the SAVE button.<br>
8/ Navigate back to your Github respository https://github.com/{your-github-username}/{your-github-username}.github.io and replace the apikey value in `credentials.js` with the new API key you just created on developer.here.com.<br>
9/ Edit (pencil icon) https://github.com/{your-github-username}/{your-github-username}.github.io/visited-countries/`data.js`, update the geolocations list to meet your use case, and then save. The data format is `[lat,lng,"country name"],`. If the last entry, it should be `[lat,lng,"country name"]` (without the last comma).<br>
10/ Open https://{your-github-username}.github.io/visited-countries/ to see your visited countries on the map!<br>
