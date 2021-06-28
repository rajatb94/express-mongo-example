let comments = [
    {"cId": 1, "pId": 1, "pData": "gfgdg"},
    {"cId": 2, "pId": 2, "pData": "gfgdg"},
    {"cId": 3, "pId": 1, "pData": "gfgdg"},
    {"cId": 4, "pId": 2, "pData": "gfgdg"},
    {"cId": 5, "pId": 3, "pData": "gfgdg"},
]
let unq = {}

comments.forEach(function(comment){
    if(unq[comment.pId]){
        unq[comment.pId].comments.push(comment)
    }else{
        unq[comment.pId] = {comments: [comment]}
    }
})

console.log(JSON.stringify(unq, "", 4))