document.addEventListener("DOMContentLoaded", function(event) { 
    console.log("we are locked and loaded");
  
    document.getElementById("tips").onsubmit=(event)=>{
      event.preventDefault();
      var thisForm = document.forms.tips;

      // console.log(thisForm);
      var tips = new FormData(thisForm);
      var newTip={};
      newTip.content = tips.get('content');
      newTip.author = tips.get('author');
      newTip.rating = tips.get('rating');
      console.log(newTip)
      axios.post('/api/new',newTip).then(res=> console.log(res));
    }

  });