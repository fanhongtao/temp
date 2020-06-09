$(document).ready(function() {
  namelist = [
	{ label: "女王谷(nwg)", value: "女王谷" },
	{ label: "神佑之城(syzc)", value: "神佑之城" },
	{ label: "狮子拱门(szgm)", value: "狮子拱门" }
  ];
  $("#src").autocomplete({
    source: namelist
  })
  $("#dest").autocomplete({
    source: namelist
  })
  $("#search").click(searchPath)
})

function searchPath() {
  var result = '查询：从 “'
  result += $("#src").val()
  result += '” 前往 “'
  result += $("#dest").val()
  result += '”。'
  $("#result").text(result)
}