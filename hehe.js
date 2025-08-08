let noBtn = document.querySelector('.btn-no');
let yesBtn = document.querySelector('.btn-yes');
let catImg = document.querySelector('.cat-cry');
let titleSpan = document.querySelector('.title-span');
let count = 0;

const noBtnTexts = [
    "không bao giờ",
    "chắc không?",
    "nghĩ lại đi!",
    "thật không đó?",
    "thôi bấm ố kê đi!"
];

const yesBtnTexts = [
    "ố kê",
    "tất nhiên",
    "thôi bỏ qua",
    "thôi được rồi",
    "thôi bỏ qua đấy!"
];


const spanTexts = [
    "từ giầy tôi không ăn nói kiểu đấy nữa",
    "tôi hứa sẽ ngoan hơn",
    "sẽ không làm Uyên buồn nữa",
    "cho tôi cơ hội sửa sai nha",
    "Uyên là nhất luôn!"
];

const noBtnImages = [
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXUyeWtlMm82aWZwZGRwM3draHF2aHhmY2ZkejBncGtzbTJubG00OCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/zt1q7lREccTi4n9ohB/200w.webp",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXUyeWtlMm82aWZwZGRwM3draHF2aHhmY2ZkejBncGtzbTJubG00OCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/zt1q7lREccTi4n9ohB/200w.webp",
    "https://media3.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3OHBvNXJtNDRweHB3NmMxMTQ1a2Vydzhsamx5cDI1Y3d1ems0dmRqYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/OjiSLBg7s27kaIGS8o/200w.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDlpd3loa2Jjb3Fyd21hY2VnNGp0YW41ZDR4cmYwMjI0bm53OW9rZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qpCvOBBmBkble/200w.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDlpd3loa2Jjb3Fyd21hY2VnNGp0YW41ZDR4cmYwMjI0bm53OW9rZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fqTl8YsjVPm7bjBJTT/giphy.webp"
];

noBtn.addEventListener('click', function () {
    count++;

    if (count < noBtnTexts.length) {
        noBtn.textContent = noBtnTexts[count];
    }

    if (count < yesBtnTexts.length) {
        yesBtn.textContent = yesBtnTexts[count];
    }

    if (count < noBtnImages.length) {
        catImg.src = noBtnImages[count];
    }

    if (count < spanTexts.length) {
        titleSpan.textContent = spanTexts[count];
    }


    let noScale = Math.max(1 - count * 0.15, 0.3);
    noBtn.style.transform = `scale(${noScale})`;


    let yesScale = 1 + count * 0.15;
    yesBtn.style.transform = `scale(${yesScale})`;


    if (count >= 5) {
        noBtn.style.display = 'none';
    }

});
yesBtn.addEventListener('click', function () {
    catImg.src = 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHlnYm5sMDd1aTk0ZWN3NjZsNXJkMmw0dncwaXQ1Y3RleTZodDdpOCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26zze48lYGsjIoiFG/200w.webp';
    document.querySelector('.title').textContent = 'Cảm ơn Uyên đã tha thứ nha! 🥰';
    document.querySelector('.title-span').textContent = 'Từ giờ sẽ ngoan hơn!';
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
});