var parentId = chrome.contextMenus.create({
  "id": "parent",
  "title" : "AAHubフォント適用",
  "type": "normal",
  "contexts": ["all"]
});
chrome.contextMenus.onClicked.addListener( function(info, tab)　{
  chrome.tabs.executeScript(tab.id, { file: "js/base.js" });
});
