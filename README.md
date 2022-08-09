## Landing Page

### Project set up in dev

node v12.22.12

### Deploy in production

#### Set up instance

`cd opt`

`mkdir nodejs`

`curl https://nodejs.org/dist/v12.22.12/node-v12.22.12-linux-x64.tar.gz | sudo tar xvzf - -C /opt/nodejs`

`sudo ln -s /opt/nodejs/bin/node /usr/bin/node`

`sudo ln -s /opt/nodejs/bin/npm /usr/bin/npm`

`sudo apt install nodejs`

`sudo npm install`

`sudo apt install npm`

#### Install pm2:

`sudo npm install -g pm2`

`pm2 --version`

#### Deploy website

Clone the website's repo in a new folder in the opt/ directory.

`sudo npm install -g serve`

`sudo npm install`

`sudo npm run build`

Now we can run the following command to deploy the app

`pm2 serve <path> <port> --spa`

In our case, we can run the following command

`pm2 serve build 8082 --spa` 