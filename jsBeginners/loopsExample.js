var links = document.getElementsByTagName("a")
/*BEFORE->
<body>
    <a href="#">Link1</a>
    <a href="#">Link2</a>
    <a href="#">Link3</a>
    <a href="#">Link4</a>
    <a href="#">Link5</a>
    <a href="#">Link6</a>
    <script src="loopsExample.js"></script>
</body> */
for(i = 0; i < links.length; i++) {
    links[i].className = "link-" + i
}
/*After->
    <body>
    <a href="#" class="link-0">Link1</a>
    <a href="#" class="link-1">Link2</a>
    <a href="#" class="link-2">Link3</a>
    <a href="#" class="link-3">Link4</a>
    <a href="#" class="link-4">Link5</a>
    <a href="#" class="link-5">Link6</a>
    <script src="loopsExample.js"></script>

</body>
*/