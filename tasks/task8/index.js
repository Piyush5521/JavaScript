function fetchUserName(){

    let input = $("#username");
    let username = input.val().toLowerCase();
    let display = $("#profile");

    fetch(`https://api.github.com/users/${username}`)
    .then(function(response){
        return response.json();
    })

    .then(function (data){

        let profileData = "";

        
        
        profileData += `
        <div class="image_name">
            <div class="row">
                <div class="col">
                    <img class="profile_image"  src='${data.avatar_url}' alt="profile_picture" width="100px">
                </div>
                <div class="col">
                    ${data.name}
                    <br> 
                    ${data.location}
                    <br>
                    <a href="${data.html_url}">View Profile</a>
                    <br>
                     <div class="some_urls">
                        <ul> 
                            <li>
                                <a href="${data.blog}"> <img src="https://cdn-icons-png.flaticon.com/512/3449/3449750.png" width="20px"></a>
                            </li>
                            <li>
                                <a href="${data.email}"> <img src="https://cdn-icons-png.flaticon.com/512/3178/3178158.png" width="20px"></a>
                            </li>
                            <li>
                                <a href="https://www.x.com/${data.twitter_username}"> <img src="https://cdn-icons-png.flaticon.com/512/5969/5969020.png" width="20px"></a>
                            </li>
                    </ul>
            </div>
                </div>
            </div>

         </div>

         <div class="row">
                <div class="col">
                    <div class="bio">
                        <span>Bio: </span>${data.bio}
                    </div>
                </div>
            </div>
        
            <br>
            <div class="git_stats">

                <div class="col1"> <b>Public Repos:</b> ${data.public_repos} </div>
                <div class="col2"> <b>Public Gists:</b> ${data.public_gists}  </div>                
                <div class="col3"> <b>Followers:</b> ${data.followers} </div>
                <div class="col4">  <b>Following:</b> ${data.following}  </div>
                <div class="col5"> <b>Created At:</b> ${data.created_at.replace('T'," ")} </div>
                <div class="col6"> <b> Updated At:</b> ${data.updated_at.replace('T'," ")}} </div>
            </div>
        `

        display.html(profileData);

    });
} 
