# Quick Server
--------------
## Prerequisites
- [x] node
- [x] npm
--------------
## Installation & Setup
1. Clone the repository and move / copy it to `/usr/local/bin`  
2. Execute the following commands:
```  
sudo chmod +x /usr/local/bin/quickServerProject/quickServer  
sudo cp /usr/local/bin/quickServerProject/quickServer /usr/local/bin  
```  
3. Now you can run it with `quickServer file_path`, where instead of *file_path* you put the **absolute** file path of the html file that you want to host
4. You can now find your website on **localhost:3000**  
### Vim Usage
If you are editing a html document in vim and want to quickly host it, add the following to your *.vimrc* file:
```  
command QuickServer !quickServer %:p  
```  
Save your configuration and you can now host the html page with the following vim command: `:QuickServer`  
-----------------  
## Further Information
The server is hosted in the background and you can run `ps aux | grep 'node'` to find its process id. You can then kill the process with: `sudo kill -9 process_id`. Make sure to replace *process_id* with the process id from the **ps aux** command.  
**NOTE:** The server remains active until you close your terminal. 
