# How to create your own interactive maps without coding?

Here are 2 interactive map examples:<br>
1/ https://fredmeng.github.io/visited-countries (Countries/Territories I've Visited)<br>
2/ https://fredmeng.github.io/rtw-travel-route (Rount-the-World Travel Route)<br>

# Follow the step by step guide to build yours
1/ Create a GitHub account if you don't have one<br>
2/ Fork https://github.com/fredmeng/fredmeng.github.io<br>
3/ Rename the forked repository to `{your-github-username}.github.io` in Settings.<br>
4/ Create an account on https://developer.here.com if you don't have one<br>
5/ Sign up for a Freemium plan<br>
6/ Create an API key in JavaScript section and copy the key<br>
7/ Check the option "Create a trusted domain for your app credentials", insert `{your-github-username}.github.io` and hit the SAVE button.<br>
8/ Edit `https://github.com/{your-github-username}/{your-github-username}.github.io/credentials.js`
and replace my apikey your API key from step 6.<br>
9/ Edit (pencil icon) `https://github.com/{your-github-username}/{your-github-username}.github.io/visited-countries/data.js`, update the geolocations list to meet your use case, and then save. The data format is `[lat,lng,"country name"],` (with an ending comma). If the last entry, it should be `[lat,lng,"country name"]` (without the last comma).<br>
10/ Open https://{your-github-username}.github.io/visited-countries/ to see your visited countries on a pretty interactive map!<br>
11/ (Optional) If you want to embed the new map on your website or blog, here is the code. `<iframe src="https://{your-github-username}.github.io/visited-countries/" width="640" height="480" frameborder="0"></iframe>`

# 免寫程式也可以製作屬於自己的互動式地圖

兩個範例:<br>
1/ https://fredmeng.github.io/visited-countries (曾經去過的國家跟地區)<br>
2/ https://fredmeng.github.io/rtw-travel-route (環球旅行路線圖)<br>

# 照著底下的步驟做，五分鐘搞定屬於你自己的互動式地圖
1/ 開一個 GitHub 帳號 (如果你沒有的話)<br>
2/ Fork https://github.com/fredmeng/fredmeng.github.io<br>
3/ 在設定(Settings)中把你複製來的目錄更名成 `{你的GitHub帳號}.github.io`<br>
4/ 在 https://developer.here.com 開一個帳號 (如果你沒有的話)<br>
5/ 開一個 Freemium (免費)專案<br>
6/ 在 JavaScript 底下點一下`Create API key`來獲得屬於你的專案的API金鑰。<br>
7/ 勾選`Create a trusted domain for your app credentials`、把 `{你的GitHub帳號}.github.io` 放入文字輸入欄位，然後再點一下 SAVE 儲存。<br>
8/ 打開 `https://github.com/{你的GitHub帳號}/{你的GitHub帳號}.github.io/credentials.js` ，然後用編輯功能(鉛筆圖形)把你在上面步驟6所取得的的API金鑰來換掉我的金鑰。<br>
9/ 打開 `https://github.com/{你的GitHub帳號}/{你的GitHub帳號}.github.io/visited-countries/data.js` ，更新該檔案中的經緯度資料，然後儲存。注意該檔案每一行的格式為 `[精度,緯度,"國家地點名稱"],`(最後有一個逗點)。如果是最後一行 `[精度,緯度,"國家地點名稱"]` (拿掉最後一個逗點)。<br>
10/ 用瀏覽器開啟 https://{你的GitHub帳號}.github.io/visited-countries/，然後你就會看到屬於你的世界地圖了！<br>
11/ 如果你想把這個地圖放上你的網站或部落格，你可以把底下這一段程式碼複製然後貼上你的網站：`<iframe src="https://{你的GitHub帳號}.github.io/visited-countries/" width="640" height="480" frameborder="0"></iframe>`

