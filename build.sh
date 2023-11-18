#!/bin/bash
rm -rf client
cd ..
rm -rf project-management-frontend
git clone https://github.com/leandersteiner/project-management-frontend
cd project-management-frontend || exit
npm i
npm run build
mv dist ../project-management-frontend/client
cd ../project-management-backend || exit

docker build --tag leandersteiner/project-management .
