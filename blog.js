let dataBlog = []

function addBlog (evet){
    event.preventDefault()

    let title = document.getElementById("input-title").value;
    let content = document.getElementById("input-content").value;
    let image = document.getElementById("input-blog-image").files[0]

    image = URL.createObjectURL(image)
    console.log(image)

    let blog = {
        title,
        content,
        image,
        postAt : new Date (),
        author : "Khoirul Anam Irfanudin"
    }

    dataBlog.push(blog)
    console.log(image)

    renderBlog()
}

function renderBlog(){
    document.getElementById("contents").innerHTML = ''

    for (let index =0;index<dataBlog.length;index++){
        console.log("test",dataBlog[index])
             
        document.getElementById("contents").innerHTML = `
        <div class="blog-list-item">
            < class="blog-image">
                <img src="${dataBlog[index].image}" alt="">
                </></div><div class="blog-content">
                    <div class="btn-group">
                        <button class="btn-edit"> Edit Post</button>
                        <button class="btn-post"> Post Blog</button>
                    </div>
                    <h1>
                        <a href="blog-detail.html" target="_blank">
                            ${dataBlog[index].title}
                        </a>
                    </h1>
                    <div class="detail-blog-content">
                        12 juil 2022 22:30 WIB | Ichsan Nur Jamal
                    </div>
                    <p>${dataBlog[index].content}</p>
                </div></>
        </div>
        `


    }
}