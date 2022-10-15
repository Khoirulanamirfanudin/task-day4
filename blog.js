let dataBlog = []

function addBlog (evet){
    event.preventDefault()

    let title = document.getElementById("input-name").value;
    let startDate = document.getElementById("start-date").value;
    let endDate = document.getElementById("end-date").value;
    let content = document.getElementById("input-message").value;
    // let technologies = document.getElementById("input-technologies");
    let image = document.getElementById("input-image").files[0];

    image = URL.createObjectURL(image)
    console.log(image)

    let blog = {
        title,
        startDate,
        endDate,
        content,
        // technologies,
        image,
        postAt : new Date (),
        author : "Khoirul Anam Irfanudin"
    }

    dataBlog.push(blog)
    console.log(dataBlog)

    renderBlog()
}

function renderBlog() {
    document.getElementById("contents").innerHTML = ''
;


    for (let index = 0; index < dataBlog.length; index++) {
        console.log("test",dataBlog[index])

        document.getElementById("contents").innerHTML += `
        <div class="card">
            <div class="card-image">
            <img src="${dataBlog[index].image}">
            </div>
            <div class="card-content">
                <h1>
                    <a href="blog-detail.html" target="_blank">
                        ${dataBlog[index].title}
                    </a>
                </h1>
                <div class="card-detail-content">
                ${(dataBlog[index].postAt)} | ${dataBlog[index].author}
                </div>

                <div class="start-date">
                    <label for="">start date :</label>
                    ${dataBlog[index].startDate}
                </div>
                <div class="end-date">
                    <label for="">end date:</label>
                    ${dataBlog[index].endDate}
                </div>

                <div class="input-message">
                    ${dataBlog[index].content}
                </div>


                <div class="os">
                    <i class="fa brands fa-google-play"></i>
                </div>

                <div class="btn-group">
                    <button class="btn-edit"> Edit Post</button>
                    <button class="btn-post"> Post Blog</button>
                </div>
            </div>
        </div>
        `
    }
} 