<div>What is your name?
    <input type = "text">
    <button>Send</button>
</div>
<script>
document.querySelector("button".addEventListener("click", function (){
    document.querySelector("div").textContent.Content = "Hello, " + document.querySelector("input").value;
})
</script>