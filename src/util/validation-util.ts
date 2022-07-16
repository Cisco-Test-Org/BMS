const validationUtil = (title: string, author: string, pages: number) => {
    if(title === ''){
        alert('Title is empty')
        return 1;
    }

    if(author === ''){
        alert('Author is empty')
        return 1;
    }

    if(pages === 0){
        alert('Pages are 0')
        return 1;
    }
    return 0;
}

export default validationUtil;