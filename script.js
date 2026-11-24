let list = document.querySelector(".list")
// let list_item = document.querySelectorAll(".list-item")
// let delete_btn = document.querySelectorAll(".list-item__delete")
let user_input = document.querySelector(".user-input")

function send_data(text){
    let new_list_item = document.createElement("li")
    let new_list_item_text = document.createElement("p")
    let new_list_item_btn = document.createElement("a")
    new_list_item.setAttribute("class", "list-item")
    new_list_item_text.setAttribute("class", "list-item__var")
    new_list_item_text.innerHTML = text
    new_list_item_btn.innerHTML = "del"
    new_list_item_btn.setAttribute("class", "list-item__delete")
    new_list_item_btn.setAttribute("onclick", "delete_item(event)")
    new_list_item_btn.setAttribute("href", "#")
    new_list_item.append(new_list_item_text)
    new_list_item.append(new_list_item_btn)
    list.append(new_list_item)
    user_input.value = ""
}


user_input.addEventListener("keydown" ,function(event){
    if (event.key == "Enter"){
        // console.log(user_input.value)
        send_data(user_input.value)
    }
})


function delete_item(event){
    event.target.parentElement.remove()
}  