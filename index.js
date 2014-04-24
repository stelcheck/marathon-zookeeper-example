var fs = require('fs');
var ZooKeeper = require ('zookeeper');
var Protobuf = require('protobuf');
var Schema = Protobuf.Schema;

var schema = new Schema(fs.readFileSync('marathon.desc'));

/************************************/
/* ------ Edit the following ------ */
var servers = process.env.SERVERS || 'localhost:2181';
var path = '/marathon/state/tasks:Redis';
/* ------ Edit the following ------ */
/************************************/

var zk = new ZooKeeper({
  connect: servers
 ,timeout: 200000
 ,debug_level: ZooKeeper.ZOO_LOG_LEVEL_WARN
 ,host_order_deterministic: false
});

zk.connect(function (err) {
    if(err) {
        throw err;
    }

    console.log ('zk session established, id=%s', zk.client_id);

    zk.a_get (path, true, function (rc, error, child, buff)  {
        if (rc != 0) {
            console.log ('zk node get result: %d, error: "%s", path=%s', rc, error, child, buff);
        } else {
            message = schema['mesosphere.marathon.MarathonTask'];
            out = message.parse(buff);
            console.log ('got zk node:', child);
            console.log ('node content:', out)

            process.nextTick(function () {
                zk.close ();
            });
        }
    });
});
