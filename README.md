# Get your own maps up and running in 5 minutes (no coding needed!!!)

Example (Countries/Territories I've Visited): https://fredmeng.github.io/visited-countries

1. Create a GitHub account if you don't have one
2. Fork https://github.com/fredmeng/fredmeng.github.io
3. Rename the forked repository to `{your-github-username}.github.io` in Settings.
4. Create an account on https://developer.here.com if you don't have one
5. Sign up for a Freemium plan
6. Create an API key in JavaScript section and copy the key
7. Check the option "Create a trusted domain for your app credentials", insert `{your-github-username}.github.io` and hit the SAVE button.
8. Edit `https://github.com/{your-github-username}/{your-github-username}.github.io/blob/mastercredentials.js`
and replace my apikey with yours from step 6.
9. Edit `https://github.com/{your-github-username}/{your-github-username}.github.io/blob/master/visited-countries/data.js`, update the geolocations list to meet your use case, and then save. The data format is `[lat,lng,"country name"],` (with a trailing comma) each line. If the last entry, it should be `[lat,lng,"country name"]` (without the trailing comma).
10. Open `https://{your-github-username}.github.io/visited-countries/` to see your visited countries on a pretty interactive map!
11. (Optional) If you want to embed the new map on your website or blog, here is the code. `<iframe src="https://{your-github-username}.github.io/visited-countries/" width="640" height="480" frameborder="0"></iframe>`

# 五分鐘搞定屬於你自己的互動式地圖 

免費 / 免寫程式 / 只要複製貼上加上動動滑鼠

範例(曾經去過的國家跟地區): https://fredmeng.github.io/visited-countries

1. 開一個 GitHub 帳號 (如果你沒有的話)
2. Fork https://github.com/fredmeng/fredmeng.github.io
3. 在設定(Settings)中把你複製來的目錄更名成 `{你的GitHub帳號}.github.io`
4. 在 https://developer.here.com 開一個帳號 (如果你沒有的話)
5. 開一個 Freemium (免費)專案
6. 在 JavaScript 底下點一下`Create API key`來獲得屬於你的專案的API金鑰。
7. 勾選`Create a trusted domain for your app credentials`、把 `{你的GitHub帳號}.github.io` 放入文字輸入欄位，然後再點一下 SAVE 儲存。
8. 打開 `https://github.com/{你的GitHub帳號}/{你的GitHub帳號}.github.io/blob/mastercredentials.js` ，然後用編輯功能把你在上面步驟6所取得的的API金鑰來換掉我的金鑰。
9. 打開 `https://github.com/{你的GitHub帳號}/{你的GitHub帳號}.github.io/blob/master/visited-countries/data.js` ，更新該檔案中的經緯度資料，然後儲存。注意該檔案每一行的格式為 `[精度,緯度,"國家地點名稱"],`(最後有一個逗點)。如果是最後一筆資料，那格式為`[精度,緯度,"國家地點名稱"]`(拿掉最後一個逗點)。
10. 最後，用瀏覽器開啟 `https://{你的GitHub帳號}.github.io/visited-countries/`，然後屬於你的世界地圖就出現啦！
11. 如果你想把這個地圖放上你的網站或部落格，你可以把底下這一段程式碼複製然後貼上你的網站：`<iframe src="https://{你的GitHub帳號}.github.io/visited-countries/" width="640" height="480" frameborder="0"></iframe>`

