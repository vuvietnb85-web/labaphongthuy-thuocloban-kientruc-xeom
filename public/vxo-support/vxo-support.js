/*!
 * VxO Support widget (vanilla, không thư viện). Ủng hộ tự nguyện: Ko-fi, MoMo, PayPal (ẩn tới khi có link).
 * Cấu hình: đặt window.__VXO_SUPPORT__ = { paypalMe: 'https://paypal.me/TEN_CUA_BAN', mount: 'inline'|'fab', container: '#vxo-support' }
 * trước khi nạp file này. Không thu thập dữ liệu, không gọi mạng.
 */
(function (w, d) {
  'use strict';
  if (w.__VXO_SUPPORT_LOADED__) return;
  w.__VXO_SUPPORT_LOADED__ = true;

  var cfg = Object.assign({
    kofi: 'https://ko-fi.com/quocvietvu',
    momo: '0988960419',
    paypalMe: '', // ĐỂ TRỐNG = ẩn nút PayPal. Điền link paypal.me thật của chủ app.
    mount: 'inline',
    container: '#vxo-support',
    title: 'Ủng hộ người làm app',
    lead: 'App miễn phí và sẽ tiếp tục miễn phí. Nếu thấy hữu ích, bạn có thể mời tôi một cốc trà đá.',
    fabLabel: '☕ Ủng hộ',
    theme: 'dark' // 'dark' | 'auto' (theo sáng/tối của máy)
  }, w.__VXO_SUPPORT__ || {});

  function el(tag, attrs, text) {
    var e = d.createElement(tag);
    for (var k in attrs || {}) e.setAttribute(k, attrs[k]);
    if (text) e.textContent = text;
    return e;
  }
  function pretty(n) { return n.replace(/^0(\d{3})(\d{3})(\d{3})$/, '0$1 $2 $3'); }
  function isMobile() { return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent || ''); }

  function build() {
    var box = el('section', { 'class': 'vxo-sp' + (cfg.theme === 'auto' ? ' sp-auto' : ''), 'aria-label': cfg.title });
    box.appendChild(el('h3', null, cfg.title));
    box.appendChild(el('p', null, cfg.lead));

    var row = el('div', { 'class': 'sp-row' });
    if (cfg.kofi) {
      row.appendChild(el('a', { 'class': 'sp-btn sp-kofi', href: cfg.kofi, target: '_blank', rel: 'noopener noreferrer' }, '☕ Ko-fi'));
    }
    if (/^https:\/\/(www\.)?paypal\.me\/[A-Za-z0-9_.-]+/.test(cfg.paypalMe || '')) {
      row.appendChild(el('a', { 'class': 'sp-btn sp-paypal', href: cfg.paypalMe, target: '_blank', rel: 'noopener noreferrer' }, 'PayPal'));
    }
    box.appendChild(row);

    var status = el('p', { 'class': 'sp-status', role: 'status', 'aria-live': 'polite' });
    if (cfg.momo) {
      var mrow = el('div', { 'class': 'sp-row' });
      mrow.appendChild(el('span', null, 'MoMo: '));
      mrow.appendChild(el('span', { 'class': 'sp-num' }, pretty(cfg.momo)));
      var copy = el('button', { type: 'button', 'class': 'sp-btn' }, 'Chép số');
      copy.addEventListener('click', function () {
        var ok = function () { status.textContent = 'Đã chép ' + cfg.momo + '. Trong MoMo chọn Chuyển tiền rồi dán số.'; };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(cfg.momo).then(ok, function () { status.textContent = 'Máy không cho chép tự động, bạn giữ vào số để sao chép.'; });
        } else { status.textContent = 'Máy không cho chép tự động, bạn giữ vào số để sao chép.'; }
      });
      mrow.appendChild(copy);
      if (isMobile()) {
        mrow.appendChild(el('a', { 'class': 'sp-btn sp-momo', href: 'momo://?refId=transfer_p2p&phoneNumber=' + encodeURIComponent(cfg.momo) }, 'Mở MoMo'));
      }
      box.appendChild(mrow);
    }
    box.appendChild(status);
    box.appendChild(el('p', { 'class': 'sp-note' }, 'Ủng hộ là hoàn toàn tự nguyện, không mở khóa tính năng nào. Cảm ơn bạn!'));
    return box;
  }

  function mount() {
    var box = build();
    var host = cfg.mount === 'inline' ? d.querySelector(cfg.container) : null;
    if (host) { host.appendChild(box); return; }
    box.classList.add('sp-pop');
    box.hidden = true;
    box.id = 'vxo-sp-pop';
    var fab = el('button', { type: 'button', 'class': 'vxo-sp-fab', 'aria-expanded': 'false', 'aria-controls': 'vxo-sp-pop' }, cfg.fabLabel);
    fab.addEventListener('click', function () {
      box.hidden = !box.hidden;
      fab.setAttribute('aria-expanded', String(!box.hidden));
    });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !box.hidden) { box.hidden = true; fab.setAttribute('aria-expanded', 'false'); fab.focus(); } });
    d.body.appendChild(box);
    d.body.appendChild(fab);
  }

  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', mount); else mount();
})(window, document);
