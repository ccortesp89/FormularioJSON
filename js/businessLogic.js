var friendList = [];



function addFriendToSystem(pid, pname, pcountry, pbirthday, pemail){

    var newFriend = {
        id : pid,
        name : pname,
        country : pcountry,
        birthday : pbirthday,
        email : pemail
    };
    console.log(newFriend);
    friendList.push(newFriend);

}

function getFriendList(){
    return friendList;
}