<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" /></head>

    <style>
       /*variables to define colors [#D1884F, #008AAA, #3BBADB] */
:root {
    --primary-color: #D1884F;
    --secondary-color: #008AAA;
    --accent-color: #3BBADB;
}
body {
    font-family: 'Poppins', sans-serif;
    padding:1%;
}
.page_container {
    border: 1px solid #008AAA;
    margin: 1%;
}
header{
    margin:4%  8% 0% 0%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;

}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}
nav li {
    margin-right: 2rem; 
}
nav a {
    text-decoration: none;
    color: #333;
    display: flex; 
    align-items: center;
    
}
nav a:hover {
    color: #D1884F;
}
nav img:hover{
    background-color: var(--primary-color);
    border-radius: 50%;
}
/* HEADER ENDS */

.profile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:  4% 8%;
    margin: 2%;
}
.profile-content {
    width: 50%;
    display: flex;
    align-items:flex-start;
    justify-content: space-between;
    text-align: left;
    flex-direction: column;
    gap: 2rem;
    margin-right: 2rem;
}

.profile h2 {
    font-size: 1.3rem;
    font-weight:400;
    margin-top: 10px;
    color: var(--accent-color);
}

.profile-content h1 {
    font-size: 3rem;
    display: inline;
    color: var(--secondary-color);
}

.profile-content .Designer{
    color: var(--primary-color);
}
.about-me{
    margin-bottom: 1rem;
}

.about-me *{
    display: inline;
}
.about-me a {
    text-decoration: none;
    color:var(--accent-color);
}

.blue-box {
    
    background: linear-gradient(to top,rgba(1, 138, 170, 0), rgba(1, 139, 170, 0.2));
    width: 300px; 
    height: 25rem; 
    border-radius: 0 0 0 50%;
    position: relative;
    overflow: hidden;
    box-shadow: -10px 10px 0px var(--accent-color); /* x-offset, y-offset, blur-radius, color */
}
.blue-box img{
    width: 300px; 
    max-height: 100%; 
    object-fit: fill; 
    mix-blend-mode:multiply;
    min-height:100%;
}

.button-container {
    display: flex;
    align-items: center;
    justify-content:flex-start;
  }
  
  .btn {
    padding: 10px 20px;
    background-color: #ffffff;
    color:var(--secondary-color) ;
    text-decoration: none;
    border-radius: 5px;
    margin: 5px;
    text-align: center;
    border: 2px solid var(--secondary-color);
  }
  
  .first-button {
    margin-right: 2rem;
    background-color: var(--secondary-color);
    color: #ffffff;
  }
  
  .first-button:hover{
    background-color: #ffffff;
    color:var(--secondary-color);
    box-shadow: 0px 5px 3px var(--accent-color);
  }
  .second-button:hover{
    background-color: var(--secondary-color);
    color: #ffffff;
    box-shadow: 0px 5px 3px var(--accent-color);
  }
.contact-info{
    display: none;
}


@media only screen and (max-width: 600px) {
    
    body {
        font-size: 14px; 
    }

    .page_container {
        margin: 0; 
        border: none; 
    }
    .blue-box img{
        max-width: 100%;
        height: auto;
    }
    .blue-box{
        max-width: 100%;
        height: auto;
    }
    .profile-content h1 {
        font-size: 1.2rem;
    }
    .profile-content h2 {
        font-size: 1rem;
    }
}
        </style>
        </head>
<body>
    <div class="page_container">
    <header>
        <nav>
            <ul>
                <li><a href="#"><img src="Icons/home.svg" alt="home">Home</a></li>
                <li><a href="#"><img src="Icons/about_me.svg" alt="about-me">About Me</a></li>
                <li><a href="#"><img src="Icons/call.svg" alt="contact me">Contact Me</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="profile">
            <div class="profile-content">
                    <div>
                        <h2>Welcome to my site</h2>
                        <h1>Hi, I'm Barakat, a UI UX <h1 class="Designer">Designer</h1></h1>
                    </div>
                    <div class="about-me">
                        <p>I am currently pursuing a Master's in Software Engineering with a keen interest in becoming a full-stack developer. As an international team lead specializing in annotation, I bring leadership and collaboration skills to effectively contribute to software development projects.</p>
                        <a href="#">Sea more...</a>
                    </div>
                    <div class="button-container">
                        <a href="#" class="btn first-button">Hire me!</a>
                        <a href="https://github.com/mkbarakat" class="btn second-button">See My Projects</a>
                    </div>
            </div>

            <div class="blue-box">
                <img src="/Profile pecture/me2.png" alt="Your Profile Picture">
            </div>
           
        </section>
        </main>
</div>

</body>
</html>


