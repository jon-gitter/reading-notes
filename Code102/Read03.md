[Table of Contents](https://jon-gitter.github.io/reading-notes/)

Version Control - a system that allows you to revisit various versions of a file or set of files by recording changes. Through version control, one can revert a file or project to a previous version, track modifications and modifying individuals, and compare changes. By utilizing a Version Control System (VCS), mistakes with files can easily be rectified.

First was local VCS then Centralized VCS, difference is between single (local) and mutiple (centralized) file collaboration. Disributed VCS made it easier than CVCS b/c it got rid of the vulnerability of the server as the single point of failure. DVCS allows clients to create mirrored repositories, multiple backups make it easier to save data without it being lost.

Git - a DVCS that stores data in a file system made up of snapshots, everytime you commit git creates a snapshot of the file and stores a reference to it. Git is set up to greatly minimize the possibility of irreversible damage to files, such as accidentally lost data. Git makes it extremely difficult for a snapshot of your file that is committed to be lost.

files in Git come in three main states: committed, modified, staged
Committed - Data is securely stored in a local database
Modified - File has been changed but not committed to the database
Staged - Flagged a file’s changed version to be committed in the next snapshot

You can also create a copy of an existing Git repository from a particular server by using the clone command with a repository’s URL:
$ git clone https://github.com/test
By cloning the file, you have copied all versions of all files for a project. This command leads to the creation of a directory called “test,” with an initialized .git directory inside it, which has copies of all versions of all files for the specified project. The command also automatically checks out — or retrieves for editing — a copy of the newest version of the project.
To clone a repository into a directory with another name of your choosing, use the following command format:
$ git clone https://github.com/test mydirectory
The command above makes a copy of the target repository in a directory named “mydirectory.”

Steps to make sure all changes made on VS Code will get pushed to GitHub:
1) git status
2) git add filename.md
3) git commit -m "info goes here"
4) git push

[Table of Contents](https://jon-gitter.github.io/reading-notes/)