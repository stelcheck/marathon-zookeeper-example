all: protobuf npm

MESOS_VERSION="0.16.0"
MARATHON_VERSION="marathon-0.4.0"

protobuf: protobuf-bin protobuf-files

protobuf-bin:
	cd 3rdparty && $(MAKE) protobuf

protobuf-files:
	curl -o mesos.proto https://raw.githubusercontent.com/apache/mesos/$(MESOS_VERSION)/include/mesos/mesos.proto
	curl -o marathon.proto https://raw.githubusercontent.com/mesosphere/marathon/$(MARATHON_VERSION)/src/main/proto/marathon.proto
	PATH="${PATH}:./bin/" protoc --descriptor_set_out=marathon.desc --proto_path=./ --include_imports marathon.proto
	rm *.proto

npm:
	rm -rf node_modules/
	npm install .
