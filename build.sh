yarn build;
rm -rf ../coinbene-frontend/node_modules/ch-ui;
cp -r dist ../coinbene-frontend/node_modules/ch-ui;
cp -r dist ../paper-resource-frontend-2.0/node_modules/ch-ui;
