cd ./client

echo "Building client in $CLIENT_MODE mode"
npm run build $CLIENT_MODE

rm -r -f "../service/static"
mkdir "../service/static"
cp -r "dist/." "../service/static"

cd ..