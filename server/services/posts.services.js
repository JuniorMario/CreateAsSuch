exports.makePagination = async (posts, itemPerPage) => {
    const pages = [];
    const pageslenght = [];
    let page = [];
    let previousPage = 0
    posts.forEach((item, index) => {
        if (index < itemPerPage) {
            page = posts.filter((itemEach, indexof) => {
                if (indexof < itemPerPage && indexof >= previousPage) {
                    return item
                }
            })
            previousPage = itemPerPage
            itemPerPage += 3
            pages.push(page)
            page = [];
        }
    })

    pageslenght.push(...Array(pages.filter(item => item.length !== 0).length).keys())
    


    return { content: pages, pageslenght }
}