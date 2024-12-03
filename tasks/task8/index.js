
$("#profile").hide();

function fetchUserName(){

    $("#profile").show();

    let input = $("#username");
    let username = input.val().toLowerCase();

    fetch(`https://api.github.com/users/${username}`)
    .then(function(response){
        return response.json();
    })

    .then(function (data){
        
        var image = data.avatar_url;
        var userName = data.name;
        var locations = data.location;
        var viewprofile = data.html_url;
        var blog = data.blog;
        var email = data.email;
        var twitter = data.twitter_username;
        var bio = data.bio;
        var publicRepos = data.public_repos;
        var public_gists = data.public_gists;
        var followers = data.followers;
        var following = data.following;
        var profile_created_at = data.created_at;
        var profile_updated_at = data.updated_at;

        profile_created_at  =  profile_created_at.replace("T", " ");
        profile_updated_at = profile_updated_at.replace("T", " ");

        var user_image = $("#user_image");
        $(user_image).attr("src", image);

        var user_name = $("#displayusername");
        $(user_name).text(userName);

        var user_location = $("#location");
        $(user_location).text(locations);

        var profile_url = $("#viewprofile")
        $(profile_url).attr("href", viewprofile);

        var blog_url = $("#blog");
        $(blog_url).attr("href", blog);

        var email_url = $("#email");
        $(email_url).attr("href", email);

        var twitter_username = $("#twitter");
        $(twitter_username).attr("href", "https://x.com/"+twitter);

        var user_bio = $("#bio");
        $(user_bio).text(bio);

        var public_repos = $("#public_repos");
        $(public_repos).text(publicRepos);

        var publicGists = $("#public_gists");
        $(publicGists).text(public_gists);

        var user_followers = $("#followers");
        $(user_followers).text(followers);

        var user_following = $("#following");
        $(user_following).text(following);

        var created_at = $("#created_at");
        $(created_at).text(profile_created_at);

        var updated_at = $("#updated_at");
        $(updated_at).text(profile_updated_at);
    });
} 

// I use a debounce function here --->

function github_profile(callback){
    let timeout;
    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(()=> {
            callback();
        }, 1000)
    }
}


$("#username").on("input", github_profile(fetchUserName));





// function fetchUserName(){

//     let input = $("#username");
//     let username = input.val().toLowerCase();
//     let display = $("#profile");

//     fetch(`https://api.github.com/users/${username}`)
//     .then(function(response){
//         return response.json();
//     })

//     .then(function (data){

//         let profileData = "";

        
        
//         profileData += `
//         <div class="image_name">
//             <div class="row">
//                 <div class="col">
//                     <img class="profile_image"  src='${data.avatar_url}' alt="profile_picture" width="100px">
//                 </div>
//                 <div class="col">
//                     ${data.name}
//                     <br> 
//                     ${data.location}
//                     <br>
//                     <a href="${data.html_url}">View Profile</a>
//                     <br>
//                      <div class="some_urls">
//                         <ul> 
//                             <li>
//                                 <a href="${data.blog}"> <img src="https://cdn-icons-png.flaticon.com/512/3449/3449750.png" width="20px"></a>
//                             </li>
//                             <li>
//                                 <a href="${data.email}"> <img src="https://cdn-icons-png.flaticon.com/512/3178/3178158.png" width="20px"></a>
//                             </li>
//                             <li>
//                                 <a href="https://www.x.com/${data.twitter_username}"> <img src="https://cdn-icons-png.flaticon.com/512/5969/5969020.png" width="20px"></a>
//                             </li>
//                     </ul>
//             </div>
//                 </div>
//             </div>

//          </div>

//          <div class="row">
//                 <div class="col">
//                     <div class="bio">
//                         <span>Bio: </span>${data.bio}
//                     </div>
//                 </div>
//             </div>
        
//             <br>
//             <div class="git_stats">

//                 <div class="col1"> <b>Public Repos:</b> ${data.public_repos} </div>
//                 <div class="col2"> <b>Public Gists:</b> ${data.public_gists}  </div>                
//                 <div class="col3"> <b>Followers:</b> ${data.followers} </div>
//                 <div class="col4">  <b>Following:</b> ${data.following}  </div>
//                 <div class="col5"> <b>Created At:</b> ${data.created_at.replace('T'," ")} </div>
//                 <div class="col6"> <b> Updated At:</b> ${data.updated_at.replace('T'," ")}} </div>
//             </div>
//         `

//         display.html(profileData);

//     });
// } 
