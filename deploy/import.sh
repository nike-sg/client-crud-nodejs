#! /bin/bash

mongoimport --host mongodb --db nodeApi --collection users --type json --file /deploy/users.json --jsonArray

mongoimport --host mongodb --db nodeApi --collection clients --type json --file /deploy/clients.json --jsonArray