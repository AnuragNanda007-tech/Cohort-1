//Five main events of drag and drrop
// 





const items=document.querySelectorAll(".item")
console.log(items)
const containers= document.querySelectorAll(".container")

items.forEach(item => {
    console.log(item)
    item.addEventListener("dragstart",(e) =>
    {
        e.dataTransfer.setData("text/plain",e.target.id);


        setTimeout(()=> item.classList.add("dragging"),0);
    })
    
})
containers.forEach(container => 
{
    container.addEventListener("dragover",(e)=>
    {
        e.preventDefault();
    });

    container.addEventListener("dragenter",(e)=>
    {
        e.preventDefault();
        container.classList.add("hover");
    });

});

//dropping items
containers.forEach(container => 
{
    container.addEventListener("drop",(e)=>
    {
        e.preventDefault();
        const id= e.dataTransfer.getData("text/plain");
        console.log(id)
        const item=document.getElementById(id);
        console.log(item)
        container.appendChild(item);
        item.classList.remove("dragging");
        container.classList.remove("hover");
    });
});
