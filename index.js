document.getElementById('btnpress').addEventListener('click', function() { 

    var dob = document.getElementById('birthday').value; // Get the value of the date input

    if (!dob) { 

        alert('Please enter a valid date of birth.');

        return; 
    }

    var dobDate = new Date(dob); //  string to a Date object

    var today = new Date(); 

    var age = today.getFullYear() - dobDate.getFullYear();
    
    console.log(today.getFullYear());//  difference in years
    console.log(dobDate.getFullYear());//  difference in years

    var monthDiff = today.getMonth() - dobDate.getMonth();

    console.log(dobDate.getMonth());//  difference in years


    
    document.querySelector('.calculation').innerText = "Your age is "  + age + " years old";
});