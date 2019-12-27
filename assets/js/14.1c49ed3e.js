(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{322:function(t,e,r){"use strict";r.r(e);var a=r(35),s=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("準備在 medium 寫筆記時，發現貼程式碼的方式其實沒有寫 markdown 那麼直覺，所以寫了這篇文章記錄一下網路上找到的分享方式。")]),t._v(" "),r("p",[t._v("給忙碌的人看的版本：")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("方便的方式：在 medium 編輯頁面按下 "),r("strong",[t._v("Ctrl + Alt + 6（windows）、Cmd + Option + 6 (mac OS)。")])])]),t._v(" "),r("li",[r("p",[t._v("實用的方式：用 "),r("a",{attrs:{href:"https://gist.github.com/discover",target:"_blank",rel:"noopener noreferrer"}},[t._v("**Gist "),r("OutboundLink")],1),t._v("**嵌入。")])]),t._v(" "),r("li",[r("p",[t._v("美觀的方式：用程式碼圖片產生器（"),r("a",{attrs:{href:"https://carbon.now.sh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Carbon"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=pnp.polacode",target:"_blank",rel:"noopener noreferrer"}},[t._v("PolaCode"),r("OutboundLink")],1),t._v(" in vscode）")])])]),t._v(" "),r("p",[t._v("進入正文：")]),t._v(" "),r("h2",{attrs:{id:"_1-最方便：medium-內建功能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-最方便：medium-內建功能","aria-hidden":"true"}},[t._v("#")]),t._v(" "),r("strong",[t._v("1. 最方便：medium 內建功能")])]),t._v(" "),r("p",[t._v("在 medium 的 story 撰寫頁面中，依照您目前現在的作業系統按下：")]),t._v(" "),r("p",[t._v("windows:** Ctrl + Alt + 6**")]),t._v(" "),r("p",[t._v("mac OS: "),r("strong",[t._v("Cmd + Option + 6")])]),t._v(" "),r("pre",[r("code",[t._v("按完後就會出現這個灰色的框框\n")])]),t._v(" "),r("p",[t._v("這是目前最方便的方式，但可惜的是他**不支援語法 highlight **的功能，而且縮排的時候會有點卡卡的。")]),t._v(" "),r("pre",[r("code",[t._v('console.log("Hello world");\n\nfunction Test(params){\n  return params\n};\n')])]),t._v(" "),r("h2",{attrs:{id:"_2-最實用：嵌入-gist-的連結"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-最實用：嵌入-gist-的連結","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 最實用：嵌入 Gist 的連結")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://gist.github.com/discover",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gist"),r("OutboundLink")],1),t._v(" 是 Github 所提供，其中一項它的服務就是儲存程式碼的片段。所以將我們想要分享的程式碼片段存到 Gist 中，並且生成 url 嵌入到 medium 的頁面上，就能達到我們想要的分享功能了。")]),t._v(" "),r("p",[t._v("首先，先進到 "),r("a",{attrs:{href:"https://gist.github.com/discover",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gist"),r("OutboundLink")],1),t._v(" 的首頁並登入（和 github 使用同一個帳號），會看到以下頁面：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn-images-1.medium.com/max/2062/1*Z8uxUrQDEmd4UbjkXQN8NA.png",alt:"Gist 登入後的樣子"}}),r("em",[t._v("Gist 登入後的樣子")])]),t._v(" "),r("p",[t._v("點擊右上的「+」，就會進到下面新增程式碼片段的頁面：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn-images-1.medium.com/max/2066/1*6cWcuf1YjzCc6sM79S5bGg.png",alt:""}})]),t._v(" "),r("p",[t._v("填完程式碼片段描述、檔案名稱、程式碼片段內容後按下 Create public gist後，接下來會到該程式碼片段的頁面，按下下圖紅色圈選處的地方來產 medium 可以嵌入的 url：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn-images-1.medium.com/max/2230/1*9PwvcrAu9WWYPoHxIYULHA.png",alt:"類型記得要選 share !"}}),r("em",[t._v("類型記得要選 share !")])]),t._v(" "),r("p",[t._v("複製好 url ，接著在 medium 的編輯頁面中，選擇 Add an embed 後，貼上剛剛複製的 url ，按下enter 後就完成啦：")]),t._v(" "),r("iframe",{attrs:{src:"https://medium.com/media/28f6cf991e45a2a2a6d1fff2df448f6e",frameborder:"0"}}),t._v(" "),r("p",[t._v("完美地支援語法 highliht，且若之後如果程式碼有變動直接去更改，嵌入的頁面也會同步更新，但如果文章程式碼片段很多，這個方式有點麻煩。另外後續如果文章變多，程式碼片段的管理也是一個問題。")]),t._v(" "),r("h2",{attrs:{id:"_3-最美觀：產生程式碼的圖片直接嵌入-medium"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-最美觀：產生程式碼的圖片直接嵌入-medium","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. 最美觀：產生程式碼的圖片直接嵌入 medium")]),t._v(" "),r("p",[t._v("使用線上產生程式碼片段圖片的服務 "),r("a",{attrs:{href:"https://carbon.now.sh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Carbon"),r("OutboundLink")],1),t._v("，可以產生圖片，也可以像Gist 一樣產生可嵌入的 url：")]),t._v(" "),r("iframe",{attrs:{src:"https://medium.com/media/23a5dfd3387adb45ba2c3c197ce6f16f",frameborder:"0"}}),t._v(" "),r("p",[t._v("如果使用 vscode 的話，也有 extension "),r("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=pnp.polacode",target:"_blank",rel:"noopener noreferrer"}},[t._v("PolaCode"),r("OutboundLink")],1),t._v(" 讓您快速的在現有的程式碼中產生圖片：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cdn-images-1.medium.com/max/2116/1*Z0EJV3nf4pnR-P2lICCjyw.png",alt:""}})]),t._v(" "),r("p",[t._v("這是目前所有方式中我認為最美觀的，但是如果要更改裡面的內容，就要再重新擷取並上傳一次圖片了。另外也因為是圖片，沒辦法直接從裡面複製程式碼。")]),t._v(" "),r("h2",{attrs:{id:"so…"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#so…","aria-hidden":"true"}},[t._v("#")]),t._v(" So…")]),t._v(" "),r("p",[t._v("我覺得上面的方式相比直接寫在 markdown 都相對麻煩很多 😭 😭，希望 medium 也能支援類似 markdwon 的程式碼語法啊~~🥢💥🍚")])])},[],!1,null,null,null);s.options.__file="example-post.md";e.default=s.exports}}]);