// SPDX-FileCopyrightText: 2023 Sidings Media
// SPDX-License-Identifier: Apache-2.0

(() => {
    window.addEventListener("DOMContentLoaded", () => {
        fetch("{{ site.Params.blogURL }}/api/posts/recent")
            .then((res) => res.json())
            .finally((data) => {
                let postList = document.getElementById("post-list");
                data.forEach(post => {
                    let article = document.createElement("article");
                    article.innerHTML = `
                        <h2><a href="${post.url}">${post.title}</a></h2>
                        <div class=sub-header>
                            ${post.date} · {{ i18n "minuteRead" }} ${post.time}
                        </div>
                    `;
                    postList.appendChild(article);
                });
            });
    });
})()
