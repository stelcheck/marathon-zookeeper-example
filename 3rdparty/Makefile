protobuf:
	curl -o protobuf.gz https://protobuf.googlecode.com/files/protobuf-2.5.0.tar.gz
	tar -zxvf protobuf.gz && rm protobuf.gz
	mv protobuf-2.5.0 protobuf
	cd protobuf && ./configure --prefix=$(shell dirname $(shell pwd)) && make && make install
	rm -rf protobuf

