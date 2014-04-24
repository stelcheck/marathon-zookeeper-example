marathon-zookeeper-example
==========================

If you do not have protoc installed
------------------------------------

You can install protobuf through brew, but if you
don't want to do so (just for quick testing), run:

1. Run `make all`
2. Edit `index.js`, change the configuration and what you want to try to read
3. Execute! `node index.js`

If you have protoc installed
-----------------------------

1. Run `make protobuf-files npm`
2. Edit `index.js`, change the configuration and what you want to try to read
3. Execute! `node index.js`
