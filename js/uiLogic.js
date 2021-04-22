document.querySelector('#btnSave').addEventListener('click', saveFriend);

function saveFriend(){
    var sId = document.querySelector('#txtId').value,
        sName = document.querySelector('#txtName').value,
        sCountry = document.querySelector('#txtCountry').value,
        sBirthdat = document.querySelector('#txtBirthday').value,
        sEmail = document.querySelector('#txtEmail').value;

    addFriendToSystem(sId, sName, sCountry, sBirthdat, sEmail);
}

function drawFriendsTable(){
    
}