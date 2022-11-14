class Message 
{
   constructor(name,text)
   {
      this.name=name;
      this.text=text;
       var date=new Date();
      let hour=date.getHours();
       if(hour.toString().length==1)
       hour='0'+hour;
       let min=date.getMinutes();
       if(min.toString().length==1)
       min='0'+min;
      this.date=hour+":"+min;
   }
  
   toHTML () {

    return "<p> "+this.date+" "+this.name+": "+this.text+" </p>";    
   }
}

 class Messenger
{
    static message=[];

     static send(author, text)
    { let message=new Message(author,text);

this.message.push(message.toHTML())
    }
    
   static  show_history()
    {
        
        this.message.forEach((item) => {
           
            let p=document.createElement('div');
            p.innerHTML=item;
              
            document.querySelector(".history").append(p);
        });
    }

}

document.querySelectorAll("button")[0].addEventListener('click',(event) => 
{   if(document.querySelector("input").value!=''&&document.querySelector("textarea").value!='')
     {document.querySelector(".history").innerHTML=null;
    Messenger.send(document.querySelector("input").value,document.querySelector("textarea").value);
     }
     else alert("Заполните пустые поля!");
});

document.querySelectorAll("button")[1].addEventListener('click',(event) => 
{   document.querySelector(".history").innerHTML=null;
    Messenger.show_history();
});



