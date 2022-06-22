// 模拟一个长列表
let idCounter = 0
export function getData(count) {
    let data = []
    for (let index = 0; index < count; index++) {
        data.push({
            id: String(idCounter++),
            text: Math.random().toString(16).substring(10)
        })
    }
    return data
}