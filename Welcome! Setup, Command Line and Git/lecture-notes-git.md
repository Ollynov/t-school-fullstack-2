# Git and Github

Git (local machine) and Github (online) form a powerful version control toolset that enables developers to have a record of and access to any iteration of the code they write. Github allows developers to store (host) repositories (directories / folders / collections of code) online where they can share code and review new code before it is combined (merged) into their main (production) code base. We’ll cover the basics of Git, Github, and how teams of developers use these tools to collaborate on their projects.

The basic functionality of Git allows developers to track specific versions of their codebase, coordinate collaboration, and revert to a previous version at any time (ex: an engineer's most recent change added a bug to her company's dashboard and she wants to return to the previous version of their code that was bug-free). Git also enables developers to interact with online platforms like Github and Heroku where they can share and host their codebase.

## Let's refresh our terminal commands

#### Navigating folders/directories:

- Visit your parent folder/directory: `$ cd ..`
- Go into a directory: `$ cd folder_name/child_folder_name`
- Go back to your home directory: `cd ~`
- Find out where in the directory structure you are: `$ pwd`
- See what's inside a directory: `$ ls` or `$ ls directory_name`

#### Shortcuts

- Go to beginning of line: `control + a`
- Go to end of line: `control + e`
- Erase line: `control + k`

## Getting started with Git

- Check to see if your computer currently has your global git username registered. Run: `https://alvinalexander.com/git/git-show-change-username-email-address`
- If not, then add it with: git config --global user.username myUserName (replace 'myUserName' with your username)
- Just in case you don't see your username printed out [see this link](https://alvinalexander.com/git/git-show-change-username-email-address)

- Make sure you are in the root of your directory with `pwd` in the terminal
- Go ahead and 'fork' this repo (be sure you have the master branch selected)

A fork makes an exact copy onto your account. 

- Go ahead and clone the 'Setup' branch of your fork. This will make an exact copy on your local machine, which points to your fork as it's remote repo.
- Hit `ls` to verify that you have index.html, about.html, contact.html, styles, and treasure
- Feel free to check out the files, but ignore treasure for now, it's a secret that we will get to in a later lesson
- Hit git remote -v (you should see your fork as the "origin")


### Staging and committing

When you check the status of your git repo, you will see in red all the changes that haven't been "staged for commit" and green what have been "staged for commit". Staging allows you to choose which changes you actually want to commit and which changes you either don't want to commit or commit later.
Committing means that you are actually making and saving your changes. Each commit has a name given by you (or your team members) so that you can track all the changes you made in a file.

- Stage all of the files in your folder to be included in your first commit: `$ git add .`
- Staging is useful because you control what will be locked into the commit
- To add individual files: `$ git add file_name`
- Make your first commit: `$ git commit -m “Some descriptive notes surrounded by quotation marks"`

**Exercise: Add a README.md file, check the status of the repo. Then stage it. Finally, commit it.**

(use the README.md file to add your notes and instructions on how to run your app as we go along building it)

- Use `$ git log` to look back at the history of this branch

**Exercise: Try Git (30 mins): https://github.com/jlord/git-it-electron**
NOTE: In this interactive git tutorial be sure that you do all of the exercises in a separate repo that is not associated with what we have built so far. 

### Branching

Branching is what you will use all the time. When you create a new branch, you make an **exact copy** of your repo. Each time you are making changes, it will affect this specific branch **without** affecting the master branch (or any other branches).
This is very useful when you have a new feature that you want to implement to a website. You will create a new branch for this specific feature, work on the code and commit changes. However the initial code from the master branch will remain unchanged. Therefore, all potential crashes are avoided.

- Make a new branch with `$ git checkout -b the-branch-will-be-named-whatever-you-type-here-no-spaces-use-hypens-plz`


**Exercise: modify the new branch by editing your README.md Stage it. Commit it.**

- Look back at the history of the new branch
- Switch branches using `$ git checkout master`. Look back at the history. Is it the same?

### Merging
Once you are done with all the changes you made in your branch, you are then ready to merge it with master branch.

- On your master branch, merge our other branch `$ git merge the-branch-you-named`

Once you merged you branched you can safely delete it. You can also keep you branches if you want to keep track of the changes you made on each branches.

- on you master branch, delete our other branch `git branch ---delete the-branch-you-named`

### Resetting
Here is why Git is powerful. If your changes are not right and you need to go back to an older version of your code, it's possible. Here are the commands:

- Stash any uncommitted changes: `$ git stash`
- See a list of past commits: `$ git log`
- Revert to a past commit: `$ git reset --hard [#SHA-1 Hash ###]`

## Interacting with remote repos using Github:

Github is a platform that enables developers to store their codebase online, review developers’ code branches, and share feedback and error shooting before it’s integrated in the full code base. Similar to Git, it stores a full-history of any changes made over the codebase life cycle, creating a safeguard as the number of developers working with the codebase increases over time and your codebase grows in complexity.

### Linking your local Git repository with your Github repository
This is one of the most powerful thing Git and Github have to offer. Each time you make changes locally on your computer, you can send those changes to github through git and they will be automatically updated on your repo in the Github website.

- Visit your Github page and create a new repo with a name like `my-website`
- Navigate into your project directory in terminal. Confirm you are in the right place with `pwd`
- Copy the “HTTPS Clone URL”. Enter `$ git clone [git clone url]` 

**Exercise: make your first commit.**
- See your remote by typing `git remote -v`
- Push your first commit to github: `$ git push origin master`
- View your code on github

### Pull Requests: Screening your developments before releasing your code
When you are working in a team and you want people to review your code before pushing it to the master branch, you can create a pull request on github. When you create a pull request, you can ask team members to review your code, see all the changes you made and comment them.


- Let’s create a new branch where we’ll make some new changes that we’ll review before integrating into our master code base: `$ git checkout -b [your-branch-name]`
- Make some changes to your code
- Stage your changes for your commit
- Commit your changes
- Push your branch and new commit to github: `$ git push origin [your-branch-name]`
- Visit your github repo. You should see that your Github registered your pushing a new branch. Go ahead and click ‘Compare & pull request’ to submit a request to merge your code changes into your master code base. Don’t forget to include a message so that others know why they should include your changes.
- Github will check for merge conflicts. A merge conflict is when the new code you are trying to push up is somehow interfering with your existing code. Oftentimes the merge conflict is very simple, and you just need to delete some old lines of code to "resolve the merge conflict". 
- Occasionally merge conflicts can get really nasty. The best way to avoid any bad conflicts is to frequently pull down from the master repo. 
- Once your pull request is open, go ahead and merge your code to the master code base.


## Extra Practice

- https://www.codecademy.com/learn/learn-git
- https://www.codeschool.com/courses/git-real
- http://rogerdudler.github.io/git-guide/
- https://guides.github.com/
