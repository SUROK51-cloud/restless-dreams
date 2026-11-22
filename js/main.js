(function () {
  var S = window.SITE, main = document.getElementById('main');
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function win(title, id) {
    var w = el('section', 'win'), bar = el('div', 'bar'), body = el('div', 'body');
    if (id) w.id = id;
    bar.appendChild(el('span', '', title));
    var b = el('span', 'btns'); ['_', '□', '×'].forEach(function (c) { b.appendChild(el('i', '', c)); });
    bar.appendChild(b); w.appendChild(bar); w.appendChild(body); main.appendChild(w);
    return body;
  }
  function list(items) {
    var ul = el('ul'); items.forEach(function (t) { ul.appendChild(el('li', '', t)); }); return ul;
  }

  document.title = S.title;
  document.getElementById('barTitle').textContent = S.title + '.exe';
  document.getElementById('title').textContent = S.title;
  document.getElementById('tagline').textContent = S.tagline;
  document.getElementById('marquee').textContent = S.marquee;
  document.getElementById('footer').textContent = S.footer;

  var d = S.download, b = win('download.exe', 'download'); b.className += ' dlbox';
  var a = el('a', 'dl', d.label); a.href = d.file; a.setAttribute('download', ''); b.appendChild(a);
  b.appendChild(el('div', 'meta', [d.version, d.size, d.platform].filter(Boolean).join('  ·  ')));

  b = win('about.txt', 'about');
  S.about.forEach(function (t) { b.appendChild(el('p', '', t)); });

  if (S.screenshots.length) {
    b = win('screenshots', 'shots'); var g = el('div', 'gal');
    S.screenshots.forEach(function (s) {
      var f = el('figure'), i = el('img'); i.src = s.src; i.alt = s.caption || ''; i.loading = 'lazy';
      i.onclick = function () {
        var lb = el('div', 'lb'), im = el('img'); im.src = s.src; lb.appendChild(im);
        lb.onclick = function () { lb.remove(); }; document.body.appendChild(lb);
      };
      f.appendChild(i); f.appendChild(el('figcaption', '', s.caption || '')); g.appendChild(f);
    });
    b.appendChild(g);
  }

  if (S.locations.length) { b = win('locations', 'locations'); b.appendChild(list(S.locations)); }
  if (S.controls.length) { b = win('controls', 'controls'); b.appendChild(list(S.controls)); }
  if (S.requirements.length) { b = win('system_requirements', 'req'); b.appendChild(list(S.requirements)); }

  if (S.news.length) {
    b = win('news.log', 'news'); var dl = el('dl');
    S.news.forEach(function (n) { dl.appendChild(el('dt', '', n.date)); dl.appendChild(el('dd', '', n.text)); });
    b.appendChild(dl);
  }

  if (S.links.length) {
    b = win('links', 'links'); var ul = el('ul');
    S.links.forEach(function (l) { var li = el('li'), x = el('a', '', l.label); x.href = l.url; li.appendChild(x); ul.appendChild(li); });
    b.appendChild(ul);
  }
})();
