const fakeNewsKeywords = {
    en: ["fake", "hoax", "rumor", "false"],
    es: ["falso", "engaño", "rumor"],
    fr: ["faux", "canular", "rumeur"],
    hi: ["झूठ", "अफवाह", "फर्जी", "गलत"],
    ta: ["பொய்", "செய்தி", "வதந்தி", "தவறான"]
};

function detectFakeNews() {
    const language = document.getElementById("language").value;
    const text = document.getElementById("newsInput").value.toLowerCase();
    let isFake = false;

    fakeNewsKeywords[language].forEach(keyword => {
        if (text.includes(keyword)) {
            isFake = true;
        }
    });

    document.getElementById("result").innerText = isFake ? "⚠️ Fake News Detected!" : "✅ Real News!";
}
