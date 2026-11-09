/*
 * Thống kê cho amlichvietnam.github.io
 * - GA4 (G-P3WMV0Q693) nạp trực tiếp bằng gtag.js -> KHÔNG tạo thêm tag GA4 trong GTM (sẽ bị đếm 2 lần).
 * - GTM (GTM-P9DC6KDN) vẫn được nạp để xác minh Search Console / dùng về sau.
 * Không đo nội dung người dùng nhập (tên sự kiện, ghi chú...).
 */
(function () {
    var GA_ID = 'G-P3WMV0Q693';
    var GTM_ID = 'GTM-P9DC6KDN';

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;

    // Không đo khi chạy localhost hoặc mở file trực tiếp
    if (/^(localhost|127\.0\.0\.1|0\.0\.0\.0|)$/.test(location.hostname)) return;

    function loadScript(src) {
        var s = document.createElement('script');
        s.async = true;
        s.src = src;
        document.head.appendChild(s);
    }

    // GA4: tự gửi page_view; Enhanced Measurement đo thêm thời gian tương tác, click link ra ngoài
    loadScript('https://www.googletagmanager.com/gtag/js?id=' + GA_ID);
    gtag('js', new Date());
    gtag('config', GA_ID);

    // GTM
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    loadScript('https://www.googletagmanager.com/gtm.js?id=' + GTM_ID);
})();
