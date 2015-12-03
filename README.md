# stopType
Simple script to detect user finished typing - by Betot

#usage
Basic markup
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My awesome title</title>
</head>
<body>
 
  <input type="text" id="my_textbox">
  <p id="status_stop">Please type something</p>
  
  <script type="text/javascript" src="stoptype.js"></script>
  
</body>
</html>
```

Then run it like this

```
var foo = new Stoptype();

foo.detectFinishTyping("my_textbox", function(){

   //do something here

});
```

#known issues
> we know nothing for now :p
