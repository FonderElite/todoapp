   $('#contain').daisyjs();
   $('#contain').daisyjs({
    dotColor: 'red',
    lineColor: '#ff0000'
});
   function submit(){
       const input = $('#riddle').val();
       const preloader = $("#preload");
      if(input == "YOUFOUNDME"){
  preloader.hide(1500)
      }
  else{
    Swal.fire({
  icon: 'error',
  title: 'Wrong Answer!',
  text: 'Please Try Again.',
  footer: '<a href>Why do I have this issue?</a>'
})

  }
      }
      $(document).ready(function(){
        const changeMood = () =>{
          const time = new Date();
          let day = time.getDay();
          let hours = time.getHours();
          let min = time.getMinutes();
          let seconds = time.getSeconds();
          let clock = $('#clock').html(`Time: ${hours}:${min}:${seconds}s`);
        switch(day){
        case 0:
            $('#title1').css("background-color", "#6a2025");
            $('#day').html("Sunday");
        break;
        case 1:
            $("#title1").css("background-color","#22432a");
            $('#day').html("Monday");
        break;
        case 2:
            $("#title1").css("background-color","#621244");
            $('#day').html("Tuesday");
            break;
        case 3:
            $("#title1").css("background-color","#BD2F2F");
            $('#day').html("Wednesday");
            break;
         case 4:
            $("#title1").css("background-color","#b2807e");
            $('#day').html("Thursday");
            break;
         case 5:
            $("#title1").css("background-color","#78789a");
            $('#day').html("Friday");
            break;
        case 6:
            $("#title1").css("background-color","#c09948");
            $('#day').html("Saturday");
            break; 
        default:
            $("#title1").css("background-color","#8eacac");
            break;
    }
}
     setInterval(changeMood,1000);
      })
      
      /*TODO FUNCTIONALITY*/
      function show() {
    var todos = get_todos();

    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    const buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

      function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str != null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
function add() {
    var task = document.getElementById('taskinput').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 

 /* I want it to be a js code so comments down below UwU
 ===============================================================================================================================================================================
  $('#contain').daisyjs();
   $('#contain').daisyjs({
    dotColor: 'red',
    lineColor: '#ff0000'
});
   function submit(){
       const input = $('#riddle').val();
       const preloader = $("#preload");
      if(input == "YOUFOUNDME"){
  preloader.hide(1500)
      }
  else{
    Swal.fire({
  icon: 'error',
  title: 'Wrong Answer!',
  text: 'Please Try Again.',
  footer: '<a href>Why do I have this issue?</a>'
})

  }
      }
      $(document).ready(function(){
        const changeMood = () =>{
          const time = new Date();
          let day = time.getDay();
          let hours = time.getHours();
          let min = time.getMinutes();
          let seconds = time.getSeconds();
          let clock = $('#clock').html(`Time: ${hours}:${min}:${seconds}s`);
        switch(day){
        case 0:
            $('#title1').css("background-color", "#6a2025");
            $('#day').html("Sunday");
        break;
        case 1:
            $("#title1").css("background-color","#22432a");
            $('#day').html("Monday");
        break;
        case 2:
            $("#title1").css("background-color","#621244");
            $('#day').html("Tuesday");
            break;
        case 3:
            $("#title1").css("background-color","#BD2F2F");
            $('#day').html("Wednesday");
            break;
         case 4:
            $("#title1").css("background-color","#b2807e");
            $('#day').html("Thursday");
            break;
         case 5:
            $("#title1").css("background-color","#78789a");
            $('#day').html("Friday");
            break;
        case 6:
            $("#title1").css("background-color","#c09948");
            $('#day').html("Saturday");
            break; 
        default:
            $("#title1").css("background-color","#8eacac");
            break;
    }
}
     setInterval(changeMood,1000);
      })
      
      
      function show() {
    var todos = get_todos();

    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    const buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

      function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str != null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
function add() {
    var task = document.getElementById('taskinput').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 

    
  
   $('#contain').daisyjs();
   $('#contain').daisyjs({
    dotColor: 'red',
    lineColor: '#ff0000'
});
   function submit(){
       const input = $('#riddle').val();
       const preloader = $("#preload");
      if(input == "YOUFOUNDME"){
  preloader.hide(1500)
      }
  else{
    Swal.fire({
  icon: 'error',
  title: 'Wrong Answer!',
  text: 'Please Try Again.',
  footer: '<a href>Why do I have this issue?</a>'
})

  }
      }
      $(document).ready(function(){
        const changeMood = () =>{
          const time = new Date();
          let day = time.getDay();
          let hours = time.getHours();
          let min = time.getMinutes();
          let seconds = time.getSeconds();
          let clock = $('#clock').html(`Time: ${hours}:${min}:${seconds}s`);
        switch(day){
        case 0:
            $('#title1').css("background-color", "#6a2025");
            $('#day').html("Sunday");
        break;
        case 1:
            $("#title1").css("background-color","#22432a");
            $('#day').html("Monday");
        break;
        case 2:
            $("#title1").css("background-color","#621244");
            $('#day').html("Tuesday");
            break;
        case 3:
            $("#title1").css("background-color","#BD2F2F");
            $('#day').html("Wednesday");
            break;
         case 4:
            $("#title1").css("background-color","#b2807e");
            $('#day').html("Thursday");
            break;
         case 5:
            $("#title1").css("background-color","#78789a");
            $('#day').html("Friday");
            break;
        case 6:
            $("#title1").css("background-color","#c09948");
            $('#day').html("Saturday");
            break; 
        default:
            $("#title1").css("background-color","#8eacac");
            break;
    }
}
     setInterval(changeMood,1000);
      })
      
      
      function show() {
    var todos = get_todos();

    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    const buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

      function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str != null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
function add() {
    var task = document.getElementById('taskinput').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 

    
  

    $('#contain').daisyjs();
   $('#contain').daisyjs({
    dotColor: 'red',
    lineColor: '#ff0000'
});
   function submit(){
       const input = $('#riddle').val();
       const preloader = $("#preload");
      if(input == "YOUFOUNDME"){
  preloader.hide(1500)
      }
  else{
    Swal.fire({
  icon: 'error',
  title: 'Wrong Answer!',
  text: 'Please Try Again.',
  footer: '<a href>Why do I have this issue?</a>'
})

  }
      }
      $(document).ready(function(){
        const changeMood = () =>{
          const time = new Date();
          let day = time.getDay();
          let hours = time.getHours();
          let min = time.getMinutes();
          let seconds = time.getSeconds();
          let clock = $('#clock').html(`Time: ${hours}:${min}:${seconds}s`);
        switch(day){
        case 0:
            $('#title1').css("background-color", "#6a2025");
            $('#day').html("Sunday");
        break;
        case 1:
            $("#title1").css("background-color","#22432a");
            $('#day').html("Monday");
        break;
        case 2:
            $("#title1").css("background-color","#621244");
            $('#day').html("Tuesday");
            break;
        case 3:
            $("#title1").css("background-color","#BD2F2F");
            $('#day').html("Wednesday");
            break;
         case 4:
            $("#title1").css("background-color","#b2807e");
            $('#day').html("Thursday");
            break;
         case 5:
            $("#title1").css("background-color","#78789a");
            $('#day').html("Friday");
            break;
        case 6:
            $("#title1").css("background-color","#c09948");
            $('#day').html("Saturday");
            break; 
        default:
            $("#title1").css("background-color","#8eacac");
            break;
    }
}
     setInterval(changeMood,1000);
      })
      
     
      function show() {
    var todos = get_todos();

    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    const buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

      function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str != null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
function add() {
    var task = document.getElementById('taskinput').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 

    
  
   $('#contain').daisyjs();
   $('#contain').daisyjs({
    dotColor: 'red',
    lineColor: '#ff0000'
});
   function submit(){
       const input = $('#riddle').val();
       const preloader = $("#preload");
      if(input == "YOUFOUNDME"){
  preloader.hide(1500)
      }
  else{
    Swal.fire({
  icon: 'error',
  title: 'Wrong Answer!',
  text: 'Please Try Again.',
  footer: '<a href>Why do I have this issue?</a>'
})

  }
      }
      $(document).ready(function(){
        const changeMood = () =>{
          const time = new Date();
          let day = time.getDay();
          let hours = time.getHours();
          let min = time.getMinutes();
          let seconds = time.getSeconds();
          let clock = $('#clock').html(`Time: ${hours}:${min}:${seconds}s`);
        switch(day){
        case 0:
            $('#title1').css("background-color", "#6a2025");
            $('#day').html("Sunday");
        break;
        case 1:
            $("#title1").css("background-color","#22432a");
            $('#day').html("Monday");
        break;
        case 2:
            $("#title1").css("background-color","#621244");
            $('#day').html("Tuesday");
            break;
        case 3:
            $("#title1").css("background-color","#BD2F2F");
            $('#day').html("Wednesday");
            break;
         case 4:
            $("#title1").css("background-color","#b2807e");
            $('#day').html("Thursday");
            break;
         case 5:
            $("#title1").css("background-color","#78789a");
            $('#day').html("Friday");
            break;
        case 6:
            $("#title1").css("background-color","#c09948");
            $('#day').html("Saturday");
            break; 
        default:
            $("#title1").css("background-color","#8eacac");
            break;
    }
}
     setInterval(changeMood,1000);
      })
      
     
      function show() {
    var todos = get_todos();

    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    const buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

      function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str != null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
function add() {
    var task = document.getElementById('taskinput').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 

    
  
 
    $('#contain').daisyjs();
   $('#contain').daisyjs({
    dotColor: 'red',
    lineColor: '#ff0000'
});
   function submit(){
       const input = $('#riddle').val();
       const preloader = $("#preload");
      if(input == "YOUFOUNDME"){
  preloader.hide(1500)
      }
  else{
    Swal.fire({
  icon: 'error',
  title: 'Wrong Answer!',
  text: 'Please Try Again.',
  footer: '<a href>Why do I have this issue?</a>'
})

  }
      }
      $(document).ready(function(){
        const changeMood = () =>{
          const time = new Date();
          let day = time.getDay();
          let hours = time.getHours();
          let min = time.getMinutes();
          let seconds = time.getSeconds();
          let clock = $('#clock').html(`Time: ${hours}:${min}:${seconds}s`);
        switch(day){
        case 0:
            $('#title1').css("background-color", "#6a2025");
            $('#day').html("Sunday");
        break;
        case 1:
            $("#title1").css("background-color","#22432a");
            $('#day').html("Monday");
        break;
        case 2:
            $("#title1").css("background-color","#621244");
            $('#day').html("Tuesday");
            break;
        case 3:
            $("#title1").css("background-color","#BD2F2F");
            $('#day').html("Wednesday");
            break;
         case 4:
            $("#title1").css("background-color","#b2807e");
            $('#day').html("Thursday");
            break;
         case 5:
            $("#title1").css("background-color","#78789a");
            $('#day').html("Friday");
            break;
        case 6:
            $("#title1").css("background-color","#c09948");
            $('#day').html("Saturday");
            break; 
        default:
            $("#title1").css("background-color","#8eacac");
            break;
    }
}
     setInterval(changeMood,1000);
      })
      
      
      function show() {
    var todos = get_todos();

    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    const buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

      function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str != null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
function add() {
    var task = document.getElementById('taskinput').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 

    
  
   $('#contain').daisyjs();
   $('#contain').daisyjs({
    dotColor: 'red',
    lineColor: '#ff0000'
});
   function submit(){
       const input = $('#riddle').val();
       const preloader = $("#preload");
      if(input == "YOUFOUNDME"){
  preloader.hide(1500)
      }
  else{
    Swal.fire({
  icon: 'error',
  title: 'Wrong Answer!',
  text: 'Please Try Again.',
  footer: '<a href>Why do I have this issue?</a>'
})

  }
      }
      $(document).ready(function(){
        const changeMood = () =>{
          const time = new Date();
          let day = time.getDay();
          let hours = time.getHours();
          let min = time.getMinutes();
          let seconds = time.getSeconds();
          let clock = $('#clock').html(`Time: ${hours}:${min}:${seconds}s`);
        switch(day){
        case 0:
            $('#title1').css("background-color", "#6a2025");
            $('#day').html("Sunday");
        break;
        case 1:
            $("#title1").css("background-color","#22432a");
            $('#day').html("Monday");
        break;
        case 2:
            $("#title1").css("background-color","#621244");
            $('#day').html("Tuesday");
            break;
        case 3:
            $("#title1").css("background-color","#BD2F2F");
            $('#day').html("Wednesday");
            break;
         case 4:
            $("#title1").css("background-color","#b2807e");
            $('#day').html("Thursday");
            break;
         case 5:
            $("#title1").css("background-color","#78789a");
            $('#day').html("Friday");
            break;
        case 6:
            $("#title1").css("background-color","#c09948");
            $('#day').html("Saturday");
            break; 
        default:
            $("#title1").css("background-color","#8eacac");
            break;
    }
}
     setInterval(changeMood,1000);
      })
      
      
      function show() {
    var todos = get_todos();

    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    const buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

      function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str != null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
function add() {
    var task = document.getElementById('taskinput').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 

    
  

    $('#contain').daisyjs();
   $('#contain').daisyjs({
    dotColor: 'red',
    lineColor: '#ff0000'
});
   function submit(){
       const input = $('#riddle').val();
       const preloader = $("#preload");
      if(input == "YOUFOUNDME"){
  preloader.hide(1500)
      }
  else{
    Swal.fire({
  icon: 'error',
  title: 'Wrong Answer!',
  text: 'Please Try Again.',
  footer: '<a href>Why do I have this issue?</a>'
})

  }
      }
      $(document).ready(function(){
        const changeMood = () =>{
          const time = new Date();
          let day = time.getDay();
          let hours = time.getHours();
          let min = time.getMinutes();
          let seconds = time.getSeconds();
          let clock = $('#clock').html(`Time: ${hours}:${min}:${seconds}s`);
        switch(day){
        case 0:
            $('#title1').css("background-color", "#6a2025");
            $('#day').html("Sunday");
        break;
        case 1:
            $("#title1").css("background-color","#22432a");
            $('#day').html("Monday");
        break;
        case 2:
            $("#title1").css("background-color","#621244");
            $('#day').html("Tuesday");
            break;
        case 3:
            $("#title1").css("background-color","#BD2F2F");
            $('#day').html("Wednesday");
            break;
         case 4:
            $("#title1").css("background-color","#b2807e");
            $('#day').html("Thursday");
            break;
         case 5:
            $("#title1").css("background-color","#78789a");
            $('#day').html("Friday");
            break;
        case 6:
            $("#title1").css("background-color","#c09948");
            $('#day').html("Saturday");
            break; 
        default:
            $("#title1").css("background-color","#8eacac");
            break;
    }
}
     setInterval(changeMood,1000);
      })
      
     
      function show() {
    var todos = get_todos();

    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    const buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

      function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str != null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
function add() {
    var task = document.getElementById('taskinput').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 

    
  
   $('#contain').daisyjs();
   $('#contain').daisyjs({
    dotColor: 'red',
    lineColor: '#ff0000'
});
   function submit(){
       const input = $('#riddle').val();
       const preloader = $("#preload");
      if(input == "YOUFOUNDME"){
  preloader.hide(1500)
      }
  else{
    Swal.fire({
  icon: 'error',
  title: 'Wrong Answer!',
  text: 'Please Try Again.',
  footer: '<a href>Why do I have this issue?</a>'
})

  }
      }
      $(document).ready(function(){
        const changeMood = () =>{
          const time = new Date();
          let day = time.getDay();
          let hours = time.getHours();
          let min = time.getMinutes();
          let seconds = time.getSeconds();
          let clock = $('#clock').html(`Time: ${hours}:${min}:${seconds}s`);
        switch(day){
        case 0:
            $('#title1').css("background-color", "#6a2025");
            $('#day').html("Sunday");
        break;
        case 1:
            $("#title1").css("background-color","#22432a");
            $('#day').html("Monday");
        break;
        case 2:
            $("#title1").css("background-color","#621244");
            $('#day').html("Tuesday");
            break;
        case 3:
            $("#title1").css("background-color","#BD2F2F");
            $('#day').html("Wednesday");
            break;
         case 4:
            $("#title1").css("background-color","#b2807e");
            $('#day').html("Thursday");
            break;
         case 5:
            $("#title1").css("background-color","#78789a");
            $('#day').html("Friday");
            break;
        case 6:
            $("#title1").css("background-color","#c09948");
            $('#day').html("Saturday");
            break; 
        default:
            $("#title1").css("background-color","#8eacac");
            break;
    }
}
     setInterval(changeMood,1000);
      })
      
     
      function show() {
    var todos = get_todos();

    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    const buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

      function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str != null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
function add() {
    var task = document.getElementById('taskinput').value;

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 

    
  

 
 
 */
  
