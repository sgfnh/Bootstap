function handleFormSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const user = {
      username,
      email,
      phone
    };
    // Store the user details in local storage with the key "User Details"
    localStorage.setItem(user.email, JSON.stringify(user));
    showscreen(user);
  }
  
  function showscreen(user) {
    const parentele = document.getElementById("userList");
    const childele = document.createElement('li');
    childele.textContent = user.username + ' - ' + user.email + ' - ' + user.phone;
  
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      // Remove user from the user list
      parentele.removeChild(childele);
  
      // Remove user details from local storage
      localStorage.removeItem(user.email);
    });
    const editbtn =document.createElement('button');
    editbtn.textContent='Edit';
    editbtn.addEventListener('click',function(){
        parentele.removeChild(childele);
        localStorage.removeItem(user.email);
        document.getElementById('username').value=user.username
        document.getElementById('email').value=user.email
        document.getElementById('phone').value=user.phone
    })
    // Append delete button to the list item
    childele.appendChild(deleteButton);
    childele.appendChild(editbtn);
    // Append list item to the parent element
    parentele.appendChild(childele);
    
  }
  