const clientsItems = document.querySelectorAll('[data-checkbox]');
if(clientsItems !== null) {
    clientsItems.forEach(clientItem => {        
        const checkbox = clientItem.querySelector('.checkbox__real-input');
        const checkboxParent = clientItem.querySelector('.clientsd-item__user');
        clientItem.addEventListener('click', function(e){ 
            if(e.target == this){
                checkbox.checked = !checkbox.checked;
                this.classList.toggle('active'); 
            };           
            if(e.target == checkbox){                
                this.classList.toggle('active'); 
                
            };               
            if(e.target == checkboxParent){                
                this.classList.toggle('active'); 
                checkbox.checked = !checkbox.checked;
            };      
           
        });        
    });
};





    


