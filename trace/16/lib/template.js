var sanitizeHtml = require("sanitize-html");

module.exports = {
  html: function (title1, list, body, control, authStatusUI = '<a href="/login">Login</a>', count = 0) {
    return `
      <!doctype html>
      <html>
      <head>
        <title>WEB - ${title1}</title>
        <meta charset="utf-8">
        
      </head>
      <body>
      ${authStatusUI}
        <h1><a href="/">누구세요</a></h1>
        <a href="/author">author</a>
      ${list}
      ${control}
      ${body}  
      </br></br></br>방문자: ${count}
      </body>
      </html>
      `;
  },
  list: function (topics) {
    var list = "<ul>";
    var i = 0;
    while (i < topics.length) {
      0;
      list = list + `<li><a href="/?id=${sanitizeHtml(topics[i].id)}">${sanitizeHtml(topics[i].title)}</a></li>`;
      // list = list + `<li><a href="/${sanitizeHtml(topics[i].id)}">${sanitizeHtml(topics[i].title)}</a></li>`;
      i = i + 1;
    }
    list = list + "</ul>";
    return list;
  },
  filelist: function (filelist) {
    var list = "<ul>";
    var i = 0;
    while (i < filelist.length) {
      0;
      list = list + `<li><a href="/page/${filelist[i]}">${filelist[i]}</a></li>`;
      i = i + 1;
    }
    list = list + "</ul>";
    return list;
  },
  authorSelect: function (authors, author_id) {
    var tag = "";
    var i = 0;
    while (i < authors.length) {
      var selected = "";
      if (authors[i].id === author_id) {
        selected = "selected";
      }
      tag += `<option value="${authors[i].id}"${selected}>${authors[i].name}</option>`;
      i++;
    }
    return `<select name="author">
            ${tag}
            </select>`;
  },
  authorSelect1: function (authors) {
    var tag = "";
    var i = 0;
    while (i < authors.length) {
      tag += `<option value="${authors[i].id}">${authors[i].name}</option>`;
      i++;
    }
    return `
      <select name="author">
        ${tag}
      </select>
    `;
  },
  authorTable: function (authors) {
    var tag = "<table>";
    var i = 0;
    while (i < authors.length) {
      tag += `
          <tr>
            <td>${authors[i].name}</td>
            <td>${authors[i].profile}</td>
            <td><a href="/author/update?id=${authors[i].id}">update</a></td>
            <td>
            <form action='/author/delete_process' method='post'>
              <input type='hidden' name='id' value='${authors[i].id}'>
              <input type='submit' value='delete'>
            </form>
            </td>
          </tr>
          `;
      i++;
    }
    tag += "</table>";
    return tag;
  },
};
