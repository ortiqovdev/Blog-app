const blogTitleField = document.querySelector('.title')
const articeFeild = document.querySelector('.article')

const bannerImage = document.querySelector('#banner-upload');
const banner = document.querySelector(".banner");
let bannerPath;

const publishBtn = document.querySelector('.publish-btn');
const uploadInput = document.querySelector('#image-upload')

bannerImage.addEventListener('change', () => {
    uploadImage(bannerImage, "banner");
})

uploadInput.addEventListener('change', () => {
    uploadImage(uploadInput, "image");
})

const uploadImage = (uploadFile, uploadType) => {
    const [file] = uploadFile.files;
    if (file && file.type.includes("image")) {
        const formdata = new FormData();
        formdata.append('image', file);

        fetch('/upload', {
            method: 'post',
            body: formdata
        }).then(res => res.json())
            .then(data => {
                if (uploadType == "image") {
                    addImage(data, file.name);
                } else {
                    bannerPath = `${location.origin}/${data}`;
                    banner.style.backgroundImage = `url("${bannerPath}")`;
                }
            })
    } else {
        alert("upload Image only");
    }
}

const addImage = (imagepath, alt) => {
    let curPos = articeFeild.selectionStart;
    let textToInsert = `\r![$alt](${imagepath})\r`;
    articeFeild.value = articeFeild.value.slice(0, curPos) + textToInsert +
        articeFeild.value.slice(curPos);
}

let months = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"]

publishBtn.addEventListener('click', () => {
    if (articeFeild.value.length && blogTitleField.value.length) {
        let letters = 'abcdefghijkmnopqrstuvwxyz';
        let blogTitle = blogTitleField.value.split(" ").join("-")
        let id = '';
        for (let i = 0; i < 4; i++) {
            id += letters[Math.floor(Math.random() * letters.length)];
        }

        let docName = `${blogTitle}-${id}`;
        let date = new Date();

        db.collection("blogs").doc(docName).set({
            title: blogTitleField.value,
            article: articeFeild.value,
            bannerImage: bannerPath,
            publishedAt: `${date.getDate()} ${months[date.getMonth()]}${date.
                getFullYear()}`
        })
            .then(() => {
                console.log('date entered')
            })
            .catch((err) => {
                console.error(err);
            })
    }
})