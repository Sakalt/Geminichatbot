// plugin/math.js

// KaTeXのスタイルシートとスクリプトの読み込み
const loadKaTeX = () => {
    const head = document.head;

    // KaTeXのCSSを読み込む
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/katex.min.css';
    link.integrity = 'sha384-sD5xk9qxjLhSDwSzFkEmK9EFQf/ZdX0muc1RYuTfRTIp+IHrZOZWjCmR8u8QUWRJ';
    link.crossOrigin = 'anonymous';
    head.appendChild(link);

    // KaTeXのJavaScriptを読み込む
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/katex.min.js';
    script1.integrity = 'sha384-wLVVuQFNJIQh35N1I5yrgOGFRtWqkBhQy8w9dC8a5ktgrOpI5CjReH5HZl/Ab57dt';
    script1.crossOrigin = 'anonymous';
    script1.defer = true;
    head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/contrib/auto-render.min.js';
    script2.integrity = 'sha384-l6xy5fXWnQddh7n3/RROkda/ldpbwo94E0mTTWZTvXeG7MiFD7vNlTdb6/5mf1W7';
    script2.crossOrigin = 'anonymous';
    script2.defer = true;
    head.appendChild(script2);

    // スクリプトの読み込みが完了した後にレンダリングを行う
    script2.onload = () => {
        renderMathInElement(document.body, {
            delimiters: [
                { left: "$$", right: "$$", display: true },
                { left: "\\[", right: "\\]", display: true },
                { left: "$", right: "$", display: false },
                { left: "\\(", right: "\\)", display: false }
            ]
        });
    };
};

// KaTeXのロードを呼び出す
loadKaTeX();
